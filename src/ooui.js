import React, { isValidElement, useImperativeHandle, useCallback, useRef, forwardRef, Children } from 'react';
import camelCase from 'lodash.camelcase';

function eventConvertor( props ) {
	return Object.keys( props ).reduce( ( acc, key ) => {
		if ( !key.match( /^on+/ ) ) {
			return acc;
		}

		if ( typeof props[ key ] !== 'function' ) {
			return acc;
		}

		const name = key.replace( 'on', '' );
		acc.set( camelCase( name ), props[ key ] );
		return acc;
	}, new Map() );
}

function propsToConfig( props, configMap ) {
	const config = { ...props };

	// Remove all of the props refs that no longer exist.
	const difference = [ ...configMap.keys() ].filter( x => !Object.keys( config ).includes( x ) );
	for ( const key of difference ) {
		configMap.delete( key );
	}

	return Object.keys( config ).reduce( ( acc, key ) => {
		const count = Children.count( config[ key ] );

		const keys = Children.toArray( config[ key ] ).reduce( ( acc, item ) => {
			if ( isValidElement( item ) ) {
				if ( count > 1 && ( typeof item.key === 'undefined' || acc.find( k => k === item.key ) ) ) {
					throw new Error( 'React elements in an array must have a stable unique "key" prop.' );
				}

				return [ ...acc, item.key ];
			}

			return acc;
		}, [] );

		if ( keys.length === 0 ) {
			return {
				...acc,
				[ key ]: config[ key ]
			};
		}

		const map = configMap.get( key ) || new Map();

		// Remove all of the props refs that no longer exist.
		const difference = [ ...map.keys() ].filter( x => !keys.includes( x ) );
		for ( const key of difference ) {
			map.delete( key );
		}

		const properties = Children.map( config[ key ], ( child ) => {
			if ( !isValidElement( child ) ) {
				return child;
			}

			if ( typeof child.type.ooui === 'undefined' ) {
				return child;
			}

			const Type = child.type.ooui;
			const keyed = child.key;
			const events = eventConvertor( child.props );

			child.type.requiredProps.forEach( prop => {
				if ( !( prop in child.props ) ) {
					throw new Error( `${prop} is required for ${Type}.` );
				}
			} );

			const {
				obj: existing,
				events: existingEvents,
				config: childConfigMap
			} = map.get( keyed ) || {
				obj: undefined,
				events: new Map(),
				config: new Map()
			};

			// Remove all of the previous events.
			// @see https://phabricator.wikimedia.org/T225975
			for ( let [ name, fn ] of existingEvents ) {
				existing.off( name, fn );
			}

			const childConfig = propsToConfig( child.props, childConfigMap );

			// Doing this forces the object to lose focus.
			// @see https://phabricator.wikimedia.org/T225854
			const obj = new Type(
				...child.type.requiredProps.map( prop => childConfig[ prop ] ),
				{
					...existing || {},
					...childConfig
				}
			);

			if ( child.ref ) {
				if ( typeof child.ref === 'function' ) {
					child.ref( obj );
				} else {
					child.ref.current = obj;
				}
			}

			// Add all of the new event handlers.
			// @see https://phabricator.wikimedia.org/T225975
			for ( let [ name, fn ] of events ) {
				obj.on( name, fn );
			}

			map.set( keyed, {
				obj,
				config: childConfigMap,
				events
			} );

			return obj;
		} );

		configMap.set( key, map );

		return {
			...acc,
			[ key ]: Array.isArray( config[ key ] ) ? properties : properties[ 0 ]
		};
	}, {} );
}

function fromOOUI( Type, requiredProps = [] ) {
	const compoment = forwardRef( ( props, ref ) => {
		const objRef = useRef( null );
		const eventsRef = useRef( new Map() );
		const configRef = useRef( new Map() );

		requiredProps.forEach( prop => {
			if ( !( prop in props ) ) {
				throw new Error( `${prop} is required for ${Type.name}.` );
			}
		} );

		const containerRef = useCallback( node => {
			if ( node === null ) {
				return;
			}

			// Convert on* props to event handlers.
			const events = eventConvertor( props );

			const config = propsToConfig( props, configRef.current );

			// Remove all of the previous events.
			// @see https://phabricator.wikimedia.org/T225975
			for ( let [ name, fn ] of eventsRef.current ) {
				objRef.current.off( name, fn );
			}

			// Construct a new object.
			// Doing this forces the object to lose focus.
			// @see https://phabricator.wikimedia.org/T225854
			objRef.current = new Type(
				...requiredProps.map( prop => config[ prop ] ),
				{
					...objRef.current || {},
					...config
				}
			);

			// If there are no children in the DOM, add them now.
			if ( node.children.length === 0 && objRef.current.$element ) {
				for ( const element of objRef.current.$element ) {
					node.appendChild( element );
				}
			}

			// Set the new events.
			// @see https://phabricator.wikimedia.org/T225975
			eventsRef.current = events;

			// Add all of the new event handlers.
			for ( let [ name, fn ] of eventsRef.current ) {
				objRef.current.on( name, fn );
			}
		} );

		useImperativeHandle( ref, () => objRef.current );

		return (
			<div ref={containerRef} />
		);
	} );

	// Sets the type on the compoment itself so it can be accessed by a parent.
	compoment.ooui = Type;
	compoment.displayName = Type ? Type.name : undefined;
	compoment.requiredProps = requiredProps;

	return compoment;
}

export default fromOOUI;

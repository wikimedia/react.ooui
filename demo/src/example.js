import React, { useCallback, useState } from 'react';
import 'oojs-ui';
import 'oojs-ui/dist/oojs-ui-wikimediaui';
import 'oojs-ui/dist/oojs-ui-core-wikimediaui.css';
import { FieldsetLayout, FieldLayout, TextInputWidget } from '../../src/index';

const Example = () => {
	const [ value, setValue ] = useState( '' );
	const fieldLayoutRef = useCallback( fieldLayout => {
		console.log( 'Field Layout', fieldLayout ); // eslint-disable-line no-undef, no-console
	} );
	const textWidgetRef = useCallback( textWidget => {
		console.log( 'Text Widget', textWidget ); // eslint-disable-line no-undef, no-console
	} );

	return (
		<div>
			<h2>Welcome to OOUI React</h2>
			<FieldsetLayout
				label="Example of a fieldset layout"
				items={[
					<FieldLayout
						ref={fieldLayoutRef}
						key="text-input"
						label="Field One"
						fieldWidget={
							<TextInputWidget
								placeholder="A text input field"
								ref={textWidgetRef}
								value={value}
								onChange={( value ) => setValue( value )}
							/>
						}
					/>
				]}
			/>
		</div>
	);
};

export default Example;

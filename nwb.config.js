/* eslint-env node */
const { ProvidePlugin } = require( 'webpack' );

module.exports = {
	type: 'react-component',
	npm: {
		esModules: true,
		umd: false
	},
	webpack: {
		extra: {
			plugins: [
				new ProvidePlugin( {
					OO: 'oojs',
					$: 'jquery'
				} )
			]
		}
	}
};

requirejs.config({
	baseUrl: 'app',
	paths: {
		backbone: '../vendor/backbone-min',
		lodash: '../vendor/lodash.compat.min',
		requirejs: '../vendor/require',
		zepto: '../vendor/zepto.min',
		less: '../vendor/less-1.4.2',
		handlebars: '../vendor/handlebars',
		text: '../vendor/text',
		flowtype: '../vendor/flowtype'
	},
	shim: {
		zepto: {
			exports: '$'
		},
		backbone: {
			deps: [
				'lodash',
				'zepto'
			],
			exports: 'Backbone'
		},
		handlebars: {
			exports: 'Handlebars'
		},
		flowtype: {
			deps: ['zepto']
		}
	}
});

requirejs([ 'App' ] , function ( App ) {});

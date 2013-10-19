requirejs.config({
	baseUrl: 'app',
	paths: {
		backbone: '../bower_components/backbone/backbone',
		lodash: '../bower_components/lodash/dist/lodash.compat',
		polymer: '../bower_components/polymer/polymer.min',
		moment: '../bower_components/moment/moment',
		requirejs: '../bower_components/requirejs/require',
		zepto: '../bower_components/zepto/zepto',
		less: '../bower_components/less.js/dist/less-1.4.2',
		handlebars: '../bower_components/handlebars/handlebars',
		'handlebars.runtime': '../bower_components/handlebars/handlebars.runtime',
		'requirejs-text': '../bower_components/requirejs-text/text',
		text: '../bower_components/requirejs-text/text',
		'javascript-debug': '../bower_components/javascript-debug/ba-debug',
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

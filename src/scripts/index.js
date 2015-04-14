'use strict';
const bulk = require('bulk-require');
// NOTE: Registers Vue components, directives, and filters
bulk(__dirname, [
	'components/**/*.js', 'directives/**/*.js', 'filters/**/*.js'
]);

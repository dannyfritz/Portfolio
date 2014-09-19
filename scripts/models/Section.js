var State = require('ampersand-state');
var Items = require('../collections/Items');

var Section = State.extend({
	props: {
		name: 'string'
	},
	children: {
		items: Items
	}
});

module.exports = Section;

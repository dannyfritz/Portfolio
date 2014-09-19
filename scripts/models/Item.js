var State = require('ampersand-state');
var Links = require('../collections/Links');

var Item = State.extend({
	props: {
		title: 'string',
		image: 'string',
		description: 'string'
	},
	children: {
		links: Links
	}
});

module.exports = Item;

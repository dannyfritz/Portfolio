var State = require('ampersand-state');

var Link = State.extend({
	props: {
		url: 'string',
		text: 'string',
		icon: 'string'
	}
});

module.exports = Link;

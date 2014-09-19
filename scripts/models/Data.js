var State = require('ampersand-state');
var Sections = require('../collections/Sections');

var Data = State.extend({
	props: {
		bio: 'object'
	},
	children: {
		sections: Sections
	}
});

module.exports = Data;

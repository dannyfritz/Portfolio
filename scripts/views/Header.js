var View = require('./BaseView');
var template = require('../../templates/header.dom');

var HeaderView = View.extend({
	initialize: function initialize (options) {
		global.document.title = this.model.bio.name + '\'s Portfolio';
	},
	template: template
});

module.exports = HeaderView;

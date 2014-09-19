var View = require('./BaseView');
var template = require('../../templates/nav.dom');
var NavItemView = require('./NavItem');

var NavView = View.extend({
	template: template,
	render: function render (opts) {
		this.renderWithTemplate(this);
		this.renderCollection(
			this.collection,
			NavItemView,
			this.queryByHook('navItems')
		);
		return this;
	}
});

module.exports = NavView;

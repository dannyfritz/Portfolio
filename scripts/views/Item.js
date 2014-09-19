var View = require('./BaseView');
var template = require('../../templates/item.dom');
var LinkView = require('./Link');

var ItemView = View.extend({
	template: template,
	render: function render (opts) {
		this.renderWithTemplate(this);
		this.renderCollection(
			this.model.links,
			LinkView,
			this.queryByHook('links')
		);
		return this;
	}
});

module.exports = ItemView;

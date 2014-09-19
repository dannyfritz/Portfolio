var View = require('./BaseView');
var template = require('../../templates/section.dom');
var ItemView = require('./Item');

var SectionView = View.extend({
	template: template,
	render: function render (opts) {
		this.renderWithTemplate(this);
		this.renderCollection(
			this.model.items,
			ItemView,
			this.queryByHook('items')
		);
		return this;
	}
});

module.exports = SectionView;

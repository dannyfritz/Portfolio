var BaseView = require('./BaseView');
var template = require('../../templates/sections.dom');
var SectionView = require('./Section');

var SectionsView = BaseView.extend({
	template: template,
	render: function render (opts) {
		this.renderWithTemplate(this);
		this.renderCollection(this.collection, SectionView, this.el);
		return this;
	}
});

module.exports = SectionsView;

var View = require('./BaseView');
var template = require('../../templates/portfolio.dom');
var HeaderView = require('./Header');
var NavView = require('./Nav');
var SectionsView = require('./Sections');

var PortfolioView = View.extend({
	template: template,
	subviews: {
		header: {
			hook: 'header',
			prepareView: function prepareView (el) {
				return new HeaderView({
					el: el,
					model: this.model
				});
			}
		},
		nav: {
			hook: 'nav',
			prepareView: function prepareView (el) {
				return new NavView({
					el: el,
					collection: this.model.sections
				});
			}
		},
		sections: {
			hook: 'sections',
			prepareView: function prepareView (el) {
				return new SectionsView({
					el: el,
					collection: this.model.sections
				});
			}
		}
	}
});

module.exports = PortfolioView;

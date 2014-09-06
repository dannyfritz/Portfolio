var AmpersandView = require('ampersand-view');
var domthingMixin = require('ampersand-domthing-mixin');
var template = require('../../templates/portfolio.dom');

var PortfolioView = AmpersandView.extend(domthingMixin).extend({
	template: template
});

module.exports = PortfolioView;

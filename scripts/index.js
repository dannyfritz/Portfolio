var PortfolioView = require('./views/Portfolio');
var PortfolioModel = require('./models/Portfolio');

var portfolioModel = new PortfolioModel({
	name: 'Danny Fritz'
});
var portfolioView = new PortfolioView({ model: portfolioModel });
portfolioView.render();
document.body.appendChild(portfolioView.el);

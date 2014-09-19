var PortfolioView = require('./views/Portfolio');
var data = require('./data');

var portfolioView = new PortfolioView({model: data});
portfolioView.render();

global.document.body.appendChild(portfolioView.el);

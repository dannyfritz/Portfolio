var Data = require('./models/Data');
var Sections = require('./collections/Sections');
var Items = require('./collections/Items');

var bio = require('../data/bio.json');
var sites = require('../data/sites.json');
var applications = require('../data/applications.json');
var games = require('../data/games.json');

var data = new Data({
	bio: bio,
	sections: [
		{name: 'Links', items: sites},
		{name: 'Applications', items: applications},
		{name: 'Games', items: games}
	]
});

module.exports = data;

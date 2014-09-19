var Collection = require('ampersand-collection');
var Item = require('../models/Item');

var Items = Collection.extend({
	model: Item
});

module.exports = Items;

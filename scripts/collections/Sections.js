var Collection = require('ampersand-collection');
var Section = require('../models/Section');

var Sections = Collection.extend({
    model: Section
});

module.exports = Sections;

var Collection = require('ampersand-collection');
var Link = require('../models/Link');

var Links = Collection.extend({
    model: Link
});

module.exports = Links;

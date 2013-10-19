define(
[ 'backbone', 'models/Item' ],
function ( Backbone, Item ) {
	var Items = Backbone.Collection.extend({
		model: Item
	});
	return Items;
});

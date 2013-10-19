define(
[ 'backbone' ],
function ( Backbone ) {
	var Item = Backbone.Model.extend({
		defaults: {
			url: '',
			description: ''
		}
	});
	return Item;
});

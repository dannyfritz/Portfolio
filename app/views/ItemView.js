define(
[ 'zepto', 'backbone', 'handlebars', 'text!templates/Item.html' ],
function ( $, Backbone, Handlebars, ItemTemplate ) {
	var ItemView = Backbone.View.extend({
		tagName: "div",
		attributes: {
			class: 'item'
		},
		template: Handlebars.compile(ItemTemplate),
		events: { },
		initialize: function ( ) {
			this.render();
		},
		render: function ( ) {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
	return ItemView;
});

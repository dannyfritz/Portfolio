define(
[ 'zepto', 'backbone', 'handlebars', 'text!templates/Section.html', 'views/ItemView' ],
function ( $, Backbone, Handlebars, SectionTemplate, ItemView ) {
	var SectionView = Backbone.View.extend({
		tagName: "section",
		template: Handlebars.compile(SectionTemplate),
		events: { },
		initialize: function ( ) {
			this.render();
		},
		render: function ( ) {
			this.$el.html(this.template(this.options));
			$items = this.$el.find('.items');
			this.collection.each(function ( item ) {
				var itemView = new ItemView({
					model: item
				});
				$items.append(itemView.render().el);
			});
			$items.find('.item').wrap('<div class="pure-u-1-3"></div>');
			return this;
		}
	});
	return SectionView;
});

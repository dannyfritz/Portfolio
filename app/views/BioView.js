define(
[ 'zepto', 'backbone', 'handlebars', 'text!templates/Bio.html', 'flowtype' ],
function ( $, Backbone, Handlebars, BioTemplate ) {
	var BioView = Backbone.View.extend({
		tagName: "section",
		template: Handlebars.compile(BioTemplate),
		events: { },
		initialize: function ( ) {
			this.render();
		},
		render: function ( ) {
			var self = this;
			this.$el.html(this.template(this.model));
			this.$el.find('h1').flowtype({fontRatio: 8});
		}
	});
	return BioView;
});

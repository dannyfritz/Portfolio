define(
[ 'data/data', 'views/SectionView', 'views/BioView' ],
function ( data, SectionView, BioView ) {
	var Bio = new BioView({
		el: '#bio',
		model: data.bio
	});
	var Sites = new SectionView({
		el: '#links',
		title: 'Links',
		collection: data.sites
	});
	var Applications = new SectionView({
		el: '#applications',
		title: 'Applications',
		collection: data.applications
	});
	var Games = new SectionView({
		el: '#games',
		title: 'Games',
		collection: data.games
	});
});

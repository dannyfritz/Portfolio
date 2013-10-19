define(
[ 'lodash', 'collections/Items', 'text!data/bio.json','text!data/sites.json', 'text!data/applications.json', 'text!data/games.json' ],
function ( _, Items, bio, sites, applications, games ) {
	var data = {};
	var addItemsFromData = function ( jsonData, key ) {
		var itemData = JSON.parse(jsonData);
		var items = new Items();
		_.each(itemData, function ( item ) {
			items.add(item);
		});
		data[key] = items;
	};
	data.bio = JSON.parse(bio);
	addItemsFromData(sites, 'sites');
	addItemsFromData(applications, 'applications');
	addItemsFromData(games, 'games');
	return data;
});

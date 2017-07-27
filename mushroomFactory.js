"use strict";

myApp.factory("MushroomFactory", function($q, $http) {

	function getMushrooms() {
		return $q( (resolve, reject) => {
			$http.get("https://mushroom-mania-ef1ad.firebaseio.com/mushrooms.json")
			.then( (mushrooms) => {
				resolve(mushrooms);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	}

	return { getMushrooms };
});
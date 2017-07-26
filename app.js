"use strict";

const myApp = angular.module("app", []);

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

myApp.controller("MushroomController", function($scope, MushroomFactory) {

	MushroomFactory.getMushrooms()
	.then( (mushrooms) => {
		let mushroomArr = [];
		angular.forEach(mushrooms.data, function(obj) {
			mushroomArr.push(obj);
		})
		$scope.mushroomList = mushroomArr;
	});
});
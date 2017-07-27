"use strict";

const myApp = angular.module("app", []);


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
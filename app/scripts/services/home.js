'use strict';

/**
 * @ngdoc function
 * @name contentEditableApp.controller:HomeService
 * @description
 * # HomeService
 * Controller of the contentEditableApp
 */
 angular.module('contentEditableApp')
 .factory('HomeService', ['$firebase', 'FIREBASE_URL', function ($firebase, FIREBASE_URL) {
 	var ref = new Firebase(FIREBASE_URL);
 	var home = $firebase(ref.child('home')).$asArray();

 	var Home = {
 		all: home,
 		addFirstPanel: function (text) {
 			var firstPanel = $firebase(ref.child('home').child('firstPanel')).$asObject();
 			firstPanel.$add(text);
 		},
 		updateFirstPanel: function (text) {
 			var firstPanel = $firebase(ref.child('home').child('firstPanel')).$asObject();
 			firstPanel.$save(text);
 		}
 	};

 	return Home;

}]);
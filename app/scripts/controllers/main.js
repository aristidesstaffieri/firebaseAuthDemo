'use strict';

/**
 * @ngdoc function
 * @name contentEditableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contentEditableApp
 */
 angular.module('contentEditableApp')
 .controller('MainCtrl', ['$scope', '$firebase', 'currentAuth', '$location', 'Auth', 'FIREBASE_URL', '$log',
 	function ($scope, $firebase, currentAuth, $location, Auth, FIREBASE_URL, $log) {
	 	$log.debug(currentAuth);
	 	if (!currentAuth)   {
	 		$location.path('/register');
	 	}

	    	$scope.logout = function () {
	    		Auth.logout();
	    		$location.path('/register');
	    	};

	    	Auth.monitorAuth();

}]);

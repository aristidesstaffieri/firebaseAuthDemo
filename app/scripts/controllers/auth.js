'use strict';

/**
 * @ngdoc function
 * @name contentEditableApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the contentEditableApp
 */
 angular.module('contentEditableApp')
 .controller('AuthCtrl', ['$scope', 'Auth', '$location', '$timeout', 'Users', 'FIREBASE_URL', '$firebaseAuth', function ($scope, Auth, $location, $timeout, Users, FIREBASE_URL, $firebaseAuth) {
 	var ref = new Firebase(FIREBASE_URL);

 	$scope.user = {
 		email: '',
 		password: ''
 	};
 	$scope.loginEmail = '';
 	$scope.loginPassword = '';

 	var authSave = function () {
 		Users.createUser($firebaseAuth(ref).$getAuth());
 	};
 	$scope.register = function () {
		Auth.register($scope.user.email, $scope.user.password);
 			$scope.user = {
		 		email: '',
		 		password: ''
	 		};
	 		//need to do this async with the login
	 		$timeout(function () {
	 			authSave();
	 			$location.path('/'); 	
	 		}, 1500);
	 		
 	};
 		

 	$scope.login = function () {
 		Auth.login($scope.loginEmail, $scope.loginPassword);
 	};
 }]);
'use strict';

/**
 * @ngdoc function
 * @name contentEditableApp.controller:Users
 * @description
 * # Users
 * Controller of the contentEditableApp
 */
 angular.module('contentEditableApp')
 .factory('Users', [ 'FIREBASE_URL', function (FIREBASE_URL) {
 	var ref = new Firebase(FIREBASE_URL);

 	//function to find the provider in user auth
 	function getName(authData) {
 		switch(authData.provider) {
 			case 'password':
 			return authData.password.email.replace(/@.*/, '');
 			case 'twitter':
 			return authData.twitter.displayName;
 			case 'facebook':
 			return authData.facebook.displayName;
 		}
 	}

 	var Users = {
 		createUser: function (authData) {
 			ref.child('users').child(authData.uid).set({
 				provider: authData.provider,
 				email: authData.password.email,
 				isTemporary: authData.password.isTemporaryPassword,
 				name: getName(authData)
 			});
 		}
 	};
 	return Users;
 }]);
'use strict';

/**
 * @ngdoc overview
 * @name contentEditableApp
 * @description
 * # contentEditableApp
 *
 * Main module of the application.
 */
angular
  .module('contentEditableApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://content-editable.firebaseio.com/')
  .run(['$rootScope', '$location', '$log', function($rootScope, $location, $log) {
  $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
    if (error === 'AUTH_REQUIRED') {
      $location.path('/register');
    }
  });
  $rootScope.$log = $log;
}])
  .config(function ($routeProvider, $logProvider) {
    $logProvider.debugEnabled(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          // controller will not be loaded until $waitForAuth resolves
          // Auth refers to our $firebaseAuth wrapper above
          'currentAuth': ['Auth', function(Auth) {
            // $waitForAuth returns a promise so the resolve waits for it to complete
            return Auth.auth.$waitForAuth();
          }]
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        resolve: {
          // controller will not be loaded until $waitForAuth resolves
          // Auth refers to our $firebaseAuth wrapper above
          'currentAuth': ['Auth', function(Auth) {
            // $waitForAuth returns a promise so the resolve waits for it to complete
            return Auth.auth.$requireAuth();
          }]
        }
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc overview
 * @name airlinesApp
 * @description
 * # airlinesApp
 *
 * Main module of the application.
 */
angular
  .module('airlinesApp', [
    'ngResource',
    'ngRoute',
    'firebase',
    'ui.bootstrap'
  ])
  // .constant('FIREBASE_URL', 'https://airlinesapp.firebaseio.com/');

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/show', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl',
        controllerAs: 'show'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

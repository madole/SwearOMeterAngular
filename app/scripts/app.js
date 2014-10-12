'use strict';

/**
 * @ngdoc overview
 * @name swearOmeterAngularApp
 * @description
 * # swearOmeterAngularApp
 *
 * Main module of the application.
 */
angular
  .module('swearOmeterAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

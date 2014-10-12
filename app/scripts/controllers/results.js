'use strict';

/**
 * @ngdoc function
 * @name swearOmeterAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swearOmeterAngularApp
 */
angular.module('swearOmeterAngularApp')
  .controller('ResultsCtrl', function ($scope, queryService) {
    $scope.username = queryService.getUsername();
    $scope.swearTweets = queryService.getSwearTweets().count;
    queryService.clearAll();
  });

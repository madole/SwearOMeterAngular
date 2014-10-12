'use strict';

/**
 * @ngdoc function
 * @name swearOmeterAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swearOmeterAngularApp
 */
angular.module('swearOmeterAngularApp')
  .controller('MainCtrl', function ($scope, $location, queryService) {
    $scope.username = '';

    $scope.addAtSymbol = function(name) {
      if(name.indexOf('@')!==0) {
        return '@' + name;
      } else {
        return name;
      }

    };

    $scope.submitUsername = function() {

      console.log($scope.username);
      queryService.queryTwitterApi($scope.username).then(function() {
        $location.path('results');
      });
    };
  });

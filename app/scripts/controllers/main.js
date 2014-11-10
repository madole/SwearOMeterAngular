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
    $scope.spinner = false;

    /**
     * This function prefixes a string with an @ symbol if the user has
     * forgotten to do it
     * @param {String} name
     * @returns {String}
     */
    $scope.addAtSymbol = function(name) {
      if(name.indexOf('@')!==0) {
        return '@' + name;
      } else {
        return name;
      }
    };
                
    /**
     * This function sets the spinner boolean to true when called
     */
    $scope.showSpinner = function() {
      $scope.spinner = true;
    };

    /**
     * This function submits the username to the queryService
     * twitter API call and on success, hides the spinner and
     * re-routes to the results page
     */
    $scope.submitUsername = function() {
      console.log($scope.username);
      queryService.queryTwitterApi($scope.username).then(function() {
        angular.element('spinner').addClass('hide');
        $location.path('results');
      });
    };
  });

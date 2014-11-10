'use strict';

/**
 * @ngdoc service
 * @name swearOmeterAngularApp.queryService
 * @description
 * # queryService
 * Service in the swearOmeterAngularApp.
 */
angular.module('swearOmeterAngularApp')
  .service('queryService', function queryService($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var queryResult = {},
      cachedUsername = '';

    var queryTwitterApi = function(username) {
       cachedUsername = username;

      return $http.get('http://afternoon-citadel-9782.herokuapp.com/getSwearWords?username='+ username +'')
        .success(function(data) {
          queryResult = data;
          console.log(data);
        }).error(function() {
          console.log('FAILURE');
        });
    };

    var getSwearTweets = function() {
      return queryResult;
    };
    var clearAll = function() {
      queryResult = {};
      cachedUsername = '';
    };

    return {
      queryTwitterApi: queryTwitterApi,
      getSwearTweets: getSwearTweets,
      clearAll: clearAll,
      getUsername: function() {
        return cachedUsername;
      }
    };

  });

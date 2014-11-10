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

    function queryTwitterApi(username) {
       cachedUsername = username;

      return $http.get('http://afternoon-citadel-9782.herokuapp.com/getSwearWords?username='+ username +'')
        .success(function(data) {
          queryResult = data;
          console.log(data);
        }).error(function(err) {
          console.log('FAILURE', err);
        });
    }

    function getSwearTweets() {
      return queryResult;
    }

    function clearAll() {
      queryResult = {};
      cachedUsername = '';
    }

    function getUsername() {
      return cachedUsername;
    }

    return {
      queryTwitterApi: queryTwitterApi,
      getSwearTweets: getSwearTweets,
      clearAll: clearAll,
      getUsername: getUsername
    };

  });

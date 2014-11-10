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

     /**
      * This function calls the Twitter Swear API hosted on heroku with the
      * username the user has entered
      * @param {String} username
      * @returns {Object}
      */
     function queryTwitterApi(username) {
       cachedUsername = username;

       return $http.get('http://afternoon-citadel-9782.herokuapp.com/getSwearWords?username=' + username + '')
         .success(cacheQueryResult).error(logError);
     }

     /**
      * This function caches the query result data
      * @param {Object} data
      */
     function cacheQueryResult(data) {
       queryResult = data;
       console.log(data);
     }

     /**
      * This function logs the error message of the http request
      * @param {Object|String} err
      */
     function logError(err) {
       console.log('FAILURE', err);
     }

     /**
      * This function gets the cached swear tweets data
      * @returns {Object}
      */
     function getSwearTweets() {
       return queryResult;
     }

     /**
      * This function clears the cached data
      */
     function clearAll() {
       queryResult = {};
       cachedUsername = '';
     }

     /**
      * This function returns the cached username
      * @returns {string}
      */
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

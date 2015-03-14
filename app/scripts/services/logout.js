'use strict';

/**
 * @ngdoc service
 * @name publicApp.logout
 * @description
 * # logout
 * Factory in the publicApp.
 */
angular.module('publicApp')
    .factory('Logout', function ($q, $http, $location) {
        var deferred = $q.defer();

        $location.path('login');
        deferred.resolve();

        return $q.promise;
    });

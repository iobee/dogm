'use strict';

/**
 * @ngdoc service
 * @name publicApp.user
 * @description
 * # user
 * Service in the publicApp.
 */
angular.module('publicApp')
    .factory('User', function ($resource) {
        return $resource('/api/v1/users', {})
    });

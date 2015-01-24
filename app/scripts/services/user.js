'use strict';

/**
 * @ngdoc service
 * @name publicApp.user
 * @description
 * # user
 * Service in the publicApp.
 */
angular.module('publicApp')
    .service('user', function ($resource) {
        return $resource('/api/v1/users', {}, {

        })
    })

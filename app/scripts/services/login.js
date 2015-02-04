'use strict';

/**
 * @ngdoc service
 * @name publicApp.login
 * @description
 * # login
 * Service in the publicApp.
 */
angular.module('publicApp')
    .service('login', function ($resource) {
        return $resource('/api/v1/login', {});
    })


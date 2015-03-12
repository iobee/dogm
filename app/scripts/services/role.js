'use strict';

/**
 * @ngdoc service
 * @name publicApp.role
 * @description
 * # role
 * Factory in the publicApp.
 */
angular.module('publicApp')
  .factory('Role', function ($resource) {
        return $resource('/api/v1/roles/:id', {});
  });

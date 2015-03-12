'use strict';

/**
 * @ngdoc service
 * @name publicApp.project
 * @description
 * # project
 * Factory in the publicApp.
 */
angular.module('publicApp')
  .factory('Project', function ($resource) {
        return $resource('/api/v1/projects', {})
  });

'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('NavCtrl', function ($scope, $location) {

        $scope.user = {
            username: 'Nemo'
        }

        $scope.isActive = function(path) {
            return path === $location.path();
        }
  });

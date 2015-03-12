'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:RoleCtrl
 * @description
 * # RoleCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
    .controller('RoleCtrl', function ($scope, Role) {
        $scope.submit = function() {
            var role = new Role($scope.role);
            role.$save();
        }
    });

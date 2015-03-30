'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('UserCtrl', function ($scope, User) {
        $scope.users = User.query();

        $scope.deleteUser = function(user) {
            $scope.users.splice($scope.users.indexOf(user), 1);

            User.delete({id: user._id}).$promise
                .then(function() {

                })
                .catch(function(err) {

                });
        }
  });

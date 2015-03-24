'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
    .controller('RegisterCtrl', function ($scope, User) {

        $scope.register = function(){
            User.save({
                email: $scope.email,
                password: $scope.password,
                username: $scope.username
            }).$promise
                .then(function(user){

                })
                .catch(function(err){
                    $scope.email = err.errormsg
                })
        }
    })

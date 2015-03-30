'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
    .controller('RegisterCtrl', function ($scope, $routeParams, User) {

        $scope.user = {};

        $scope.user.email = $routeParams.email;
        $scope.user.token = $routeParams.token;
        $scope.user._id = $routeParams._id;

        $scope.register = function(){
            var user = new User($scope.user)
            user.$patch()
                .then(function(user){

                })
                .catch(function(err){
                    $scope.email = err.errormsg;
                })
        }
    })

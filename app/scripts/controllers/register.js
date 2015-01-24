'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
    .controller('RegisterCtrl', function ($scope, user) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ]

        $scope.register = function(){
            user.save({
                email: $scope.email,
                password: $scope.password,
                username: $scope.username
            }).$promise
                .then(function(user){

                })
                .catch(function(err){
                    $scope.email = err.errorMsg
                })
        }
    })

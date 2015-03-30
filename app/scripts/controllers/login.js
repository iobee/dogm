'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
    .controller('LoginCtrl', function ($scope, $location, login) {

        $scope.submit = function () {
            login.get({email: $scope.email, password: $scope.password}).$promise
                .then(function(user){
                    //$scope.email = user;
                    $location.path('/');
                })
                .catch(function(err){
                    $scope.validator = {};
                    $scope.validator.email = "has-error";
                    $scope.validator.password = "has-error";
                    $scope.validator.helpText = "用户名或密码错误，请重新输入";
                });
        }
    })

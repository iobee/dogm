'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
    .controller('MainCtrl', function ($scope, Bug) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.bugs = [];

        Bug.getCurrentUserBugs()
            .then(function(bugs){
                $scope.bugs = bugs;
            })
            .catch(function(data, status, headers){
                console.log(status);
            })
    });

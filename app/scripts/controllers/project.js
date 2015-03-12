'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
    .controller('ProjectCtrl', function ($scope, Project) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.submit = function() {
            var project = new Project($scope.project);
            project.$save();
        }
    });

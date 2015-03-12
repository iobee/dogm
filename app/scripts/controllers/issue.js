'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:IssueCtrl
 * @description
 * # IssueCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
    .controller('IssueCtrl', function($scope, User, Project) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.users = User.query();
        $scope.projects = Project.query();

        $scope.submit = function() {
            $scope.result = $scope.bug;
        }
    });

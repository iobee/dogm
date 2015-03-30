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
        $scope.status= [
            {name: "Development", code: 0},
            {name: "Release", code: 1},
            {name: "Stable", code: 2},
            {name: "Obsolete", code: 3}
        ];

        $scope.projects = Project.query();

        $scope.deleteProject = function(project) {

            $scope.projects.splice($scope.projects.indexOf(project), 1);
            Project.delete({id: project._id}).$promise
                .then(function() {
                    console.log('delete success');
                })
                .catch(function() {

                });
        };

        $scope.submit = function() {
            var project = new Project($scope.project);

            $scope.projects.push($scope.project);
            project.$save()
                .then(function() {
                    console.log('save success');
                })
                .catch(function() {
                    $scope.projects.pop();
                });

            $scope.project = null;
        }
    });

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

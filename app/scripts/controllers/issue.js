'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:IssueCtrl
 * @description
 * # IssueCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
    .controller('IssueCtrl', function($scope, FileUploader, User, Project, Bug) {
        $scope.bug = {};

        $scope.users = User.query();
        $scope.projects = Project.query();

        $scope.submit = function() {
            Bug.createBug($scope.bug)
                .then(function(bug) {

                })
                .catch(function(err) {
                });
        };

        $scope.uploader = new FileUploader({
            url: '/api/v1/files',
            autoUpload: true
        });

        $scope.uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });


        $scope.uploader.onCompleteItem = function(item, bug, status, header) {
            $scope.bug._file = bug._file._id;
        };
        $scope.uploader.onCompleteAll = function() {
            console.info("upload file success");
        };
    });

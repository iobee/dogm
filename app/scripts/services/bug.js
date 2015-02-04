'use strict';

/**
 * @ngdoc service
 * @name publicApp.Bug
 * @description
 * # Bug
 * Factory in the publicApp.
 */
angular.module('publicApp')
  .factory('Bug', function ($http, $q) {
        return {
            /**
             * 得到当前用户分配的bugs
             * @param {Function} callback - optional
             * @returns {Promise} {deferred.promise|*}
             */
            getCurrentUserBugs: function(callback){
                var cb = callback || angular.noop;
                var deferred = $q.defer();

                $http.get('/api/v1/user/bugs')
                    .success(function (data) {
                        deferred.resolve(data);
                        return cb();
                    })
                    .error(function(data, status, headers){
                        deferred.reject(data, status, headers);
                        return cb(data);
                    })

                return deferred.promise;
            },
            /**
             * 根据用户ID，查找bugs
             * @param userId
             */
            getBugsById: function(userId, callback){
                var cb = callback || angular.noop;
                var deferred = $q.defer();

                $http.get('/api/v1/users/' + userId)
                    .success(function(data){
                        deferred.resolve(data);
                        return cb();
                    })
                    .error(function(err){
                        deferred.reject(err);
                        return cb(err);
                    })

                return deferred.promise;

            },
            createBug: function(bug){

            }
        }
  });

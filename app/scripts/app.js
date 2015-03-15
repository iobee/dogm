'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
angular
    .module('publicApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/logout', {
                resolve: {
                    logout: 'Logout'
                }
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl'
            })
            .when('/user', {
                templateUrl: 'views/user/user.html',
                controller: 'UserCtrl'
            })
            .when('/createIssue', {
                templateUrl: 'views/issue/create.html',
                controller: 'IssueCtrl'
            })
            .when('/createRole', {
                templateUrl: 'views/role/create.html',
                controller: 'RoleCtrl'
            })
            .when('/createProject', {
                templateUrl: 'views/project/create.html',
                controller: 'ProjectCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

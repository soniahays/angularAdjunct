'use strict';

angular.module('adjunct', [
        'ngRoute',
        'ngCookies',
        '$strap.directives',
        'tags-input',
        'ngUpload',
        'adjunct.filters',
        'adjunct.services',
        'adjunct.directives',
        'adjunct.controllers'
    ]).
    config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', function ($routeProvider, $locationProvider, $sceDelegateProvider) {
        $routeProvider.when('/', {templateUrl: '/partial/home', controller: 'HomeCtrl', accessLevel: 'public'});
        $routeProvider.when('/search-results', {templateUrl: '/partial/search-results', controller: 'SearchResultsCtrl', accessLevel: 'public'});
        $routeProvider.when('/jobs-profile', {templateUrl: '/partial/jobs-profile', controller: 'JobsProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/jobs-profile/:id', {templateUrl: function(params) {  return '/partial/jobs-profile/' + params.id; }, controller: 'JobsProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/institutions-profile', {templateUrl: '/partial/institutions-profile', controller: 'InstitutionsProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/institutions-profile/:id', {templateUrl: function(params) {  return '/partial/institutions-profile/' + params.id; }, controller: 'InstitutionsProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/profile/:id', {templateUrl: function(params) {  return '/partial/adjuncts-profile/' + params.id; }, controller: 'AdjunctsProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/profile', {templateUrl: '/partial/adjuncts-profile', controller: 'AdjunctsProfileCtrl', accessLevel: 'private'});
        $routeProvider.when('/signup', {templateUrl: '/partial/signup', controller: 'SignupCtrl', accessLevel: 'public'});
        $routeProvider.when('/basic-profile', {templateUrl: '/partial/basic-profile', controller: 'BasicProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/confirm-email', {templateUrl: '/partial/confirm-email', controller: 'ConfirmEmailCtrl', accessLevel: 'public'});
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);
        $sceDelegateProvider.resourceUrlWhitelist(["http://www.youtube.com/embed/*", "self"]);
    }]);

angular.module('adjunct.filters', []);
angular.module('adjunct.services', []);
angular.module('adjunct.directives', []);
angular.module('adjunct.controllers', []);

'use strict';

angular.module('adjunct', [
        'ngRoute',
        'monospaced.elastic',
        'ngScrollTo',
        'ngCookies',
        //'ngResource',
        'ngAnimate',
//        'ngSanitize',
        'mgcrea.ngStrap',
        'ui.bootstrap',
        'tags-input',
        'ngUpload',
        'adjunct.filters',
        'adjunct.services',
        'adjunct.directives',
        'adjunct.controllers'
    ]).
    config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', '$sceProvider','$tooltipProvider', '$dropdownProvider', function ($routeProvider, $locationProvider, $sceDelegateProvider, $sceProvider,$tooltipProvider, $dropdownProvider) {
        $routeProvider.when('/', {templateUrl: '/partial/home', controller: 'HomeCtrl', accessLevel: 'public'});
        $routeProvider.when('/search-results/:searchTerm', {templateUrl: function(params) {  return '/partial/search-results/' + params.searchTerm; }, controller: 'SearchResultsCtrl', accessLevel: 'public'});
        $routeProvider.when('/search-results', {templateUrl: '/partial/search-results', controller: 'SearchResultsCtrl', accessLevel: 'public'});
        $routeProvider.when('/jobs', {templateUrl: '/partial/jobs', controller: 'JobsCtrl', accessLevel: 'public'});
        $routeProvider.when('/contact-us', {templateUrl: '/partial/contact-us', controller: 'ContactUsCtrl', accessLevel: 'public'});
        $routeProvider.when('/job-profile/add', {templateUrl:  '/partial/job-profile', controller: 'JobProfileCtrl', accessLevel: 'public' });
        $routeProvider.when('/job-profile/:id', {templateUrl: function(params) {  return '/partial/job-profile/' + params.id; }, controller: 'JobProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/institutions-profile', {templateUrl: '/partial/institutions-profile', controller: 'InstitutionsProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/institutions-profile/:id', {templateUrl: function(params) {  return '/partial/institutions-profile/' + params.id; }, controller: 'InstitutionsProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/profile/edit', {templateUrl: '/partial/adjuncts-profile', controller: 'AdjunctsProfileCtrl', accessLevel: 'private'});
        $routeProvider.when('/profile/:id', {templateUrl: function(params) {  return '/partial/adjuncts-profile/' + params.id; }, controller: 'AdjunctsProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/profile', {templateUrl: '/partial/adjuncts-profile', controller: 'AdjunctsProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/signup', {templateUrl: '/partial/signup', controller: 'SignupCtrl', accessLevel: 'public'});
        $routeProvider.when('/basic-profile', {templateUrl: '/partial/basic-profile', controller: 'BasicProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/confirm-email', {templateUrl: '/partial/confirm-email', controller: 'ConfirmEmailCtrl', accessLevel: 'public'});
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);
        $sceDelegateProvider.resourceUrlWhitelist(["http://www.youtube.com/embed/*", "self", "https://docs.google.com/*", "http://infolab.stanford.edu/*"]);
        $sceProvider.enabled(false);
        angular.extend($tooltipProvider.defaults, {
            html: false
        });
        angular.extend($dropdownProvider.defaults, {
            trigger: 'click',
        });
    }]);

angular.module('adjunct.filters', []);
angular.module('adjunct.services', []);
angular.module('adjunct.directives', []);
angular.module('adjunct.controllers', []);

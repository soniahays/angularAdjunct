'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {templateUrl: 'partial/home', controller: 'HomeCtrl'});
  $routeProvider.when('/jobs', {templateUrl: 'partial/jobs', controller: 'JobsCtrl'});
  $routeProvider.when('/profile', {templateUrl: 'partial/profile', controller: 'ProfileCtrl'});
  $routeProvider.when('/signin', {templateUrl: 'partial/signin-popover', controller: 'SigninCtrl'});
  $routeProvider.when('/signup', {templateUrl: 'partial/signup', controller: 'SignupCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);
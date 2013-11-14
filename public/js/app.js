'use strict';

angular.module('adjunct', [
  'ngRoute',
  '$strap.directives',
  'tags-input',
  'adjunct.filters',
  'adjunct.services',
  //'adjunct.directives',
  'adjunct.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {templateUrl: 'partial/home', controller: 'HomeCtrl'});
  $routeProvider.when('/jobs', {templateUrl: 'partial/jobs', controller: 'JobsCtrl'});
  $routeProvider.when('/profile', {templateUrl: 'partial/adjuncts-profile'});
  $routeProvider.when('/signin', {templateUrl: 'partial/signin-popover', controller: 'SigninCtrl'});
  $routeProvider.when('/signup', {templateUrl: 'partial/signup', controller: 'SignupCtrl'});
  $routeProvider.when('/basic-profile', {templateUrl: 'partial/basic-profile', controller: 'BasicProfileCtrl'});
  $routeProvider.when('/confirm-email', {templateUrl: 'partial/confirm-email', controller: 'ConfirmEmailCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);

angular.module('adjunct.filters', []);
angular.module('adjunct.services', []);
angular.module('adjunct.directives', []);
angular.module('adjunct.controllers', []);
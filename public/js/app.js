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
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {templateUrl: 'partial/home', controller: 'HomeCtrl', accessLevel: 'public'});
  $routeProvider.when('/jobs', {templateUrl: 'partial/jobs', controller: 'JobsCtrl', accessLevel: 'public'});
  $routeProvider.when('/profile', {templateUrl: 'partial/adjuncts-profile', controller: 'AdjunctsProfileCtrl', accessLevel: 'private'});
  $routeProvider.when('/signup', {templateUrl: 'partial/signup', controller: 'SignupCtrl', accessLevel: 'public'});
  $routeProvider.when('/basic-profile', {templateUrl: 'partial/basic-profile', controller: 'BasicProfileCtrl', accessLevel: 'public'});
  $routeProvider.when('/confirm-email', {templateUrl: 'partial/confirm-email', controller: 'ConfirmEmailCtrl', accessLevel: 'public'});
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);

angular.module('adjunct.filters', []);
angular.module('adjunct.services', []);
angular.module('adjunct.directives', []);
angular.module('adjunct.controllers', []);
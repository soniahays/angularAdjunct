'use strict';

angular.module('adjunct.controllers')
    .controller('BasicProfileCtrl', ['$scope','$rootScope','$http','$location', function ($scope,$rootScope,$http,$location) {

        $http.get('/api/countries').then(function(response) { $scope.countries = _.map(response.data, function(item){return item.name; })});
        $http.get('/api/fieldGroups').then(function(response) { $scope.fieldGroups = _.map(response.data, function(item){return item.name})});
        $http.get('api/institutions').then(function(response) { $scope.institutions = _.map(response.data, function(item){return item.Institution + "(" + item.State + ")";});});


        $scope.manuallyCreateProf = function () {
        $scope.user = $rootScope.user;
        $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user})).then(function(){$location.path('/profile');});
        };

    }]);





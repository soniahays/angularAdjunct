'use strict';

angular.module('adjunct.controllers')
    .controller('BasicProfileCtrl', ['$scope','$rootScope','$http','$location', function ($scope,$rootScope,$http,$location) {

        $http.get('/api/fieldGroups').then(function(response) { $scope.fieldGroups = _.map(response.data, function(item){return item.name})});
        $http.get('/api/countries').then(function(response) { $scope.countries = _.map(response.data, function(item){return item.name})});
        $http.get('api/institutions').then(function(response) { $scope.institutions = _.map(response.data, function(item){return item.name + "(" + item.city + ", " + item.state + ")";});});


        $scope.manuallyCreateProf = function () {
        $scope.user = $rootScope.user;
            console.log($scope.user);
            if($scope.user==null){
                alert("user is null");
            }
        $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user})).then(function(){$location.path('/profile');});
        };

    }]);





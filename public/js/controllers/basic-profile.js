'use strict';

angular.module('adjunct.controllers')
    .controller('BasicProfileCtrl', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {

        $http.get('/api/fieldGroups').then(function (response) {
            $scope.fieldGroups = response.data; console.log(response.data);
        });

        $http.get('api/institutions').then(function (response) {
            $scope.institutions = response.data;
        });

        $http.get('api/countries').then(function (response) {
            $scope.countries = response.data;
        });

        $scope.manuallyCreateProf = function () {
            angular.extend($scope.user, $rootScope.user);
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user})).then(function () {
                window.location.replace(window.location.origin + "/profile");
                //$http.post('/api/signin', JSON.stringify({'email': $scope.user.email, 'password': $scope.user.password}));
            });
        };
    }]);





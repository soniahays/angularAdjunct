'use strict';

angular.module('adjunct.controllers')
    .controller('JobsCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {
        $scope.users = [];
        $scope.jobs = [];
        $scope.currentPage = 1;

        var jobs = $http.get('/api/jobs/1/10');
        var positionTypes = $http.get('/api/positionTypes');
        var countries = $http.get('/api/countries');

        $q.all([jobs, positionTypes, countries]).then(function (values) {
            $scope.totalItems = values[0].data.count;
            $scope.jobs = values[0].data.docs;
        });

        $scope.selectPage = function(page) {
            $http.get("/api/jobs/" + page + "/10").then(function(data) {
                $scope.currentPage = page;
                $scope.jobs = data.data.docs;
            });
        }
}]);
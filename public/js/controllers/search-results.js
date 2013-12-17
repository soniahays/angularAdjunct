'use strict';

angular.module('adjunct.controllers')
    .controller('SearchResultsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.users = [];
        $scope.user = {};
        $scope.search = function() {
            console.log($scope.user.university);
            $http.post('/api/search', JSON.stringify({'query': $scope.user.university})).then(function(response){
                $scope.users = _.pluck(response.data.hits.hits, '_source');
            });
        }
    }]);
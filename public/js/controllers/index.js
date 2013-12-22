'use strict';

angular.module('adjunct.controllers')
    .controller('IndexCtrl', ['$scope', '$http', '$cookies', function ($scope, $http, $cookies) {

        $scope.isSignedIn = $cookies._id != null;

        if ($scope.isSignedIn) {
            $http.get('/api/get-adjuncts-profile/' + $cookies._id).then(function(response) { $scope.user = response.data; });
        }

        $scope.signout = function() {
            window.location.replace('/signout');
        }

        $scope.index = 0;

        $scope.profileDropdown = [
            {
                "text": "Edit Profile",
                "href": "/profile"
            },
            {
                "text": "Saved Jobs",
                "href": "/profile/saved-jobs"
            }
        ];

        $scope.jobsDropdown = [
            {
                "text": "View jobs",
                "href": "/jobs"
            },
            {
                "text": "Post a new job",
                "href": "/job-profile/add"
            }
        ];
    }]);
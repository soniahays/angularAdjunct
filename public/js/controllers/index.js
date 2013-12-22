'use strict';

angular.module('adjunct.controllers')
    .controller('IndexCtrl', ['$scope', '$http', '$cookies', function ($scope,$http, $cookies) {


        var userId = $('#userId').html();




        $scope.isSignedIn = $cookies._id != null;
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


        $http({
            url: '/api/get-adjuncts-profile/' + (userId ? userId : $cookies._id),
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.user = data;
                angular.extend($scope.user, {

                });

            }).error(function (data, status, headers, config) {
                console.log("get-adjuncts-profile-top-card didn't work");
            });
    }]);
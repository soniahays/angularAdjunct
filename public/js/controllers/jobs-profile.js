'use strict';

angular.module('adjunct.controllers')
    .controller('JobsProfileCtrl', ['$scope', '$http',  function ($scope, $http) {

        var jobId = $('#jobId').html();

        if (!jobId) {
//            return;
        }
//        $scope.users = [];
        $scope.jobs = [];
        $scope.topCardJobTemplateUrl = '/partial/jobs-profile-top-card';
        $scope.bottomCardJobTemplateUrl = '/partial/jobs-profile-bottom-card';
        $scope.rightTopSideColumnUrl = '/partial/adjuncts-profile-right-topSide-column';
        $scope.rightBottomSideColumnUrl = '/partial/adjuncts-profile-right-bottomSide-column';
        $scope.badgeEditModallUrl = '/partial/badge-edit-modal';

        $http({
            url: '/api/get-jobs-profile/' + jobId,
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.job = data;
//                        $scope.filteredBadges = [];
//
//        for (var badge in $scope.job.badges) {
//            var val = $scope.job.badges[badge];
//            if (val != false) {
//                $scope.filteredBadges.push(val);
//            }
//        }
            }).error(function (data, status, headers, config) {
                console.log("/api/get-jobs-profile didn't work");
            });



        $scope.editTopCard = function () {
            console.log("from top card job edit") ;
            $scope.topCardJobTemplateUrl = '/partial/jobs-profile-top-card-edit';
        }
        $scope.editBottomCard = function () {
            console.log("from bottom card job edit") ;
            $scope.bottomCardJobTemplateUrl = '/partial/jobs-profile-bottom-card-edit';
        }

        $scope.saveTopCard = function () {
            $scope.topCardJobTemplateUrl = '/partial/jobs-profile-top-card';

            $http({
                url: '/save-jobs-profile',
                method: 'POST',
                data: JSON.stringify({'job': $scope.job}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("save-jobs-profile-top-card worked");
                }).error(function (data, status, headers, config) {
                    console.log("save-jobs-profile-top-card didn't work");
                });
        }
        $scope.saveBottomCard = function () {
            $scope.bottomCardJobTemplateUrl = '/partial/jobs-profile-bottom-card';

            $http({
                url: '/save-jobs-profile',
                method: 'POST',
                data: JSON.stringify({'job': $scope.job}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("save-jobs-profile-bottom-card worked");
                }).error(function (data, status, headers, config) {
                    console.log("save-jobs-profile-bottom-card didn't work");
                });
        }





        $scope.positionTypes = [];
        $http({
            url: '/api/positionTypes',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.positionTypes = data;
            }).error(function (data, status, headers, config) {
                console.log("get positionTypes didn't work");
            });

        $scope.contractTypes = [];
        $http({
            url: '/api/contractTypes',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.contractTypes = data;
            }).error(function (data, status, headers, config) {
                console.log("get contractTypes didn't work");
            });

        $scope.countries = [];
        $http({
            url: '/api/countries',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.countries = data;
            }).error(function (data, status, headers, config) {
                console.log("get countries didn't work");
            });





            $scope.openBadgeEditModal= function() {
        $('#badge-edit-modal').modal();
        $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }

    }]);





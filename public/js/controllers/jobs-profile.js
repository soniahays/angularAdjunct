'use strict';

angular.module('adjunct.controllers')
    .controller('JobsProfileCtrl', ['$scope', '$http',  function ($scope, $http) {
//        $scope.users = [];
        $scope.jobs = [];
        $scope.topCardJobTemplateUrl = '/partial/jobs-profile-top-card';
        $scope.bottomCardJobTemplateUrl = '/partial/jobs-profile-bottom-card';
        $scope.rightTopSideColumnUrl = '/partial/adjuncts-profile-right-topSide-column';
        $scope.rightBottomSideColumnUrl = '/partial/adjuncts-profile-right-bottomSide-column';
        $scope.badgeEditModallUrl = '/partial/badge-edit-modal';


        $http({
            url: '/api/jobs',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.jobs = data;
                        $scope.filteredBadges = [];

        for (var badge in $scope.job.badges) {
            var val = $scope.job.badges[badge];
            if (val != false) {
                $scope.filteredBadges.push(val);
            }
        }
            }).error(function (data, status, headers, config) {
                console.log("/api/jobs didn't work");
            });

        $scope.editTopCard = function () {
            $scope.topCardTemplateUrl = '/partial/jobs-profile-top-card-edit';
        }

        $scope.openBadgeEditModal= function() {
    $('#badge-edit-modal').modal();
    $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
}

    }]);





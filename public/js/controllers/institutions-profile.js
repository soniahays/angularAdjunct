'use strict';

angular.module('adjunct.controllers')
    .controller('InstitutionsProfileCtrl', ['$scope', '$http',  function ($scope, $http) {
//        $scope.users = [];
        $scope.institutions = [];
        $scope.topCardInstitutionTemplateUrl = '/partial/institutions-profile-top-card';
        $scope.bottomCardInstitutionTemplateUrl = '/partial/institutions-profile-bottom-card';
        $scope.rightTopSideColumnUrl = '/partial/adjuncts-profile-right-topSide-column';
        $scope.rightBottomSideColumnUrl = '/partial/adjuncts-profile-right-bottomSide-column';



        $http({
            url: '/api/institutions',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.institutions = data;

            }).error(function (data, status, headers, config) {
                console.log("/api/institutions didn't work");
            });

        $scope.editTopCard = function () {
            $scope.topCardTemplateUrl = '/partial/institutions-profile-top-card-edit';
        }



    }]);





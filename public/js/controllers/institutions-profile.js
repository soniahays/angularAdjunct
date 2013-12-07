'use strict';

angular.module('adjunct.controllers')
    .controller('InstitutionsProfileCtrl', ['$scope', '$http',  function ($scope, $http) {

        var institutionId = $('#institutionId').html();

        if (!institutionId) {
//            return;
        }

//        $scope.users = [];
        $scope.institutions = [];
        $scope.topCardInstitutionTemplateUrl = '/partial/institutions-profile-top-card';
        $scope.bottomCardInstitutionTemplateUrl = '/partial/institutions-profile-bottom-card';
        $scope.rightTopSideColumnUrl = '/partial/adjuncts-profile-right-topSide-column';
        $scope.rightBottomSideColumnUrl = '/partial/adjuncts-profile-right-bottomSide-column';
        $scope.uploadPictureModalUrl = '/partial/upload-picture-modal';



        $http({
            url: '/api/get-institutions-profile/'+ institutionId,
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.institution = data;

            }).error(function (data, status, headers, config) {
                console.log("/api/get-institutions-profile didn't work");
            });

        $scope.editTopCard = function () {
            $scope.topCardInstitutionTemplateUrl = '/partial/institutions-profile-top-card-edit';
        }

        $scope.saveTopCard = function () {
            $scope.topCardTemplateUrl = '/partial/institutions-profile-top-card';

            $http({
                url: '/save-institutions-profile',
                method: 'POST',
                data: JSON.stringify({'institution': $scope.institution}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("save-institutions-profile-top-card worked");
                }).error(function (data, status, headers, config) {
                    console.log("save-institutions-profile-top-card didn't work");
                });
        }

        $scope.types = [];
        $http({
            url: '/api/types',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.types = data;
            }).error(function (data, status, headers, config) {
                console.log("get months didn't work");
            });

        $scope.openPictureUploadModal = function() {
            $('#upload-picture-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.1'});

        }



        $scope.uploadComplete = function (content, completed) {
            console.log(content);

            $http({
                url: '/api/get-institutions-profile/' + institutionId,
//                _id
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    $scope.institution.imageName = data.imageName;
                    $('#upload-picture-modal').modal('hide');
                }).error(function (data, status, headers, config) {
                    console.log("get-institutions-profile-top-card didn't work");
                });
        };



    }]);





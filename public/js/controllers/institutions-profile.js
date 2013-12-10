'use strict';

angular.module('adjunct.controllers')
    .controller('InstitutionsProfileCtrl', ['$scope', '$http', 'WikiSummary',  function ($scope, $http, WikiSummary) {

        var institutionId = $('#institutionId').html();

        if (!institutionId) {
            return;
        }

        $scope.institutions = [];
        $scope.institution = {};
        $scope.topCardInstitutionTemplateUrl = '/partial/institutions-profile-top-card';
        $scope.bottomCardInstitutionTemplateUrl = '/partial/institutions-profile-bottom-card';
        $scope.rightTopSideColumnUrl = '/partial/adjuncts-profile-right-topSide-column';
        $scope.rightBottomSideColumnUrl = '/partial/adjuncts-profile-right-bottomSide-column';
        $scope.uploadPictureModalUrl = '/partial/upload-picture-modal';

        $http.get('/api/get-institutions-profile/' + institutionId).then(function(response) {
            $scope.institution = response.data;
            WikiSummary("Bay State College", function(wikiData) { $scope.institution.summary = wikiData; });
        });

        $scope.editTopCard = function () {
            $scope.topCardInstitutionTemplateUrl = '/partial/institutions-profile-top-card-edit';
        }

        $scope.saveTopCard = function () {
            $scope.topCardTemplateUrl = '/partial/institutions-profile-top-card';
            $http.post('/api/save-institutions-profile', JSON.stringify({'institution': $scope.institution}));
        }

        $http.get('/api/institutionTypes').then(function(response) { $scope.institutionTypes = response.data; });

        $scope.openPictureUploadModal = function() {
            $('#upload-picture-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.1'});
        }

        $scope.uploadComplete = function (content, completed) {
            console.log(content);
            $http.get('/api/get-institutions-profile/' + institutionId).then(function(response) {
                $scope.institution.imageName = data.imageName;
                $('#upload-picture-modal').modal('hide');
            });
        };
    }]);





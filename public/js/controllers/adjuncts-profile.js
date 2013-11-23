'use strict';

angular.module('adjunct.controllers')
    .controller('AdjunctsProfileCtrl', ['$scope', '$filter', '$http', '$cookies', function ($scope, $filter, $http, $cookies) {

        if (!$cookies.id) {
            return;
        }

        $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card';
        $scope.middleCardTemplateUrl = '/partial/adjuncts-profile-middle-card';
        $scope.bottomCardTemplateUrl = '/partial/adjuncts-profile-bottom-card';
        $scope.sideSearchColumnUrl = '/partial/side-search-column';
        $scope.rightTopSideColumnUrl = '/partial/adjuncts-profile-right-topSide-column';
        $scope.rightBottomSideColumnUrl = '/partial/adjuncts-profile-right-bottomSide-column';
        $scope.badgeSectionUrl = '/partial/badge-section';

        $http({
            url: '/api/get-adjuncts-profile/' + $cookies.idType + '/' + $cookies.id,
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
            $scope.user = data;
                $scope.user ={
                    summary: 'Jennifer is currently pursuing her graduate degree at Michigan State University. Her research interests include Poland, the Holocaust, European Jewry Gender Childhood and Family. She has over six years of experience as an instructor and teaching assistant. Jennifer is a tech savvy teacher and has been enhancing her classes with Youtube video and online questionnaire for four years now',
                    experience1Institution: 'Saginaw Valley State University',
                    experience1Title: 'Instructor',
                    experience1Location: 'Fall 2013, Kochville, Michigan',
                    status: 1,
                    experience1TimePeriodYear: '2013',
                    experience1Summary: 'write more about your experience here'
                };
        }).error(function (data, status, headers, config) {
            console.log("get-adjuncts-profile-top-card didn't work");
        });


/*
        $scope.user = {
            email: Auth.user.email,
            firstName: 'Jenny',
            lastName: 'Marlow',
            currentPosition: 'Teaching Assistant',
            institution: 'Michigan State University',
            city: 'East Lansing',
            generalArea: 'Michigan',
            department: 'History Dpt.',
            specialty1: '20th Century',
            specialty2: 'Women & Gender',
            specialty3: 'Europe & Russia',
            educationLevel: 'Ph.D (expected)',
            summary: 'Jennifer is currently pursuing her graduate degree at Michigan State University. Her research interests include Poland, the Holocaust, European Jewry Gender Childhood and Family. She has over six years of experience as an instructor and teaching assistant. Jennifer is a tech savvy teacher and has been enhancing her classes with Youtube video and online questionnaire for four years now',
            experience1Institution: 'Saginaw Valley State University',
            experience1Title: 'Instructor',
            experience1Location: 'Fall 2013, Kochville, Michigan',
            status: 1,
            experience1TimePeriodYear: '2013',
            experience1Summary: 'write more about your experience here'
        };

        $scope.expertiseTags = ['Early Modern Europe', 'Asia and the World', 'World History', 'Nazi Policy', 'Jewish Emancipation'];
*/
        $scope.statuses = [
            {value: 1, text: 'fall'},
            {value: 2, text: 'winter'},
            {value: 3, text: 'spring'},
            {value: 4, text: 'summer'}
        ];

        $scope.editTopCard = function () {
            $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card-edit';
        }

        $scope.editBottomCard = function () {
            $scope.bottomCardTemplateUrl = '/partial/adjuncts-profile-bottom-card-edit';
        }

        $scope.saveTopCard = function () {
            $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card';

            $http({
                url: '/save-adjuncts-profile',
                method: 'POST',
                data: JSON.stringify({'user': $scope.user}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("save-adjuncts-profile-top-card worked");
                }).error(function (data, status, headers, config) {
                    console.log("save-adjuncts-profile-top-card didn't work");
                });
        }
    }]);
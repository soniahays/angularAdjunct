'use strict';

angular.module('adjunct.controllers')
    .controller('AdjunctsProfileCtrl', ['$scope','$rootScope','$filter','$http', function ($scope,$rootScope,$filter,$http) {
        $scope.user = $rootScope.user;

        $scope.user = {
            firstName:'Jenny',
            lastName:'Marlow',
            currentPosition:'Teaching Assistant',
            institution:'Michigan State University',
            city:'East Lansing',
            generalArea:'Michigan',
            department:'History Dpt.',
            specialty1: '20th Century',
            specialty2:'Women & Gender',
            specialty3:'Europe & Russia',
            educationLevel:'Ph.D (expected)',
            summary:'Jennifer is currently pursuing her graduate degree at Michigan State University. Her research interests include Poland, the Holocaust, European Jewry Gender Childhood and Family. She has over six years of experience as an instructor and teaching assistant. Jennifer is a tech savvy teacher and has been enhancing her classes with Youtube video and online questionnaire for four years now ',
            experience1Institution:'Saginaw Valley State University',
            experience1Title:'Instructor',
            experience1Location:'fall 2013, Kochville, Michigan ',
            status:1,
            experience1TimePeriodYear:'2013',
            experience1Summary:'write more about your experience here'
        };

        $scope.statuses = [
            {value:1, text:'fall'},
            {value:2, text:'winter'},
            {value:3, text:'spring'},
            {value:4, text:'summer'}
        ];

        $scope.expertiseTags = ['Early Modern Europe','Asia and the World','World History','Nazi Policy','Jewish Emancipation'];

        $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card';

        $scope.edit = function(){
            $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card-edit';
        }

        $scope.save = function(){
            $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card';

            $http({
                url: '/adjuncts-profile',
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
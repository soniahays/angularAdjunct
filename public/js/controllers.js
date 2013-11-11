'use strict';

/* Controllers */
angular.module('adjunct.controllers', ['$strap.directives'])

    .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.search = function () {
            $http({
                url: '/search',
                method: 'POST',
                data: JSON.stringify({'query': $scope.query}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("it worked");
            }).error(function (data, status, headers, config) {
                    console.log("it didn't work");
            });
        };
        $scope.init= function(){

        };
    }])

    .controller('JobsCtrl', ['$scope', function ($scope) {

    }])

//    .controller('AdjPrflCtrl',['$scope','$rootScope','$http', function ($scope,$rootScope,$http) {
//        console.log($rootScope.user);
//        $scope.user = $rootScope.user;
//
//    }])

    .controller('EditableFormCtrl',['$scope','$rootScope','$filter','$http', function ($scope,$rootScope,$filter,$http) {
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

        $scope.saveUser = function() {
            //$scope.user already updated!
            return $http.post('/saveUser', $scope.user);
        };

        $scope.expertiseTags = ['Early Modern Europe','Asia and the World','World History','Nazi Policy','Jewish Emancipation'];

        $scope.edit = function(){
            $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card-edit';
        }

        $scope.save = function(){
            $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card';
        }

        $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card';
    }])

    .controller('ConfirmEmailCtrl' ['$scope','$location',   function ($scope,$location) {
        $scope.confEmail=function(){
            $location.path( '/adjuncts-profile' );
        }
    }])

    .controller('BasicPrflCtrl', ['$scope','$rootScope','$http','$location', function ($scope,$rootScope,$http,$location) {
            console.log($rootScope.user);
            $scope.user = $rootScope.user;

            $scope.countries = [];
            $http({
                url: '/api/countries',
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                console.log(data);
                $scope.countries= data;
            }).error(function (data, status, headers, config) {
                console.log("it didn't work");
            });


            $scope.fieldGroup = [];
            $http({
                url: '/api/fieldGroup',
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                console.log(data);
                $scope.fieldGroup= data;
            }).error(function (data, status, headers, config) {
                console.log("it didn't work");
            });

            $scope.createProf = function(){
                $rootScope.user = $scope.user ;
                console.log("Create Profile!", $scope.user);
                $http({
                    url: '/basic-profile',
                    method: 'POST',
                    data: JSON.stringify({'user':$scope.user}),
                    headers: {'Content-Type': 'application/json'}
                }).success(function (data, status, headers, config) {
                        console.log("it worked");
                        $location.path( '/confirm-email' );
                    }).error(function (data, status, headers, config) {
                        console.log("it didn't work");
                    });
            }
    }])

    .controller('SigninCtrl', ['$scope','$location', function ($scope, $location) {
        $scope.showError = true;
        $scope.goToSignUp=function(){
            $location.path('/signup');
            $scope.hide();
        }
        $scope.facebookAuth = function() {
            window.location.href = '/auth/facebook';
            $scope.hide();
        }
        $scope.linkedinAuth = function() {
            window.location.href = '/auth/linkedin';
            $scope.hide();
        }
    }])

    .controller('SignupCtrl', ['$scope','$rootScope','$http','$location', function ($scope,$rootScope, $http, $location) {
        $scope.user={};
        $scope.user.firstName='Sonia';
        $scope.user.lastName='Brami';
        $scope.user.email='sonia@brami.com';
        $scope.user.password='sonia';
        $scope.joinNow = function(){
          $rootScope.user = $scope.user ;
          console.log("Join now!", $scope.user);
        $http({
            url: '/signup',
            method: 'POST',
            data: JSON.stringify({'user':$scope.user}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                console.log("it worked");
                $location.path( '/basic-profile' );
            }).error(function (data, status, headers, config) {
                console.log("it didn't work");

            });
        }
    }]);








'use strict';

/* Controllers */
angular.module('myApp.controllers', [])
    .controller('SearchCtrl', ['$scope', '$http', function (s, http) {
        s.query = "Hello";
        s.search = function () {
            console.log("beginning");

            http({

                url: '/search',
                method: "POST",
                data: JSON.stringify({"query": s.query}),
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                    console.log("it worked");
                }).error(function (data, status, headers, config) {
                    console.log("it didn't work");

                });


        };
        s.init= function(){

            http({

            url: '/get',
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                    s.query= data;
                    console.log(data);
            }).error(function (data, status, headers, config) {
                console.log("it didn't work");

            });
        };



    }])
    .controller('MyCtrl2', ['$scope', function (s) {
        s.cost = 12;


    }]);

var init = function () {



};

init();




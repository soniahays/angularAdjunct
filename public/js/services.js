'use strict';

angular.module('adjunct.services')
    .factory('Auth', function(){
        return {
            isLoggedIn: false,
            user: {}
        };
    });

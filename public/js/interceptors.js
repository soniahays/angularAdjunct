'use strict';
angular.module('app.interceptors', [])
    .config(function ($httpProvider) {
        $httpProvider.requestInterceptors.push('httpRequestInterceptorCacheBuster');
    })
    .factory('httpRequestInterceptorCacheBuster', function () {
        return function (promise) {
            return promise.then(function (request) {
                console.log("HELLOOO");
                if (request.method === 'GET') {
                    var sep = request.url.indexOf('?') === -1 ? '?' : '&';
                    request.url = request.url + sep + 'cacheSlayer=' + new Date().getTime();
                }

                return request;
            });
        };
    });
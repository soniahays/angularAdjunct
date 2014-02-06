'use strict';

/* Filters */

angular.module('adjunct.filters').
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).filter('newlines', function () {
    return function(text) {
        if(text)
            return text.replace(/\n/g, '<br/>');
        return '';
    }
});
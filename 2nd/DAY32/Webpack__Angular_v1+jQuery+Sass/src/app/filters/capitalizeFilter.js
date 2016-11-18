'use strict';

var angular = require('angular');

angular.module('FDS_Utils_Module').filter('capitalize', function() {
  return function(input, seperator) {
    seperator = seperator || ' ';
    return input.split(seperator).map(function(s){
      return s.replace(/./, function($1){ return $1.toUpperCase(); });
    }).join(' ');
  };
});
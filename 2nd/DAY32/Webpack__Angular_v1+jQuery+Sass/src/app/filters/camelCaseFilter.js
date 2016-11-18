'use strict';

var angular = require('angular');

angular.module('FDS_Utils_Module').filter('camelCase', function() {
  return function(input, seperator) {
    seperator = seperator || ' ';
    return input.split(seperator).map(function(s, i){
      if (i === 0) { return s; }
      return s.replace(/./, function($1){ return $1.toUpperCase(); });
    }).join('');
  };
});
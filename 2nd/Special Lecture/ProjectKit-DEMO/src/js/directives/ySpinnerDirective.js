/*! ySpinnerDirective.js © yamoo9.net, 2016 */
'use strict';

var angular = require('angular');

angular
  .module('BipanListApp')
  .directive('ySpinner', function(){
    // DDO
    return {
      'transclude': true,
      'restrict': 'EA',
      'templateUrl': 'views/y-spinner.html',
      'scope': {
        'isLoading': '=',
        'message': '@',
      },
    };
  });

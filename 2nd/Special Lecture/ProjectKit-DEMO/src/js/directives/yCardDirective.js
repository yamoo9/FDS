/*! yCardDirective.js © yamoo9.net, 2016 */
'use strict';

var angular = require('angular');

angular
  .module('BipanListApp')
  .directive('yCard', function(){
    // DDO
    return {
      'restrict': 'EA',
      'templateUrl': 'views/y-card.html',
      'scope': {
        'user': '='
      },
      'controller': ['$scope', 'ListDataShareService', function($scope, ListDataShareService) {
        $scope.is_deleting = false;
        $scope.deleteUser = function() {
          $scope.is_deleting = true;
          ListDataShareService.removeContact($scope.user, function() {
            $scope.is_deleting = false;
          });
        };
      }]
    };
  });

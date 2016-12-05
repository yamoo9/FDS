/*! DetailController.js © yamoo9.net, 2016 */
'use strict';

let angular = require('angular');

angular
  .module('BipanListApp')
  .controller('DetailController',
    ['$scope', 'ListDataShareService', ($scope, ListDataShareService)=>{
      $scope.share_data = ListDataShareService;
  }]);

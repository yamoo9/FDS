/*! DetailController.js © yamoo9.net, 2016 */
'use strict';

let angular = require('angular');

angular
  .module('BipanListApp')
  .controller('DetailController',
    ['$scope', 'ListDataShareService', '$stateParams', ($scope, ListDataShareService, $stateParams)=>{

      $scope.share_data = ListDataShareService;

      $scope.share_data.selectPerson($stateParams.email);

      $scope.save = ()=>{
        $scope.share_data.updateContact($scope.share_data.selected_person);
      };

      $scope.remove = ()=>{
        $scope.share_data.removeContact($scope.share_data.selected_person);
      };

      $scope.create = ()=> {
        $scope.share_data.createContact($scope.share_data.selected_person);
      };

  }]);

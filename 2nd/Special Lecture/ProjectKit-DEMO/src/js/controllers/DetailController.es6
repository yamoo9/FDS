/*! DetailController.js © yamoo9.net, 2016 */

let angular = require('angular');

angular
  .module('BipanListApp')
  .controller('DetailController',
    ['$scope', 'ListDataShareService', '$state', '$stateParams', ($scope, ListDataShareService, $state, $stateParams)=>{

      $scope.mode = 'Edit';

      $scope.share_data = ListDataShareService;

      $scope.share_data.selectPerson($stateParams.email);

      function gotoListPage() {
        $state.go('list');
        $scope.share_data.selected_person = null;
      }

      $scope.save = ()=>{
        $scope.share_data.updateContact($scope.share_data.selected_person, gotoListPage);
      };

      $scope.remove = ()=>{
        $scope.share_data.removeContact($scope.share_data.selected_person, gotoListPage);
      };

  }]);

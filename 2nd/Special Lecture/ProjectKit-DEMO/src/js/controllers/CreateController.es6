/*! CreateController.js © yamoo9.net, 2016 */

let angular = require('angular');

angular
  .module('BipanListApp')
  .controller('CreateController', ['$scope', 'ListDataShareService', '$state', '$stateParams', ($scope, ListDataShareService, $state, $stateParams)=>{

    $scope.mode = 'Create';

    $scope.share_data = ListDataShareService;

    $scope.share_data.selected_person = null;

    function gotoListPage() {
      $state.go('list');
      $scope.share_data.selected_person = null;
    }

    $scope.save = ()=> {
      $scope.share_data.createContact($scope.share_data.selected_person, gotoListPage);
    };

  }]);

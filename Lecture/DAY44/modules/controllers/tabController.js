(function(global, angular, $){
  'use strict';

  var app = angular.module('ngApp');

  function getRandomCount(els) {
    if ( !els.length || els.length === 0 ) { return 0; }
    return Math.floor( Math.random() * els.length );
  }

  app.controller('tabController',['$scope', function($scope) {
      // var $tabmenu = $('.tab-menu');
      // var $tabmenu_btns = $tabmenu.find('button');
      // $scope.selected_tab = getRandomCount($tabmenu_btns);
      // $scope.setRandom = function() {
      //   this.selected_tab = getRandomCount($tabmenu_btns);
      // };
      // 초기 활성화된 탭 인덱스 속성
      $scope.selected_tab_idx = 0;
      // 선택된 탭이 맞는가를 검증하는 메소드
      $scope.isSelectedTab = function(tab_idx) {
        return this.selected_tab_idx === tab_idx;
      };
      // 탭을 사용자가 클릭할 경우, 탭의 인덱스를 사용자가 선택한 탭의 인덱스로 변경
      $scope.selectTab = function(idx) {
        this.selected_tab_idx = idx;
      };
  }]);

})(this, this.angular, this.jQuery);
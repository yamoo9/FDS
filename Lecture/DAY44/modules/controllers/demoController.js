(function(global, angular){
  'use strict';

  function demoCtrl() {
    // 비공개 멤버
    var headline = 'this App maked Angular';
    // 공개
    this.headline = headline;
  }

  angular.module('ngApp').controller('demoController', demoCtrl);

})(this, this.angular);
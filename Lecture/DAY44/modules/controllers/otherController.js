(function(global, angular, jq){
  'use strict';
 // 모듈 패턴 내의 지역 함수
 // 앵귤러의 컨트롤러 설정
 function oCtrl() {
   // 컨트롤러 참조 변수
   var that = this;

   that.init_value = null;
   that.trigger    = trigger;

   function trigger() {
     // console.log(that);
     // that에 참조된 컨트롤러 객체를 사용하기 때문에
     // 함수를 누가 호출하든 this가 가진 문제점을 해결할 수 있다.
     if ( jq.type(that.init_value) === 'null' ) {
       that.init_value = 'otherController';
     } else {
       that.init_value = 'not initialization.';
     }
   }
   // global.setTimeout(trigger, 3000);
 }

  angular.module('ngApp').controller('otherController', oCtrl);

})(this, this.angular, this.jQuery);
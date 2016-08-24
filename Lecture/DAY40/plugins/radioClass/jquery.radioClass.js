/*! jquery.radioCalss.js © yamoo9.net, 2016 */
(function(global, $){
  'use strict';
  // $.fn === jQuery.prototype 객체
  // jQuery 프로토타입(원형) 객체에 radioClass 메소드가 없다면
  // 조건이 참이되어 radioClass 메소드 정의
  if (!$.fn.radioClass) {
    $.fn.radioClass = function(class_name) {
      if ( $.type(class_name) !== 'string' ) {
        throw new Error('전달 인자는 문자열이어야 합니다.');
      }
      // this === jQuery 플러그인이 연결된 객체
      // 사용자가 클릭한 <a> 요소의 부모 <li> 요소
      var $activated = this.siblings('.'+class_name);
      if ($activated.length === 0) {
        console.info('전달한 ${class_name}에 해당하는 형제가 없습니다 확인해보세요.');
      }
      $activated.removeClass(class_name);
      this.addClass(class_name);
      // jQuery 인스턴스 메소드 체이닝
      return this;
    };
  }

})(this, this.jQuery);

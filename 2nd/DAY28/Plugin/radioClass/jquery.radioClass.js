/*! jquery.radioClass.js © yamoo9.net, 2016 */
(function(global, $){
  'use strict';

  // 비공개(private)
  var _pre_assign_class_instance = null;

  // $.fn === jQuery.prototype
  $.fn.radioClass = function(class_name) {
    // this === jQuery {}

    // 플러그인 코드 구현
    // _pre_assign_class_instance 객체가 존재한다면
    if ( _pre_assign_class_instance ) {
      // _pre_assign_class_instance 객체에서 클래스 속성 제거
      _pre_assign_class_instance.removeClass(class_name);
    }
    // 현재 jQuery {} 객체에 클래스 속성 추가
    this.addClass(class_name);
    // 현재 jQuery {} 객체를 _pre_assign_class_instance에 설정
    _pre_assign_class_instance = this;
    // jQuery 메소드 체이닝
    return this;
  };

})(this, this.jQuery);
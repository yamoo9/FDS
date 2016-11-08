// jQuery 라이브러리에서 전역에 노출된 $ 변수의 소유권을 포기
jQuery.noConflict();

// $ 전역 변수를 포기하는 대신 다른 별칭(Alias) 변수에 jQuery를 참조하여
// 사용할 수 있다.
// var $j = jQuery.noConflict();
// console.log('$j:', $j().constructor === jQuery);

// 아래와 같이 코드를 입력하면 $, jQuery 전역 변수를 모두 포기!
// console.log('jQuery is:', jQuery);
// jQuery.noConflict(true);
// console.log('after noConflict - jQuery is:und', jQuery);

// <head> 내에서 호출할 경우 사용하는 패턴
// jQuery.noConflict(true)(function($) {
jQuery(function($) {
  'use strict';
  // $ === jQuery

  var $body = null;

  // 1. DOM 객체 전달
  $body = $(document.body);

  // 2. CSS 선택자 전달
  $body = $('body');

  $body.attr('data-in-head', 'yes');

});
/*! jquery.study.js © yamoo9.net, 2016 */
(function(global, $){
  'use strict';

  var $body = $('body');

  // ------------------------------------
  // 스타일 제어
  // .css() 사용 방법
  // ------------------------------------
  // 방법 1) 속성 값을 가져오기
  var body_margin = $body.css('margin');
  console.log(body_margin);
  // ------------------------------------
  // 방법 2) 속성 값을 설정하기
  // $body.css('margin-left', '2rem');
  // $body.css('margin-right', '2rem');
  // 자바스크립트 메소드 체이닝
  $body
    .css('margin-left', '4rem')
    .css('margin-right', '4rem');
  body_margin = $body.css('margin');
  console.log(body_margin);
  // ------------------------------------
  // 방법 3) CSS 맵(객체)를 전달해서 설정하기
  var css_map = {
    'background': '#2a070a',
    'color': '#cd636f',
    'font-size': '+=22'
  };
  $body.css(css_map);
  var body_font_size = $body.css('font-size');
  console.log(body_font_size);
  // ------------------------------------
  // 방법 4) 각 속성에 콜백 함수 설정
  var fn_map = {
    'width': function(index, value){
      // console.log('original width value', value);
      return global.parseFloat(value,10)/2 + 70;
    },
    'height': function(index, value) {
      // console.log('original height value', value);
      if (global.parseFloat(value,10) < 300) {
        return '100vh';
      } else {
        return value * 2;
      }
    }
  };
  $body.css(fn_map);
  console.log('#1 - width', $body.css('width'));
  console.log('#2 - height', $body.css('height'));

})(this, this.jQuery);
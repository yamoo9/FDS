/*! check-support-js.js © yamoo9.net, 2016 */
(function(global){
  'use strict';

  // 스크립트가 지원되는 환경이라면
  // <html> 요소의 class 속성 값을 no-js → js로 변경
  var html = document.documentElement;
  var body = document.body;
  var body_style = body.style;

  // 체크
  var is_borderradius = 'border-radius' in body_style;

  // 속성 설정
  html.setAttribute('class', 'js');

  // 조건 확인
  // 창일 경우 첫번째 코드 블록 처리
  if (!is_borderradius) {
    html.classList.add('cssborderradius');
  }
  // 거짓일 경우 두번째 코드 블록 처리
  else {
    html.classList.add('no-cssborderradius');
  }

})(this);
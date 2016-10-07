/*! inc-dec-font-size-control.js © yamoo9.net, 2016 */

// .querySelector()
// 문서객체를 식별하는 CSS 선택자를 통해 문서객체를 선택하여 반환한다.
var btn_inc   = document.querySelector('.button-increase-font-size');
var btn_dec   = document.querySelector('.button-decrease-font-size');
var demo_text = document.querySelector('.demo-text-area');
// 검토
console.log('btn_inc:', btn_inc);
console.log('btn_dec:', btn_dec);
console.log('demo_text:', demo_text);

// 사용자가 발생시키는 이벤트를 감지하여 처리되는 프로그래밍
// 문서 객체를 선택한 후, 해당 객체에 이벤트 속성에 함수를 연결한다.
// 대상객체.이벤트속성 = 이벤트핸들러(함수);
console.log(btn_inc.onclick); // null
btn_inc.onclick = function(){
  console.log('clicked btn_inc');
  // TODO
  // 대상객체를 참조한 변수 demo_text를 통해 문서 객체의 현재 설정(계산)된 글자 크기를 가져온다.
  // 가져온 값은 문자열(단위를 포함한)이기 때문에 산술연산을 하기 위해 단위를 제거한다.
  // 단위가 제거되고 숫자 유형으로 변경된 값에 + 연산을 수행한 후,
  // 다시 문서객체에 변경된 값을 단위를 붙여 할당한다.
  var current_font_size = window.getComputedStyle(demo_text).fontSize;
  current_font_size = window.parseInt(current_font_size, 10);
  var changed_font_size = current_font_size + 2;
  demo_text.style.fontSize = changed_font_size + 'px';
};
console.log(btn_inc.onclick); // function

btn_dec.onclick = function(){
  console.log('clicked btn_dec');
  var current_font_size = window.getComputedStyle(demo_text).fontSize;
  current_font_size = window.parseInt(current_font_size, 10);
  var changed_font_size = current_font_size - 2;
  demo_text.style.fontSize = changed_font_size + 'px';
};

// 기능? (function)
// 글자 크기 키움
// 글자 크기 줄임
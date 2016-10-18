/*! core.js © yamoo9.net, 2016 */

/**
 * ----------------------------------
 * 자바스크립트 조건문을 사용한 버튼 상태 변경
 * ------------------------------- */

// 버튼 상태를 기억하기 위한 변수
var is_button_pressed = false;
// 버튼의 상태 메시지를 기억하는 변수들
var normal_button_text = 'normal state';
var pressed_button_text = 'pressed state';

// 버튼 문서객체 참조
var toggle_btn = document.querySelector('.ui-button--toggle');

// 참조된 버튼 객체에 이벤트 핸들링
toggle_btn.onclick = toggleButtonAction;

// 이벤트 핸들러 정의
function toggleButtonAction () {
  // 만약 눌려진 상태라면,
  if( is_button_pressed === true ) {
    console.log('버튼 눌려진 상태');
    //  눌려지지 않은 상태로 변경
     is_button_pressed = false;
    //  버튼 Normal View 변경
    // toggle_btn.textContent = normal_button_text;
    toggle_btn.classList.remove('pressed');
    // var pre_value = toggle_btn.firstChild.nodeValue;
    // var post_value = pre_value.replace('pressed', 'normal');
    // toggle_btn.firstChild.nodeValue = post_value;
  }
  // 그렇지 않다면
  else {
    console.log('버튼 눌려지지 않은 상태');
    //  눌려진 상태로 변경
    is_button_pressed = true;
    //  버튼 Pressed View 변경
    // toggle_btn.textContent = pressed_button_text;
    toggle_btn.classList.add('pressed');
    // 요소 노드(node)의 첫번째 자식 노드에 접근
    // 접근한 자식 노드의 노드 값에 접근
    //   var pre_value = toggle_btn.firstChild.nodeValue;
    //   var post_value = pre_value.replace('normal', 'pressed');
    //   toggle_btn.firstChild.nodeValue = post_value;
    }
};

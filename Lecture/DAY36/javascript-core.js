/*! javascript-core.js © yamoo9.net, 2016 */

/*
 * - Hoist
 * - callback pattern
 * - closure
 * - loop + closure
 * - IIFE 패턴 -> Module Pattern (Client-Side, Front-End)
 */

// 전역
// var yamoo9; // 다른 이의 작성된 코드와 충돌이 날 확률 가능성이 있다.

// 코드를 작성하기 위한 공간을 생성 : IIFE 패턴
(function(global){
  'use strict';

  // var yamoo9; // 지역 변수 (전역과 충돌 X)
  // console.log(yamoo9); // undefined

  // 외부에 노출
  // global.y9 = yamoo9;

  // 스크립트를 사용해 오늘이 무슨 요일인지 알 수 있다.
  var today = (new Date()).getDay();
  // ※ 단, 임의로 요일을 조정할 수 있다. [프로그래밍 할 것]
  // today = 6; // 0 ~ 6
  // console.log(today);
  // 주중, 주말인지를 구분하여 콘솔에 출력한다.
  switch(today) {
    // 주말이면... "았싸! 주말이다. 놀자!"라고 출력.
    case 0:
    case 6:
      console.log("았싸! 주말이다. 놀자!");
    break;
    // 주중이라면... "아... 출근이여.." 라고 출력.
    default:
      console.log("아... 출근이여..");
  }

})(this);

// console.log(yamoo9); // [ERROR] yamoo9 is not defined.



(function(global){
  'use strict';

  // .button-set을 선택
  var button_set = query('.button-set');
  // .button-set [CONTEXT] 내부에서 .button 을 모두 수집 [NODELIST]
  var buttons = makeArray( queryAll('.button', button_set) );
  // console.log(buttons, isType( makeArray(buttons) ));
  // 수집된 [NODELIST]를 순환하여 (코드의 흐름 제어) 클릭 이벤트에 함수(이벤트 핸들러)를 연결한다.
  // for문 예시 -----------------------------------------------------------------
  for ( var i=0, l=buttons.length; i<l; i+=1 ) {
    buttons[i].onclick = (function(index){
      return function() {
        console.log(index);
      };
    })(i);
  }
  // forEach() 예시 ------------------------------------------------------------
  buttons.forEach(function(button, index, buttons){
    // arguments 함수 내부에서만 접근 가능한 매개변수(전달인자들을 묶어 놓은 집합 객체)
    // console.log(arguments); // 유사 배열 객체이다.
    button.onclick = function() {
      console.log(index);
    };
  });
  // 각 버튼을 사용자가 클릭할 경우, 자신의 순환 인덱스 숫자를 콘솔에 출력한다.

})(this);
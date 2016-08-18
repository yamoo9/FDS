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
  for ( var button, i=0, l=buttons.length; i<l; i+=1 ) {
    button = buttons[i];
    // ------------------------------------------------------------------------
    // 예시 1) 버튼 객체의 속성을 추가하는 방법
    // 객체.속성을 추가하여 for문이 돌 때 마다 각 버튼 객체의 index 속성에 i 값을 할당한다.
    button.index = i;
    button.onclick = function() {
      // this 키워드 컨텍스트를 참조하는 변수
      // this를 사용하여 각 버튼 객체의 index 속성 값에 접근하여 출력한다.
      console.log(this.index);
    };
    // ------------------------------------------------------------------------
    // 예시 2) 자바스크립트 클로저를 사용하여 문제를 해결하는 방법
    // button.onclick = (function(index){
    //   return function() {
    //     console.log(index);
    //   };
    // })(i);
  }
  // forEach() 예시 ------------------------------------------------------------
  buttons.forEach(function(button, index, buttons){
    // arguments 함수 내부에서만 접근 가능한 매개변수(전달인자들을 묶어 놓은 집합 객체)
    // console.log(arguments); // 유사 배열 객체이다.
    // button.onclick = function() {
    //   console.log(index);
    // };
  });
  // 각 버튼을 사용자가 클릭할 경우, 자신의 순환 인덱스 숫자를 콘솔에 출력한다.

})(this);



(function(global){
  'use strict';
  // 생성자 역할 수행하는 함수
  // 이름 짓는 관례 상 첫글자가 대문자로 작성된다.
  function Navigation(name) {
      this.name = name;
  //  return 객체를 생성해서 반환한다.
  }

  var gnb = new Navigation('글로벌 내비게이션 바');
  var lnb = new Navigation('로컬 내비게이션 바');
  var unb = new Navigation('유틸리티 내비게이션 바');
})(this);

(function(global){
  'use strict';

  // 숫자 객체 생성자를 사용하여 숫자 1부터 10까지를 변수 num1 ~ num10에 생성하여라.
  // 단, num1 ~ num10에는 숫자 값이 담겨야 한다.
  global.num1  = (new Number(1)).valueOf();
  global.num2  = (new Number(2)).valueOf();
  global.num3  = (new Number(3)).valueOf();
  global.num4  = (new Number(4)).valueOf();
  global.num5  = (new Number(5)).valueOf();
  global.num6  = (new Number(6)).valueOf();
  global.num7  = (new Number(7)).valueOf();
  global.num8  = (new Number(8)).valueOf();
  global.num9  = (new Number(9)).valueOf();
  global.num10 = (new Number(10)).valueOf();

  // 불리언 객체 생성자를 사용하여 불리언 true, false로 연속되는 변수 boo1 ~ boo10에 생성하여라.
  // 단, boo1 ~ boo10에는 불리언 값이 담겨야 한다.
  global.boo1  = (new Boolean(true)).valueOf();
  global.boo2  = (new Boolean(false)).valueOf();
  global.boo3  = (new Boolean(true)).valueOf();
  global.boo4  = (new Boolean(false)).valueOf();
  global.boo5  = (new Boolean(true)).valueOf();
  global.boo6  = (new Boolean(false)).valueOf();
  global.boo7  = (new Boolean(true)).valueOf();
  global.boo8  = (new Boolean(false)).valueOf();
  global.boo9  = (new Boolean(true)).valueOf();
  global.boo10 = (new Boolean(false)).valueOf();

})(this);
////////////////////
// 자바스크립트 함수  //
////////////////////

// 함수 선언식
function fnDeclaration() {
  console.log('함수 선언문을 실행했습니다.');
}

// 함수 표현식
var fnExpression = function(){
  console.log('함수 표현식을 참조한 변수를 실행했습니다.');
};

// 함수 실행
fnDeclaration();
fnExpression();



////////////////////////////////////////
// 전역(Global Scope) VS 지역(Local Scope)
////////////////////////////////////////

// 변수 coffee 어디에 선언되었나?
// 전역 (Global Scope) === Client Env. window {}
// 웹 브라우저(클라이언트, 프론트엔드) 환경에서 전역 객체라 함은?
// window {} 객체를 말한다.
var coffee = '아메리카노'; // window.coffee 속성과 동일
console.log('coffee === window.coffee:', coffee === window.coffee);

console.log('fnDeclaration === window.fnDeclaration:', fnDeclaration === window.fnDeclaration);

// ※ 전역 변수, 함수는 웹 브라우저 환경에서 전역 객체인 window {} 객체의 속성이다.

// 전역 변수, 전역 함수에서의 this는????
var global_valiable = this; // ???
var globalFunction = function() {
  console.log('this:', this); // ??
};

// 전역 함수 실행, 함수를 실행시킨 주체는 누구인가?
globalFunction();
// 위 함수의 실행은 아래 코드와 동일하다. 결국 함수를 실행시킨 주체는
// 전역 객체인 window 이므로 함수 내부의 this는 window를 가리킨다.
// window.globalFunction();

// globalFunction 함수는 전역 함수로 widnow 객체의 속성이지만...
// 다른 누군가가 이 함수를 빌려 사용할 수 있다.
// 함수를 document객체의 onclick 속성에 참조함으로서 함수 내부의 this는 document 객체를 가리키도록 변경되었다.
document.onclick = globalFunction;

// 전역이라 함은 Global Scope로 window 객체의 영역을 말한다.
// 지역이라 함은 함수 내부의 공간을 지역이라고 볼 수 있다.

// 전역
var scope_variable = '전역 변수';
console.log('전역 scope_variable:', scope_variable);
// 블록문 (지역을 생성하나?)
// if, else, while, for, switch 구문에서는 별도의 지역이 생성되지 않는다.
// if (true) {
//   var scope_variable = '지역 변수?';
//   console.log('블록문 내부 scope_variable:', scope_variable);
// }
// console.log('블록문 외부 scope_variable:', scope_variable);

// 그렇다면 블록문이 아닌, 어떤 경우에 전역과 구분되는 지역이 생성되나?
// 자바스크립트 함수
function createLocalScope() {
  // 지역 변수
  var scope_variable = '함수 내부 지역 변수';
  console.log('함수 내부 scope_variable:', scope_variable);
}
// 함수 실행
createLocalScope();
console.log('함수 외부 scope_variable:', scope_variable); // ???

// 전역에서 this, self, window는 모두 동일한 객체를 말합니다.
// 아래와 같은 with(){} 구문은 사용하지 마세요!!
with(console){
  log('this:', this);
  log('self:', self);
  log('window:', window);
}

// 전역
// 스코프 체이닝
// 함수 내부에서 var 키워드를 사용해 변수를 선언해야 하는 이유
var hadoom = '하둠';

function localFn() {
  // 지역
  // hadoom = 'Hadoom';
  var hadoom = 'Hadoom';

  function inLocalFn() {
    // 지역 내 지역
    // window.hadoom = '하아둠';
    // hadoom = '하아둠';
    var hadoom = '하아둠';
  }

  inLocalFn();

}

localFn();

console.log('hadoom:', hadoom); // ????

// 자바스크립트 호이스트(Hoist) 현상
// 호이스팅 "영역(Scope)의 가장 상위에 끌어 올려지다"
// 현상 1. function 선언문의 몸체(body)가 통째로 끌어 올려진다.
// 현상 2. var 선언문에서 할당된 값이 아닌, 변수 이름만 끌어 올려진다.

// function understandingHoist() {
//   // 독립된 공간(영역, scope)
//   goKingdom();
//   var king = ‘왕’;
//   var goKingdom = function() { ... };
//   awayKingdom();
//   function awayKingdom() { ... }
// }

// function understandingHoist() {
//   // 독립된 공간(영역, scope)
//   function awayKingdom() { ... }
//   var king;      // undefined
//   var goKingdom; // undefined

//   // goKingdom(); // ERROR!!!

//   king = ‘왕’;

//   goKingdom = function() { ... };
//   goKingdom(); // 정상 실행

//   awayKingdom(); // 정상 실행
// }

// understandingHoist(); // 함수 실행

// 호이스팅 문제
// -- Scope ------------------------------
function fn() {
  var course; // undefined
  if (course) {
    course = 'develop';
    console.log(course); // 수행되지 않음
  }
  console.log(course); // undefined
}

var course = 'design';

fn();

console.log(course); // 'design'
// ---------------------------------------

// 함수 선언, 함수 확장(매개변수 설정)
// function showMessage() {
//   console.log('이것은 메시지 입니다.');
// }

showMessage(); // 'default message'
showMessage(); // 'default message'
showMessage(); // 'default message'
showMessage(); // 'default message'

function showMessage(message) {
  // message = 'this is message.';
  // message = 'this is messanger.';
  // message = 'this is cook.';
  // 초기 값 설정
  message = message || 'default message';
  console.log(message);
}

showMessage('this is message.');
showMessage('this is messanger.');
showMessage('this is cook.');
showMessage();

/**
 *  @function sum
 *  @param    {number}  num1
 *  @param    {number}  num2
 *  @return   {number}  두 수의 합을 반환
 */
// function sum(num1, num2) {
//   // 기대하는 데이터 유형을 감별하여 문제가 발생한 경우
//   // 사용자에게 안내해줘야 한다. 유효성검사(Validation)
//   if ( typeof num1 !== 'number' || typeof num2 !== 'number' ) {
//      console.error('전달된 인자 값은 숫자 유형이 아닙니다. 숫자 유형을 넣어주세요.');
//   }
//   return num1 + num2;
// }

function sum(num1, num2) {
   // 기대하는 데이터 유형을 감별하여 문제가 발생한 경우
   // 사용자에게 안내해줘야 한다. 유효성검사(Validation)
   if ( typeof num1 !== 'number' || typeof num2 !== 'number' ) {
       // console.error('전달된 인자 값은 숫자 유형이 아닙니다. 숫자 유형을 넣어주세요.');
       // 오류 발생시, 코드 중단
       throw new Error('전달된 인자 값은 숫자 유형이 아닙니다. 숫자 유형을 넣어주세요.');
   }
   // return 키워드는 함수를 종료, 값을 반환
   return num1 + num2;

   // return 뒤의 구문은 실행되지 않는다.
   // 함수가 종료되었기 때문....
   var demo = '데모';
   console.log(demo);
}

// 반환 값이 없는 함수
// 목적(쓰임새)에 맞지 않는 함수 (X)
function getWindowWidth() {
  // 창 크기의 가로 폭 길이 (너비, width)
  var _window_width = window.innerWidth;
  console.log('창 크기의 가로 폭 길이 (너비, width):', _window_width);
}

// 반환 값이 있는 함수
// 목적에 맞는 함수 (O)
function getWindowWidth() {
  // 창 크기의 가로 폭 길이 (너비, width)
  // return window.innerWidth;
  var _window_width = window.innerWidth;
  return _window_width;
}

// 함수 내부에 전달되는 인자들의 집합

// arguments: 유사 배열(like Array Object)
// .length 속성을 가짐, .push(), .pop() 배열 메소드는 가지고 있지 않음.

// 1부터 100까지 합을 구하시오.
// 1 + 2 + 3 + 4 + 5 + , ... , + 100
// for (var i=1, result=0; i<=100; i++) {
//     result = result + i;
// }

// function sum(n1, n2, n3) {
//   if (
//     typeof n1 !== 'number' ||
//     typeof n2 !== 'number' ||
//     typeof n2 !== 'number'
//   ) {
//     throw new Error('전달인자는 모두 숫자 유형이어야 합니다.');
//   }
//   return n1 + n2 + n3;
// }

function sum() {
  // arguments 객체(전달된 인자들의 집합)
  // arguments 객체의 원소 개수: arguments.length
  // length 속성 값을 알고 있다면 순환 처리(for, do ~ while, while)가 가능
  // arguments[0] = ''; // 설정도 가능.
  // console.log(arguments);
  for( var sum=0, i=0, l=arguments.length; i < l; i++ ) {
    // console.log(typeof arguments[i]);
    if (typeof arguments[i] !== 'number') { throw new Error('전달된 인자 중 숫자가 아닌 값이 있습니다.') }
    // sum = sum + arguments[i];
    sum += arguments[i];
  }
  return sum;
}

sum(1, 2, 3);
sum(10, 20, 30);
sum(10, 20, 30, 40, 50, 60);

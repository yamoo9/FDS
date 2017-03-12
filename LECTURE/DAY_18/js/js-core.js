/*! js-core.js © yamoo9.net, 2017 */

/**
 *  --------------------------------------------------------
 *  함수(Function)
 *  --------------------------------------------------------
 *  - 정의(선언)
 *  - 표현식
 *  - 확장
 *  - 호출
 *  - 반환/종료
 *  - 객체.메소드() -> 다른 객체가 빌려쓸 수 있다. [메소드 빌려쓰기 패턴]
 *  - 로컬 영역(Scope) -> 스코프 체이닝
 *  - 호이스팅(Hoisting)
 *  - 클로저(Closure)
 */

// 함수 선언문
function showMeTheMoney() {
  console.log('showMeTheMoney');
}

// 함수 표현식
// 변수에 함수 값을 참조하는 구문에서는 문장의 마지막에 세미콜론을 반드시 넣어주세요.
var getSomeMoney = function showAnyMoney(arg) {
  console.log('getSomeMoney? showAnyMoney?');
  // showAnyMoney('inner execution getSomeMoney()');
};

// 선언/참조(변수에)된 함수 호출
// showMeTheMoney();
// getSomeMoney();
// showAnyMoney(); // ??? 어떤 일이 발생하는가?



// 영역(Scope)
// 블록문({}): 별도의 영역을 가져아 하나, JavaScript 에서는 가지지 않는다.
// if, while, for 등등
{
  var anyone = '애니원'; // 블록({})문 안에 있으나, 전역 변수로 처리
}

console.log('anyone:', anyone); // '애니원'

// if문
var some_people; // undefined  <--- 호이스팅(Hoisting: 끌어올려지다)

if (some_people) {
  // var some_people = '행복한 사람들';
  some_people = '행복한 사람들';
} else {
  some_people = '행복하지 않은 사람들';
}

console.log('some_people:', some_people); // ??

// for문
// 호이스팅 처리된 구문으로 변경해보시오.
for (var i = document.querySelectorAll('a').length - 1; i >= 0; i--) {
  document.querySelectorAll('a')[i];
}

// ⬇︎
console.log('%c1 ------------------------------', 'color: #3d9a21');

var links = document.querySelectorAll('a'),
    link,
    i     = links.length - 1

for (; i >= 0;) {
  link = links[i];
  console.log('link:', link);
  i--;
}

// ⬇︎
console.log('%c2 ------------------------------', 'color: #3d9a21');

var links = document.querySelectorAll('a'),
    i     = links.length - 1,
    link  = null;

for ( ; (link = links[i]); ) {
  console.log('link:', link);
  i--;
}

// --------------------------
// 함수 선언문 VS 함수 표현식
// 호이스팅과 어떤 연관이??

// 전역과 구분되는 지역 공간을 만들려면?
// 함수를 정의한다. `함수 > 함수`는 지역 내부의 지역이 된다.
// 함수의 블록문({})은 상위 영역과 구분되는 별도의 영역을 생성한다.

// 전역(Global Scope)
var is_global_scope = true;
// var is_local_scope;

// 함수 선언문(정의)
function localScope() {
  // 상위 영역과 구분되는 독립된 지역 공간이 생성
  // is_local_scope = true;
  var is_local_scope = true;
  console.log('is_local_scope:', is_local_scope); // true
}

// 함수 실행
localScope();

console.log('is_global_scope:', is_global_scope); // true
// console.log('is_local_scope:', is_local_scope); // ERROR

//////////////////////////////////////////////
// 함수 선언  VS  함수 표현
// 2개 방식의 차이점을 기술하시오.
// Hint. 호이스팅 현상, 할당(대입)은 런타임 과정에서 실행
//////////////////////////////////////////////

// 함수 확장
// 매개변수(Parameter)
// 전달인자(Arguments)

// 함수 정의(매개변수 설정) <- 확장
// where 매개변수(parameter) 설정
function goto(where) {
  // if ( !where ) { console.error('null, undefined, "", 0 등은 전달하지 마세요.');}
  if ( typeof where !== 'string') { return console.error('문자열을 전달해주세요.'); }
  console.log('go to ' + where);
}

// 함수 실행
// 전달 인자(argument)
// var where = 'School';
goto('School'); // 'go to School'
// goto('Department'); // 'go to Department'
goto('      '); // '   '.trim() -> ''

function sum(n1, n2) {
  if ( typeof n1 !== 'number' || typeof n2 !== 'number' ) {
    throw new Error('전달된 인자가 숫자가 아닙니다.');
  }
  return n1 + n2;
}

function sum(n1,n2,n3,n4,n5) {
  return n1 + n2 + n3 + n4 + n5;
}

// sum(3, 20, 11, -91, 2);


function sum() {
  // 함수 내부에서만 존재하며
  // 사용자가 함수를 실행할 때 전달한 인자들의 집합을 참조하는 객체
  // 전달인자 객체 <= 배열이 아닌, 유사 배열이다. length 속성을 가진다.
  // console.log('arguments:', arguments);
  // console.log('arguments.length:', arguments.length);
  // console.log('arguments instanceof Array:', arguments instanceof Array);
  // console.log('arguments.constructor:', arguments.constructor);
  // 전달된 숫자 집합의 총 합을 구하여 값을 반환하시오.
  for( var total=0, i=arguments.length-1; i>=0; i-- ) {
    total += arguments[i];
  }
  return total;
}

var numbers = sum(3, 20, 11, -91, 2, 3, 20, 11, -91, 2, 3, 20, 11, -91, 2);

console.log('numbers:', numbers);

// this -> context reference
// 함수 내의 this는 함수를 실행시킨 컨텍스트를 가리킨다.

// 전역 함수: 전역 컨텍스트에 정의(선언)된 함수
function log(message) {
  console.log(message + '를 기록하다.');
  console.log('this:', this); // 나(함수)를 누가 실행시켰나?
}

// 전역 함수는? 전역 객체의 멤버(속성)?
// 웹 브라우저 환경에서의 특징
// 전역 함수는 곧 전역 객체의 속성이 된다.
// log === window.log
console.log('log === window.log:', log === window.log); // true

window.log(); // 컨텍스트 객체가 명시적 실행
log(); // 컨텍스트 객체가 암시적 실행

// var message_obj = {'message': 'this is Object.'};
// message_obj.log = window.log; // log 함수(window 전역 객체의 속성) 객체 참조

var message_obj = {
  'message' : 'this is Object.',
  'log'     : log,      // 암시적 할당
  // 'log': window.log, // 명시적 할당
};

console.log('message_obj.log():', message_obj.log()); // this === Object{}

document.onclick = function() {
  console.log(this); // this === document
};

document.body.onclick = function() {
  console.log(this); // this === document.body
};


// 느슨한 JavaScript 코드 실행 영역
var temp = '임시 정부';


// 별도의 영역(함수) 생성
function myScope() {
  // 엄격한 JavaScript 코드 실행 영역
  'use strict';
  console.log(this);
  // 엄격한 모드에서 변수 선언 시에 var 키워드를 사용하지 않으면 오류!
}

myScope(); // this === undefined

// 엄격한 모드에서 this는 함수를 실행하는
// 컨텍스트 객체가 암시적일 때 undefined를 반환한다.
window.myScope(); // this === window {}

/**
 * --------------------------------
 * JavaScript 클로저(Closure)
 */

// JavaScript 함수는 일급 객체(함수)이다.
// 일급 객체의 특징은 함수 내부에 함수를 인자로 전달할 수 있다.
// 함수 밖으로 함수를 반환할 수 있다.

function displayFunctionCode(fn) {
  // 다양한 업무 시행
  // .
  // .
  // Time Control
  window.setTimeout(function(){
    console.log('2초가 지났습니다.');
    // 2초가 지난 후에 전달된 인자(함수) 값을 실행한다.
    if ( typeof fn === 'function' ) {
      fn();
    }
  }, 2000);
  // .
  // .
  // 2초가 지난 후에 전달된 인자(함수) 값을 실행한다.
  // if ( typeof fn === 'function' ) {
  //   fn();
  // }
}

displayFunctionCode(function() {
  console.log('displayFunctionCode 내부에 전달되어 실행되었다.');
});


// 데모: .fade-to-50p
// var fade = document.querySelector('.fade-to-50p');
// console.log('fade:', fade);

// console.log('fade.ontransitionend:', fade.ontransitionend);

// fade.ontransitionend = function() {
//   this.classList.add('fade-finished');
// };

// 함수 안에서 함수를 밖으로 내보내다.
function outerFn() {
  var _friend = '최군';
  function innerFn() {
    console.log('innerFn 실행');
  }
  return innerFn;
}

console.log(_friend);

var action = outerFn();

console.log(typeof action); // 'function'


innerFn();

// action();

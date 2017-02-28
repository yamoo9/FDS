// 변수 선언
var num, str, boo, fnc, arr, obj;
// 변수에 대입 연산자를 활용하여 데이터 유형 값을 각각 할당
num = 897;
str = '' + num; // '897'
boo = false;
// 함수 표현식(Function Expression): 변수에 함수 값(literal)을 참조(Reference)
fnc = function () {};
arr = [];
obj = {}; // Singleton

// console.log('num:', !!num);
// console.log('str:', !!str);
// console.log('boo:', !!boo);
// console.log('fnc:', !!fnc);
// console.log('arr:', !!arr);
// console.log('obj:', !!obj);

// ----------------------------------------------------

// 함수 값(리터럴)을 참조한 변수는 변수에 실행 연산자 ()를 붙임으로
// 참조된 함수를 실행할 수 있다.

function callMe() {
  console.log('call me:', this);
}

var fn = callMe;

var fnc = fn; // fn이 참조한 함수 객체를 fnc 변수 또한 참조

var fun = fnc; // fnc가 참조한 함수 객체를 fun 변수 또한 참조

// fn(), fnc(), fun()
// 각 변수는 동일한 동일한 함수 객체 참조하였기에 실행 시 동일한 함수가 실행된다.

// 객체의 속성(변수)에도 함수 값을 할당(참조)
var body = document.body;

body.onmousedown = fun; // fun이 참조한 함수가 객체의 속성에 참조

var mouseOverAction = function () {
  console.log('mouse over on body');
  // return undefined;
};

body.onmouseover = mouseOverAction;
// 함수 참조가 아닌, 실행의 형태를 사용하면 안되는 이유
// body.onmouseover = mouseOverAction();

// 키보드 이벤트 핸들링
// WCAG 2
body.onkeyup = function pressKeyEvent(evt) {
  evt = evt || window.event;
  console.log('pressed key:', evt.keyCode);
  // console.log(pressKeyEvent);
};

// ----------------------------------------------------

// 자바스크립트의 대부분은 객체이다.
// null, undefined는 객체가 아니다.

// 그리고 모든 객체(Object)는
// 객체를 만든 생성자(Constructor)가 있다.

// 내장된 `생성자 함수`
// Number()
// String()
// Boolean()
// Array()
// Function()
// Object()

// 내장된 생성자 함수를 통해 만들어지는 객체의 경우는
// new 생성자 함수() 대신 리터럴 표현식을 사용하길 권장!

// 배열 생성자 함수를 사용하여 배열 객체를 생성하는 구문
var members = new Array('희찬', '의찬', '기찬');
var like_numbers = new Array(9); // [9]
// ['희찬', '의찬', '기찬']
// console.log('members:', members);

// 배열 객체가 소유한 함수(객체의 메서드)
// .concat()
// .pop()
// .push()
// .unshift()
// .splice()
// .join()

// ----------------------------------------------------

// 연관 배열
var people = [];

people['group_name']   = 'musictroica';
people['group_gender'] = 'only girls';

console.log('people[\'group_name\']:', people['group_name']);
console.log('people[\'group_gender\']:', people['group_gender']);

console.log('people.group_name:', people.group_name);
console.log('people.group_gender:', people.group_gender);

// var persons = people;

// ---------------------------------------------------
// 다시 한 번 살펴보는 값 복사/참조

// 값을 복사하는 데이터 유형
// null
// undefined
// number
// string
// boolean

// ----------------------------------------------------
// 객체 생성

// 마우스.크기
// 마우스.색상
// 마우스.가격
// 마우스.제조사
// 마우스.클릭('좌');
// 마우스.클릭('우');
// 마우스.휠('위');
// 마우스.휠('아래');

var magic_mouse = {
  dimension: {
    'this-is-prop': '5cm',
    'height': '11cm'
  },
  color: 'white',
  price: '110,000원',
  maker: 'Apple',
  'click': function(direction) {
    if ( direction === 'left' ) {} else {}
  },
  'wheel': function(direction) {
    if ( direction === 'up' ) {} else {}
  }
};

// ----------------------------------------------------
// 전역 변수, 전역 함수는 메모리 상에서 실행 중에 제거할 수 없다.
// 반면, 객체의 속성은 메모리 상에서 제거가 가능하다.
// 전역 변수 또는 함수를 제거할 수는 없어도, 값을 비울 수는 있다.

// typeof는 [ 함수 ] 가 아니다.
// typeof는 어떤 데이터 유형을 체크할 때 문제가 발생하나? null, array


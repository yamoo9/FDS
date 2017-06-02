/*! 01.js.operators.js @ 2017, yamoo9.net */

// —————————————————————————————————————————————————————————————————————————————————
// 연산자
// 참고 URL: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators
// —————————————————————————————————————————————————————————————————————————————————
// ++, -- 연산자
var n = 100;

// n + 30
n = n + 30;
n += 30;



var k = 9;

// k + 1
k = k + 1; // 값 복사 10으로 교체
k += 1; // 11
k++; // 11 "후 증가"
++k; // 13 "선 증가"

--k; // 선 감소: 12
k--; // 후 감소



// ——————————————————————————————————————
// 데이터 유형 검증
// 1. typeof
// 2. instanceof
// 3. .constructor
// 4. type()
// ——————————————————————————————————————

// 데이터 검증 시뮬레이션을 위한 데이터 객체
var types = {
  'num': 19,
  'str': "hi, there",
  'boo': false,
  'fnc': function() {},
  'arr': [],
  'obj': {},
  'nothing': [null, undefined],
  'date': new Date()
};


// 1. typeof, typeof는 함수가 아니다.
// typeof ()는 함수 실행 연산자가 아니라, 식을 묶기 위한 괄호
var tester = classUsingArray[8];
// console.log(tester);

console.groupCollapsed('typeof는 null, Array, 그 외 Host Object 를 모두 "object"라고 말하는 문제를 가진다.');
console.log('typeof tester.name:', typeof tester.name);
console.log('typeof tester.age:', typeof tester.age);
console.log('typeof tester.family:', typeof tester.family);
console.log('typeof tester.school:', typeof tester.school); // [0] object  VS [8] ???
// console.log('typeof tester.school.grade:', typeof tester.school.grade);

// typeof의 문제점
// null, Array, 그 외 Host Object 를 모두 'object'라고 말하는 문제
console.groupEnd('typeof는 null, Array, 그 외 Host Object 를 모두 "object"라고 말하는 문제를 가진다.');


// ——————————————————————————————————————————————————————————————————————————————————————
// 2. instanceof
// 클래스(Class)란?       <---> 생성자(Constructor)   <--->  추상적인 설계 도면
// 인스턴스(Instance)란?   <---> 객체(Object)          <---> 실체화된 사물(제품)
//
// 객체 instanceof 생성자
// ——————————————————————————————————————————————————————————————————————————————————————

// instanceof는 객체를 통해 생성자가 맞는지 검증하는 수단
// 원시 데이터 유형은 instanceof 로 검증할 수 없다.
// 원시 데이터는 객체가 아니다.
// 숫자 값, 문자 값, 논리 값, null, undefined
console.groupCollapsed('원시 데이터 유형은 instanceof 로 검증할 수 없다.');
console.log('90 instanceof Number:', 90 instanceof Number);
console.log('new Number(90) instanceof Number:', new Number(90) instanceof Number);
console.log('Number("101") instanceof Number:', Number('101') instanceof Number);
console.groupEnd('원시 데이터 유형은 instanceof 로 검증할 수 없다.');

// Array 를 올바르게 판별하는 방법
// ES5(2009) -> Array.isArray(data) // true, false
console.groupCollapsed('Array 를 올바르게 판별하는 ES5 방법');
console.log('Array.isArray(types.arr):', Array.isArray(types.arr));
console.groupEnd('Array 를 올바르게 판별하는 ES5 방법');


// ——————————————————————————————————————————————————————————————————————————————————————
// .constructor
//
// 클래스(Class)란?       <---> 생성자(Constructor)   <--->  추상적인 설계 도면
// 인스턴스(Instance)란?   <---> 객체(Object)          <---> 실체화된 사물(제품
// ——————————————————————————————————————————————————————————————————————————————————————

console.groupCollapsed('constructor 속성은 모든 객체가 태어날때부터 꼬리표처럼 가지고 태어난다');

// 객체인 유형
console.log('types.num.constructor:', types.num.constructor === Number);
console.log('types.str.constructor:', types.str.constructor === String);
console.log('types.boo.constructor:', types.boo.constructor === Boolean);
console.log('types.fnc.constructor:', types.fnc.constructor === Function);
console.log('types.arr.constructor:', types.arr.constructor === Array);
console.log('types.obj.constructor:', types.obj.constructor === Object);
console.log('types.date.constructor:', types.date.constructor === Date);

// 객체가 아닌 유형 null, undefined
// .constructor 속성은 객체가 소유한 것이기에, 객체가 아닌 것은 검증할 수 없을 뿐더러 오류를 발생시킨다.
// console.log('types.nothing[0].constructor:', types.nothing[0].constructor); // null
// console.log('types.nothing[1].constructor:', types.nothing[1].constructor); // undefined

console.groupEnd('constructor 속성은 모든 객체가 태어날때부터 꼬리표처럼 가지고 태어난다');


// ——————————————————————————————————————
// type() 유틸리티 함수
//
// 함수가 처리하는 로직(Logic) 설계
// 원리 이해, 재사용 가능하게 설정
// ——————————————————————————————————————

function type(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}


// ——————————————————————————————————————
// JavaScript 메서드 빌려쓰기 패턴
// ——————————————————————————————————————

// 새(객체)를 태어나게 하는 생성자 함수
function Bird() {}
// 새(객체)의 날다 라는 능력 -> 생성자함수.prototype
// 새.날다()
Bird.prototype.fly = function() {};
// 생성자 Bird 함수를 통해 새(객체)를 생체
// var my_bird = new Bird(); // Bird {}

// my_bird.fly();
// my_bird.readBook(); [X]

// 사람.걷다()
function Human(){}
Human.prototype.walk = function() {};
// var me = new Human();

// me.walk();
// me.fly(); // [X]

// Function.prototype.call
// 새.날다.call(사람)

// Bird.prototype.fly.call(me); // me.fly()






// ——————————————————————————————————————
// 생성자와 객체 그리고 프로토타입 객체
// ——————————————————————————————————————
// 올바른 데이터 유형 검증 (심지어 객체가 아닌 것 포함)
// null, undefined 도 검증 가능!!!

// 생성자(일급함수객체)
// 생성자.prototype -----> 프로토타입 객체 {}
// 객체생성 = new 생성자()
// 생성자로부터 생성된 객체의 모든 능력은 어디서 올까? (힘의 근원)
// 생성된객체.constructor
// 프로토타입 객체 ??


/*! 01.js.operators.js @ 2017, yamoo9.net */

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

console.group('typeof는 null, Array, 그 외 Host Object 를 모두 "object"라고 말하는 문제를 가진다.');
console.log('typeof tester.name:', typeof tester.name);
console.log('typeof tester.age:', typeof tester.age);
console.log('typeof tester.family:', typeof tester.family);
console.log('typeof tester.school:', typeof tester.school); // [0] object  VS [8] ???
// console.log('typeof tester.school.grade:', typeof tester.school.grade);

// typeof의 문제점
// null, Array, 그 외 Host Object 를 모두 'object'라고 말하는 문제
console.groupEnd('typeof는 null, Array, 그 외 Host Object 를 모두 "object"라고 말하는 문제를 가진다.');


// ——————————————————————————————————————
// 2. instanceof
// 클래스(Class)란?       <---> 생성자(Constructor)   <--->  추상적인 설계 도면
// 인스턴스(Instance)란?   <---> 객체(Object)          <---> 실체화된 사물(제품)
//
// 객체 instanceof 생성자
// ——————————————————————————————————————

// instanceof는 객체를 통해 생성자가 맞는지 검증하는 수단
// 원시 데이터 유형은 instanceof 로 검증할 수 없다.
// 원시 데이터는 객체가 아니다.
// 숫자 값, 문자 값, 논리 값, null, undefined
console.group('원시 데이터 유형은 instanceof 로 검증할 수 없다.');
console.log('90 instanceof Number:', 90 instanceof Number);
console.log('new Number(90) instanceof Number:', new Number(90) instanceof Number);
console.log('Number("101") instanceof Number:', Number('101') instanceof Number);
console.groupEnd('원시 데이터 유형은 instanceof 로 검증할 수 없다.');

// Array 를 올바르게 판별하는 방법
// ES5(2009) -> Array.isArray(data) // true, false
console.group('Array 를 올바르게 판별하는 ES5 방법');
console.log('Array.isArray(types.arr):', Array.isArray(types.arr));
console.groupEnd('Array 를 올바르게 판별하는 ES5 방법');

// ——————————————————————————————————————
// .constructor
// ——————————————————————————————————————
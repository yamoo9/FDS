/*! check-data-type.js © yamoo9.net, 2016 */

/**
 * --------------------------------
 * typeof 키워드(Keyword)
 * typeof ()는 함수가 아니다.
 * ----------------------------- */

// 싱글 `var` 패턴(single `var` pattern)
var num = 102,
    str = 'typeof는 함수가 아니다.',
    boo = !false,
    fnc = function() {},
    arr = [num, boo, fnc],
    obj = { 'number_type': num, 'boolean': boo };

// 원시 데이터 유형
console.log( 'num 변수에 복사된 데이터 유형:', typeof num );
console.log( 'str 변수에 복사된 데이터 유형:', typeof str );
console.log( 'boo 변수에 복사된 데이터 유형:', typeof boo );
// 참조 데이터 유형
console.log( 'fnc 변수에 참조된 데이터 유형:', typeof fnc );
// Array 데이터 유형의 경우, typeof 로만 정확하게 체크할 수 없다.
// 결과 값: 'object'
console.log( 'arr 변수에 참조된 데이터 유형:', typeof arr );
console.log( 'obj 변수에 참조된 데이터 유형:', typeof obj );

// typeof는 함수가 아니라, 뒤에 나오는 데이터 유형을 감지하여
// 감지된 데이터 유형 값을 문자열로 반환한다.
// 만약 감지하고자 하는 데이터 유형이 2개 이상이라면 괄호 ()를
// 사용하여 데이터를 묶어서 체크해야 한다.
// 예시: 8 + '' => '8'     'string'?!
console.log( 'typeof num + str:', typeof num + str );
console.log( 'typeof (num + str):', typeof (num + str) );

/**
 * ------------------------------------------------
 * instanceof 키워드
 * instance란? 실체화된(생성된) 객체
 * 생성된 객체의 모체(클래스(Class), 프로토타입(prototype))
 * ------------------------------------------------ */

// 인스턴스 instanceof 원형(모체)
// return BOOLEAN {true, false}

console.log( 'obj instanceof Object:', obj instanceof Object );
console.log( 'arr instanceof Array:', arr instanceof Array ); // true
console.log( 'arr instanceof Object:', arr instanceof Object ); // false?
console.log( 'fnc instanceof Function:', fnc instanceof Function );
// 원시 데이터 유형의 경우, instanceof를 통해 기대하는 바를 도출할 수 없다.
// 이유는 원시 데이터 유형은 실상 객체가 아닌, 값이기 때문이다.
// 다만 자바스크립트 엔진이 원시 데이터 유형(null, undefined 제외)의 값을
// 마치 객체인 것처럼 사용할 수 있게 만들어 준다.
console.log( 'num instanceof Number:', num instanceof Number );   // false ?
console.log( 'str instanceof String:', str instanceof String );   // false ?
console.log( 'boo instanceof Boolean:', boo instanceof Boolean ); // false ?


/**
 * --------------------------------
 * constructor 속성
 * 자바스크립트 객체라면 모두 가지고 있는 속성으로
 * 자신을 생성한 생성자를 가리켜서 알려준다.
 * ----------------------------- */

console.log( 'num.constructor:', num.constructor ); // function Number() { [native code] }
console.log( 'num.constructor === Number:', num.constructor === Number ); // true

console.log( 'str.constructor:', str.constructor ); // function String() { [native code] }
console.log( 'str.constructor === String:', str.constructor === String ); // true

console.log( 'boo.constructor:', boo.constructor ); // function Boolean() { [native code] }
console.log( 'boo.constructor === Boolean:', boo.constructor === Boolean ); // true

console.log( 'fnc.constructor:', fnc.constructor ); // function Function() { [native code] }
console.log( 'fnc.constructor === Function:', fnc.constructor === Function ); // true

console.log( 'arr.constructor:', arr.constructor ); // function Array() { [native code] }
console.log( 'arr.constructor === Array:', arr.constructor === Array ); // true

console.log( 'obj.constructor:', obj.constructor ); // function Object() { [native code] }
console.log( 'arr.constructor === Object:', obj.constructor === Object ); // true


/**
 * --------------------------------
 * 언어 차원에서 지원되지 않는 사용자 정의 함수
 * isType() 유틸리티 헬퍼 함수
 * 객체가 아닌 유형도 검증이 가능
 * ----------------------------- */

/** @function isType */
function isType(data) {
  // return 키워드는 함수 내에서 처리된 결과 값을 반환한다.
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}

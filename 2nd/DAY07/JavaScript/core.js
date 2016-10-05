/*! data-type-change-check.js © yamoo9.net, 2016 */

/**
 *  자바스크립트 원시 데이터 유형 5가지 (값이 복사)
 *  - 숫자
 *  - 문자
 *  - 불리언
 *  - null
 *  - undefined
 */

/**
 * --------------------------------
 * 데이터 형 변환
 * ----------------------------- */

// ---------------------------------
// 숫자 -> 문자

// 숫자 상수일 경우 예
9 + ''; // "9"

// 숫자 상수를 복사한 변수일 경우 예
var n = 102;
console.log('n+""', n+''); // "102"

// String() 함수를 사용하는 예
// 첫글자가 대문자인 함수는 관례적으로 생성자(Constructor) 함수를 지칭한다.
// 비록 생성자 함수이나, 여기서는 일반 함수 방식으로 사용하여 숫자 데이터 값을
// 문자 데이터 값으로 변형한다.
var k = 90120;
console.log('k:', k);
console.log('typeof k:', typeof k);

// 데이터 값 유형이 변경되었다.
k = String(k); // "90120"

console.log('k:', k);
console.log('typeof k:', typeof k);

// {객체}.toString() 객체가 소유한 함수 유형의 속성을 특별히 "메소드(Method)"라고 부른다.
// 자바스크립트의 모든 객체는 .toString() 메소드를 사용할 수 있다.
var m = 9090;
m = m.toString(); // 숫자 상수 값에 불과한 데이터를 마치 객체인 것처럼 작동하도록 만들어 준다.
console.log('m:', m);
console.log('typeof m:', typeof m);

// 단, 숫자 상수 값의 경우 바로 .toString() 메소드를 사용할 수 없다.
// 아래 코드는 오류를 발생시킨다.
// 8080.toString(); // Uncaught SyntaxError: Invalid or unexpected token

// 하지만 이 문제는 이해할 수 없는 다음과 같은 방법으로 문법 오류 해결이 가능하다.
8080 .toString();  // 사용하지 않는 것이 좋다.
8080..toString();  // 사용하지 않는 것이 좋다.
(8080).toString(); // ※ 빈번하게 사용된다.

// 자바스크립트 언어에서 객체가 아닌 것들은 null, undefined 이다.
// 객체가 아니기 때문에 속성(메소드 같은)이 존재하지 않는다.
// 하여 다음과 같은 코드는 오류를 발생시킨다.
// null.toString();      // Uncaught TypeError: Cannot read property 'toString' of null
// undefined.toString(); // Uncaught TypeError: Cannot read property 'toString' of undefined

// 함수 이름 camelCase 작성법
// function showMeTheMoney() {}
// 함수 호출
// showMeTheMoney();


// ---------------------------------
// 숫자 형 문자(숫자만 포함된) -> 숫자

// 방법 1. - 0, * 1, / 1

var u = '90231'; // 숫자 형 문자

console.log('u - 0:', u - 0); // 90231
console.log('u * 1:', u * 1); // 90231
console.log('u / 1:', u / 1); // 90231

var uu = '12341em'; // 문자

console.log('uu - 0:', uu - 0); // NaN: Not a Number '숫자가 아니다', 부정

// NaN은 숫자가 아니라고 부르짓지만, 실상 그는 숫자이다.
console.log('typeof NaN:', typeof NaN);

// 방법 2.
// 숫자형 문자 앞에 + 기호를 붙인다.
var h = '34';
h = +h; // 은근~~~~ 많이 사용된다.

console.log('h:', h); // 34

// 방법 3.
// 숫자형 문자를 Number() 함수에 전달하여 처리한 결과는 숫자가 된다.
var r = '3.141592';
r = Number(r);

console.log('r:', r); // 3.141592

// ---------------------------------
// 숫자와 단위(문자)를 포함한 문자(단위 유형) -> 숫자
// 단위를 제거하는 함수
// window 전역 객체(Global Object)의 빌트인(내장, 네이티브) 메소드
// window.parseInt('단위유형의문자', '반환진수')   // 정수 반환
// window.parseFloat('단위유형의문자', '반환진수') // 실수 반환

var font_size = '21.9px';

var parse_int   = window.parseInt(font_size, 10);
var parse_float = window.parseFloat(font_size, 10);

console.log('parse_int:', parse_int);
console.log('parse_float:', parse_float);
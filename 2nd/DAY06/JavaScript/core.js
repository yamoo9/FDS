/**
 * --------------------------------
 * 자바스크립트 코어 기초 문법
 * 변수, 상수
 * 대입(할당) 연산자 =
 * 데이터 값 (복사, 참조)
 * 원시 데이터 값
 * undefined
 * null
 * 2016
 * 'Front-End Develop SCHOOL'
 * true
 * 참조(Reference)가 되는 데이터는 모두 '객체(Object)'
 * Plain Object    `{}`
 * Function Object `function(){}`
 * Array Object    `[]`
 *
 * DOM(Document Object Model) API
 * 선택(Selection)
 * 문서.가져온다id값('id값');
 * var fds = document.getElementById('fds');
 * 요소(ELEMENT_NODE)의 이름(NodeName)으로부터 문서객체를 가져오는 방법
 * var links = document.getElementsByTagName('a');
 *
 * 문서 객체 조작(Manipulation)
 * 문서객체.style 속성
 * CSS 속성을 자바스크립트로 제어 하는 방법
 * 인라인 속성 style
 * CSS 파일에 분리된 CSS 코드
 * ----------------------------- */


// 자바스크립트 객체에 관해서
// 객체는 직접적으로 실존할 수 없다.
// 누군가가 생성해야만 객체가 실존하게 된다.
// 생성자(Constructor) -> 실체화된 객체(Instance Object)

// ---------------------------------------------------
// 자바스크립트 숫자 데이터 유형

var k = 90;
var m = -101;
var j = 0;
var b = 2.190356246345;
var y = (k + m - j) * b / m; // 산술(사칙)연산

console.log('k:', k);
console.log('m:', m);
console.log('j:', j);
console.log('b:', b);
console.log('y:', y);

// 자바스크립트 데이터 유형을 체크(감지, 확인, 검토)
console.log('typeof k:', typeof k);
console.log('typeof m:', typeof m);
console.log('typeof j:', typeof j);
console.log('typeof b:', typeof b);
console.log('typeof y:', typeof y);

console.log('%c------------------------------------------------', 'color: #55c4e1');

// ---------------------------------------------------
// 자바스크립트 문자 데이터 유형

var html_is       = 'HTML은 "문서 구조를 마크업 하는 언어"이다.';
var css_is        = "CSS는 \"HTML 문서를 스타일링 하는 언어\"이다.";
var javascript_is = 'JavaScript는 \'HTML문서를 동적으로 변경/제어하는 인터랙티브 언어\'이다.';

// 문자 데이터 간에는 산술(사칙)연산이 이루어지지 않는다.
// 하지만 문자 간 접합(용접)은 + 기호로 가능하다.
var web_programming_languages_is;
// \n <= new line
web_programming_languages_is = html_is + '\n' + css_is + '\n' + javascript_is;

console.log('web_programming_languages_is:', '\n' + web_programming_languages_is);

// ---------------------------------------------------
// 자바스크립트 불리언 데이터 유형

var fds_true  = true;
var fds_false = false;

console.log('fds_true:', fds_true);
console.log('fds_false:', fds_false);

console.log('typeof fds_true:', typeof fds_true);
console.log('typeof fds_false:', typeof fds_false);

console.log('%c------------------------------------------------', 'color: #55c4e1');

var n   = 0;   // false
var n_1 = 1;   // true
var n_2 = -10; // true
var n_3 = 23;  // true

console.log('n:',   n   );
console.log('n_1:', n_1 );
console.log('n_2:', n_2 );
console.log('n_3:', n_3 );

console.log('%c------------------------------------------------', 'color: #55c4e1;');

// 형 변환
// Data to Boolean
console.log('n:',   Boolean(n)   );
console.log('n_1:', Boolean(n_1) );
console.log('n_2:', Boolean(n_2) );
console.log('n_3:', Boolean(n_3) );

console.log('%c------------------------------------------------', 'color: #55c4e1;');

// 암묵적으로 변수 초기화
var data1; // undefined

// 명시적으로 변수 초기화
var data2 = null;
var data3 = undefined; // 거의 사용되지 않는다.

console.log('data1:', data1);
console.log('data2:', data2);

console.log('%c------------------------------------------------', 'color: #55c4e1;');

// 형 변환
console.log( 'data1:', Boolean(data1) );
console.log( 'data2:', Boolean(data2) );

// DOM Scripting의 기본 패턴
// 이벤트 바인딩 Event Binding
// 이벤트 속성 Event Property <-> 함수 Function (이벤트 핸들러 Event Handler)
// 문서객체.이벤트속성 = 이벤트핸들러;
document.onclick; // null
// 이벤트 속성에 함수 데이터 값이 연결(Binding)
document.onclick = function() {
  console.log('문서객체 클릭');
  // 이벤트 제거(해제)는 null 초기 값을 대입한다.
  document.onclick = null;
};

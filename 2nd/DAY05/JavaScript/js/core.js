/*! Core.js © yamoo9.net, 2016 */

// --------------------------------
// 자바스크립트 코어
// --------------------------------

// 변수 선언 방법 ---------------------------------------
// 방법 1. 변수 선언
// 방법 2. 선언된 변수에 값 할당
// 방법 3. 선언과 동시에 값을 할당
// 방법 4. var 키워드를 한 번만 사용하는 싱글톤(Singleton) 패턴

// 원시 데이터 유형 --------------------------------------
// - String
// - Number
// - Boolean
// - undefined
// - Null
var fds_model         = '데이터 리스트'; // 문자열
var current_state = 200;          // 숫자
var is_finished   = false;        // 불리언
var container_el  = null;         // 비어 있다.
var my_name;                      // 변수 선언만 하게 되면 undefined

// ---------------------------------------------------
// 데이터 값 `복사`와 `참조`
// ---------------------------------------------------
// 변수(Variable)에 값이 할당된다라는 것은
// 값의 유형(Data Type)에 따라 복사하거나,
// 참조(Reference)하게 된다.

// 다른 변수에 model 이름 붙여진 메모리 공간의 데이터를 복사
var fds_view = fds_model;

// 현재 코드 라인에서는 결과 값이 동일하다. (동일한 데이터가 각 변수에 복제되었다)
console.log('fds_model:', fds_model);
console.log('fds_view:', fds_view);

// fds_model 변수 값이 fds_view 변수에 복제되었기 때문에 둘의 결과 값은 동일하다.
console.log('fds_model === fds_view:', fds_model === fds_view);

// fds_model 변수의 값이 교체되었다.
var fds_model = 'Front-End Dev.';

console.log('fds_model:', fds_model);
console.log('fds_view:', fds_view);

// fds_model 변수 값이 바뀌었기 때문에 둘의 결과 값은 더 이상 동일하지 않다.
console.log('fds_model === fds_view:', fds_model === fds_view);

// -----------------------------------------------------------------
// 문서에서 id 값이 my-parent, child-one, child-two 식별이 가능한 요소를 찾아와
// 적절한 이름을 가진 변수에 할당한다.

// var my_parent, child_1, child_2;
// var my_parent = null;
// var child_1   = null;
// var child_2   = null;

var my_parent = document.getElementById('my-parent');
var child_1   = document.getElementById('child-one');
var child_2   = document.getElementById('child-two');

console.log('my_parent:', my_parent);
console.log('child_1:', child_1);
console.log('child_2:', child_2);

// 문서 객체 제어
my_parent.style.border = '1px solid #7e5dc4';
child_1.style.color = '#7e5dc4';
child_2.style.background = '#7e5dc4';
child_2.style.color = '#fff';
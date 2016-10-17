/*! core.js © yamoo9.net, 2016 */

////////////////////////////////////////////
// 자바스크립트의 데이터 유형
////////////////////////////////////////////
// 원시 데이터 유형
var num, str, boo;
num = 1;
str = 'primitive data type';
boo = !0;
// 참조 데이터 유형
var obj, arr, fnc;
fnc = function() {
  console.log('this is function literal');
};
arr = [];
obj = {};
// 자료형 검증 (언어 차원에서 지원)
// typeof 키워드
// instanceof 키워드
// .constructor 속성

// 언어 차원에서 지원되지는 않지만,
// 필요에 의해 직접 제작한 자바스크립트 자료형을
// 정확하게 체크할 수 있는 유틸리티 헬퍼 함수
// isType()

console.log('num:', isType(num));
console.log('str:', isType(str));
console.log('boo:', isType(boo));

console.log('arr:', isType(arr));
console.log('fnc:', isType(fnc));
console.log('obj:', isType(obj));

console.log('%c------------------------------', 'color: #3d9a21');


////////////////////////////////////////////
// 자바스크립트 제어문 (조건에 따라 코드를 처리하는 구문)
// 1. if, else, else if
// 2. 논리 연산자 &&(AND), ||(OR)
// 3. 3항 연산자 ? :
// 4. switch, case, default, break
////////////////////////////////////////////

// if 문
// () 안의 조건 처리 연산 결과 값이 true 일 경우,
// {} 문 내부의 코드가 수행된다.

var html, head, body;

html = document.querySelector('html');
head = document.querySelector('head');
body = document.querySelector('body');

console.log('html type:', isType(html));
console.log('head type:', isType(head));
console.log('body type:', isType(body));

// html type: htmlhtmlelement
// head type: htmlheadelement
// body type: null
// 자주 발생하는 오류 유형 `can not read property of null`

console.log('%c------------------------------', 'color: #3d9a21');

var page, wrapper, brand, slogan;

page    = document.querySelector('#page');
wrapper = document.querySelector('.wrapper');
brand   = document.querySelector('.brand');
slogan  = document.querySelector('.slogan');

console.log('page type:', isType(page));
console.log('wrapper type:', isType(wrapper));
console.log('brand type:', isType(brand));
console.log('slogan type:', isType(slogan));

console.log('%c------------------------------', 'color: #b64926');

// if 조건 문 사용
// if (조건) {
//   조건이 참일경우 코드 수행
// }
if ( isType(wrapper) === 'null' ) {
  console.info('문서에 <div class="wrapper"> 요소가 존재하는지 유무를 파악해보세요.');
}

// if ~ else 조건 문 사용
// if (조건) { 조건이 참일 경우 코드 수행 }
// else { 조건이 거짓일 경우 코드 수행 }

// 숫자 활용 예시
var count = 100;

if ( (count = count - 100) ) {
// if ( count - 100 ) {
  console.log('count 변수 값은 0보다 작습니다.');
} else {
  console.log('count 변수 값은 0보다 작지 않습니다.');
}

console.log('count:', count); // ???

console.log('%c------------------------------', 'color: #3d9a21');

// DOM Level 0 (Legacy) 예시
if ( document.documentElement ) {
  console.log('문서의 뿌리요소인 <html>이 존재합니다.');
} else {
  console.log('문서의 뿌리요소인 <html>이 존재하지 않습니다.');
}

console.log('%c------------------------------', 'color: #3d9a21');

// 돔스크립트(DOM Script): `if` 예시

// page 변수에 참조된 문서 객체 내부에서 .demo 요소를 찾아봅니다.
var demo = page.querySelector('.demo');
console.log('demo는 존재합니까?', demo);
console.log('demo는 존재합니까?', isType(demo) !== 'null');
// 만약 .demo 요소가 없다면
//  page 요소에 title 속성 값으로 'demo 없다~' 추가
// if ( isType(demo) === 'null' ) {
// if ( demo === null ) {
if ( !demo ) {
// if ( isExist(demo) ) {
  page.setAttribute('title', 'demo 없다~');
  // page.style.background = 'red';
}
// 그렇지 않다면
//  page 요소에 title 속성 값으로 'demo 있다~' 추가
else {
  page.setAttribute('title', 'demo 있다~');
  // page.style.background = 'lightblue';
}


// 다음과 같은 형태로 if ~ else 구문을 사용할 수 있지만....
// ※ 단 이 방법은 코드가 if 뒤에, else 뒤에 한 줄 일경우만 사용 가능하다.
// 여러 줄로 변경 작성될 경우 중괄호({})를 다시 써야 하기 때문에 안티 패턴이다.

if ( !demo )
  page.setAttribute('title', 'demo 없다~');
else
  page.setAttribute('title', 'demo 있다~');

// 또는

if ( !demo ) page.setAttribute('title', 'demo 없다~');
else page.setAttribute('title', 'demo 있다~');

// 고로 위 방법보다는 아래 방법을 권장!!

if ( !demo ) { page.setAttribute('title', 'demo 없다~'); }
else { page.setAttribute('title', 'demo 있다~'); }

console.log('%c------------------------------', 'color: #3d9a21');


// else if 사용 예시
// 상황 0.
var delispy;
// 상황 1.
// delispy = document.querySelector('[title="delispy"]');
// 상황 2.
// delispy = page;

if ( delispy === undefined ) {
  console.log('변수 delispy는 정의되기만 했다.');
} else if ( delispy === null ) {
  console.log('변수 delispy는 정의됨과 동시에 null이 할당되었거나, 혹은 문서객체가 없는 경우이다.');
} else {
  console.log('변수 delispy는 정의 됨과 동시에 null, undefined가 아닌 값이 할당되었다.');
}
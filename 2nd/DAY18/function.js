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
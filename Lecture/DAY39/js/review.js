/*! review.js © yamoo9.net, 2016 */

/**
 * ----------------------------------------------------------------------------------
 * HTML5 문서에서 <h1>은 여러 번 사용 가능한가?
 * ----------------------------------------------------------------------------------
 * HTML5 문서부터는 <h1> 요소를 기존처럼 사용할 수도 있고,
 * sectioning content element 내부에서는 다수 사용 가능하다.
 * https://www.w3.org/TR/html5/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
 * ---------------------------------------------------------------------------------- */


/**
 * ----------------------------------------------------------------------------------
 * this 컨텍스트 참조 변수
 * ---------------------------------------------------------------------------------- */

// 자바스크립트 언어는 영역(Scope)을 가진다.
// 영역으로 구분되는 공간은 크게 전역(Global Scope)과 지역(Local Scope)이 있다.
// 자바스크립트에서는 if, while, do ~ while, for 문 같은 블록문(`{}`) 내부는 영역이 아니다.
// 함수 데이터 유형의 블록문(`{}`) 내부에서는 공간이 형성된다.

// this -> 전역 콘텍스트 객체를 가리킨다.
console.log('전역에서 실행한 this:', this); // 결과: window object

if (true) {
  console.log('if 블록문 내부에서 실행한 this:', this); // 결과: window object
}

function myFn() {
  console.log('함수 myFn() 내부에서 실행한 this:', this);
}

myFn(); // 결과: window object
// 이유: myFn() 실행시킨 콘텍스트 객체가 암묵적으로 window 객체로 설정되기 때문
// myFn() === window.myFn();

function meFn() {
  'use strict';
  console.log('함수 meFn() 내부에서 실행한 this:', this);
}

meFn(); // 결과: undefined
// 이유: 엄격 모드(strict mode)에서는 기존의 설계 오류를 해결하기 위해
// 더 이상 암묵적으로 전역 콘텍스트 객체인 window에서 실행한 것처럼 처리하지 않기 때문

window.meFn(); // this.meFn(); // 결과: window object
// 이유: 엄격 모드(strict mode)에서 실행 시, 명시적으로 실행 콘텍스트 객체를 설정하면
// this는 명시적으로 설정된 실행 콘텍스트 객체를 가리키기 때문

// ----------------------------------------------------------------------

var demo1 = document.querySelector('.demo1');
var demo2 = document.querySelector('.demo2');

demo1.onmouseenter = myFn; // 결과: this === demo1

demo1.onclick = function() {
  myFn(); // 결과: this === window object
};

demo2.onmouseenter = meFn; // 결과: this === demo2

demo2.onclick = function() {
  meFn(); // 결과: this === undefined
};


/**
 * ----------------------------------------------------------------------------------
 * IIFE 패턴 (즉시실행함수)
 * ---------------------------------------------------------------------------------- */

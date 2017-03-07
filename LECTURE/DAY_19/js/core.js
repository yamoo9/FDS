/*! core.js © yamoo9.net, 2017 */

// 함수 객체(Function Object) is 일급 객체(First Class Object).
// 일급 객체의 특징
// 전달도 가능하고, 반환도 가능

// jQuery 예시
// $('.off-canvas-menu-button').on('click focusin', function() {
//   $(this).parent().animate({
//     'transform': 'translateX(100px)'
//   }, 400, 'ease-out-back', function() {
//     console.log('finished animation.');
//   });
// });

// 전역 함수
// function checkType(data) {
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
// }

// Namespace 패턴
// 객체에 종속시켜 범위를 정해주는 패턴
// const YUI = {};
// YUI.checkType = function (data) {
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
// };

// Module 패턴
// 클로저 활용
var moduleMaker = function() {
  // 모듈 정의
  var checkType = function (data) {
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
  };
  var module = {
    'checkType': checkType
  };
  // 정의된 모듈 내보내기
  return module;
};

var module = moduleMaker();

// IIFE 패턴 (자가실행함수, 즉시실행함수: 누군가 나의 이름을 불러주지 않아도 나는 실행되네)
(function(){console.log('excute')}());
// (function(){console.log('excute')})();
// !function(){console.log('excute')}();
// +function(){console.log('excute')}();

// moduleMaker() 실행 X
// IIFE 패턴을 사용하여 모듈을 정의/내보내기 => 모듈 패턴
var dom = (function(global) {
  'use strict';

  var document = global.document,
      toString = Object.prototype.toString;

  // [Private] 외부에서 접근할 수 없는 코드
  var query, queryAll, checkType, isString;
  checkType = function(data) {
    return toString.call(data).slice(8,-1).toLowerCase();
  };
  isString = function(data) {
    return checkType(data) === 'string';
  };
  queryAll = function(selector) {
    if ( !isString(selector) ) { return console.error('CSS 선택자 문자로 전달 요망'); }
    return document.querySelectorAll(selector);
  };
  query = function(selector) {
    return queryAll(selector)[0];
  }

  // [Public] 명시적으로 노출하고 싶은 것들만 공개
  return {
    'q': query,
    'qa': queryAll
  };

}(window));


// Hoisting, Closure 정리
// arguments 객체
// forEach() 구문 [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
// DOM & NodeList





















///////////////////////////////////////////////
// JavaScript 빈번하게 사용되는 간단한 반복문
///////////////////////////////////////////////
function sumArea(start, end, acc) {
  acc = acc || 0;
  for (var i=start; i <= end; i++) {
    acc += i;
  }
  // for (; start <= end; start++) {
  //   acc += start;
  // }
  return acc;
}

// console.log('sumArea(1, 10):', sumArea(1, 10)); // 55



///////////////////////////////////////////////
// 함수형 프로그래밍은 반복을 하기 위해 재귀 함수를 사용한다.
// 재귀함수: 변수 선언이나, 반복 구문을 사용하지 않는다
///////////////////////////////////////////////
function sumRange(start, end, acc) {
  acc = acc || 0;
  if (start > end) { return acc; }
  return sumRange(start + 1, end, acc + start);
}

// console.log('sumRange(1, 10):', sumRange(1, 10)); // 55



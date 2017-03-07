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

  var document, toString, query, queryAll, checkType, isString;

  document = global.document;
  toString = Object.prototype.toString;

  Function.prototype

  {
    'call': function(){},
    'apply': function(){},
    'bind': function(){},
  }

  // [Private] 외부에서 접근할 수 없는 코드
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
  };

  // [Public] 명시적으로 노출하고 싶은 것들만 공개
  return {
    'q': query,
    'qa': queryAll
  };

}(window));


// 메서드 빌려쓰기 패턴
// this 컨텍스트 변경

// .call(), .apply() => this 컨텍스트 교체 후 바로 실행
// .call()은 전달인자를 콤마(,)로 구분하여 전달
// .apply()은 전달인자를 배열 집합으로 전달
// [ES 3] Function.prototype.call(this 컨텍스트 객체[, arg1, arg2, arg3])
// [ES 3] Function.prototype.apply(this 컨텍스트 객체[, [arg1, arg2, arg3] ])

function assignArgs() {
  console.log('this:', this);
  console.log('arguments:', arguments);
  console.log('arguments.forEach:', arguments.forEach);
  // Array 객체의 메서드 빌려쓰기 패턴 활용
  Array.prototype.forEach.call(arguments, function(arg, i) {
  // [].forEach.call(arguments, function(arg, i) {
    console.log('i:', i);
    console.log('arg:', arg);
  });
}

// .call() 예시
window.assignArgs.call(document.body, 1, 3, 6);
// .apply() 예시
window.assignArgs.apply(document.body, [1, 3, 6]);

// .bind() => this 컨텍스트 교체 후 바로 실행 X
// [ES 5] Function.prototype.bind(this 컨텍스트 객체[,])

// .bind() 예시
window.assignArgs.bind(document.body, 1, 3, 6);

// 객체.능력 -> 다른 객체 빌려쓴다.
// 새.날다() -> 사람.날다()

var bird  = {
  'type': 'small bird',
  'fly': function() { console.log(this.type + ' 날다.'); }
};

var human = {
  'type': 'Giant',
  'walk': function() { console.log(this.type + ' 걷다.');}
};

// bird 객체의 능력(메서드)을 human이 빌려썼다.
bird.fly.call(human); // 'Giant 날다.'




// Array.prototype.forEach 능력
// 다른 객체(집합)가 빌려쓸 수 있다.

// arguments
// NodeList <- 노드의 집합

// NodeList
if ( !NodeList.prototype.forEach ) {
  NodeList.prototype.forEach = function() {

  };
}

// 내장 객체를 사용자 확장
// 위험하다! 공부 목적
if ( !Array.prototype.each ) {
    Array.prototype.each = function(callback) {
    if (!callback || typeof callback !== 'function' ) {}
    for ( var i=0, l=this.length; i<l; i++ ) {
      callback.call(this, this[i], i, this);
    }
  };
}


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



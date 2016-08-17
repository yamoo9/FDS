/*! loop-function.js © yamoo9.net, 2016 */

// -----------------------------------------------------------------------------------------
// 자바스크립트 반복문
// -----------------------------------------------------------------------------------------
// 1.1. while
// 1.2. do ~ while
// 2.1. for
// 2.2. for ~ in [Object]
// 2.3. forEach  [Array] ECMASCript 5 Edition
// 2.4. for ~ of [Array] ECMAScript 2015

// DEMO:
// forEach 구문
var movielist = [];

movielist.push('터널');
movielist.push('덕혜옹주');
movielist.push('부산행');
movielist.push('서울역');

// console.log(movielist);

// for문
for( var i=0, l=movielist.length; i<l; i+=1 ) {
  // console.log('for 문의 결과: ', movielist[i]);
}

// for - in문
for ( var index in movielist ) {
  if( movielist.hasOwnProperty(index) ) {
    // console.log('for - in 문의 결과: ', movielist[index]);
  }
}

// for - of문
for ( var movie of movielist ) {
  // console.log('for - of 문의 결과: ', movie);
}

// 배열 객체(Array)의 메소드: .forEach(원소, 순서, 배열)
// .forEach() 문은 반환 값이 없다. (undefined)
// 참고 URL: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
movielist.forEach(function(item, idx) {
  // console.log('item '+ idx +': ', item);
  // return 하더라도 반환 값이 없다.
  // return 'item '+ idx +': ' + item;
});

// console.log('movielist.forEach() 결과: ', movielist);

// 배열 객체(Array)의 메소드: .map(원소, 순서, 배열)
// .map()의 반환 값은 수정된 배열을 반환한다.
// 참고 URL: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
var new_movielist = movielist.map(function(item, index, arr) {
  // console.log(item + '은 ' + index + '번째 원소입니다.');
  return item + '은 ' + index + '번째 원소입니다.';
  // console.log('item' + index + ':', item);
  // if ( index === movielist.length - 1 ) {
  //   console.log('arr:', arr);
  // }
});

// console.log('movielist.map() 결과: ', new_movielist);


// -----------------------------------------------------------------------------------------
// 자바스크립트 함수
// -----------------------------------------------------------------------------------------

// 함수의 특징
// 상위 영역(Scope)과 구분되는 별도의 독립적인 영역을 생성한다.
// 함수 내부에 `var` 키워드, `function` 키워드로 정의된 데이터 값은 외부 영역에서 접근이 불가능하다.
// 함수 내부는 독립된 공간이기에 내부에 `var` 키워드, `function` 키워드로 정의된 데이터는 호이스트(Hoist) 된다.

// 호이스트(영역 최상단으로 끌어 올려진다)
// `function`으로 정의된 함수는 몸체가 전부 끌어올려진다.
// `var` 키워드로 정의된 변수는 변수 이름만 끌어 올려질 뿐, 할당되는 데이터는 원래 정의된 곳에서 이루어진다.

// DEMO:
// 선언식 (함수 이름으로 정의하는 방법)
// function scopeFn() { ... }

// 표현식 (함수 값(리터럴)을 변수에 할당하는 방법)
var scopeFnExpression = function() {
  // console.log(this); // window 객체
  // 외부와 단절된 독립된 공간이 형성된다.
  if (movielist) {
    inScopeFnc();
    console.log('if 내부:', movielist);
    // ※ ES2015에 표준으로 추가된 let 키워드를 사용한 변수는 호이스트 되지 않는다.
    // let movielist = null;
    // var 키워드로 정의된 변수는 호이스트되어 함수 영역의 최상단으로 끌어올려진다.
    movielist = ['영화 짱 좋아', '진짜 짱 좋아'];
    function inScopeFnc() {
      console.log('this is inScopeFnc.');
    }
  }
  console.log('함수 내부:', movielist);
};
// 함수 실행
// 함수를 실행시킨 컨텍스트 객체? === window 객체
scopeFnExpression(); // window.scopeFnExpression()와 같다.

console.log('함수 외부:', movielist);

// 함수 정의
// 매개변수 parameter
// function 함수이름(매개변수1, 매개변수2, ...) {
// ....
// }

// 함수 호출
// 전달인자 argument
// 함수이름(전달인자1, 전달인자2, ...);

// -------------------------------------------------------------------------------------

// 인스턴스란?
// var obj1 = {};
// 생성자 함수인 Object가 new 키워드를 만나 아이를 낳았는데 그 아이는 객체(인스턴스)이다.
// var obj2 = new Object();
// var arr1 = [];
// var arr2 = new Array();


// 일반 함수(글로벌 스코프에 정의된 함수)
function showMe() {
  console.log(this);
  return this;
}

showMe() === window;

// 객체의 속성에 함수를 할당 (메소드가 됨)
var fds = {
  'callMe': showMe
};

fds.callMe() === fds;

// 자바스크립트 엄격 모드
function strictFn() {
  // 엄격 모드 발동
  // ※ ECMASCript 2015 버전부터는 기본 설정 값이 "엄격 모드"
  'use strict';
  // 변수 선언 시에 var 키워드를 강제화 한다. (오류 발생)
  var hi_message = 'Hello';
  // this 컨텍스트 참조 변수는 더 이상 window 전역 객체가 아닌 undefiend 이다.
  console.log(this, hi_message);
}

// 엄격 모드가 아닌, 자바스크립트에서는 전역에서 함수를 호출할 경우,
// 그 함수의 컨텍스트를 암묵적으로 전역 객체인 window를 가리켰다. (문제 발생!!)
strictFn();  // this === undefined

// 반면 엄격 모드에서 명시적으로 특정 객체가 함수를 호출하게 되면
// this 컨텍스트 참조 변수는 해당 객체를 참조한다.
window.strictFn(); // this === window 객체

document.onclick = strictFn; // this === window.document 객체
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
  // Function.prototype.call 메소드를 사용하여 함수를 빌려쓰기 패턴
  // myFn();          // 결과: this === window object
  // myFn.call(this); // 결과: this === demo1
};

demo2.onmouseenter = meFn; // 결과: this === demo2

demo2.onclick = function() {
  meFn();          // 결과: this === undefined
  window.meFn();   // 결과: this === window object
  meFn.call(this); // 결과: this === demo2
};

// ----------------------------------------------------------------------
// jQuery 함수 내부에서의 this
// ----------------------------------------------------------------------

// jQuery(document).ready(function($){});
jQuery(function($) {
  'use strict';
  console.log('jQuery 팩토리 함수에 전달된 콜백 함수 내부에서의 this:', this); // this === document
  var $demo1 = $('.demo1');

  $demo1.on('mousedown', {'$this': $demo1, 'index': 1}, function(evt){
    // console.log(arguments);
    console.log(evt.data.index++);
    // console.log('이벤트 객체의 .data.$this 참조 값:', evt.data.$this );
    // var $this = evt.data.$this;
    // $this.css('font-size', '+=20');
    // console.log('this:', this); // this === .demo1 문서 객체
    // console.log('$(this):', $(this).jquery); // jQuery 객체
  });
});


/**
 * ----------------------------------------------------------------------------------
 * IIFE 패턴 (즉시실행함수)
 * ----------------------------------------------------------------------------------
 * 함수 표현식을 사용하여 사용자가 이름을 호출하는 과정을 생략하고 즉시 실행되는 함수 패턴을 말한다.
 * 모듈 패턴에 자주 사용되며, 전역과 구분되는 지역을 형성함으로서 공개/비공개 멤버를 설정할 수 있다.
 * ---------------------------------------------------------------------------------- */
var fn = function() {}; // 함수 표현식, 함수 값(Literal)

// 메모리 저장공간의 이름 fn을 통해 기억된 데이터(함수)를 실행
fn();

// 즉시 실행 함수
(function(global) {
  console.log('즉시 실행함수 패턴 1');
  console.log(global === window);
})(this);

(function($j$) {
  console.log('즉시 실행함수 패턴 2');
  console.log($j$ === window.jQuery);
}(jQuery));

// IIFE + Closure
// var fnWrapper = function() {
//   return function() {

//   };
// };

// var fnc = fnWrapper();


// var fnc_iffy = (function(){
//   return function() {

//   };
// })();


// var y9 = {
//   'members': [],
//   'job': 'instructor',
//   'getName': (function(){
//     var name = 'hoon';
//     return function() {
//       return name;
//     }
//   })();
// };

// (function(yamoo9){

//   yamoo9.memory = [];

// })((this.yamoo9 = this.yamoo9 || {}));


// (function(yamoo9){
//   console.log(yamoo9.memory);
//   var members = [];
//   var name = 'hoon';
//   var job = 'instructor';

//   yamoo9.getName = function() {
//     return name;
//   };

// })((this.yamoo9 = this.yamoo9 || {}));


// (function(global){

//   var private_member = [];

//   global.yamoo9 = {
//     'accessMember': function() {
//       return private_member;
//     }
//   };

// })(this);
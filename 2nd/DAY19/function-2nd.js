/*! function-2nd.js © yamoo9.net, 2016 */

// 전역
// 느슨한 모드

// 자바스크립트 함수를 일급객체(`Frist Class Object`)라고 부르는 이유 중 하나.
// 함수의 인자로 함수를 전달할 수 있다. [콜백 패턴]
function localScope(callback) {
  // 엄격 모드 실행
  'use strict';
  // 특정 코드를 수행 ...
  for ( var i=0, l=100; i<l; i+=4 ) {
    console.log('i:', i);
  }
  // 전달 받은 인자(함수)를 실행
  // 조건 구문을 사용하여 올바른 데이터 유형을 감지한 후, 올바르다면 코드 실행
  // 전달 받은 인자의 유형이 함수일 경우에만 callback() 실행

  // 1. if문을 사용할 경우
  var is_callback = typeof callback === 'function';
  // if ( is_callback ) {
  //   callback();
  // }
  // 2. 3항 연산자를 사용한 조건 처리
  // is_callback ? callback() : null;
  // 3. 논리 연산자를 사용한 조건 처리
  is_callback && callback();
  // 4. swich 문을 사용하는 조건 처리
  // switch( is_callback ) {
  //   case true: callback();
  //   break;
  //   case false: console.info('함수를 전달할 경우 콜백 처리됩니다.');
  // }
}

// 경우 1. 함수 인자가 있을 경우
localScope(function() {
  console.log('localScope 함수의 코드가 모두 실행된 다음 전달된 함수 실행');
  console.log('%c------------------------------', 'color: #3d9a21');
});

// 경우 2. 함수 인자가 없을 경우
localScope();


// --------------------------------------------------------------------------------

// 함수가 일급객체인 이유 2
// 함수는 함수를 인자로 받을 수 있을 뿐만 아니라, 함수를 반환(return)할 수도 있다.

function returnFunction (data) {
  var a = data[0];
  var b = data[1];
  var c = function(){ return a + b; };
  return c;
}

var sum = returnFunction([ 10, 20 ]);

console.log( typeof sum ); // 'function'

console.log( sum() ); // 30
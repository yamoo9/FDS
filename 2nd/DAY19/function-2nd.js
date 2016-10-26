(function(global){
  'use strict';

  // 지역
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

  console.log('%c------------------------------', 'color: #3d9a21');

  // 자바스크립트 함수에서 함수를 반환하다.
  function createCountDown(count) {
    // count 매개변수(Parameter) 값 초기 설정
    // count = ( typeof count !== 'number' ? false : count ) || 10;
    // 위 코드를 if 조건문으로 바꿨을 경우
    if ( typeof count !== 'number' ) { count = 10; }

    // 함수 createCountDown의 내부에 존재하는 함수
    function _countDown() {
      // Count Down하는 로직
      return --count;
    };

    // 내부 함수인 _countDown()을 반환
    return _countDown;
  }

  // --------------------------------------------------------------------------------

  // createCountDown('90'); // count => 10
  var countDown90 = createCountDown(90);   // count => 90

  // ※ 함수 실행 과정에서 기억해두기 위한 변수는 동일한 영역에 존재하지 않아야 한다.
  // 변수는 초기 선언과정에서 값이 할당되면 그 순간으로 더 이상 코드가 다시 실행되지 않아요.
  var count = 10;

  function countDown() {
    // var count = 20;
    // 전역에 선언된 count 변수에 복사된 값을 함수가 수행될 때 마다 변경합니다.
    count = count - 1; // 이 코드의 연산 결과는 다음 라인에서 처리됩니다.
    return count;
  }

  console.log(countDown()); // 10
  console.log(countDown()); // 9
  console.log(countDown()); // 8
  console.log(countDown());
  console.log(countDown());
  console.log(countDown());
  console.log(countDown());
  console.log(countDown());
  console.log(countDown());
  console.log(countDown());
  console.log(countDown());

  // --------------------------------------------------------------------------------

  // 객체를 전달받는 함수, 객체를 반환하는 함수
  // 문서 객체에 스타일을 설정하는 함수
  function mixin(o) {
    var mix_obj = {name: 'mix', age: 1};
    // mix_obj와 o를 합치는 로직
    for ( var prop in o ) {
      // console.log(prop, o[prop]); // name, has_kids
      mix_obj[prop] = o[prop];
    }
    return mix_obj; // 객체 반환
  }


  var fusion_obj = mixin( {name: 'no-mixin', has_kids: false, has_parents: true, married: false} );

  console.log(fusion_obj);

  console.log('%c------------------------------', 'color: #3d9a21');

  // 자바스크립트 함수의 특징
  // 어떤 데이터 유형도 전달 인자로 받을 수 있고,
  // 어떤 데이터 유형도 반환할 수 있다.
  // 이 과정에서 객체[함수, 배열, 객체]를 반환할 경우
  // {반환된 객체}가 함수의 감춰진 영역에 접근할 수 있다.
  // 이 부분을 사람들은 클로저(영역)라고 부른다.
  // 클로저 함수(객체)

  // 모던 자바스크립트에서의 모듈 패턴
  // 함수를 활용하여 언어 차원에서 지원하지 않았던 모듈을 구현
  // 일반 함수가 아닌, `IIFE 패턴`을 사용한 `즉시 실행 함수`

  // IIFE 패턴
  // function (){} // ... 문법 오류
  // function (){}() // () 실행 연산자 붙은 이 코드도... 문법 오류

  // 아래 코드는 정상적으로 함수가 실행된다. 즉시!!!!
  // +function (){ console.log('IIFE Pattern'); }();
  // !function (){ console.log('IIFE Pattern'); }();
  // ~function (){ console.log('IIFE Pattern'); }();

  // 정체모를 위 코드 보다는 아래와 같은 유형으로 작성하길 권장!!
  ( function(){ console.log('IIFE Pattern'); }() ); // 권장!
  ( function(){ console.log('IIFE Pattern'); } )();

  // ECMAScript 2015 (ES6) 모듈이 정식으로 언어 차원에서 지원


  // 외부에 코드를 공개하고 싶다.

  console.log('count:', count);
  // 노출 패턴
  global.count = count;
})(window);

// A Team
(function(global){
  'use strict';
  var fds = '프론트엔드 개발 A팀';
})(this);

// B Team
(function(global){
  'use strict';
  var fds = '프론트엔드 개발 B팀';
})(this);
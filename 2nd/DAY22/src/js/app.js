/*! app.js © yamoo9.net, 2016 */

// 의존 모듈 주입 (Dependency Module Injection)
// DOM_Helper 모듈
(function(global, $){
  'use strict';

  // $ === DOM_Helper 라이브러리
  // 라이브러리 정보 출력
  // console.log('$.name:', $.name);
  // console.log('$.version:', $.version);

  var num = 0;

  console.log( $.isNumber(num) );
  console.log( $.isBoolean(num) );

})(this, this.DOM_Helper);
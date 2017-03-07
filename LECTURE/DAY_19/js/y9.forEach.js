/*! y9.forEach.js © yamoo9.net, 2017 */

(function(global, y9){
  'use strict';

  // y9 모듈 개발 코드
  y9.forEach = function(data, callback) {
    // 유효성 검사
    if ( !data || !data.length ) {}
    if (!callback || typeof callback !== 'function' ) {}
    // 집합, 함수
    for ( var i=0, l=data.length; i<l; i++ ) {
      callback.call(data, data[i], i, data);
    }
  };

})(this, (this.y9 = this.y9 || {}) );


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

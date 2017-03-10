/*! Model.js © yamoo9.net, 2017 */

var Model = (function(global){
  'use strict';

  // 생성자 함수
  function _Model(data) {
    // 데이터 검증
    // ES5 Array.isArray()
    if ( data && !Array.isArray(data) ) {
      throw new Error('초기 데이터 유형은 배열만 가능합니다.');
    }
    // 데이터 (배열)
    this.data = data || [];
    // 암시적 this 객체 반환
    // return this;
  }

  // 생성자 함수.프로토타입객체
  // C 생성
  // R 읽기
  // U 변경
  // D 제거
  _Model.prototype = {
    'create' : function() {
      // 모델 데이터에 새로운 아이템을 추가한다.
    },
    'read'   : function() {
      // 존재하는 모델 데이터 아이템을 읽어온다. (반환)
    },
    'update' : function() {
      // 존재하는 모델 데이터 아이템을 수정한다.
    },
    'delete' : function() {
      // 존재하는 모델 데이터 아이템을 제거한다.
    }
  };

  return _Model;

})(window);

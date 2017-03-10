/*! Model.js © yamoo9.net, 2017 */

var Model = (function(global){
  'use strict';

  // 은폐
  var data_list;

  // 생성자 함수
  function _Model(data) {
    // 데이터 검증
    // ES5 Array.isArray()
    if ( data && !Array.isArray(data) ) {
      throw new Error('초기 데이터 유형은 배열만 가능합니다.');
    }
    // 데이터 (배열)
    data_list = data || [];
    // 암시적 this 객체 반환
    // return this;
  }

  // 생성자 함수.프로토타입객체
  // C 생성
  // R 읽기
  // U 변경
  // D 제거
  _Model.prototype = {
    'create' : function(new_item) {
      // 모델 데이터에 새로운 아이템을 추가한다.
      data_list.push(new_item);
    },
    'read'   : function(index) {
      // 존재하는 모델 데이터 아이템을 읽어온다. (반환)
      if ( typeof index === 'undefined' ) {
        return data_list;
      } else {
        if ( index < 0 ) {
          return this.read(this.size() + index);
        } else {
          return data_list[index];
        }
      }
    },
    'update' : function(index, callback) {
      // 존재하는 모델 데이터 아이템을 수정한다.
      data_list.splice(index, 1, callback.call(this, data_list[index]));
    },
    'delete' : function(index) {
      // 존재하는 모델 데이터 아이템을 제거한다.
      return data_list.splice(index, 1);
    },
    'size': function() {
      return data_list.length;
    }
  };

  return _Model;

})(window);

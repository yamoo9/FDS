/*! Model.js © yamoo9.net, 2017 */

var Model = (function(){
  'use strict';

  // 은폐
  var data_list=[];
  // 생성 카운트
  var generated_count = 0;

  // 생성자 함수
  function _Model(data) {
    // 데이터 검증
    // ES5 Array.isArray()
    if ( data && !Array.isArray(data) ) {
      throw new Error('초기 데이터 유형은 배열만 가능합니다.');
    }
    // 생성된 카운트 기억
    // this.generated_count = ++generated_count;
    this.g = generated_count++;
    // 데이터 (배열)
    data_list.push(data || []);
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
      data_list[this.g].push(new_item);
    },
    'read'   : function(index) {
      // 존재하는 모델 데이터 아이템을 읽어온다. (반환)
      if ( typeof index === 'undefined' ) {
        return data_list[this.g];
      } else {
        if ( index < 0 ) {
          return this.read(this.size() + index);
        } else {
          return data_list[this.g][index];
        }
      }
    },
    'update' : function(index, callback) {
      var instance = this;
      var original_item = instance.read(index);
      // 존재하는 모델 데이터 아이템을 수정한다.
      data_list.splice(index, 1, callback.call(instance, original_item));
    },
    'delete' : function(index) {
      // 존재하는 모델 데이터 아이템을 제거한다.
      return data_list[this.g].splice(index, 1);
    },
    'size': function() {
      return data_list[this.g].length;
    }
  };

  return _Model;

})();

/*! Model.js © yamoo9.net, 2017 */

var Model = (function(){
  'use strict';

  var data_list       =[];
  var generated_count = 0;
  var JSON            = window.JSON;
  var localStorage    = window.localStorage;

  // Constructor
  function Model(data) {
    if ( data && !Array.isArray(data) ) {
      throw new Error('초기 데이터 유형은 배열만 가능합니다.');
    }
    this.g = generated_count++;
    data_list.push(data || []);
  }

  // Static Method :: JSON
  Model.serialize = function(obj) {
    if ( !JSON ) { return console.info('JSON을 지원하지 않는 브라우저입니다.'); }
    return JSON.stringify(obj);
  };
  Model.parse = function(str) {
    if ( !JSON ) { return console.info('JSON을 지원하지 않는 브라우저입니다.'); }
    return JSON.parse(str);
  };
  // Static Method :: localStorage
  Model.save = function(key, value) {
    localStorage.setItem(key, value);
  };
  Model.load = function(key) {
    return localStorage.getItem(key);
  };
  Model.remove = function(key) {
    localStorage.removeItem(key);
  };
  Model.clear = function() {
    localStorage.clear();
  };

  // Model.prototype
  Model.prototype = {
    'create' : function(new_item) {
      if ( Array.isArray(new_item) ) {
        data_list[this.g] = data_list[this.g].concat(new_item);
      }
      if ( new_item && !Array.isArray(new_item) && typeof new_item === 'object' ) {
        data_list[this.g].push(new_item);
      }
    },
    'read' : function(index) {
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
      data_list.splice(index, 1, callback.call(instance, original_item));
    },
    'delete' : function(index) {
      return data_list[this.g].splice(index, 1);
    },
    'size': function() {
      return data_list[this.g].length;
    }
  };

  return Model;

})();

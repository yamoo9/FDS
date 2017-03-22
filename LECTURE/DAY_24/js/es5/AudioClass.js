'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! AudioClass.js © yamoo9.net, 2017 */

// private
var _defaults = new WeakMap();

var defaults = {
  // 미디어 음원 경로
  src: '',
  // 이벤트 콜백 (기본 값: 아무 것도 실행하지 않음)
  beforeCreate: null,
  created: null,
  beforePlay: null,
  played: null,
  update: null,
  beforePause: null,
  paused: null,
  beforeStop: null,
  stoped: null,
  beforeDestroy: null,
  destroyed: null
};

var AudioClass = function () {

  // constructor
  function AudioClass(options) {
    _classCallCheck(this, AudioClass);

    _defaults.set(this, defaults);
    this.media = null;
    return this.init(options);
  }

  // static methods


  _createClass(AudioClass, [{
    key: 'init',


    // instance methods
    value: function init(options) {
      // 옵션 덮어쓰기
      var options = this.options = Object.assign(_defaults.get(this), options);
      // 생성 이전 시점
      if (typeof options.beforeCreate === 'function') {
        options.beforeCreate.call(this);
      }
      // 음원 생성
      this.media = this.create();
      // 업데이트 시점
      if (typeof options.update === 'function') {
        this.update(options.update);
      }
      // AudioClass {} 객체 반환
      return this;
    }
  }], [{
    key: 'getReadableTime',
    value: function getReadableTime(seconds) {
      var min = void 0,
          sec = void 0;
      seconds = Math.floor(seconds);
      min = Math.floor(seconds / 60);
      min = min >= 10 ? min : '0' + min;
      sec = Math.floor(seconds % 60);
      sec = sec >= 10 ? sec : '0' + sec;
      return min + ':' + sec;
    }
  }, {
    key: 'validate',
    value: function validate(condition, error_message) {
      if (condition) {
        throw new Error(error_message);
      }
    }
  }, {
    key: 'isAudioObject',
    value: function isAudioObject(data) {
      return data && data.constructor === HTMLAudioElement;
    }
  }, {
    key: 'hasSign',
    value: function hasSign(word, sign) {
      return word.includes(sign);
    }
  }, {
    key: 'getCurrentRotation',
    value: function getCurrentRotation(el) {
      AudioClass.validate(el.nodeType !== 1, '요소노드를 전달해야 합니다.');
      var transform_style = window.getComputedStyle(el).transform,
          values = void 0,
          a = void 0,
          b = void 0,
          c = void 0,
          d = void 0,
          radians = void 0,
          angle = void 0;
      if (transform_style && transform_style !== 'none') {
        values = transform_style.split('(')[1];
        values = values.split(')')[0];
        values = values.split(',');
        a = values[0];
        b = values[1];
        c = values[2];
        d = values[3];
        radians = Math.atan2(b, a);
        if (radians < 0) {
          radians += 2 * Math.PI;
        }
        angle = Math.round(radians * (180 / Math.PI));
      } else {
        angle = 0;
      }
      return angle;
    }
  }]);

  return AudioClass;
}();
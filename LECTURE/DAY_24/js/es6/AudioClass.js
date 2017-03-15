/*! AudioClass.js © yamoo9.net, 2017 */

// private
let _defaults = new WeakMap();

let defaults = {
  // 미디어 음원 경로
  src: '',
  // 이벤트 콜백 (기본 값: 아무 것도 실행하지 않음)
  beforeCreate  : null,
  created       : null,
  beforePlay    : null,
  played        : null,
  update        : null,
  beforePause   : null,
  paused        : null,
  beforeStop    : null,
  stoped        : null,
  beforeDestroy : null,
  destroyed     : null
};

class AudioClass {

  // constructor
  constructor(options) {
    _defaults.set(this, defaults);
    this.media = null;
    return this.init(options);
  }

  // static methods
  static getReadableTime(seconds) {
    let min, sec;
    seconds = Math.floor( seconds );
    min = Math.floor( seconds / 60 );
    min = min >= 10 ? min : '0' + min;
    sec = Math.floor( seconds % 60 );
    sec = sec >= 10 ? sec : '0' + sec;
    return min + ':' + sec;
  }
  static validate(condition, error_message) {
    if ( condition ) { throw new Error(error_message); }
  }
  static isAudioObject(data) {
    return data && data.constructor === HTMLAudioElement;
  }
  static hasSign(word, sign) {
    return word.includes(sign);
  }
  static getCurrentRotation(el) {
    AudioClass.validate(el.nodeType !== 1, '요소노드를 전달해야 합니다.');
    let values, a, b, c, d, radians, angle,
        transform_style = window.getComputedStyle(el).transform;
    if ( transform_style && transform_style !== 'none' ) {
      values = transform_style.split('(')[1];
      values = values.split(')')[0];
      values = values.split(',');
      a = values[0];
      b = values[1];
      c = values[2];
      d = values[3];
      radians = Math.atan2(b, a);
      if ( radians < 0 ) {
        radians += (2 * Math.PI);
      }
      angle = Math.round( radians * (180/Math.PI));
    } else {
      angle = 0;
    }
    return angle;
  }

  // instance methods
  init(options) {
  //   // 옵션 덮어쓰기
  //   var options = this.options = Object.assign( _defaults.get(this) , options);
  //   // 생성 이전 시점
  //   if( typeof options.beforeCreate === 'function' ) { options.beforeCreate.call(this); }
  //   // 음원 생성
  //   this.media = this.create();
  //   // 업데이트 시점
  //   if( typeof options.update === 'function' ) { this.update(options.update); }
  //   // AudioClass {} 객체 반환
  //   return this;
  }

}

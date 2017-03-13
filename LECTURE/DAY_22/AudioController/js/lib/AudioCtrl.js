/*! AudioCtrl.js © yamoo9.net, 2017 */

(function(global){
  'use strict';

  // 클래스(생성자 함수)
  function AudioCtrl(options) {
    'use strict';
    // 미디어 초기화
    this.media = null;
    // 클래스 인스턴스 초기화(옵션 전달)
    return this.init(options);
  }

  // 클래스(생성자 함수) 메서드
  AudioCtrl.getReadableTime = function(seconds){
    var min, sec;
    seconds = Math.floor( seconds );
    min = Math.floor( seconds / 60 );
    min = min >= 10 ? min : '0' + min;
    sec = Math.floor( seconds % 60 );
    sec = sec >= 10 ? sec : '0' + sec;
    return min + ':' + sec;
  };
  AudioCtrl.validate = function (condition, error_message) {
    if ( condition ) { throw new Error(error_message); }
  };
  AudioCtrl.isAudioObject = function (data) {
    return data && data.constructor === HTMLAudioElement;
  };
  AudioCtrl.hasSign = function(word, sign) {
    return word.indexOf(sign) > -1;
  };
  AudioCtrl.getCurrentRotation = function( el ) {
    AudioCtrl.validate(el.nodeType !== 1, '요소노드를 전달해야 합니다.');
    var transform_style = global.getComputedStyle(el).transform;
    var values, a, b, c, d, radians, angle;
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
  };

  AudioCtrl.defaults = {
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

  // 프로토타입 메서드
  AudioCtrl.prototype.init = function(options) {
    // 옵션 덮어쓰기
    var options = this.options = Object.assign(AudioCtrl.defaults, options);
    // 생성 이전 시점
    if( typeof options.beforeCreate === 'function' ) { options.beforeCreate.call(this); }
    // 음원 생성
    this.media = this.create();
    // 업데이트 시점
    if( typeof options.update === 'function' ) { this.update(options.update); }
    // AudioCtrl {} 객체 반환
    return this;
  }
  AudioCtrl.prototype.create = function() {
    var _this = this;
    // 생성
    var audio = document.createElement('audio');
    // 옵션 변수
    var options = this.options;
    // 경로 변수
    var source = options.src;
    // 검사
    AudioCtrl.validate(typeof source !== 'string' || !source.trim(), '전달된 음원 경로는 문자열이 아니거나, 공백 문자입니다.');
    // 설정
    audio.setAttribute('src', source);
    // 생성/재생 가능 이후 시점
    audio.oncanplay = function() {
      if( typeof options.created === 'function' ) { options.created.call(_this, audio); }
    }
    // audio 객체 반환
    return audio;
  };
  AudioCtrl.prototype.update = function(callback) {
    var audio = this.media;
    audio.ontimeupdate = callback.bind(this, audio);
  };
  AudioCtrl.prototype.play = function() {
    var options = this.options;
    if ( typeof options.beforePlay === 'function' ) { options.beforePlay.call(this, this.media); }
    this.media.play();
    if ( typeof options.played === 'function' ) { options.played.call(this, this.media); }
  };
  AudioCtrl.prototype.pause = function() {
    var options = this.options;
    if ( typeof options.beforePause === 'function' ) { options.beforePause.call(this, this.media); }
    this.media.pause();
    if ( typeof options.paused === 'function' ) { options.paused.call(this, this.media); }
  };
  AudioCtrl.prototype.stop = function(callback) {
    var options = this.options;
    if ( typeof options.beforeStop === 'function' ) { options.beforeStop.call(this, this.media); }
    this.media.pause();
    this.media.currentTime = 0;
    if ( typeof options.stoped === 'function' ) { options.stoped.call(this, this.media); }
    if ( typeof callback === 'function' ) { callback.call(this); }
  };
  AudioCtrl.prototype.destroy = function() {
    var options = this.options;
    if ( typeof options.beforeDestroy === 'function' ) { options.beforeDestroy.call(this, this.media); }
    this.stop(function() { this.media = ''; });
    global.setTimeout(function() {if ( typeof options.destroyed === 'function' ) { options.destroyed.call(this); }}, 10);
  };
  AudioCtrl.prototype.mute = function() {
    this.media.volume = 0;
    var options = this.options;
    if ( typeof options.muted === 'function' ) { options.muted.call(this, this.media); }
  };
  AudioCtrl.prototype.getCurrentTime = function() {
    return AudioCtrl.getReadableTime( this.media.currentTime );
  };
  AudioCtrl.prototype.getTotalTime = function() {
    return AudioCtrl.getReadableTime( this.media.duration );
  };
  AudioCtrl.prototype.getProgress = function(precision, unit) {
    var audio = this.media;
    var percent = audio.currentTime / audio.duration * 100;
    precision = precision || 0;
    return percent.toFixed(precision) + '%';
  };
  AudioCtrl.prototype.volume = (function(){
    'use strict';
    return function(value) {
      if ( !value ) { return this.media.volume; }
      else {
        if ( typeof value === 'number' ) {
          if( value >= 0 && value <= 1 ) {
            this.media.volume = value;
          }
        }
        if ( AudioCtrl.hasSign(value, '+') ) {
          value = this.media.volume + Number(value.replace(/\+/, ''));
          this.media.volume += value >= 1 ? 1 : value;
        }
        else if ( AudioCtrl.hasSign(value, '-') ) {
          value = this.media.volume - Number(value.replace(/\-/, ''));
          this.media.volume += value <= 0 ? 0 : value;
        }
      }
    };
  })();


  // 외부에 공개
  global.AudioCtrl = AudioCtrl;

})(window);

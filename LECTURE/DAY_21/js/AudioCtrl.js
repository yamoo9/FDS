/*! AudioCtrl.js © yamoo9.net, 2017 */

// 생성자 함수
// Constructor Function
// JavaScript 객체를 생성할 수 있는 함수
// 이름 규칙: 함수의 첫글자를 대문자로 시작.
function AudioCtrl(source) {
  // new 키워드를 함께 사용하지 않고 실행했을 경우
  // this는 window {} 객체 아닌, undefined를 가리키게 된다.
  // console.log('this:', this);
  'use strict';

  // Audio 객체 생성
  // IE 9+ / [HTML5 Audio, MP3 Format] http://caniuse.com/#search=mp3
  var audio = document.createElement('audio');

  // 소스 전달인자 유효성 검사
  AudioCtrl.validate(
    typeof source !== 'string' || !source.trim()
  , '전달된 인자는 문자열이 아니거나, 공백 문자입니다.');

  // 오디오 소스 설정
  audio.setAttribute('src', source);

  // this는 생성된 오디오컨트롤( AudioCtrl {} ) 객체를 말한다.
  // audio 는 함수 내부에서만 접근 가능한 지역 변수이므로
  // this 객체의 속성에 할당하여 인스턴스 메서드가 접근할 수 있도록 설정
  this.media = audio;

  // 암시적으로 this ( 오디오컨트롤( AudioCtrl {} ) 객체 )를 반환
  // return this;
}

// 스태틱 멤버(속성/메서드)
// Static Properties/Methods
// 객체의 생성 과정 없이 메서드를 임의로 사용 가능
// 객체 아닌, 다른 경우에도 사용할 수 있다.
// 일반적으로는 네임스페이스.헬퍼() 함수
// jQuery -> 유틸리티 메서드

// 초단위 -> 분:초 로 변경하는 헬퍼 함수
AudioCtrl.getReadableTime = function(seconds){
  var min, sec;
  seconds = Math.floor( seconds );
  min = Math.floor( seconds / 60 );
  min = min >= 10 ? min : '0' + min;
  sec = Math.floor( seconds % 60 );
  sec = sec >= 10 ? sec : '0' + sec;
  return min + ':' + sec;
};
// 오류 감지 시, 오류 처리하는 헬퍼 함수
AudioCtrl.validate = function (condition, error_message) {
  if ( condition ) { throw new Error(error_message); }
};
// 오디오 객체인지 체크하는 헬퍼 함수
AudioCtrl.isAudioObject = function (data) {
  return data && data.constructor === HTMLAudioElement;
};
// 기호를 포함하는지 체크하는 헬퍼 함수
AudioCtrl.hasSign = function(word, sign) {
  return word.indexOf(sign) > -1;
};

// 인스턴스 멤버(속성/메서드)
// Instance Properties/Methods
// JavaScript 프로토타입(fn 별칭(Alias) 사용) 객체 활용
// 생성된 객체가 사용하는 공통 메서드

// 프로토타입 객체 별칭
AudioCtrl.fn = AudioCtrl.prototype;

AudioCtrl.fn.play = function() {
  // this === AudioCtrl {}
  // this.media === HTMLAudioElement {}
  this.media.play();
};
AudioCtrl.fn.pause = function() {
  this.media.pause();
};
AudioCtrl.fn.stop = function() {
  this.media.pause();
  this.media.currentTime = 0;
};
AudioCtrl.fn.mute = function() {
  this.media.volume = 0;
};
AudioCtrl.fn.getCurrentTime = function() {
  return AudioCtrl.getReadableTime( this.media.currentTime );
};
AudioCtrl.fn.getTotalTime = function() {
  return AudioCtrl.getReadableTime( this.media.duration );
};

// my_audio.volume() // 0.3 값 가져오기
// my_audio.volume(0.45) // 0.45 설정
// my_audio.volume('+0.2') // 현재 볼륨 값 + 0.2
// my_audio.volume('-0.2') // 현재 볼륨 값 - 0.2

AudioCtrl.fn.volume = (function(){
  'use strict';

var volumeUp = function(value) {
  if ( this.media.volume >= 1 ) { return; }
  var vol = this.media.volume + (value || 0.1);
  this.media.volume = vol > 1 ? 1 : vol;
  return this.media.volume;
};
var volumeDown = function(value) {
  if ( this.media.volume <= 0 ) { return; }
  var vol = this.media.volume - (value || 0.1);
  this.media.volume = vol < 0 ? 0 : vol;
  return this.media.volume;
};

  return function(value) {
    // 상황 1. value가 전달되지 않았을 경우 (GET)
    if ( !value ) {
      return this.media.volume;
    }
    // 상황 2. value가 전달된 경우 (SET)
    else {
      // 숫자 값 [0,1] 전달된 경우
      if ( typeof value === 'number' ) {
        if( value >= 0 && value <= 1 ) {
          this.media.volume = value;
        }
      }
      // 문자 값이 전달된 경우
      // +
      if ( AudioCtrl.hasSign(value, '+') ) {
        value = this.media.volume + Number(value.replace(/+/, ''));
        this.media.volume += value >= 1 ? 1 : value;
      }
      // -
      else if ( AudioCtrl.hasSign(value, '-') ) {
        value = this.media.volume - Number(value.replace(/-/, ''));
        this.media.volume += value <= 0 ? 0 : value;
      }
    }
  };

})();

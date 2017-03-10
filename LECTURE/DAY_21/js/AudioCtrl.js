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
  // 전달인자 유효성 검사
  AudioCtrl.validate(
    typeof source !== 'string' || !source.trim()
  , '전달된 인자는 문자열이 아니거나, 공백 문자입니다.');
  audio.setAttribute('src', source);

  // this는 생성된 오디오컨트롤 객체를 말한다.
  // audio 는 함수 내부에서만 접근 가능한 지역 변수이므로
  // this 객체의 속성에 할당하여 인스턴스 메서드가 접근할 수 있도록 설정
  this.media = audio;
  // 암시적으로 this를 반환
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

// 인스턴스 멤버(속성/메서드)
// Instance Properties/Methods
// JavaScript 프로토타입 객체 활용
// 생성된 객체가 사용하는 공통 메서드
AudioCtrl.prototype.play = function() {
  // this === AudioCtrl {}
  // this.media === HTMLAudioElement {}
  this.media.play();
};
AudioCtrl.prototype.pause = function() {
  this.media.pause();
};
AudioCtrl.prototype.stop = function() {
  this.media.pause();
  this.media.currentTime = 0;
};

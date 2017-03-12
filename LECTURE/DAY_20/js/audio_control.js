/*! audio_control.js © yamoo9.net, 2017 */

// 모듈 패턴 (비공개|공개 설정)
;(function(global){
  'use strict';

  // 오류 감지 시, 오류 처리하는 헬퍼 함수
  function validate(condition, error_message) {
    if ( condition ) { throw new Error(error_message); }
  }
  // 오디오 객체인지 체크하는 헬퍼 함수
  function isAudioObject(data) {
    return data && data.constructor === HTMLAudioElement;
  }

  // 외부 공개
  global.validate = validate;
  global.isAudioObject = isAudioObject;

})(window);



;(function(global, $){
  'use strict';

  // 오디오 객체 생성/속성 설정
  // IE 9+ / [HTML5 Audio, MP3 Format] http://caniuse.com/#search=mp3
  var audio     = document.createElement('audio');
  var audio_src = 'media/source/001.EdSheeran-ShapeOfYou.mp3';
  audio.setAttribute('src', audio_src);

  // 오디오 대체수단 생성/속성 설정
  var alt_audio_link = document.createElement('a');
  alt_audio_link.setAttribute('href', audio_src);
  alt_audio_link.innerHTML = 'Ed Sheeran - Shape Of You';

  // 오디오 ⬅︎ 대체수단 삽입
  audio.appendChild(alt_audio_link);

  // 오디오 객체 재생 가능한 시점(oncanplay)이 되면 재생(.play())
  audio.oncanplay = function() {
    audio_time_total.innerHTML = $.getReadableTime(audio.duration);
  };

  // 오디오 객체 재생 중, 시간 업데이트 이벤트 핸들링
  audio.ontimeupdate = function() {
    seekbar_progress.style.width = this.getProgress(3) + '%';
    audio_time_current.innerHTML = $.getReadableTime(this.currentTime);
  };

  // --------------------------------------------------------------------------

  // 시크바 프로세스 문서 객체 참조
  var seekbar_progress   = document.querySelector('.audio-seekbar-progress');
  var audio_time_current = document.querySelector('.audio-time-current');
  var audio_time_total   = document.querySelector('.audio-time-total');
  var btn_play           = document.querySelector('.audio-control__play');
  var btn_pause          = document.querySelector('.audio-control__pause');
  var btn_stop           = document.querySelector('.audio-control__stop');

  // Function.prototype.bind 메서드 빌려쓰기 패턴 활용
  btn_play.onclick  = audio.play.bind(audio);
  btn_pause.onclick = audio.pause.bind(audio);
  btn_stop.onclick  = audio.stop.bind(audio);

})(window, window.HTMLAudioElement);

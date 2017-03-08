/*! audio_control.js © yamoo9.net, 2017 */

// HTMLAudioElement.prototype 객체 확장
;(function(Audio){
  'use strict';

  if ( !Audio.prototype.stop ) {
    Audio.prototype.stop = function() {
      this.pause();
      this.currentTime = 0;
      // return this;
    };
  }

})(HTMLAudioElement);

// 모듈 패턴 (비공개|공개 설정)
;(function(global){
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

  // 오디오 객체 확인
  // console.log(audio);

  // 오디오객체 생성자 함수 확인
  // 생성자 함수: HTMLAudioElement
  // console.log(audio.constructor);
  // 프로토타입 객체: HTMLAudioElement.prototype
  // console.log(audio.constructor.prototype);
  // console.log(audio.__proto__);

  // 오류 감지 시, 오류 처리하는 헬퍼 함수
  function validate(condition, error_message) {
    if ( condition ) { throw new Error(error_message); }
  }
  // 오디오 객체인지 체크하는 헬퍼 함수
  function isAudioObject(data) {
    return data && data.constructor === HTMLAudioElement;
  }
  // 오디오 객체를 재생(play)하는 함수
  function playMusic(audio) {
    validate(!isAudioObject(audio), '오디오 객체가 전달되지 않았습니다.');
    audio.play();
  }
  // 재생 중인 오디오 객체를 정지(stop)하는 함수
  function stopMusic(audio) {
    validate(!isAudioObject(audio), '오디오 객체가 전달되지 않았습니다.');
    // 오디오 객체 일시정지
    // audio.pause();
    // 현재 재생 시간 콘솔에 기록
    // console.log('현재 재생 시간:', audio.currentTime);
    // audio.currentTime = 0;
    audio.stop();
  }

  // 오디오 객체 재생 가능한 시점(oncanplay)이 되면 재생(.play())
  audio.oncanplay = function() {
    // 현재 시간 / 완료 시간
    // .currentTime
    // console.log('audio.currentTime:', audio.currentTime);
    // .duration
    // console.log('audio.duration:', audio.duration);
  };
  // 오디오 객체 재생 중인 상태를 감지하는 이벤트
  // ontimeupdate
  // console.log('audio.ontimeupdate:', audio.ontimeupdate);
  audio.ontimeupdate = function() {
    // console.log('this.currentTime:', this.currentTime);

    var current = this.currentTime;
    var total   = this.duration;
    var percent = Math.floor(current/total*100);

    console.log('percent:', percent + '%');

  };

  // 0.3초가 지나면, 재생 중인 오디오를 일시정지(.pause()) 하라.
  // window.setTimeout(function() {
  //   // audio.pause();
  //   audio.stop(); // 미지원 API
  // }, 1000);


  // 외부에서 접근 가능하도록 공개
  global.audio = audio;
  global.stopMusic = stopMusic;
  global.playMusic = playMusic;

})(window);

(function(global){
  'use strict';

  // readableDuration() 함수 정의

})(window);


// 오디오 컨트롤 제어
(function(global, audio){
  'use strict';

  if (!audio) { return; }

  var btn_play, btn_stop, btn_pause;

  btn_play  = document.querySelector('.audio-control__play');
  btn_pause = document.querySelector('.audio-control__pause');
  btn_stop  = document.querySelector('.audio-control__stop');

  btn_play.onclick = function() {
    audio.play();
  };
  btn_pause.onclick = function() {
    audio.pause();
  };
  btn_stop.onclick = function() {
    audio.stop();
  };

})(window, window.audio);

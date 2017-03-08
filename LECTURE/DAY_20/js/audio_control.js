/*! audio_control.js © yamoo9.net, 2017 */

// 오디오 객체 생성
// var audio = document.createElement('audio');
// IE 9+ / [HTML5 Audio, MP3 Format] http://caniuse.com/#search=mp3

// 오디오 객체 생성/속성 설정
var audio = new Audio();
var audio_src = 'media/source/001.EdSheeran-ShapeOfYou.mp3';
audio.setAttribute('src', audio_src);

// 오디오 대체수단 생성/속성 설정
var alt_audio_link = document.createElement('a');
alt_audio_link.setAttribute('href', audio_src);
alt_audio_link.innerHTML = 'Ed Sheeran - Shape Of You';

// 오디오 ⬅︎ 대체수단 삽입
audio.appendChild(alt_audio_link);

// 오디오 객체 확인
console.log(audio);

// 오디오 객체 재생 가능한 시점(oncanplay)이 되면 재생(.play())
audio.oncanplay = function() {
  this.play();
};

// 0.3초가 지나면, 재생 중인 오디오를 일시정지(.pause()) 하라.
window.setTimeout(function() {
  // audio.pause();
  audio.stop(); // 미지원 API
}, 1000);

// play, pause 버튼 클릭 시 이벤트 핸들링

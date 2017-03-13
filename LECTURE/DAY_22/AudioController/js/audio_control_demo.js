/*! audio_control_demo.js © yamoo9.net, 2017 */

;(function(global, Model, AudioCtrl){
  'use strict';

  // ------------------------------------------------------------------------------
  // DATABASE
  // ------------------------------------------------------------------------------
  var music_db = [
    {
      "cover"  : "001.EdSheeran-ShapeOfYou.jpg",
      "source" : "001.EdSheeran-ShapeOfYou.mp3",
      "alt"    : "shape of you"
    },
  ];

  // ------------------------------------------------------------------------------
  // USER SETTINGS
  // ------------------------------------------------------------------------------
  // 오디오 플레이리스트 목록 모델 관리 객체 생성 <- music_db
  var playList = new Model( music_db );

  // 오디오 플레이리스트 목록에 신규 아이템 추가
  playList.create([
    {
      "cover"  : "002.TheChainsmokers&Halsey-Closer.jpg",
      "source" : "002.TheChainsmokers&Halsey-Closer.mp3",
      "alt"    : "Closer"
    },
    {
      "cover"  : "003.Zayn&TaylorSwift-IDon'tWannaLiveForever(FiftyShadesDarker).jpg",
      "source" : "003.Zayn&TaylorSwift-IDon'tWannaLiveForever(FiftyShadesDarker).mp3",
      "alt"    : "I Don't Wanna Live Forever (Fifty Shades Darker)"
    }
  ]);

  // 오디오 플레이리스트 목록 확인
  // console.log(playList.read());


  // 객체 -> 문자화
  var playList_str = Model.serialize(playList.read());
  // console.log( playList_str );
  // 문자 -> 객체화
  // console.log( Model.parse(playList_str) );


  // 재생할 오디오 음원 선택
  var media = playList.read(1);

  // 오디오 컨트롤 생성
  var audio = new AudioCtrl({
    src: 'media/source/' + media.source,
    //////////////
    // 생성 이후 시점
    //////////////
    created: function() {
      // 커버 이미지 설정
      album_cover.setAttribute('src', 'media/cover/' + media.cover);
      album_cover.setAttribute('alt', media.alt);
      // 음원 시간 화면에 표시
      audio_time_current.innerHTML = this.getCurrentTime();
      audio_time_total.innerHTML   = this.getTotalTime();
      // 버튼 이벤트 핸들링
      btn_play.onclick  = this.play.bind(this);
      btn_pause.onclick = this.pause.bind(this);
      btn_stop.onclick  = this.stop.bind(this);
    },
    //////////////
    // 업데이트 시점
    //////////////
    update: function() {
      // 재생 시간 화면에 업데이트
      audio_time_current.innerHTML = this.getCurrentTime();
      seekbar_progress.style.width = this.getProgress(2);
    },
    ////////////
    // 재생된 시점
    ////////////
    played: function() {
      album_cover.classList.add('is-rotation');
      if ( this.currentRotateValue ) {
        album_cover.style.cssText = [
         'transform: rotate(' + this.currentRotateValue + 'deg)'
        ].join(';');
      }
    },
    /////////////
    // 일시정지 시점
    /////////////
    paused: function(audio) {
      if (!album_cover.classList.contains('is-rotation')) { return; }
      this.currentRotateValue = AudioCtrl.getCurrentRotation(album_cover);
      album_cover.style.cssText = [
        'animation: none',
        'box-shadow: none',
        'transform: rotate(' + this.currentRotateValue + 'deg)'
      ].join(';');
    },
    /////////////
    // 멈춤 시점
    /////////////
    stoped: function() {
      this.currentRotateValue = AudioCtrl.getCurrentRotation(album_cover);
      album_cover.style.cssText = [
        'animation: none',
        'transform: rotate(' + this.currentRotateValue + 'deg)'
      ].join(';');
      this.currentRotateValue = null;
      global.setTimeout(function() {
        album_cover.style.cssText = '';
        album_cover.classList.remove('is-rotation');
      }, 10);
    },
    /////////////
    // 파괴 시점
    /////////////
    destroyed: function() {
      // 커버 이미지 설정
      album_cover.setAttribute('src', 'http://placehold.it/125x125');
      album_cover.setAttribute('alt', '');
      // 음원 시간 화면에 표시
      audio_time_current.innerHTML = '00:00';
      audio_time_total.innerHTML   = '00:00';
      // 버튼 이벤트 핸들링
      btn_play.onclick  = null;
      btn_pause.onclick = null;
      btn_stop.onclick  = null;
      // audio 파괴
      delete global.audio;
    }
  });

  // 문서 객체 참조
  var album_cover        = document.querySelector('.cover');
  var seekbar_progress   = document.querySelector('.seekbar-progress');
  var audio_time_current = document.querySelector('.audio-time-current');
  var audio_time_total   = document.querySelector('.audio-time-total');
  var btn_play           = document.querySelector('.audio-control__play');
  var btn_pause          = document.querySelector('.audio-control__pause');
  var btn_stop           = document.querySelector('.audio-control__stop');

  // 외부에 공개
  global.audio = audio;

})(window, window.Model, window.AudioCtrl);

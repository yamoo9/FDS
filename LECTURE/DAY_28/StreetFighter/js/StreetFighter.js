/*! StreetFighter.js © yamoo9.net, 2017 */

(function(global){
  'use strict';
  // 멈춤 키
  var esc = 27;

  // 사운드 제어
  global.bgm = document.createElement('audio');
  bgm.setAttribute('src', './bgm/Street-Fighter-v5__Ryu-Theme.mp3');
  bgm.oncanplay = function() {
    // this.play();
  };
  global.document.addEventListener('keyup', function(e) {
    if ( e.keyCode === esc ) {
      bgm.pause();
    }
  });
})(window);

(function(global, Vue, bgm){
  'use strict';

  var stages = ['ryu', 'factory', 'palace', 'air'];

  function choiceStage(v) {
    // 전달 인자가 있으면 해당 번호의 스테이지 이름을 반환
    if ( v && stages[v] ) { return stages[v]; }
    // 전달 인자가 없으면, 랜덤 스테이지 이름을 반환
    else { return stages[randomNumber(stages.length)] }
  }

  function randomNumber(max) {
    return Math.floor( Math.random() * max );
  }

  // 스트리트 파이터에 사용되는 상태 데이터 속성
  // 스테이지
  // ryu, factory, palace, air
  var model = {
    stageClass: null,
    is_started: false,
  };

  // 뷰 인스턴스 생성
  global.vm = new Vue({
    // 마운트
    el: '#StreetFighter',
    // 모델 연결
    data: model,
    // 생성된 시점에 음원 재생
    created: function() {
      bgm.play();
    },
    // 마운트 된 시점에 스테이지 배경 설정
    mounted: function() {
      this.choiceStage();
    },
    // 인스턴스 메서드
    methods: {
      choiceStage: function(v) {
        this.stageClass = 'stage-' + choiceStage(v);
      }
    }
  });

})(window, window.Vue, window.bgm);

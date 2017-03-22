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

  var stages  = ['ryu', 'factory', 'palace', 'air'];
  var players = ['Bison', 'Chun-li', 'Ken', 'Ryu'];
  // var buttons = ['attack', 'special attack', 'heal', 'give up'];

  function choiceStage(v) {
    // 전달 인자가 있으면 해당 번호의 스테이지 이름을 반환
    if ( v && stages[v] ) { return stages[v]; }
    // 전달 인자가 없으면, 랜덤 스테이지 이름을 반환
    else { return stages[randomNumber(stages.length)] }
  }

  function choicePlayer(v) {
    if ( v && players[v] ) { return players[v]; }
    else { return players[randomNumber(players.length)]; }
  }

  function randomNumber(max) {
    return Math.floor( Math.random() * max );
  }

  function damage(min, max) {
      return Math.max(randomNumber(max), min);
  }

  // 스트리트 파이터에 사용되는 상태 데이터 속성
  // 스테이지
  // ryu, factory, palace, air
  var model = {
    // 스테이지 클래스
    stageClass: null,
    // 승자
    winner: null,
    // 상태
    is_started: false,
    is_finished: false,
    // 스타트 뷰 데이터
    settings: {
      logo: { src: 'images/Logo/sfv-logo.png', alt: 'Street Fighter' },
      message: 'Ready Fight!!!'
    },
    // 게임 플레이어 데이터
    players: [
      {
        name: choicePlayer(),
        HP: 100,
        style: {
          animation: 'infinite-scale 2.4s infinite alternate'
        }
      },
      {
        name: choicePlayer(),
        HP: 100,
        style: {
          animation: 'infinite-scale 1.5s infinite alternate 0.6s'
        }
      }
    ],
    // 게임 버튼
    buttons: ['attack', 'special attack', 'heal', 'give up']
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
      this.$el.setAttribute('data-message', 'winner');
      console.log(this.$refs.gameLogo);
    },
    // 인스턴스 메서드
    methods: {
      choiceStage: function(v) {
        this.stageClass = 'stage-' + choiceStage(v);
      },
      gameStart: function() {
        this.is_started = true;
      },
      playerSrc: function(name) {
        return './images/Chracter/'+ name +'.png'
      },
      detactAction: function(button) {
        switch(button) {
          case this.buttons[0]:
            this.attack();
          break;
          case this.buttons[1]:
            this.specialAttack();
          break;
          case this.buttons[2]:
            this.heal();
          break;
          case this.buttons[3]:
            this.giveUp();
        }
      },
      attack: function() {
        this.player1.HP -= damage(1, 7);
        this.player2.HP -= damage(5, 10);
        this.checkGameWinner();
      },
      specialAttack: function() {
        this.player1.HP -= damage(10, 20);
        this.player2.HP -= damage(1, 3);
        this.checkGameWinner();
      },
      heal: function() {
        var hp = this.player2.HP;
        if ( hp < 90 ) {
          this.player2.HP += 10;
        } else {
          this.player2.HP = 100;
        }
      },
      giveUp: function() {
        // 게임 초기화
        this.is_started = false;
        this.reGameStart();
      },
      checkGameWinner: function() {
        var loser = null, is_finished = false;
        if ( this.player1.HP < 0 ) {
          loser = this.player1;
          this.winner = this.player2.name;
          is_finished = true;
        }
        if ( this.player2.HP < 0 ) {
          loser = this.player2;
          this.winner = this.player1.name;
          is_finished = true;
        }
        if (is_finished) {
          loser.HP = 0;
          this.gameOver();
        }
      },
      gameOver: function() {
        this.is_finished = true;
      },
      reGameStart: function() {
        this.is_finished = false;
        this.player1.HP  = 100;
        this.player2.HP  = 100;
      }
    },
    // 계산된 속성
    computed: {
      player1: function() {
        return this.players[0];
      },
      player2: function() {
        return this.players[1];
      }
    }
  });

})(window, window.Vue, window.bgm);

/*! StreetFighter.js © yamoo9.net, 2017 */

(function(global){
  'use strict';
  // 멈춤 키
  var esc = 27;

  // 사운드 제어
  var bgm = document.createElement('audio');
  bgm.setAttribute('src', './bgm/Street-Fighter-v5__Ryu-Theme.mp3');
  bgm.oncanplay = function() {
    this.play();
  };
  global.document.addEventListener('keyup', function(e) {
    if ( e.keyCode === esc ) {
      bgm.pause();
    }
  });
})(window);

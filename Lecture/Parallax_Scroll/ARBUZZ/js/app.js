(function(global){
  'use strict';

  ///////////////
  // Detectizr //
  ///////////////
  global.Detectizr.detect();

})(this);

(function(global, $, SM){
  'use strict';

  /////////////////
  // ScrollMagic //
  /////////////////

  // ScrollMagic은 그냥 함수에 불과 네임스페이스 객체
  // console.log(SM);

  // Controller 객체 설정
  var ctrl = new SM.Controller();
  // Scene 객체 설정
  var carousel_scene = new SM.Scene({
    'triggerElement': '.carousel',
    'triggerHook': 0,
    'duration': 200,
    // 'reverse': false
  });

  carousel_scene
    .setClassToggle('.carousel', 'fade-in')
    .addIndicators({
      'name': 'carousel',
      // 'indent': 1000,
      'colorStart': '#fb62b0',
      'colorEnd': '#561b3a',
      'colorTrigger': '#5c00ee',
    }) // 디버깅
    .addTo(ctrl);

  var banner_container_scene = new SM.Scene({
    'triggerElement': '.banner-container',
    'triggerHook': 0,
    'offset': -500,
    // 'reverse': false
  });

  banner_container_scene
    .setClassToggle('.banner-container', 'fade-in')
    .addIndicators({
      'name': 'banner_container'
    }) // 디버깅
    .addTo(ctrl);

})(this, this.jQuery, this.ScrollMagic);
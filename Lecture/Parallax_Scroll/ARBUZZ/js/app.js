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

  // Controller 객체 설정
  var ctrl = new SM.Controller();

  //////////////////////////
  // 패럴럭스 씬 제어 반복 구문 //
  //////////////////////////
  var scene_list = '.carousel, .banner-container, .products-tab, .about-us, .from-the-blog, .footer'.split(', ');

  scene_list.forEach(function(trigger_el_selector, idx) {
    var scene = new SM.Scene({
      'triggerElement': trigger_el_selector,
      'triggerHook': 0,
      // 'duration': 100,
      'offset': -500,
      // 'reverse': false
    })
    .setClassToggle(trigger_el_selector, 'fade-in')
    .addIndicators()
    .addTo(ctrl);
  });

})(this, this.jQuery, this.ScrollMagic);
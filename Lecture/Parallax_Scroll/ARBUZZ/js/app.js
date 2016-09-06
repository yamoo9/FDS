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

  //////////////////
  // 핀 컨트롤(제어) //
  //////////////////
  var carousel_pin = new SM.Scene({
    'triggerElement': '.carousel',
    'triggerHook': 0,
    'duration': 550
  });

  carousel_pin
    .setPin('.carousel', {'pushFollowers': false})
    .addTo(ctrl)
    .addIndicators({
      'name': 'carousel pin',
      'colorStart': '#fe4940',
      'colorEnd': '#36a8fe'
    })
    .on('progress', function(e) {
      var t = e.target.triggerElement();
      t.style.opacity = 1 - e.progress;
      // console.log('진행 중...', e.progress);
    });

  ////////////////////////////////
  // 패럴럭스 씬 컨트롤(제어) 반복 구문 //
  ////////////////////////////////
  // var scene_list = '.carousel, .banner-container, .products-tab, .about-us, .from-the-blog, .footer'.split(', ');
  var scene_list = '.banner-container, .products-tab, .about-us, .from-the-blog, .footer > *'.split(', ');

  scene_list.forEach(function(trigger_el_selector, idx) {
    var scene = new SM.Scene({
      'triggerElement': trigger_el_selector,
      'triggerHook': 0,
      // 'duration': 100,
      // 'offset': -100 * idx,
      'offset': -500,
      // 'reverse': false
    })
    .setClassToggle(trigger_el_selector, 'fade-in')
    // .setPin(trigger_el_selector, {'pushFollowers': false})
    .addTo(ctrl)
    // .addIndicators({
    //   'name': trigger_el_selector
    // });
  });

})(this, this.jQuery, this.ScrollMagic);
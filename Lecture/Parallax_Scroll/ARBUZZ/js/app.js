(function(global){
  'use strict';

  ///////////////
  // Detectizr //
  ///////////////
  global.Detectizr.detect();

})(this);

(function(global, $, SM){
  'use strict';

  //////////////
  // TweenMax //
  //////////////

  // TweenMax.from('.brand', 1, {'y': -50});

  // TweenMax.to('.brand', 1, {'y': 50});

  // TweenMax.fromTo(document.querySelector('.brand'), 1, {'scaleX': 0, 'scaleY': 0}, {'scaleX': 1.2, 'scaleY': 1.2});

  // $('.brand').on('click', function() {
  //   // TweenMax.to(this, 1, {'scaleX': 2, 'scaleY': 2});
  //   TweenMax.to(this, 1, {css: {rotation: 180, opacity: 0, scale: 0.5}, ease: Quad.easeInOut});
  //   // $(this).animate({});
  // });


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
    'duration': 220
  });

  carousel_pin
    .setPin('.carousel', {'pushFollowers': false})
    .addTo(ctrl)
    .addIndicators({
      'name': 'carousel pin',
      'colorStart': '#fe4940',
      'colorEnd': '#36a8fe'
    })
    // .on('end', function(e) {
    //   // console.log(e);
    //   TweenMax.to( '.carousel h3', 1, {'x': -1000, 'autoAlpha': 0, 'ease': Power0.easeNone} )
    // })
    // .on('progress', function(e) {
    //   var t = e.target.triggerElement();
    //   t.style.opacity = 1 - e.progress;
    //   // console.log('진행 중...', e.progress);
    // });

  ///////////////////////////
  // GreenSock TimelineMax //
  ///////////////////////////
  var banner_tl = new TimelineMax();

  banner_tl
    .from( '.banner-shoes', 0.6, {'autoAlpha': 1, 'x': -1000, 'ease': Quad.easeOutBack} )
    .from( '.banner-leather-bags', 0.6, {'autoAlpha': 1, 'x': 1000, 'ease': Quad.easeOutBack}, 0.3 )
    .from( '.banner-woman', 0.6, {'autoAlpha': 1, 'x': 1000, 'ease': Quad.easeOutBack}, 0.4 )
    .from( '.banner-collection', 0.6, {'autoAlpha': 1, 'x': -1000, 'ease': Quad.easeInOut},0.5 );

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

    if ( trigger_el_selector === '.banner-container' ) {
      // console.log(scene);
      scene.setTween( tl );
    }
  });

})(this, this.jQuery, this.ScrollMagic);
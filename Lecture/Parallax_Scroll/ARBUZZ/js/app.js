(function(global, $, SM){
  'use strict';

  ///////////////
  // Detectizr //
  ///////////////

  global.Detectizr.detect();


  ///////////////////////////////////
  // GreenSock TimelineMax 애니메이션 //
  ///////////////////////////////////

  // 캐로셀
  var carousel_tl = new TimelineMax();
  carousel_tl
    .from( '.carousel-content h3', 0.8, {
      'css': {
        'top': '-=10',
        'left': '-=10'
      },
      'ease': Quad.easeInOut
    } )
    .from( '.carousel-content p', 1, {
      'x': -20,
      'ease': Quad.easeInOut
    }, 0 )
    .from( '.carousel-content img', 1, {
      'x': 50,
      'scale': 1.1,
      'ease': Quad.easeInOut
    }, 0 )

  // 배너
  var banner_tl = new TimelineMax();
  banner_tl
    .from('.banner-shoes', 0.6, {
      'autoAlpha': 1,
      'x': -1000,
      'ease': Quad.easeOutBack
    } )
    .from('.banner-shoes h3', 0.6, {
      'autoAlpha': 0,
      'y': 500,
      'ease': Quad.easeOutBack
    }, 0.8 )
    .from('.banner-shoes span', 1, {
      'autoAlpha': 0,
      'y': 20,
      'ease': Quad.easeInOut
    }, 1.2 )
    .from('.banner-leather-bags', 0.6, {
      'autoAlpha': 1,
      'x': 1000,
      'ease': Quad.easeOutBack
    }, 0.3 )
    .from('.banner-woman', 0.6, {
      'autoAlpha': 1,
      'x': 1000,
      'ease': Quad.easeOutBack
    }, 0.4 )
    .from('.banner-collection', 0.6, {
      'autoAlpha': 1,
      'x': -1000,
      'ease': Quad.easeInOut
    }, 0.5 );

  // 프로덕트
  var products_tl = new TimelineMax();
  products_tl
    .fromTo('.products-tab .tab-handle', 0.4,
    {
      'autoAlpha': 0,
      'scale': 0.5
    },
    {
      'autoAlpha': 1,
      'scale': 1
    })
    .fromTo('.products-tab .product-item:nth-child(1)', 0.4,
    {
      'autoAlpha': 0,
      'scale': 0.5
    },
    {
      'autoAlpha': 1,
      'scale': 1
    }, 0.2)
    .fromTo('.products-tab .product-item:nth-child(1) img', 0.3,
    {
      'autoAlpha': 0,
      'scale': 0
    },
    {
      'autoAlpha': 1,
      'scale': 1
    }, 0.45)
    .fromTo('.products-tab .product-item:nth-child(2)', 0.4,
    {
      'autoAlpha': 0,
      'scale': 0.5
    },
    {
      'autoAlpha': 1,
      'scale': 1
    }, 0.4)
    .fromTo('.products-tab .product-item:nth-child(3)', 0.4,
    {
      'autoAlpha': 0,
      'scale': 0.5
    },
    {
      'autoAlpha': 1,
      'scale': 1
    }, 0.6)
    .fromTo('.products-tab .product-item:nth-child(4)', 0.4,
    {
      'autoAlpha': 0,
      'scale': 0.5
    },
    {
      'autoAlpha': 1,
      'scale': 1
    }, 0.8);

  // 어바웃
  var about_tl = new TimelineMax();
  about_tl
    .fromTo('.about-us .headline', 1, {
      'y': -10,
      'scale': 0,
      'rotation': 360,
      'autoAlpha': 0
    },
    {
      'y': 0,
      'scale': 1,
      'rotation': 0,
      'autoAlpha': 1
    }, 0.9);

  /////////////////
  // ScrollMagic //
  /////////////////

  // Controller 객체 설정
  var ctrl = new SM.Controller();

  ////////////////////////////////
  // 패럴럭스 씬 컨트롤(제어) 반복 구문 //
  ////////////////////////////////

  var scene_list = '.banner-container, .products-tab, .about-us, .from-the-blog, .footer > *'.split(', ');

  scene_list.forEach(function(trigger_el_selector, idx) {
    var scene = new SM.Scene({
      'triggerElement': trigger_el_selector,
      'triggerHook': 0,
      'offset': -600,
      // 'duration': 100,
      // 'reverse': false
    })
    .setClassToggle(trigger_el_selector, 'fade-in')
    .addTo(ctrl);

    switch ( trigger_el_selector ) {
      case '.banner-container':
        scene.setTween( banner_tl );
      break;
      case '.products-tab':
        scene.setTween( products_tl );
      break;
      case '.about-us':
        // scene.setTween( about_tl );
      break;
    }

  });

  //////////////////
  // 핀 컨트롤(제어) //
  //////////////////

  var carousel_pin = new SM.Scene({
    'triggerElement': '.carousel',
    'triggerHook': 0,
    'duration': 200
  });

  carousel_pin
    .setPin('.carousel', {'pushFollowers': false})
    .setTween(carousel_tl)
    .addTo(ctrl);

})(this, this.jQuery, this.ScrollMagic);
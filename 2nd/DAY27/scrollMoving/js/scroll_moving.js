jQuery(function($) {
  'use strict';

  // var $win = $(window);
  var $doc = $('html, body');
  var $scroll_menu_ul = $('.scroll-menu ul');

  $('.scroll-menu a').on('click', function(evt) {
    evt.preventDefault();
    var scroll_menu_ul_height = window.parseInt( $scroll_menu_ul.css('height'),10 );
    var target_id             = this.getAttribute('href');
    var $target               = $(target_id);

    // 목적지로 바로 점핑
    // window.scrollTo(0,$target.offset().top - scroll_menu_ul_height);

    // 목적지로 수직 방향 스크롤 애니메이션
    // eading 참고:
    // http://gsgd.co.uk/sandbox/jquery/easing/
    // http://easings.net/ko
    $doc.animate({
      'scrollTop': $target.offset().top - scroll_menu_ul_height
    }, 400, 'easeInOutCirc');
  });

});

// .css()
// .addClass()
// .removeClass()
// .hasClass()
// .toggleClass()
// .width()
// .height()
// .innerWidth()
// .innerHeight()
// .outerWidth()
// .outerHeight()
// .outerWidth(true)
// .outerHeight(true)
// .offset()
// .offsetParent()
// .position()
// .scrollTop()
// .scrollLeft()
// .animate()
// ※ jQuery Eading Plugin <- 의존 모듈 관리
// $ npm i jquery-easing
// cp node_modules/jquery-easing/jquery.easing.1.3.js js/jquery.easing.js
jQuery(function($) {
  'use strict';

  var $win = $(window);

  $('.scroll-menu a').on('click', function(evt) {
    var scroll_menu_ul_height = window.parseInt($(this).find('ul').css('height'),10);
    var target_id             = this.getAttribute('href');
    var $target               = $(target_id);

    $win.scrollTop($target.offset().top - scroll_menu_ul_height);
  });

});
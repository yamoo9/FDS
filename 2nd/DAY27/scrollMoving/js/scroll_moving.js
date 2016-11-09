jQuery(function($) {
  'use strict';

  $('.scroll-menu').on('click', function(evt) {
    var target = evt.target;
    if ( target.nodeName === 'A' ) {
      evt.preventDefault();
    }
    evt.stopPropagation();

    // console.log('#'+target.href.split('#')[1]);
    // console.log('target:', target.getAttribute('href'));
    // console.log('$:', $(target).attr('href'));

    var target_id = target.getAttribute('href');

    var $target = $(target_id);
    console.log('$target:', $target.offset().top);
  });

});
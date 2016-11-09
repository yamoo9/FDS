/*! jquery-dimension.js © yamoo9.net, 2016 */
(function($){
  'use strict';

  // GET
  // .width()
  // .height()

  // SET
  // value type: number or string(e.g %, em, rem)
  // .width(value)
  // .height(value)

  // Arrow Function
  // var myFn = (who) => {
  //   who + 'my arrow function';
  // };

  var box_width = 100;

  var effect_sound = new Audio();
  effect_sound.src = 'media/pop.mp3';

  var fireEffectSound = function() {
    effect_sound.pause();
    effect_sound.currentTime = 0;
    effect_sound.play();
  };

  $('.box').one('click', function() {
    fireEffectSound();
    $(this)
      .css({
        'flex': 'none',
        'border-radius': '50%'
      })
      .addClass('clicked')
      .width( box_width )
      .hegiht( box_width );
      // .height( function(index, height) {
      //   return height / 2;
      // } );
    box_width -= 10;
  });

}); // (jQuery)

(function($){
  'use strict';

  $('.box').on('click', function(e){
    e.stopPropagation();
    $(this)
      .width(function(i, v) {
        return v += (v + v)/10;
      })
      .height(function(i, v) {
        return v += (v + v)/10;
      })
      .offset(function(i, v) {
        var c_half_h = $(this).height()/40;
        return {
          'top': v.top - c_half_h,
          'left': v.left + 10
        }
      });
  });

})(jQuery);
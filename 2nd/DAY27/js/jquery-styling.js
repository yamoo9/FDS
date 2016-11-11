/*! jquery-styling.js © yamoo9.net, 2016 */
(function(global, $){
  'use strict';

  var emp = new Audio();
  emp.src = 'media/Eton-Messy-Presents.mp3';

  // jQuery 인스턴스 메소드 === jQuery.fn의 메소드
  // jQuery {} 인스턴스 객체를 만들어야 사용 가능한 메소드
  // 인라인 스타일을 설정하는 jQuery 인스턴스 메소드 .css()

  var $container = $('.demo-container');
  // 1. 스타일 속성 값을 가져오기
  // console.log($container.css('display'));
  // 2. 값을 전달하면 인라인 스타일로 해당 요소에 적용
  $container.css('background', 'linear-gradient(#777, #000)');
  // 3. 복수의 속성들을 일괄적으로 적용
  $container.css({
    'flex-direction': 'column',
    'flex-wrap': 'wrap',
    'align-content': 'flex-start'
  });
  // 4. 해당 요소로부터 복수의 속성 값을 배열로 전달해서, 객체로 반환 받고자 할 경우
  var container_props = $container.css(['flex-flow', 'justify-content']);

  var $album = $('.album');

  $('img', $album).css({
    'display': function(idx, prop){
      if ( idx === 2 && !container_props.display ) {
        container_props.display = prop;
      } else {
        prop = 'inline-block';
        return prop;
      }
    }
  });

  // 일반적인 방법
  // $album.on('click', moveDisk);
  // $album.on('mouseenter', playDisk);
  // $album.on('mouseleave', stopDisk);

  // 메소드 체이닝
  // $album
  //   .on('click', moveDisk)
  //   .on('mouseenter', playDisk)
  //   .on('mouseleave', stopDisk);

  // 객체 리터럴 활용
  $album.on({
    'mouseenter': moveDisk,
    'click'     : playDisk,
    'dblclick'  : stopDisk
  });

  var is_click = false;

  function moveDisk() {
    $(this).find('.album-disk').addClass('move');
  }

  function playDisk() {
    is_click = !is_click;
    $(this).find('.album-disk').addClass('play').removeClass('move');
    emp.play();
  }

  function stopDisk() {
    if (is_click === true) {
      $(this).find('.album-disk').removeClass('play').addClass('stop');
      emp.pause();
    }
  }

}(this, this.jQuery));


(function(global, $){
  'use strict';

  ////////////////////////////////////
  // jQuery class attirbute Methods //
  ////////////////////////////////////
  // .addClass()
  // .removeClass()
  // .hasClass()
  // .toggleClass()

  $('.album img')
    .addClass('its-image')
    .addClass(function(index, current_class) {
      // 0, 1, 2
      if ( index % 2 ) {
        return current_class += ' 2nd';
      }
    })
    // .removeAttr('class');          // 속성 제거
    // .removeClass();                // 값만 모두 제거
    // .removeClass('2nd its-image'); // 제거할 클래스 이름 설정
    .removeClass(function(index, current_class) {
      var remove_class_name = '2nd';
      var reg               = new RegExp(remove_class_name);
      if ( reg.test(current_class) ) {
        return remove_class_name;
      }
    });

    // --------------------------------------------------------------------------------
    // .removeClass(function(){})

    // $( "li:last" ).removeClass(function() {
    //   return $( this ).prev().attr( "class" );
    // });

    // var $li = $('li');
    // var $li_last = $li.last();
    // var $li_last_2nd = $li.eq($li.length - 2);
    // $li_last.removeClass( $li_last_2nd.attr('class') );

    // --------------------------------------------------------------------------------
    // .hasClass()

    $('.demo-container *').addClass(function(index, current_class) {
      // console.log(this); // DOM Object

      // console.time('native');
      // Native
      // if ( this.classList.contains('album-cover') ) {
      //   return 'source-cover-stream';
      // }
      // console.timeEnd('native');

      // console.time('jQuery');
      // jQuery
      if ( $(this).hasClass('album-vinyl') ) {
        return 'source-vinyl-stream';
      }
      // console.timeEnd('jQuery');
    });

    // --------------------------------------------------------------------------------
    // .toggleClass()

    $('.album').on('click', function() {
      // Native
      var vinyl = this.querySelector('.album-vinyl');
      vinyl.classList.toggle('toggle');
      // ---------------------------------------------
      // if ( vinyl.classList.contains('toggle') ) {
      //   vinyl.classList.remove('toggle');
      // } else {
      //   vinyl.classList.add('toggle');
      // }

      // jQuery
      var $vinyl = $(this).find('.album-vinyl');
      $vinyl.toggleClass('toggle');
      // ---------------------------------------------
      // if ( $vinyl.hasClass('toggle') ) {
      //   $vinyl.removeClass('toggle');
      // } else {
      //   $vinyl.addClass('toggle');
      // }

    });

}); // (this, this.jQuery)
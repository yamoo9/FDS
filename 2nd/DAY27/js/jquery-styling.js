/*! jquery-styling.js © yamoo9.net, 2016 */
(function(global, $){
  'use strict';

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
    'click'     : moveDisk,
    'mouseenter': playDisk,
    'mouseleave': stopDisk
  });

  var is_click = false;

  function moveDisk() {
    is_click = !is_click;
    $(this).find('.album-disk').addClass('move');
  }

  function playDisk() {
    if (is_click === true) {
      $(this).find('.album-disk').addClass('play').removeClass('move');
    }
  }

  function stopDisk() {
    if (is_click === true) {
      $(this).find('.album-disk').removeClass('play').addClass('stop');
    }
  }


})(this, this.jQuery);
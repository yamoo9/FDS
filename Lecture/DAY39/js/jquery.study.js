/*! jquery.study.js © yamoo9.net, 2016 */
(function(global, $){
  'use strict';

  var $body = $('body');

  // ------------------------------------
  // 스타일 제어
  // .css() 사용 방법
  // ------------------------------------
  // 방법 1) 속성 값을 가져오기
  var body_margin = $body.css('margin');
  console.log(body_margin);
  // ------------------------------------
  // 방법 2) 속성 값을 설정하기
  // $body.css('margin-left', '2rem');
  // $body.css('margin-right', '2rem');
  // 자바스크립트 메소드 체이닝
  $body
    .css('margin-left', '4rem')
    .css('margin-right', '4rem');
  body_margin = $body.css('margin');
  console.log(body_margin);
  // ------------------------------------
  // 방법 3) CSS 맵(객체)를 전달해서 설정하기
  var css_map = {
    'background': '#2a070a',
    'color': '#cd636f',
    'font-size': '+=22'
  };
  $body.css(css_map);
  var body_font_size = $body.css('font-size');
  console.log(body_font_size);
  // ------------------------------------
  // 방법 4) 각 속성에 콜백 함수 설정
  var fn_map = {
    'width': function(index, value){
      // console.log('original width value', value);
      return global.parseFloat(value,10)/2 + 70;
    },
    'height': function(index, value) {
      // console.log('original height value', value);
      if (global.parseFloat(value,10) < 300) {
        return '100vh';
      } else {
        return value * 2;
      }
    }
  };
  $body.css(fn_map);
  console.log('#1 - width', $body.css('width'));
  console.log('#2 - height', $body.css('height'));

});
// (this, this.jQuery)



// <h1> 요소 내부의 텍스트 글자를 쪼개서
// 각각의 글자를 <span> 요소로 감싸도록 구성한다.
// 각각의 <span> 요소에 마우스 엔터 이벤트를 설정하여
// 글자의 색상을 변경한다.
(function(global, $){
  'use strict';

  var $h1 = $('.container h1');
  var h1_text = $h1.text();
  // console.log(h1_text); // 'jQuery Method'
  // 문자 -> 배열화
  h1_text = h1_text.split('');
  // console.log(h1_text); // ['j','Q',...,'d']
  // jQuery.map() 유틸리티 메소드(Static Method, Class Method)
  h1_text = $.map(h1_text, function(item, index) {
    // 텍스트 내용이 있을 경우
    if($.trim(item)) {
      // <span>으로 감싼다.
      return '<span>'+item+'</span>';
    }
    // 빈 공백일 경우
    else {
      // 공백을 반환한다.
      return item;
    }
  });
  h1_text = h1_text.join('');
  $h1.html(h1_text); // Setter

  // var $letters = $('span', $h1);
  var $letters = $h1.find('span');

  // 쉬운 코드... 하지만 좋지 않은 코드
  // 이유는? 이벤트 발생 시마다 this 문서 객체를
  // jQuery() 팩토리 함수로 감싸 jQuery 객체를
  // 생성해야 하기 때문.
  // $letters.on('mouseenter', letterOver);

  // function letterOver() {
  //   $(this).css('background', '#ff0');
  // }

  // 불필요한 처리를 하지 않는 코드를 작성하도록
  // 코드 리뷰 -> 리팩토링을 해보자.
  // jQuery(['<span>', '<span>', '<span>'])
  $letters.each(function(index, item) {
    // var $this = $(item);
    var $this = $letters.eq(index);
    // $this.on('mouseenter', letterOvers);
    $this.one('mouseenter', $.proxy(letterOvers, $this));
    $this.one('mouseenter', $.proxy(playEffectSound, $this));
    // $this.one('mouseenter', playEffectSound.bind($this));
  });

  function letterOvers() {
    // console.log('this:', this);
    // $(this).css('color', '#52c88c');
    // console.log('$this:', $this);
    this.css({
      'transform': 'scale(1.5)',
      'margin-right': '10px'
    });
  }

  // HTML5 Audio 객체 생성
  var effect_sound = $('<audio>',{
    'src': '../../Resources/media/tong.mp3'
  })[0];

  // effect_sound.oncanplay = function() {
  //   this.play();
  // };

  function audioStop(audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  function playEffectSound() {
    // HTML5 Audio 실행
    // console.log('playEffectSound');
    // 음원이 플레이 중이라면 멈춤
    audioStop(effect_sound);
    effect_sound.play();
  }

})(this, this.jQuery);
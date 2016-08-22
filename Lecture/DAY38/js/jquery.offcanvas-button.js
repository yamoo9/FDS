/*! jqueyr.offcanvas-button.js © yamoo9.net, 2016 */
(function(global, $){
  'use strict';
  var wrapper_origin_pos;
  // 오프캔버스 메뉴 이벤트 핸들링
  function init() {
    // 오프캔버스 메뉴 래퍼 선택(참조)
    var $offcanvas_wrapper = $('.offcanvas-menu-wrapper');
    wrapper_origin_pos = $offcanvas_wrapper.css('left');
    // 오프캔버스 토글 메뉴 버튼 선택(참조)
    var $toggle_btn = $offcanvas_wrapper.find('.toggle-menu-button');
    // var $toggle_btn = $('.toggle-menu-button', $offcanvas_wrapper);
    // 오프캔버스 메뉴 래퍼에서 탐색한 버튼에 클릭 이벤트 핸들링
    $toggle_btn.on('click', toggleOffCanvasMenu);
  }

  // 이벤트 핸들러(함수)
  function toggleOffCanvasMenu() {
    // this는 이벤트가 연결된 <button> 문서 객체 이다.
    // this가 참조하는 <button> 객체를 jQuery 객체화 시키는 방법은
    // jQuery() 팩토리 함수 내부에 this 참조 변수를 전달하여 jQuery 객체를 생성한다.
    // 생성된 jQuery 객체는 jQuery.프로토타입 객체가 가진 능력을 맘껏 사용 가능하다.
    var $this = $(this); // ※ 이와 같은 행위는 성능을 저하시킨다.
    // console.log($this.jquery); // jQuery 버전 출력
    var $wrapper = $this.parent();
    // console.log($wrapper, $wrapper[0]);
    // 부모요소 $wrapper의 left 속성을 이동
    $wrapper.animate({
      'left': global.parseInt($wrapper.css('left')) == 0 ? wrapper_origin_pos : 0
    });
    $this.toggleClass('open-menu');
  }


  $(init); // $(document).ready(init);

})(this, this.jQuery);
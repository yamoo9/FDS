/*! ui-carousel.js © yamoo9.net, 2016 */

/*! jquery.radioClass.js © yamoo9.net, 2016 */
(function(global, $){
  'use strict';

  $.fn.radioClass = function(class_name) {
    this.siblings('.'+class_name).removeClass(class_name);
    this.addClass(class_name);
    return this;
  };

})(this, this.jQuery);

// -----------------------------------------
// TODO:
// -----------------------------------------
// 1. 캐러셀 컴포넌트 마크업/스타일링 (상태 디자인)
// 2. 이전/다음 캐러셀 콘텐츠 보기 기능 구현
// 3. 인디케이터 엑티베이션 (활성화 상태 표시)
// 4. 커스텀 이벤트 처리 (https://goo.gl/uUA4Xd)
// 5. 콘텐츠 뷰 자동 재생/정지 기능 구현
// 6. 플러그인 구현
// -----------------------------------------

(function(global, $){
  'use strict';

  // -------------------------------------------------------------
  // ui_Carousel 생성자 함수 정의
  function ui_Carousel(selector) {
    // this는 생성된 ui_Carousel 객체 인스턴스

    // 초기 생성자 함수 내에 설정된 초기 값
    this.carousel_radio              = 700 / 1200;
    this.active_index                = 0;
    this.carousel_mask_width         = 0;
    this.$carousel                   = null;
    this.$carousel_headline          = null;
    this.$carousel_tablist           = null;
    this.$carousel_tabs              = null;
    this.$carousel_button_group      = null;
    this.$carousel_tabpanel_contents = null;
    // 초기 설정
    this.init(selector);
    // 이벤트 연결
    this.events();
  }

  // -------------------------------------------------------------
  // ui_Carousel.prototype 객체 정의(확장)
  // ui_Carousel.prototype 단축 이름 fn 설정
  ui_Carousel.fn = ui_Carousel.prototype;

  ui_Carousel.fn.init = function(selector) {
    // 캐러셀 내부 구성 요소 참조
    this.$carousel          = $(selector);
    this.$carousel_headline = this.$carousel.children(':header:first');
    this.$carousel_tablist  = this.$carousel.children('ul').wrap('<div/>').parent();
    this.$carousel_tabs     = this.$carousel_tablist.find('a');
    // 동적으로 캐러셀 구조 생성/추가
    this.createPrevNextButtons();
    this.createTabpanelWrapper();
    // 역할별 스타일링 되는 클래스 설정
    this.settingClass();
    this.settingSliding();
    // WAI-ARIA 설정
    this.settingAria();
  };

  ui_Carousel.fn.createPrevNextButtons = function() {
    var button_group = ['<div>',
      '<button type="button"></button>',
      '<button type="button"></button>',
    '</div>'].join('');
    this.$carousel_button_group = $(button_group).insertAfter( this.$carousel_tablist );
  };

  ui_Carousel.fn.createTabpanelWrapper = function() {
    var widget = this;
    widget.$carousel_tabpanel_contents = widget.$carousel.children().last().children();
    $.each(widget.$carousel_tabpanel_contents, function(index) {
      var $tabpanel_content = widget.$carousel_tabpanel_contents.eq(index);
      $tabpanel_content.wrap('<figure/>');
    });
  };

  ui_Carousel.fn.settingClass = function() {
    this.$carousel.addClass('ui-carousel');
    this.$carousel_headline.addClass('ui-carousel-headline');
    this.$carousel_tablist.addClass('ui-carousel-tablist');
    this.$carousel_tabs.addClass('ui-carousel-tab');
    this.$carousel_button_group.addClass('ui-carousel-button-group');
    this.$carousel_button_group.children().first().addClass('ui-carousel-prev-button');
    this.$carousel_button_group.children().last().addClass('ui-carousel-next-button');
    this.$carousel_tabpanel_contents.parent().addClass('ui-carousel-tabpanel');
    this.$carousel_tabpanel_contents.closest('div').addClass('ui-carousel-tabpanel-wrapper');
  };

  ui_Carousel.fn.settingSliding = function() {
    this.$carousel.height( this.$carousel.width() * this.carousel_radio );
    var $tabpanel = this.$carousel.find('.ui-carousel-tabpanel');
    var $tabpanel_wrapper = $tabpanel.parent();
    $tabpanel
      .width( $tabpanel_wrapper.width() )
      .height( $tabpanel_wrapper.width() * this.carousel_radio );
    this.carousel_mask_width = $tabpanel.width();
    $tabpanel_wrapper.width(this.carousel_mask_width * $tabpanel.length);
  };

  ui_Carousel.fn.settingAria = function() {
    console.log('setting finished WAI-ARIA.');
  };

  ui_Carousel.fn.events = function() {
    var widget    = this;
    var $carousel = widget.$carousel;
    var $tabs     = widget.$carousel_tabs;
    var $buttons  = widget.$carousel_button_group.children();

    // buttons event
    $buttons.on('click', function() {
      if ( this.className === 'ui-carousel-prev-button' ) {
        widget.prevPanel();
      } else {
        widget.nextPanel();
      }
    });

    // tabs event
    $.each($tabs, function(index) {
      var $tab = $tabs.eq(index);
      $tab.on('click', $.proxy(widget.viewTabpanel, widget, index));
    });
  };

  ui_Carousel.fn.nextPanel = function() {
    this.viewTabpanel(this.active_index + 1);
  };

  ui_Carousel.fn.prevPanel = function() {
    this.viewTabpanel(this.active_index - 1);
  };

  ui_Carousel.fn.viewTabpanel = function(index, e) {
    // 사용자가 클릭을 하는 행위가 발생하면 이벤트 객체를 받기 때문에
    // 조건 확인을 통해 브라우저의 기본 동작 차단
    if (e) { e.preventDefault(); }
    // 활성화된 인덱스를 사용자가 클릭한 인덱스로 변경
    this.active_index = index;
    var carousel_tabs_max = this.$carousel_tabs.length - 1;
    // 처음 또는 마지막 인덱스에 해당할 경우 마지막 또는 처음으로 변경하는 조건 처리
    if ( this.active_index < 0 ) {
      this.active_index = carousel_tabs_max;
    }
    if ( this.active_index > carousel_tabs_max ) {
      this.active_index = 0;
    }
    this.$carousel_tabpanel_contents.eq(this.active_index).parent().parent().stop().animate({
      'left': this.active_index * -this.carousel_mask_width
    }, 600, 'easeOutExpo');
    // index에 해당되는 탭패널 활성화
    this.$carousel_tabpanel_contents.eq(this.active_index).parent().radioClass('active');
    // 인디케이터 라디오클래스 활성화
    this.$carousel_tabs.eq(this.active_index).parent().radioClass('active');
  };

  // 모듈 외부에 공개
  global.ui_Carousel = ui_Carousel;

})(this, this.jQuery);
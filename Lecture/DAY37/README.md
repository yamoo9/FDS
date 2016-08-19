###### Front-End Develop SCHOOL

# DAY 37

### [자바스크립트 애니메이션](http://javascript.info/tutorial/animation)

### [자바스크립트 기반 애니메이션 프레임](https://msdn.microsoft.com/ko-kr/library/hh920765(v=vs.85).aspx)

과거에 사용되던 `setTimeout` 및 `setInterval` 방법은 애니메이션을 과도하게 그려 CPU 주기가 낭비되었으며, 추가 전력이 사용되었다. 또한 웹 사이트가 보이지 않을 때, 특히 웹 사이트가 배경 탭의 페이지를 사용하거나 브라우저가 최소화된 경우에도 애니메이션이 종종 발생한다. 뿐만 아니라 애니메이션에서 10밀리초의 JavaScript 타이머 확인을 사용할 경우 여기 표시된 대로 타이밍 불일치가 발생. 여러모로 사용하지 않는 것이 최선이다. 이러한 문제를 해결하기 위해 등장한 새로운 애니메이션 프레임 방법이 `requestAnimationFrame`이다.

- `window.requestAnimationFrame`
- `window.cancelAnimationFrame`

#### [크로스 브라우징 이슈](http://caniuse.com/#search=requestAnimationFrame)

- IE 10+ 지원

#### [크로스 브라우징을 위한 애니메이션 프레임 사용 방법](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)

```js
window.requestAnimationFrame = (function(){
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.oRequestAnimationFrame ||
         function(callback) {
           window.setTimeout(callback, 1000 / 60); // 60 FPS
         };
})();

window.cancelAnimationFrame = (function(){
  return window.cancelAnimationFrame ||
         window.webkitCancelAnimationFrame ||
         window.mozcanCelAnimationFrame ||
         window.oCancelAnimationFrame ||
         function(id) {
           window.clearTimeout(id);
         };
})();
```

-

### [자바스크립트 애니메이션 FPS 제어](http://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe)

[Controlling fps with requestAnimationFrame?](http://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe)

-

### jQuery v3.x

- [jquery-core-3-0-upgrade-guide](http://jquery.com/upgrade-guide/3.0/#jquery-core-3-0-upgrade-guide)
- [whats-new-jquery-3-0](https://codebrahma.com/whats-new-jquery-3-0/)
- [jquery-3-1-0-released-no-more-silent-errors](https://blog.jquery.com/2016/07/07/jquery-3-1-0-released-no-more-silent-errors/)

-

###Carousel

```html
<!-- 마크업 완료한 예시 -->
<!-- 아티클 제목을 위한 aria-label -->
<article aria-label="Demonstration UI Carousel Component" class="ui-carousel" role="application">
  <div class="ui-carousel--content__wrapper" role="group">
    <section class="ui-carousel--content">
      <h2 class="ui-carousel--content__headline">01</h2>
    </section>
    <section class="ui-carousel--content">
      <h2 class="ui-carousel--content__headline">02</h2>
    </section>
    <section class="ui-carousel--content">
      <h2 class="ui-carousel--content__headline">03</h2>
    </section>
    <section class="ui-carousel--content">
      <h2 class="ui-carousel--content__headline">04</h2>
    </section>
    <section class="ui-carousel--content">
      <h2 class="ui-carousel--content__headline">05</h2>
    </section>
    <section class="ui-carousel--content">
      <h2 class="ui-carousel--content__headline">06</h2>
    </section>
  </div>
  <div class="ui-carousel--navigation__buttons" role="group">
    <button aria-label="previous content" type="button" class="ui-carousel--navigation__prev_button">
      <span class="fa fa-angle-up" aria-hidden="true"></span>
    </button>
    <button  aria-label="previous content" type="button" class="ui-carousel--navigation__next_button">
      <span class="fa fa-angle-down" aria-hidden="true"></span>
    </button>
  </div>
</article>
```
```sass
// Function
@function shade($color, $amount: 10%, $mix: #000)
  @return mix($color, #mix, $amount)
@function tint($color, $amount: 10%, $mix: #fff)
  @return mix($color, $mix, $amount)
// Mixin
=flex-align-center($orientation: both, $flow: row nowrap)
  display: flex
  flex-flow: $flow
  @if $orientation == both
    justify-content: center
    align-content: center
  @if $orientation == h
    justify-content: center
  @if $orientation == v
    align-content: center

// Placeholder Selector
%align-hv-center
  display: flex
  justify-content: center
  align-content: center
%reset-button
  background: transparent
  border: none

$carousel-prefix: ui-carousel
$content-bg: #ce2200
$content-width: 600px
$content-height: 400px
$content-buttons-width : $content-width / 8
$button-color: #404040
$max-content-total: 8

body.demonstration
  // 임의의 높이
  height: 100vh
  @extend %align-hv-center
  // 믹스인을 쓴다면
  +flex-align-center

// UI Carousel Component Style
.#{$carousel-prefix}
  // absolute된 버튼 그룹의 offsetParent로 인식하기 위함
  position: relative
  border: 4px solid #c0c0c0
  // js가 지원되지 않는 환경에서 스크롤로 컨트롤
  overflow: auto
  // js가 지원되는 환경에서 캐러셀 이용
  .js &
    overflow: hidden

  .#{$carousel-prefix}--content__wrapper
    position: absolute
    top: 0
    left: 0

  .#{$carousel-prefix}--content
    @extend %align-hv-center
    // 믹스인을 쓴다면
    +flex-align-center
    width: $content-width + $content-button-width
    height: $content-height
    @for $i from 1 through $max-content-total
      &:nth-child(#{$i})
        background: mix($content-bg,  #000, 15% * $i)
        background: shade($content-bg, 15% * $i)

    // JS 미지원 환경에서는 버튼이 안보이므로 폭을 변경해야 함
    .no-js &
      width: 100%

  .#{$carousel-prefix}--navigation__buttons
    // JS 미지원 환경에선 버튼이 아예 안보인다
    .no-js &
      display: none

    position: absolute
    top: 0
    right: 0
    display: flex
    flex-wrap: wrap
    width: $content-buttons-width
    height: $content-height
    color: #fff

    button
      // !optional : %reset-button이 있다면 쓰고 없다면 에러를 뿜지 않는다
      @extend %reset-button !optional
      width: 100%
      cursor: pointer
      background: #404040
      transition: all 0.3s
      &:hover,
      &:focus
        background: tint($button-color, 70%)
      &[class="__prev_button"]
        margin-bottom: 1px
```
 - **[절차 지향]** 함수 형 방식으로 진행
  - 컴포넌트 분석
  - 기능 설계
  - 기능 구현
  - 테스트
  - 빌드(배포)

```html
<!-- 스크립트가 동적으로 처리한 결과 예시 (초기화) -->
<article class="main-ad-area">
  <section>
    <h2>AD Headline 01</h2>
  </section>
  <section>
    <h2>AD Headline 02</h2>
  </section>
  <section>
    <h2>AD Headline 03</h2>
  </section>
  <section>
    <h2>AD Headline 04</h2>
  </section>
</article>
```
```javascript
// TODO LIST
// 애플리케이션 초기화
// 해당요소 컴포넌트 화
// 요소의 클래스 설정
// 버튼을 동적으로 생성
// 버튼 이벤트 핸들링

(function(global){
  'use strict';

  var carousel
  var carousel_contents_wrapper;
  var content_height
  var carousel_contents_total;
  
  // !!목표:  초기화
  function init(selector){
    // 스타일 식별자 class 속성 설정
    carousel = query(selector);
    // 기존 carousel 참조 문서 객체의 class 속성 값을 메모리
    // 객체.속성 방식으로 메모리 (커스텀 속성)
    carousel.origin_class = carousel.getAttribute('class') || '';
    // ** trim 헬퍼함수 만들어야함(크로스브라우징) **
    carousel.setAttribute('class', (carousel.origin_class + ' ui-carousel'.trim());

    // !!목표: WAI-ARIA 설정
    carousel.setAttribute('aria-label', 'Domonstration UI Carousel Component');
    carousel.setAttribute('role', 'application');

    // !!목표: caousel contents 래핑 설정
    var carousel_contents = makeArray(queryAll(selector + '> *')); // 무조건 1 뎁스 요소만 수집
    carousel_contents_total = carousel_contents.length
    // 래핑 요소를 생성
    carousel_contents_wrapper = createNode('div');
    // 래핑 요소 속성 설정(클래스, 롤)
    carousel_contents_wrapper.setAttribute('class', 'ui-carousel--content__wrapper');
    carousel_contents_wrapper.setAttribute('role', 'group');

    // 각 컨텐츠를 래핑요소의 자식요소로 삽입, 설정
    // ** forEach 헬퍼함수 만들어야함(크로스브라우징)
    carousel_contents.forEach(function(content, idx) {
      // 자식 요소에 class 속성 설정
      content.setAttribute('class', 'ui-carousel--content');

      // 각각의 자식요소 내부에서 제목 요소를 찾아 class 속성 설정
      var headline = query('h2', content);
      headline.setAttribute('class', 'ui-carousel--content__headline');
      carousel_contents_wrapper.appendChild(content);
    });

    // 래핑 요소를 캐러셀 요소의 첫번째 자식으로 삽입
    prependChild(carousel, carousel_contents_wrapper);

    // !!목표: 버튼 그룹과 버튼 요소들을 동적으로 생성
    var button_group = createNode('div');
    button_group.setAttribute('class', 'ui-carousel--navigation__buttons');
    button_group.setAttribute('role', 'group');

    // 버튼 생성
    var prev_button = createNode('button');
    prev_button.setAttribute('type', 'button');
    var next_button = prev_button.cloneNode();

    var content = firstEl(carousel_contents_wrapper);
    var content_height = removeUnit(getStyle(content, 'height'));

    // 각 버튼의 클래스 식별자 설정
    prev_button.setAttribute('class', 'ui-carousel--navigation__prev_button');
    prev_button.setAttribute('aria-label', 'previous content');
    // 아이콘 추가
    prev_button.innerHTML = '<span class="fa fa-angle-up" aria-hidden="true"></span>';
    next_button.setAttribute('class', 'ui-carousel--navigation__next_button');
    next_button.setAttribute('aria-label', 'next content');
    // 아이콘 추가
    next_button.innerHTML = '<span class="fa fa-angle-down" aria-hidden="true"></span>';

    var content = firstEl(carousel_contents_wrapper);
    var content_height = removeUnit(css(content, 'height'));

    // 템플릿 코드 방식
    var button_group_html_code = [
      '<div class="ui-carousel--navigation__buttons" role="group">',
        '<button aria-label="previous content" type="button" class="ui-carousel--navigation__prev_button">',
          '<span class="fa fa-angle-up" aria-hidden="true"></span>',
        '</button>',
        '<button  aria-label="previous content" type="button" class="ui-carousel--navigation__next_button">',
          '<span class="fa fa-angle-down" aria-hidden="true"></span>',
        '</button>',
      '</div>',
    ].join('');
    carousel.innerHTML += button_group_html_code;




    // !!목표 : 버튼에 이벤트 바인딩
    bindEvent();
  }

  function bindEvent(){
    var buttons = carousel.queryAll('.ui-carousel--navigation__buttons button');
    var len = buttons.length;
    while( buttons[--len] ) {
      buttons[len].onclick = movingCarouselContents;
    }
  }

  // 버튼에 연결된 함수
  // 컨텐츠 래퍼를 이동시켜야 한다
  function movingCarouselContents(){
    var carousel_contents_wrapper = prevEl(this.parentNode);
    var check_class = this.getAttribute('class');
    // 컨테츠 래퍼 문서 객체로부터 첫번째 자식 객체
    

    var changed_wrapper_top;

    var current_wrapper_top = removeUnit(css(carousel_contents_wrapper, 'top'));

    if ( /prev/.test(check_class)){
        changed_wrapper_top = current_wrapper_top + content_height
        if (changed_wrapper_top === content_height) {
          changed_wrapper_top = -1 * (content_height * carousel_contents_total -1);
        }
        css(carousel_contents_wrapper, 'top', changed_wrapper_top + 'px');
        
      } else {
        changed_wrapper_top = current_wrapper_top - content_height
        if (changed_wrapper_top === -1 * content_height * carousel_contents_total) {
          changed_wrapper_top = 0;
        }
        css(carousel_contents_wrapper, 'top', changed_wrapper_top + 'px');

      }
  }

  // 초기화 실행
  init('.main-ad-area');

})(this);
```

 - **[객체 지향]** 커스텀 객체 형태로 변경
  - 객체 생성자(ES6, class 제작)
  - 객체 생성자의 프로토타입 객체를 통해 공유할 수 있는 기능 정의
  - 정의된 기능 구현
  - 테스트
  - 빌드

> 이후 jQuery 플러그인 들어가면서 다시 다룰 예정

```javascript
(function(global){
  'use strict';

  fucntion Carousel(selector){
    this.carousel = query(selector)
    this.init();
  }

  Carousel.prototype = {
    'constructor': Carousel,
    'init': function(){

    },
    'bindEvent': function(){

    },
    'movingcarouselContents': function(){

    }

  }
  
  global.Carousel = Carousel;
  global.main_ad_area = new Carousel('.main-ad-area');
})(this);
```

 - JS 지원 환경 감지 모듈
 
```html
<html class="no-js">
```
```javascript
(function(global){
  'use strict';
  // html 요소에서 class 값을 'no-js'에서 'js'로 변경
  // JS 지원 환경이라면 이 구문을 읽고 속성 변경
  global.html = query('html');

  // 신형 방식 IE 10+
  if ( html.classList ) {
    html.classList.remove('no-js');
    html.classList.add('js')
  } else {
    // 구형 IE
    var html_class_attr = html.getAttribute('class');
    html.setAttribute('class', html_class_attr.replace(/no-js/, 'js'))
  }

})(this);
```

-

###jQuery

- 자바스크립트 DOM 조작에 최적화된 라이브러리
- `$sudo npm install jquery` : cli 환경에서 jquery 다운받기

> _jQuery의 문서는 설명이 매우 잘 되어 있습니다_


```javascript
// CDN jQuery 로드 실패시 로컬 jQuery 업로드
if (!thi.jQuery) {
  document.write("<script src='... 로컬 jQuery 경로...'><\/script>");
}

// 간단하게
this.jQuery || document.write('<script src=" ... 로컬 jQuery 경로 ... "><\/script>');
!this.jQuery && document.write('<script src=" ... 로컬 jQuery 경로 ... "><\/script>');
```

```javascript
(function (global, $) {
  'use strict';

  $('html').removeClass('no-js').addClass('js')

  function init() {
    // 관례 => jQuery 객체임을 명시해주는 $표기
    var $container = $('.container');
  }

  // 문서 객체 모델이 완성된 후가 되면 init 함수를 실행
  $(document).ready(init);

})(this, this.jQuery);
```

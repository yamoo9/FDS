###### Front-End Develop SCHOOL

# DAY 28
- __jQuery__: Basic
- __jQuery__: Carousel Component Design
- __jQuery__: Carousel Component Design, OOJS
- __jQuery__: Plugin
- WAI-ARIA 적용사례집 다운로드 [PDF](https://drive.google.com/drive/folders/0B_nI53HQaYcNNWhXektyS1lNTGc?usp=sharing)
<!-- ---
## 1. indicator
인스턴스를 생성해야만 쓸 수 있는 메서드를 의미한다. <-> static메서드, 클래스 메서드
--- -->


<!-- ### 1-1. 요소의 스타일 설정(복습) : jQueryObj.`css()`
- http://api.jquery.com/css/
- 여러 요소를 가져와 속성값을 순회하며 변경하는 예제
```js
코드코드
```
#### CSS속성 하나 가져오기 .css( `'CSS속성제목'` );
  - r -->



---

## 1. HTML요소의 class=""를 이용해 indicator 만들기

---
### 1-1. CLASS제어모듈 작성 (절차형)
`hasClass(a,b)` 함수 안에 주체와 변수를 넣어서 실행. 객체형으로 만들면 `instance.hasClass(b)`처럼 주체가 앞으로 이동.
#### hasClass( `el, class_name` )
- `el`의 클래스를 받아옴 : "class1 class2 class3" 형식.
- 받은 클래스를 쪼개 배열로 전환하고 `class_name` 이 포함되었나 확인
- return type : **boolean**
```js
//modern 브라우저
hasClass = function(el, class_name) {
  return el.classList.contains(class_name);
};

//old browser
hasClass = function(el, class_name) {
  var el_classes = el.className.split(' ');
  for ( var i=0, l=el_classes.length; i<l; i++ ) {
    var _class = el_classes[i];
    if( _class === class_name) {
      return true;
    }
  }
  return false;
};

```
#### addClass( `el, class_name` )
- `class_name`추가, `el`의 기존class는 유지
- `el`에 `class_name`이 이미 있을시 무효
```js
//modern 브라우저
addClass = function(el, class_name) {
  el.classList.add(class_name);
};

//old browser
addClass = function(el, class_name) {
  if ( !hasClass(el, class_name) ) {
    el.className += ' ' + class_name;
  }
};
```
#### removeClass( `el, class_name` )
- `el`에 `class_name`이 있으면 삭제, 기존class는 유지
- `el`에 `class_name`이 없으면 무효
- `class_name`에 * 문자를 주거나 공백일 경우 모든 클래스를 삭제 : **||** 사용해 기본값으로 설정.
```js
//modern 브라우저
removeClass = function(el, class_name) {
  class_name = class_name || '*';
  if ( class_name === '*' ) { el.className = ''; }
  else { el.classList.remove(class_name); }
};

//old browser
removeClass = function(el, class_name) {
  class_name = class_name || '*';
  if ( class_name === '*' ) {
    // 모든 클래스 속성 제거
    el.className = '';
  }
  else {
    if ( hasClass(el, class_name) ) {
      // 해당 클래스 속성이 있다면 제거
      var el_classes = el.className.split(' ');
      var filter_classes = [];
      for ( var i=0, l=el_classes.length; i<l; i++ ) {
        var _class = el_classes[i];
        if( _class !== class_name) {
          filter_classes.push(_class);
        }
      }
      el.className = filter_classes.join(' ');
    }
  }
};
```
#### toggleClass( `el, class_name` )
- `el`에 `class_name`이  있으면 삭제, 없으면 추가.
- 메뉴의 활성화/비활성화에 사용됨
```js
//modern 브라우저
toggleClass = function(el, class_name) {
  el.classList.toggle(class_name);
};

//old browser
toggleClass = function(el, class_name) {
  // 클래스 속성 유무를 조건 검증, hasClass()
  if ( hasClass(el, class_name) ) {
    // 클래스 속성이 있으면 제거, removeClass()
    removeClass(el, class_name);
  } else {
    // 클래스 속성이 없으면 추가, addClass()
    addClass(el, class_name);
  }
};
```
#### radioClass( `el, class_name` )
- 이전 클릭된 버튼을 변수로 기억해둠, 최초엔 Null
- 새 클릭 발생시 이전눌렀던 버튼에서 removeClass, 새로누른 버튼에 addClass.
```js
var _pre_assign_class_instance = null;
radioClass = function(class_name) {
  if ( _pre_assign_class_instance ) {
    _pre_assign_class_instance.removeClass(class_name);
  }
  this.addClass(class_name);
  // 새로누른 버튼을 이전누른 버튼으로 저장
  _pre_assign_class_instance = this;
  // jQuery 메소드 체이닝을 위해 내보냄
  return this;
}
```
---
### 1-2 구형 브라우저 고려
브라우저가 **classList** 를 지원하는 경우/아닌경우를 나눠 조건분기하는 예제.
```js
if( 'classList' in Element.prototype){
  hasClass = function(...){...}
  addClass = function(...){...}
  removeClass = function(...){...}
  toggleClass = function(...){...}
}
else{
  hasClass = function(...){...}
  addClass = function(...){...}
  removeClass = function(...){...}
  toggleClass = function(...){...}  
}
```
---
### 1-3 객체.prototype 확장형 작성방법 (=플러그인 코드라고도 부름)
- element.prototype 에 추가하면 `dom객체.hasclass(class_name)` 으로 사용
- this 를 이용
- add,remove,toggleClass는 **method chaining** 을 위해 자기 자신을 반환
```js
//브라우저 기본객체 확장 (권장하지않음)
Element.prototype.radioClass = function(class_name){
  radioClass(this, class_name);
  return this;
};

//또는 jQuery를 확장
jQuery.prototype.radioClass = function(class_name){
  this.addClass()
  return this;
};
```
---
## 2. 포토슬라이드(carousel) 작성과 접근성
```js
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
```
---
### 2-1 구현방식
#### 컴포넌트 마크업
- 전체구조 : article > 탭목록 버튼 + 실제화면 + 좌우이동 버튼
```js
<article> // 전체감싸는 래퍼
  <h1> readable-hidden title </h1> // 안보이는 제목
  <div> //탭 네비게이터 (실제화면 개수만큼)
    <ul>
      <li><a></a></li>
      <li><a></a></li>
      <li><a></a></li>
      <li><a></a></li>
      <li><a></a></li>
    </ul>
  </div>
  <div> // 탭 실제화면
  <figure><img></figure>
  <figure><img></figure>
  <figure><img></figure>
  <figure><img></figure>
  <figure><img></figure>
  </div>
  <div> // 좌우이동 버튼
    <button></button>
    <button></button>
  </div>
</article>
```
- 네비게이터 버튼   : nav >ul> li*셀갯수 >a
- 탭 실제화면   : div > figure*셀갯수 >img
- 좌우이동 버튼 : div > button*2

---
### 2-2. 접근성을 고려한 Blueprint
최종완성본(blueprint)을 먼저 만들어보고 JS로 자동화 모듈을 만든다.
```js
<article id="bs3-headphone" class="ui-carousel" aria-describedby="bs3-headphone-desc">
  <h1 class="ui-carousel-headline">Beats Solo3 Wireless On-Ear Headphones – Rose Gold</h1>
  <div role="tablist" class="ui-carousel-tablist">
    <ul role="presentation">
      <li><a class="ui-carousel-tab" href role="tab" aria-label="Headphone View Front"></a></li>
      <li><a class="ui-carousel-tab" href role="tab" aria-label="Headphone View 1"></a></li>
      <li><a class="ui-carousel-tab" href role="tab" aria-label="Headphone View 2"></a></li>
      <li><a class="ui-carousel-tab active" href role="tab" aria-selected="true" aria-controls="" aria-label="Headphone View 3"></a></li>
      <li><a class="ui-carousel-tab" href role="tab" aria-label="Headphone View 4"></a></li>
      <li><a class="ui-carousel-tab" href role="tab" aria-label="Headphone View 5"></a></li>
      <li><a class="ui-carousel-tab" href role="tab" aria-label="Headphone View 6"></a></li>
      <li><a class="ui-carousel-tab" href role="tab" aria-label="Headphone View 7"></a></li>
      <li><a class="ui-carousel-tab" href role="tab" aria-label="Headphone View 8"></a></li>
    </ul>
  </div>
  <div class="ui-carousel-button-group" role="group">
    <button type="button" class="ui-carousel-prev-button" aria-label="previous content"></button>
    <button type="button" class="ui-carousel-next-button" aria-label="next content"></button>
  </div>
  <div role="group" class="ui-carousel-tabpanel-wrapper">
    <figure class="ui-carousel-tabpanel" role="tabpanel">
      <img src="images/MNET2.jpeg" alt="MNET2">
    </figure>
    <figure class="ui-carousel-tabpanel" role="tabpanel">
      <img src="images/MNET2_AV1.jpeg" alt="MNET2_AV1">
    </figure>
    <figure class="ui-carousel-tabpanel" role="tabpanel">
      <img src="images/MNET2_AV1.jpeg" alt="MNET2_AV1">
    </figure>
    <figure id="" class="ui-carousel-tabpanel active" aria-selected="true" role="tabpanel">
      <img src="images/MNET2_AV2.jpeg" alt="MNET2_AV2">
    </figure>
    <figure class="ui-carousel-tabpanel" role="tabpanel">
      <img src="images/MNET2_AV3.jpeg" alt="MNET2_AV3">
    </figure>
    <figure class="ui-carousel-tabpanel" role="tabpanel">
      <img src="images/MNET2_AV4.jpeg" alt="MNET2_AV4">
    </figure>
    <figure class="ui-carousel-tabpanel" role="tabpanel">
      <img src="images/MNET2_AV5.jpeg" alt="MNET2_AV5">
    </figure>
    <figure class="ui-carousel-tabpanel" role="tabpanel">
      <img src="images/MNET2_AV6.jpeg" alt="MNET2_AV6">
    </figure>
    <figure class="ui-carousel-tabpanel" role="tabpanel">
      <img src="images/MNET2_AV7.jpeg" alt="MNET2_AV7">
    </figure>
  </div>
</article>
```
- 문서상단 WAI-ARIA 문서 pdf 참조 마크업 적용.
- 키보드 포커싱 순서 : 목록UI가 가장먼저. 첫 마크업으로.
- 포토슬라이드 래퍼에 (안보여도)제목요소 넣기 : radable-hidden으로 감춤
- nav와 li의 role 을 재정의(aria-label)
- Non-mouse 탐색방법 구현 (JS사용) : 화살표탐색가능, 이동시 뷰 함께 바뀜
- 마지막에 처음 순서로 돌아오기

---
### 2-3 JS모듈화 개요
HTML에는 최소내용만 받고 감싸는 div나 class, aria 등은 JS에서 생성
#### 표준 최소마크업을 협의해 정하고 아래처럼 demo로 제공.
```js
<article id="bs3-headphone">
  <h1>Beats Solo3 Wireless On-Ear Headphones – Rose Gold</h1>
  <ul>
    <li><a href></a></li>
    <li><a href></a></li>
    <li><a href></a></li>
    <li><a href></a></li>
    <li><a href></a></li>
    <li><a href></a></li>
    <li><a href></a></li>
    <li><a href></a></li>
  </ul>
  <div>
    <img src="images/MNET2.jpeg" alt="MNET2">
    <img src="images/MNET2_AV1.jpeg" alt="MNET2_AV1">
    <img src="images/MNET2_AV2.jpeg" alt="MNET2_AV2">
    <img src="images/MNET2_AV3.jpeg" alt="MNET2_AV3">
    <img src="images/MNET2_AV4.jpeg" alt="MNET2_AV4">
    <img src="images/MNET2_AV5.jpeg" alt="MNET2_AV5">
    <img src="images/MNET2_AV6.jpeg" alt="MNET2_AV6">
    <img src="images/MNET2_AV7.jpeg" alt="MNET2_AV7">
  </div>
</article>
```
#### 약속대로 적고 JS모듈에 ID를 넘기면 blueprint처럼 만들게.
```js
var bs3 = new ui_Carousel('#bs3-headphone');
bs3.viewTabpanel(3);
```
#### JS모듈 동작순서 (객체형)
- 포토슬라이드화 할 요소를 HTML에서 찾아오기
- 객체화 (new ~)
- 감싸는요소, class추가
- 접근성 추가 (aria)
- 동작구현
  - 네비게이터 버튼 클릭-화면이동
  - 현재 페이지위치를 네비게이터 버튼에 표시
  - 뒤로/앞으로 버튼 클릭-화면이동
  - 키보드 좌우 입력-화면이동
- 애니메이션

---
### 2-4 요약한 객체구조
메인객체의 프로토타입에 요소추가, 클래스추가, 이벤트추가 기능을넣고 초기변수를 설정.
- `임의로 상세내용을 생략하고 구조만 남겼으니 꼭 원본 소스를 참고하세요`

#### 포토슬라이드 메인객체
```js
function ui_Carousel(selector) {
  this.carousel_radio  = 700 / 1200;  // 공유할 초기변수들 설정
  (...기타변수목록 생략...)
  this.init(selector);                // 요소+class+접근성 추가 메소드
  this.events();                      // 동작+애니메이션 추가 메소드
}
```

#### 메인객체 > init() 설계
요소, class, aria속성을 자동으로 추가해주는 기능.
```js
ui_Carousel.prototype.init = function(selector) {
  // jQuery로 요소를 찾아 변수에 넣어두고 아래 함수에서 사용.
  this.$carousel = $(selector);

  // 최소로만 입력받는 바람에 없는요소들 추가
  this.createPrevNextButtons();
  this.createTabpanelWrapper();

  // 요소마다 클래스 설정
  this.settingClass();
  this.settingSliding();

  // WAI-ARIA 속성 설정 : active 요소에 aria-active="true" 등 접근성 준수
  this.settingAria();
}
```
- addClass, wrap, setAttribute, insertAfter 등 메소드를 이용.
- 메소드를 carousel에 직접 추가하지 않고 prototype에다 넣음.

#### 메인객체 > event() 설계
이전, 다음 버튼과 탭목록 버튼을 눌렀을 때 다른화면을 보여주는 기능.
```js
ui_Carousel.prototype.events = function() {
  var widget    = this;
  var $carousel = widget.$carousel;
  (...좌우버튼, 탭버튼 찾아와 변수에 할당중, 생략...)

  // buttons event : 좌우버튼 클릭
  $buttons.on('click', function() {...});

  // tabs event : 탭버튼 클릭. 실제로는 each로 모든버튼에 on을 건다.
  $tab.on('click', $.proxy(widget.viewTabpanel, widget, index));
};
```
- proxy(a,b,c) : proxy(함수,this범위,변수) 를 지정하는 jQuery의 bind메소드.

#### 메인객체 > event() > viewTabpanel() 설계
몇번째 화면을 보여줄 것인가? 핵심 기능임.
```js
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
  // index에 해당되는 탭패널 활성화
  this.$carousel_tabpanel_contents.eq(this.active_index).parent().radioClass('active');
  // 인디케이터 라디오클래스 활성화
  this.$carousel_tabs.eq(this.active_index).parent().radioClass('active');
};
```
- view 할 페이지의 index를 radioClass('active') 처리해 Class붙임.
```sass
.ui-carousel-tabpanel
  position: absolute
  top: 0
  left: 0
  opacity: 0
  transition: all 0.6s
  &.active
    z-index: 100
    opacity: 1
```
- 위처럼 .active 에 opacity 설정해두면 클래스에 따라 보이게됨.

#### 메인객체 > event() > next/privPanel() 설계
```js
  ui_Carousel.fn.nextPanel = function() {
    this.viewTabpanel(this.active_index + 1);
  };

  ui_Carousel.fn.prevPanel = function() {
    this.viewTabpanel(this.active_index - 1);
  };
```
- active된 페이지번호 변수에 +1, -1 하는식으로 제어
- 무한스크롤 : index 감지해서 마지막인데 다음버튼 누르면 처음값 넣기

### 2-5 전환효과 애니메이션
#### fade 방식
- pos abs + opacity : fadein, out 애니메이팅 가능
- z-index 나 display:none 은 동작하긴 하나 부드러운 애니메이팅 불가.
- 겹쳐놓고 opacity 조절

#### 밀어주기
- 옆으로 쌓아놓고 밀어주는 방식 : 애니메이팅 가능
- 버튼누를시 다음이미지를 출발위치로 이동시킨후 슬라이드한다.
- 이미지 밀기 방식도 여러방법있고 설계하기 나름.

#### CSS로 애니메이팅
- CSS 애니메이트 함수는 크로스브라우징 이슈 있음.
- 빠름
- JS를 통해 CLASS 주고 빼는 방식으로 사용

#### JS로 애니메이팅
- jQuery 의 animate 사용
- (상대적으로)느리지만 사용하기 간편하고 호환성 있음
- Class를 넣고 빼는 방식을 사용하지 않아도 됨.
- 야무님 예제에서 사용됨
```js
this.$carousel_tabpanel_contents.eq(this.active_index).parent().parent().stop().animate({
  'left': this.active_index * -this.carousel_mask_width
}, 600, 'easeOutExpo');
```

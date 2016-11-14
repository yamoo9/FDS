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
- `class_name`에 ***** 문자를 주거나 공백일 경우 모든 클래스를 삭제 : **||** 사용해 기본값으로 설정.
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
#### 약속대로 적고 JS모듈에 ID를 넘기면 blueprint처럼 만들어주게.
```js
var bs3 = new ui_Carousel('#bs3-headphone');
bs3.viewTabpanel(3);
```
#### JS모듈 동작순서 (객체형)
- 초기화 : 요소찾기 + 객체화
- 감싸는요소, class추가
- 접근성을 위한 aria추가
- 화면넘김 동작구현
  - 네비게이터 버튼 클릭이동
  - 뒤로/앞으로 버튼 클릭이동
  - 키보드 좌우 입력이동
- 애니메이션
```js
function ui_Carousel(){}
function ui_Carousel.prototype.init(){}
```
---
#### 요소와 클래스 추가

#### aria 속성 추가
- active 요소에 aria-active="true" ?

#### next/priv 버튼
- active된 페이지번호에 +1, -1 하는식으로 제어
- 무한스크롤 : index 감지해서 마지막인데 다음버튼 누르면 처음값 넣기
#### 트렌드
- 미리 다 컴포넌트 만들어뒀다가 붙이는 방식. (react 등)
- 지금처럼 DOM제어해서 일일이 만드는 방식은 최신은 아님.

### 2-4 전환효과
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
- 느리지만 호환성 있음
- Class를 넣고 빼는 방식을 사용하지 않아도 됨.

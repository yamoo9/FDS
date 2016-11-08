###### Front-End Develop SCHOOL

# DAY 25

- __Folio__: News, Twitter Section Part.
- __jQuery__: Basic

##1. Capture & Bubble
- 이벤트 예제

```js
var boxes = document.querySelectorAll('.box');
  var using_capture = !false; // capture or bubble
  var detectEventPropagation = function(ev) {
    console.log('this:', this);
    console.log('ev.target:', ev.target);
    console.log('ev.currentTarget:', ev.currentTarget);
    // 각 참조 변수(this, ev.target, ev.currentTarget) 값 비교
    // if ( this.firstElementChild.localName === 'a' ) {
    // if ( ev.target.firstElementChild.localName === 'a' ) {
    if ( ev.currentTarget.firstElementChild.localName === 'a' ) {
      // 브라우저의 기본 동작 차단
      ev.preventDefault();
    }
    if ( ev.currentTarget.classList.contains('child') ) {
      // console.log('this is child element');
      // 이벤트 전파 중지(stopPropagation)

      //bubble:자신이 아닌 부모로 거슬러 올라가는 이벤트 전파 중지
      // ev.stopPropagation();

      //이벤트 전파 즉시 중지!!
      //자신에게 걸린 이벤트 까지도 모두 전파 중지! (즉, 실행 안함)
      ev.stopImmediatePropagation();
    }
    console.log('%c------------------------------', 'color: #3d9a21');
  };
  var anotherEventPropagation;
  // boxes.forEach(function(box, idx) { // chrome web browser
  [].forEach.call(boxes, function(box, idx) { // modern web browser
    box.addEventListener('click', detectEventPropagation, using_capture);
    box.addEventListener('click', anotherEventPropagation , using_capture);
  });
```

## 2. jQuery
>손쉽고 간편한 JavaScript Library
>
>- http://jquery.com/

---
**npm 설치**

	npm run install-jquery

**json 설치**

	[json 파일생성]
	npm init -y

	[json scripts작성]
	"scripts": {
	 "install-jquery": "npm install --save jquery",
	 "serve": "http-server -o -a localhost -p 9090"
  }

	npm run install-jquery  [실행]
	npm run serve 		[실행]

---

**라이브러리 다운로드**

```js
<script src="lib/jquery/jquery.js"></script>
```
---
**CDN사용**

- **jquery.js** :  normal 버전

- **jquery.slim.js** :  Ajax, Effects, Deprecated(현재 사용이 권장되지 않는 코드) 제외


```js
<script src="http://code.jquery.com/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
```
---
**로컬데이터를 사용하기 위한 조건문**

- 기본적으로 CDN데이터를 사용하되, 네트워크 불안정 또는 CDN이 폭파(?)되었을 경우 사용

**- 방법 1**

```js
if(!window.jQuery){
  document.write('<script src="./lib/jquery/jquery.min.js"><\/script>');
}
```

**- 방법 2**

```js
window.jQuery || document.write('<script src="./lib/jquery/jquery.min.js"><\/script>');
```

**- 방법 3**

```js
!window.jQuery && document.write('<script src="./lib/jquery/jquery.min.js"><\/script>');
```
---

**전달인자($) -> jQuery 확실한 명시 방법**


```js
//즉시실행함수
(function (global, $) {

})(this, this.jQuery);
```

※ IIFE 패턴(즉시 실행 함수) 사용하지 않을 경우,  $ 기호는 자바스크립트 라이브러리들이 즐겨 사용하는 단축 변수명이기에 여러 라이브러리를 다중 사용할 경우 충돌이 발생할 수 있다. 전역에서 jQuery를 사용할 경우 여러분들은 충돌에 주의가 요구된다.

---
###2.1 DOM Script VS jQuery
- ***DOM Script*** :  속도가 빠르다

- ***jQuery*** : 속도가 DOM Script보다는 느리지만 사용이 간편하다

- ***`</body>` 앞에 `<script>` 선언*** : 가장 속도가 빠르다


**- Case 0. Legacy DOM Script**
```js
// var gnb = document.getElementById('gnb');
// id 속성을 사용한 위(↑)의 경우 VS
// class 속성을 사용한 아래(↓)의 경우
var all_els = document.body.getElementsByTagName('*');
var gnb_class= 'gnb';
var check_gnb_class = new RegExp('(^|\\s+)'+gnb_class+'(\\s+|$)');
for ( var i=0, l=all_els.length; i<l; i++ ) {
  var el = all_els[i];
  if ( check_gnb_class.test(gnb_class) ) {
    var gnb = el;
    break;
  }
}
// --------------------------------------------------------------------------------
var gnb_links = gnb.getElementsByTagName('a');
var assignParentClassActive0 = function() {
  var add_class_name = 'active';
  var check_class_name = new RegExp('(^|\\s+)'+add_class_name+'(\\s+|$)');
  var parent = this.parentNode;
  var pre_class = parent.className;
  if ( !check_class_name.test(pre_class) ) {
    parent.className += ' ' + add_class_name;
    parent.className = parent.className.replace(/^\s+/,'').replace(/\s+$/,'');
  }
  return false;
};
for ( var i=0, l=gnb_links.length; i<l; i++ ) {
  var gnb_link = gnb_links.item(i);
  gnb_link.onclick = assignParentClassActive0;
}
```
**- Case 1. Modern DOM Script**
```js
var gnb = document.querySelector('.gnb');
var gnb_links = gnb.querySelectorAll('a');
var assignParentClassActive = function(event) {
 event.preventDefault();
 event.target.parentNode.classList.add('active');
};
[].forEach.call(gnb_links, function(link) {
 link.addEventListener('click', assignParentClassActive);
});
```

**- Case 2. jQuery**
```js
var $gnb_links = jQuery('.gnb a'); // <-- IE 9+ 성능 이슈 없음
var assignParentClassActive = function(event) {
 event.preventDefault();
 jQuery(event.target).parent().addClass('active');
};
jQuery.each($gnb_links, function(idx, link) {
 jQuery(link).on('click', assignParentClassActive);
});
```
**- Case 2.1 jQuery**(jQuery 함축해서 사용 (작성이 간단해 많은 사람들이 이렇게 사용))
```js
$('.gnb a').click(function (event) {
  e.preventDefault();
  $(this).parent().addClass('active');
});
})(this);
```
---
**1. 전달인자로 DOM ElementNode를 설정한 경우, jQuery( DOM ElementNode )**

```js
var $html = jQuery( document.documentElement );
console.log( $html, $html.jquery );
function init(event) {
 console.log(event.type);
 var $body = jQuery( document.body );
 console.log( $body, $body.jquery );
}
```
 **- Native DOM Events**

- <head> 내부에서 jQuery 코드 수행 시, DOM Script와 마찬가지로 문서객체모델이 완성된 이후에 코드가 실행되어야 하기에 이벤트를 사용해야 한다.
- 참고 URL 1 : https://developer.mozilla.org/ko/docs/Web/Events/DOMContentLoaded
- 참고 URL 2 : https://developer.mozilla.org/ko/docs/Web/API/Document/readyState

```js
window.addEventListener('load', init);
// IE 9+ 지원
// DOMContentLoaded 이벤트가 load 이벤트 보다 빠르다!
window.addEventListener('DOMContentLoaded', init);
```
 **- jQuery Ready Function**

```js
jQuery(document).ready(init);
```
**- Speed Result**

- DOMContentLoaded Event << jQuery Ready Event << Load Event

---
**2. CSS 선택자를 사용한 경우, jQuery( 'css selector' )**

- cssQuery() 라이브러리 : 자바스크립트 마술사, 딘 에드워드 (http://dean.edwards.name/my/cssQuery/)
- 참고 URL : http://d2.naver.com/helloworld/1009
- sizzle() 라이브러리 : 다양한 기능과 많은 CSS3 선택자 지원, 확장
```js
console.time('Native DOM Control'); //속도를 확인(시작부분)
 window.addEventListener('DOMContentLoaded', function() {
   document.querySelector('body').setAttribute('data-hasnt-child', 'no');
   document.querySelector('.gnb li:last-child').classList.add('last-native-dom');
 });
console.timeEnd('Native DOM Control'); //속도를 확인(끝부분)
// --------------------------------------------------------------------
console.time('jQuery DOM Control');
 jQuery(document).ready(function() {
   jQuery('body').attr('data-is-body', 'yes');
   jQuery('.gnb li:last-child').addClass('last-jquery');
 });
console.timeEnd('jQuery DOM Control');
console.log('%c------------------------------', 'color: #3d9a21');
```
---
**3. HTML 코드를 사용한 경우, jQuery('<html_code>')**
```js
var $fds = jQuery('<div id="fds" class="jquery-study">Front-End Develop SCHOOL</div>');
// console.log( 'jQuery 인스턴스 객체 $fds:', $fds );
jQuery(document).ready(function() {
 // .gnb 요소의 첫번째 자식 요소로 $fds에 참조된 jQuery {} 객체의 HTML 코드로 생성된 요소를 삽입하라.
 $fds.prependTo('.gnb');
});
// 위 코드를 Native Code 로 변경
// window.addEventListener('DOMContentLoaded', function() {
//   var html_string = '<div id="fds" class="jquery-study">Front-End Develop SCHOOL</div>';
//   var gnb = document.querySelector('.gnb');
//   gnb.innerHTML = html_string + gnb.innerHTML;
// });
console.log('%c------------------------------', 'color: #3d9a21');
```
---
**4. 전달인자로 함수를 전달 받은 경우, jQuery(function(){})**
```js
//jQuery에 함수를 전달하면 암묵적으로 ready가 적용 된다
jQuery(function(){
 jQuery('.gnb li:last-child a').html('전달 인자로 함수를 전달 받은 경우, <code>jQuery(function(){})</code>');
});
// jQuery() 팩토리 함수가 하는 일은 내부적으로 객체지향 자바스크립트 패턴(constrcutor, prototype)으로
// jQuery {} 인스턴스 객체를 생성한다. ※ 다시 말해 가급적 팩토리 함수를 사용하는 빈도를 줄여야 한다.
console.log( 'jQuery().constructor === jQuery:', jQuery().constructor === jQuery );
// 현재 페이지 또는 애플리케이션에서 사용 중인 jQuery의 버전을 체크하는 방법
console.log('jQuery.fn.jquery:', jQuery.fn.jquery);
console.log('jQuery.prototype.jquery:', jQuery.prototype.jquery);
// jQuery() 팩토리 함수의 결과 값은 jQuery {} 인스턴스 객체이기에
// jQuery.prototype의 속성을 사용하여 버전을 출력한다.
console.log('jQuery().jquery:', jQuery().jquery);
```

---

**jQuery 코어 - 팩토리 함수**
```js
// 함수 내부이기 때문에
// 안정적으로 $를 jQuery로 사용할 수 있다.
jQuery(function($){
  var changeColor = function(e) {
    // 브라우저 기본 동작 차단
    e.preventDefault();
    // jQuery 메소드 내부에 전달되는 함수 내부의 this는
    // jQuery 객체가 아닌 벗겨진 DOM 객체를 가리킨다.
    var $span = $('span', this).css('color', '#fe4940');
  };
  var chageSpanTextUpper = function(e) {
    // 기존의 텍스트 설정 값을 가져와 대문자로 변환한 후
    // 변수에 변환된 텍스트 값을 복사
    var $span = $('span', this);
    var span_changed_text = $span.text().toUpperCase();
    // 복사된 값의 변수를 다시 $span jQuery {}의 메소드 .text()를 사용해
    // 내용 값을 변경
    $span.text(span_changed_text);
  };
  $('a.foo').click(changeColor);
  $('a.foo').click(chageSpanTextUpper);
});
```

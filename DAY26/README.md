###### Front-End Develop SCHOOL

# DAY 26

###JavaScript

 - 초창기 자바스크립트 환경에서는 문법이 엄격할 수가 없었다.(현재는 과도기로서 느슨하게도 작동한다)
 - Dot Syntax : `window.alert()`

```javascript
// 변수 선언
var count = 10;

// 함수 선언
function countDown(){
  console.log(count)
  count = count - 1;
}

// 함수 호출
countDonw();
```

####BOM(Browser Object Model)

```javascript
// window : 최상위 객체

// 현재 사용자가 스크롤 한 페이지 높이 위치 값 반환
window.scrollY;

// 인자로 전달된 값을 창으로 띄운다
window.alert(인자);

var is_youngman = window.confirm('당신은 청년입니까?');

// 확인창에서 누른 값에 따라 변수에 담길 값이 변한다(true or false)
console.log('is_youngman: ', is_youngman); 

// 입력받은 문자를 담는다
var name = window.prompt('성함을 입력해 주세요');
console.log('환영합니다 ' + name + '님!');

// 전달한 인자 값만큼 이동(x, y)
window.scrollTo(0, 400); // 절대값
window.scrollBy(0, -200); // 상대값

// 시간 제어
//window.setInterval(할일(=함수), 시간(밀리초)) : 주기마다 반복
//window.setTimeout(할일(=함수), 시간(밀리초)) : 1회 실행
window.setInterval(conutDown, 1000);

// 반복작업을 시켰으나 멈출 장치를 마련하지 않았으므로 조건을 주어야 한다
var num = 10;
var interver_id = setInterval(function(){
  num = num + 4;
  console.log(num);
  if ( num > 30 ) {
    clearInterval(interver_id);
  }
}, 200);

// Location 객체, 다양한 속성이 있다
window.location.href; 
window.location.hash; 
window.location.pathname;
.
.
.

// History 객체
window.history.back(); // 뒤로 가기(바로 뒤)
window.history.forward(); // 앞으로 가기(바로 앞)
window.history.go(-2) // 뒤로 두번, 인자로 숫자를 전달한다

// Screen 객체, 브라우저가 가져온 스크린(사용자의 화면, 모니터)의 정보
window.screen.width;
window.screen.heigth;
window.screen.availWidth;
window.screen.availHeight;
window.screen.orientation.angle;
window.screen.orientation.type;
.
.
.

// Navigator 객체(중요)
window.navigator.userAgent; // 브라우저 식별자
window.navigator.cookieEnabled
window.navigator.onLine
.
.
.
// 모바일 식별
window.navigator.toLowerCase.indexOf('android') > -1

```

####DOM(Document Object Model)

```javascript
window.document.title;
window.document.doctype;
window.document.compatMode;
window.document.activeElement
.
.
.

// 표준 모드 감지( 자바스크립트를 사용한 문서 동적 제어)
// 웹 표준 호환 모드라면 standard_mode에 true 값이 된다.
var standard_mode = document.compatMode == 'CSS1Compat';
// 문서에서 루트 요소인 <html> 요소를 찾아 변수 html에 할당
var html = document.documentElement; // html element

// 웹 표준 호환 모드라면 첫번째 코드 블럭문 실행
if ( standard_mode ) {
  // 변수 html에 참조된 문서 객체 <html>의 클래스를 'standard'로 설정
  html.setAttribute('class', 'standard');
} else {
  // 변수 html에 참조된 문서 객체 <html>의 클래스를 'no-standard'로 설정
  html.setAttribute('class', 'no-standard');
}

```

-

####간단한 애니메이션
```html
<div id="box"></div>
```
```css
#box {
  width: 100px;
  height: 100px;
  background: black;
  position: abolute;
  top: 100px;
  left: 100px;
}
```
```javascript
// 함수 정의 : .box 객체를 위치 이동 시킨다
function moveBox() {
  // 문서에서 .box요소를 찾는다.
  // var box = document.getElementById('box');
  var box = document.querySelector('.box');

  // 가로 방향(left)으로 이동하도록 설정, [ transform: translateX()을 권장 ]
  box.style.left = parseInt(box.style.left) + 20 + 'px';
}
setInterval(moveBox, 200);
```
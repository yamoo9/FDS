###### Front-End Develop SCHOOL

# DAY 35

offsetX 이벤트 대상 객체에서의 상대적 마우스 X좌표 위치를 반환 - 지역좌표 (IE만 지원)
offsetY 이벤트 대상 객체에서의 상대적 마우스 Y좌표 위치를 반환 - 지역좌표 (IE만 지원)

layerX 이벤트 대상 객체에서의 상대적 마우스 Y좌표 위치를 반환 - 지역좌표 (IE 지원 안함)
layerY 이벤트 대상 객체에서의 상대적 마우스 Y좌표 위치를 반환 - 지역좌표 (IE 지원 안함)
clientX 브라우저 페이지에서의 X좌표 위치를 반환하나 스크롤 무시하고 해당 페이지의 상단을 0 으로 잡음 - 글로벌 좌표
clientY 브라우저 페이지에서의 Y좌표 위치를 반환하나 스크롤 무시하고 해당 페이지의 상단을 0 으로 잡음 - 글로벌 좌표

pageX 브라우저 페이지에서의 X좌표 위치를 반환(스크롤 반영함) - 글로벌좌표(IE 지원 안함)
pageY 브라우저 페이지에서의 Y좌표 위치를 반환(스크롤 반영함) - 글로벌좌표(IE 지원 안함)

screenX 전체 모니터 스크린에서의 마우스 X좌표 위치를 반환
screenY 전체 모니터 스크린에서의 마우스 Y좌표 위치를 반환


IE 에서 pageX, pageY 생성하는 법. (실제로 jQuery 에서 다음처럼 구합니다.)

function fixEvent(event) {
  if ( !event.target ) {
    event.target = event.srcElement || document;
  }

  if ( event.target.nodeType === 3 ) {
    event.target = event.target.parentNode;
  }

  if ( event.pageX == null && event.clientX != null ) {
    var eventDocument = event.target.ownerDocument || document,
    doc = eventDocument.documentElement,
    body = eventDocument.body;

    event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
    event.pageY = event.clientY + (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0);
  }
}

-

###반복문

####forEach

```javascript
var movielist = [];

movielist.push('터널');
movielist.push('덕혜옹주');
movielist.push('부산행');
movielist.push('서울역');

// for문
for( var i=0, l=movielist.length; i < l; i+=1 ) {
  console.log('for 문의 결과: ', movielist[i]);
}

// for - in문
for ( var prop in movielist ) {
  if( movielist.hasOwnProperty(index) ) {
    console.log('for - in 문의 결과: ', movielist[prop]);
  }
}

// for - of문
for ( var movie of movielist ) {
	console.log('for - of 문의 결과: ', movie);
}

// 배열 객체(Array)의 메소드: .forEach(원소, 순서, 배열)
// .forEach() 문은 반환 값이 없다. (undefined)
// 참고 URL: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
var arr = []
movielist.forEach(function(item, idx) {
	console.log('item '+ idx +': ', item);
	return 'item '+ idx +': ' + item;
	if (item !== '부산행') {
		arr.push(item)
	}
});

console.log('movielist.forEach() 결과: ', movielist);

// 배열 객체(Array)의 메소드: .map(원소, 순서, 배열)
// .map()의 반환 값은 수정된 배열을 반환한다.
// 참고 URL: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
var new_movielist = movielist.map(function(item, index, arr) {
	console.log(item + '은 ' + index + '번째 원소입니다.');
	return item + '은 ' + index + '번째 원소입니다.';
	if ( index === movielist.length - 1 ) {
		console.log('arr:', arr);
	}
});

console.log('movielist.map() 결과: ', new_movie);
```

-

###함수의 특징

 - 상위 영역(Scope)과 구분되는 별도의 영역을 생성한다
 - 함수 내부에 `var` 키워드 `function` 키워드로 정의된 데이터 값은 외부 영역에서 접근이 불가능하다.
 - 함수 내부는 독립된 공간이기에 내부에 정의된 `var` 키워드 `function` 키워드로 정의되 데이터는 호이스트 된다.

```javascript
// 함수 표현식
var scopeFnExpression = function(movielist) {
	console.log(this) // window객체
	if (movielist) {
		console.log('if 내부')
	}
	console.log('함수 내부')
}

scopeFnExpression(movielist); // window.scopeFnExpression() 와 같다

console.log('함수 외부');
```

####return

 - 함수내에서 return을 만나면 함수를 종료한다
 - 함수 내에서 반드시 return을 써야하는 것은 아니다

-

###this

 - context : 스코프를 소유하고 있는 객체
 - `this`는 참조변수로서 context를 참조한다(가르킨다)

```javascript
function showMe(){
	console.log(this)
}

showMe // window -> 현재 showMe 는 window.showMe 와 같으므로

var obj = {
	name: 'obj',
	showMe: function(){
		console.log(this)
	}
}

obj.showMe(); // { name: 'obj' ...}
```

- 

###Strict

 - 전역에서 함수를 호출할 경우 그 함수의 컨텍스트를 암묵적으로 window를 가리킨다.
 - 앞선 상황은 예상치 못한 문제를 내포하므로 `'use strict';`를 명시 한다.

> **_ECMA2015 버전 부터는 기본 설정 값이 '엄격 모드'_**

```javascript
function ConstructorFunc() {
	'use strict';
	hello_message = 'hi' // var 없이 변수선언이 안되므로 에러
	console.log(this, hi_message // 전역(window)을 참조하지 못하도록 에러
}

```

-

###함수는 일급 객체다

 - 함수가 인자로 전달될 수 있다
 - 값으로 반환(return)할 수 있다

```javascript
var fn = function(callback){
	if (typeof callback === 'function') {
		window.setTimeout(callback, 3000);
	} else {
		throw new Error('전달인자는 함수 데이터 유형이어야 합니다.');
	}
}

// 함수를 다른 함수의 인자로 전달할 수 있다!
fn( function(){
	console.log('전달된 함수가 실행 됐습니다');
});
```

####콜백

```html
<div class="demo-box">demo-box</div>
```
```css
body { margin: 5rem; }
.demo-box {
	postiio: absolute;
	top: 80px;
	left: 80px;
	width: 100px;
	height: 100px;
	background: #333;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.4s;
}
```
```javascript
var demo_box = query('.demo-box');

function movingBox(box, position, callback){
	if ( !isElNode(box) ) {
		errorMSG('첫 번째 인자는 요소 노드이어야 합니다');
	}
	position = position || { "x": 0, "y": 0 };
	callback = typeof callback === 'function' ? callback : function() {
		return 'try callback';
	}

	var current = {
		'x': box.offsetLeft,
		'y': box.offsetTop
	};

	var target_x = current.x + 100;

	var interval_id = setInterval(function(){
		if (current.x <= target_x) {
			current.x += 10;
			box.style.left = current.x + 'px';
		} else {
			clearInterval(interval_id);
		}
	}, 200);
	callback();
}

demo_box.onclick = function(event){
	movingBox(this, { "x": event.clientX, "y": event.clientY}, function(){
		console.log('모든 애니메이션이 종료되었습니다');
	});
}
```

####반환함수

```javascript
function tellMe(){
	var inTellMe = function() { console.log('난 inTellMe야')}
	return intellMe;
}

var callTellMe = tellMe();
callTellMe();
```

-

###클로저

 - 반환함수에서 반환되고 담겨진 `callTellMe`함수를 클로저 함수라고 부른다
 - 클로저 함수는 자신을 탄생시킨 부모 함수의 스코프(클로저)에 접근이 가능

```javascript
function outerCountDown(number) {
	var number;
	function countDown(target_number) {
		var number = target_number ? target_number : number
		return number--
	}
	return countDown
}

function countDown(number){
	if (typeof number !== 'number') { throw new Error('인자는 숫자이어야 합니다')}
	var _num = number;
	var _countDown = function() {
		console.log(_num--);
	};
	return _countDown
}

var count = countDown(10);
count(); // 10
count(); // 9
count(); // 8
.
.
.
```

 -  클로저 예제

```html
<nav class="demo-navgation">
	<ul>
		<li><a href="#">item 01</a></li>
		<li><a href="#">item 02</a></li>
		<li><a href="#">item 03</a></li>
		<li><a href="#">item 04</a></li>
	</ul>
</nav>
```
```javascript
var navi = query('.demo-navgation')
var link_list = navi.queryAll('a')
var i = 0, l = link_list.length;
function showMeIndexWrapper(index){
	function showMeIndex() {
		console.log( index );
	}
	return showMeIndex;
}
for (; i < l; i++){
	link_list[i].onclick = showMeIndexWrapper(i)
}

//for (; i < l; i++){
//	link_list[i].onclick = function(){
//		console.log(i);
//	}
//}
```

####IIFE 패턴

 - 비용을 절감하는 형태로 클로저 함수를 만드는 방법
 - 익명함수를 즉시 실행
 - 패턴 :
  - `(function(){}());`
  - `(function(){})();`
  - `+function(){}();` [ 권장하지 않음 ]
  - `-function(){}();` [ 권장하지 않음 ]
  - `!function(){}();` [ 권장하지 않음 ]

```javascript
// 선언과 동시에 실행
(function(){ console.log('hi')})();
```

####모던 자바스크리브 모듈 패턴(프론트 환경에서만)

 - YUI 방식

```javascript
(function(global){
	var _count = 10;

	var countDown = function() {
		return _count--;
	}

	// 외부로 공개
	global.countDown = countDown;

	funtion isElName(node, property,value){ ... }

	// 네임스페이스 패턴
	global.$ = {
		'type': isType,
		'isElementName': isElName
	}
})(this); // this === window

countDown();
countDown();
countDown();

$.isElName(document, 'body');
```

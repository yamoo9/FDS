###### Front-End Develop SCHOOL

# DAY 38

### jQuery

1. $ vs $()
1. $( document ).ready()
1. 다른 자바스크립트 라이브러리와의 충돌 방지
1. 요소 선택 (Selecting Elements)
1. 선택된 대상 작업 (Getter, Setter, Chaining)
1. 요소 조작 (Manipulating Elements)
1. 속성 제어 (Attributes)
1. jQuery 객체 (The jQuery Object)
1. 탐색 (Traversing)
1. CSS 스타일링/수치 (CSS, Styling, & Dimensions)
1. 데이터 메소드 (Data Methods)
1. 유틸리티 메소드 (Utility Methods)
1. jQuery 객체, jQuery가 아닌 객체 순환
1. jQuery .index() 함수 사용

-

###Modernizr

 - 사용자 환경 감지 라이브러리
 - 모더나이저는 헤드에서 불러와야 좋다

```css
/* CSS 포지션 스티키 지원 벤더 : FF, Safari */
.csspositionsticky body {
	background: green; }

/* CSS 포지션 스티키 미지원 벤더 : IE, Edge, Chrome, Android */
.no-csspositionsticky body {
	background: red; }
/* 
 * CSS로 분기 처리를 할 수 있게 됐다!! 
 */
```


```javascript
if (!Modernizr.cssanimations){
	// JS애니메이션 사용
	// setInterval, setTimeout 보다는 requestAnimationFrame을 사용하는 것이 좋다
}
```

###Detectizr

 - Modernizr의 확장(의존성) : 디바이스 환경 감지
 - 디바이스, 디바이스 모델, 스크린 사이즈, OS, OS 버전 등

```javascript
Detectizr.detect({
	// 옵션
	detectDevice: true,			// detection of device
	detectDeviceModel: true,	// detection of device model
	detectScreen: true,			// detection of screen size
	detectOS: true,				// detection of operating system type and version
	detectBrowser: true,		// detection of browser type and version
	detectPlugins: true			// detection of common browser plugins
});
```

> Warning: 오류가 감지 됐습니다!(오픈소스의 아쉬운점)

-

##jQuery

 - `$()` : jQuery를 factory pattern으로 볼 수 있다. 무엇을 던지든 알아서 처리해준다

```javascript
// jQuery 객체
var $container = $('.container');
// 단순한 Number
var container_count = $container.length();
``` 

####`$` 충돌 방지 

 -  다른 라이브러리에서 $를 쓴다면 충돌이 일어 날 수있다

```javascript
console.log(window.$ === window.jQuery) // true

// 1. $를 쓰지 않고 jQuery만 표기한다
// winodw.onload 이벤트를 대체할 수 있는 window.addEventListener('DOMContentLoaded') 이벤트를 
// 추상화한 jQuery(document).ready()구문을 지원한다
jQuery(document).ready(function(){
	jQuery('body').css('background', '#ff0011');
})

// 2. $를 사용하지 않고, jQuery.noConflict() 메서드 사용으로 새로운 변수를 생성한다
// $를 포기하다
var $jq = jQuery.noConflict();
var $container = $jq('.container');

// 3. jQuery.noConflict()로 $, jQuery 모두 포기
var $$ = jQuery.noConflict(true);
var $container = $$('.container');

// 4. IIFE
(function(global, $){
	'use strict';

	//code...

})(this. this.jQuery);

// 5. jQuery() 팩토리 함수에 함수를 전달한 후, 인자 값을 $로 받는다
jQuery.noConflict(true)(function($){

	// $를 쓸 수있는 영역

});

// $ vs $()
// $는 jQuery 함수를 나타내고
// $()는{함수 실행 결과는} jQuery 객체(인스턴스)를 반환한다
(function(global, $){
	'use strict';

	//$.type() -> 스태틱 메서드 (스태틱 혹은 클래스 메서드라 불리며 인스턴스 메서드와 구별된다)
	console.log( $.type( $ ));
	console.log( $.type( $() ));
})(this, this.jQuery)

// 출력 결과를 확인해봅시다
```

####jQuery Document

> jQuery만큼 친절한 Document 별로 없습니다

- 문서에서 확인해볼 것들
 - 메서드의 분류
 - deprecated 여부
 - 리턴값 유무, 리턴값이 있다면 리턴값의 형태
 - 인자를 받는지, 받는다면 어떤 형의 인자를 받는지
 - 코드 사용법

```html
<div class="demo">
	<button class="change-text-button" type="button">단락 내용 변경</button>
	<p>문서객체모델은 아직 준비 되지 않았습니다</p>
</div>
```
```javascript
(function(global, $){
	'use strict';

	// 상하동일
	// $('.demo').find('p').text('문서객체모델이 모두 준비됐습니다')
	// $('.demo p').text('문서객체모델이 모두 준비됐습니다')

	// 명시적으로 global을 밝힘으로써 탐색에 드는 비용을 줄일 수 있다
	global.setTimeout(function(){
		$('.demo p').text('문서객체모델이 모두 준비됐습니다')
	}, 2000);


	var $change_text_btn = $('.change-text-button');

	$change_text_btn.on('click', function(){
		// 그냥 this는 jQuery 객체가 아닌 일반 버튼 요소를 가리키므로 다시 $()로 감싼다
		$(this).next().text('버튼을 클릭하여 텍스트가 변경 됐습니다');
		// attribute vs property
		// 해석은 '속성'으로 같지만 attribute는 HTML에서
		// JS나 CSS에선 property로 접근한다
		$(this).attr('disabled', true);
		$(this).prop('disabled', true);
	});
})(this, this.jQuery)
```

####Off Canvas

```html
<div class="page-container">
<div class="offcanvas-menu-wrapper">
	<button class="toggle-menu-button"
			type="button"
			aria-label="오프 캔버스 메뉴 펼침" 
			aria-expanded="false">
		<span>-</span>
		<span>-</span>
		<span>-</span>
	</button>
	<div class="offcanvas-menu">
		<h2>Off Canvas Menu</h2>
		<ul>
			<li><a href="#">item</a></li>
			<li><a href="#">item</a></li>
			<li><a href="#">item</a></li>
		</ul>
	</div>
</div>
</div>
```
```css
.offcanvas-menu-wrapper {
	position: relative;
	left: -200px;
	float: left;
}
.toggle-menu-button {
	position: absolute;
	padding-top: 5px;
	top: 0;
	right: -28px;
}
.toggle-menu-button span {
	display: block;
	line-height: 0.5;
}
.offcanvas-menu {
	width: 200px;
	heigth: 100vh;
	background: orange;
}
```
```javascript
(function(global, $){
	'use strict';

	function init(){
		// 오프 캔버스 메뉴 이벤트 핸들링
		var $offcanvas_wrapper = $('.offcanvas-menu-wrapper');
		var $toggle_btn = $('.offcanvas-menu-wrapper').find('.toggle-menu-button');

		$toggle-btn.on('click', toggleOffCanvasMenu );
	}

	// 이벤트 핸들러(함수)
	function toggleOffCanvasMenu(){
		// this가 참조하는 <button>객체를 jQuery 객체화 시키는 방법
		var $this = $(this); // * 이와같은 행위는 성능을 저하시킨다. 클릭할 때마다 새로운 객체 생성
		var $wrapper = $this.parent();

		if ($wrapper.css('left') < 0){
			$wrapper.css('left', 0);
		} else {
			$wrapper.css('left', -200);
		}
	}

	$(init) // $(document).ready(init);
})(this, this.jQuery)
```

####CSS Selector

```javascript
$('html a:not(:first-child)');

// 이미 알고있는 css선택자로 선택할 수 있습니다!!
```

####Filter

 - 직관적인 선택자를 사용하여 요소에 접근할 수 있다(기존 css선택자에는 없음) 

```javascript
$('a:first').addClass('selected');
// 위와 동등 $('a').eq(0).addClass('selected');
$('a:last').addClass('selected');

$('a[href!=#]').toggleClass('selected');

$('a:nth-child(odd)')
$('a:odd')

$('a:eq(1)')
$('a').eq(1)

$('a:lt(4)')
$('a:gt(5)')

$('article :header')

$('a:contains("fastcampus")')

$('a:has(span)')

$('nav:parent') // nav중에 자식을 가지고 있는 것

$('a:empty') // === $('a:not(:parent)')

$('*:hidden') // <head>, <meta> ..

// 이외에도 유용한 선택자가 많이 있습니다.
```

####css() 함수 활용

```javascript
// 속성만 전달 : Getter
$('[class*="wrapper"]').css('margin-top');
// 밸류값도 전달 : Setter
$('[class*="wrapper"]').css('margin-top', '-=50px');


// Map 방식 : Detectizr 옵션 처럼 객체( { key1: value1, key2: value2 ... } )를 전달한다
$('button').css({
	'background': '#ff0011',
	'color': '#fff',
});

// Callback 방식
// $('button').css(function(){ return value })
$('.demo-box').on('click', function(){
	$(this).css({
		'width': funtion(idx, value){
		return parseInt(value, 10) * 2 + 'px';
		},
		'height': funtion(idx, value){
		return parseInt(value, 10) * 2 + 'px';
		}
		// 아래 처럼 사용할 수도 있다
		// 'width': '+=10',
		// 'height': '+=10',
	})
})
```
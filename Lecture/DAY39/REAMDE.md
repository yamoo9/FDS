###### Front-End Develop SCHOOL

# DAY 39

### `this` & `IIFE` 패턴

─ 복습 ─

-

### jQuery

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

## Review

###this 컨텍스트 참조 변수

- 먼저 알아야 할 것들
 - JS는 영역(Scope)를 가진다. 그리고 이 공간은 크게 전역(Global Scope)와 지역(Local Scope)가 있다
 - JS에서 `if, while, do ~ while, for`문 등의 블록`{ }` 내부는 지역(Local Scope)가 아니다
 - 유일하게 함수의 블럭`{ }` 내부만이 지역(Local Scope)를 가질수 있게 된다.

```javascript
// this -> 전역 컨텍스트 객체를 가리킨다.
console.log(this); // 결과: window object

if (true){
	console.log(this); // 결과: window object
}

function myFn(){
	console.log(this);
}
myFn() // 결과: window object
// 이상할 것이다. 사실 이 함수는 *암묵적*으로 window.myFn() === this.myFn()
// 전역 객체(window)의 메서드로서 실행시킨 것이기 때문이다.


function meFn(){
	'use strict';
	console.log(this);
}
meFn(); // 결과: undefined
// 엄격 모드에서는 기존의 설계 오류를 해결하기 위해
// 더이상 암묵적으로 전역 컨텍스트 객체인 window에서 실행한것 처럼 처리하지 않기 때문

// 따라서
window.meFn(); // 결과: window object
// *명시적*으로 실행 컨텍스트를 지정하였기 때문에 this가 전역 객체 window를 가리키게 된다

demo1.onmouseenter = myFn; // 결과: this === demo1
demo1.onclick = function(){
	myFn(); // 결과: this === window object
}
// 익명함수 내에 myFn을 호출했다.
// 이번에도 여지없이 JS는 myFn 앞에 window를 붙여서 
// window.myFn()으로 실행했기 때문이다

demo2.onclick = function(){
	meFn(); // 결과: undefined
	window.meFn(); // 결과: window object
}
// 위의 결과는 이제 명확하다. meFn은 엄격 모드이므로 명시적으로 실행 컨텍스트를 밝혔기 때문에 window를 가리킨다

demo1.onclick = function(){
	myFn.call(this); // 결과: this === demo1 
}
// this는 실행 컨텍스트인 demo1을 가리킨다.
// 하지만 demo1은 myFn이라는 메서드를 가지고 있지 않기 때문에( this.myFn()을 실행하면 오류가 난다 )
// this가 myFn을 빌려서(call) 실행하게 되고 콘솔에 아무 오류 없이 결과를 출력한다
```

####jQuery 함수 내부에서의 this

```javascript
jQuery(document).ready(function($){
	'use strict';

	console.log('jQuery 팩토리 함수에 전달된 콜백함수 내부에서의 this', this);
	$('.demo1').on('mousedown', function(){
		console.log('this: ',this); // this === demo1 문서객체(DOM Element)
		console.log($('$this: ', $(this)); // jQuery 객체
	});

	var $demo1 = $('.demo1')
	$('.demo1').on('mousedown', {'$this': $demo1}, function(evt){
		console.log(arguments);
		console.log(evt.data.$this);
		var $this = evt.data.$this;
		/*
		 var $this = $(this); 처럼 매번 새로운 객체를 생성해서 성능 저하를 일으키지 않아도 된다
		 */ 
		$this.css('font-size', '+=20');
	});
});
```
-

###IIFE(즉시실행 함수)

 - 함수선언과 동시에 `()`를 붙여 실행하는 패턴
 - 전역과 구분되는 지역을 형성함으로서 공개/비공개 멤버를 설정할 수 있다

```javascript
var fn =function() {};
function fnc() {};

// 일반적인 함수 실행
fn();
fnc();

// 즉시실행 함수
(function(){ console.log('IIFE 1')})();
(function(global){ console.log(global)})(this); // window object
(function($jq$){ console.log($jq$ === window.jQuery)})(jQuery); // true
```

-

##jQuery

###css( ) 사용법

```css
body {
	margin: 3rem auto 5vh;
	font-size: 100%;
	line-height: 1.5rem;
	color: #343232;
	background: #f6eded;
}
```
```javascript
(function(global, $){
	'use strict';

	var $body = $('body');

	/*
	 Getter로써의 css()
	 */
	console.log($body.css('margin'));

	/*
	 Setter로써의 css()
	 */
	$body
		.css('margin-left', '2rem')
		.css('margin-right', '2rem');
	var body_margin = $body.css('margin')
	console.log(body_margin);

	/*
	 CSS 맵(객체) 전달
	 */
	var css_map = {
		'background': '#2efdcd',
		'color': '#333',
		'font-size': '+=22'
		// 폰트사이즈 38px로 확대됨
	}
	$body.css(css_map);
	var body_font_size = $body.css('font-size');
	console.log(body_font_size);

	/*
	 각 속성의 함수 설정
	 */
	var fn_map = {
		'width': function(idx, value){
			return value/3 + 20;
		},
		'height': function(idx, value){
			if (global.parseFloat(value, 10) < 300) {
				return '100vh';
			} else {
				return value * 2;
			}
		}
	};
	$body.css(fn_map);
	console.log('#1 - width: ',$body.css('width'))
	console.log('#2 - height: ',$body.css('height'))

})(this, this.jQuery)
```

-

### jQuery - 효율적인 이벤트 등록

```html
<div class="container">
	<h1>jQuery Method</h1>
</div>
```
```javascript
(function(global, $){
	'use strict';

	var $h1 = $('.container h1');
	var $h1_text = $h1.text(); // 'jQuery Method'

	h1_text = h1_text.split('') // [ 'j', 'Q', ... 'd' ]

	h1_text = $.map(h1_text, function(item, index){
		if ( $.trim(item) ){
			return '<span>' + item + '</span>'
		} else {
			// 공백일 때는 그냥 리턴한다
			return item
		}
	});
	h1_text = h1_text.join('');
	$h1.html(h1_text);

	var $letters = $('span', $h1);

	$letters.on('mouseenter', function(){
		$(this).css('background', '#ff0'); // 쉬운 코드...But 좋지 않은 코드
	});
	$letters.each(function(index, item){
		// var $this = $(item)
		var $this = $letters.eq(index);
		$this
			.on('mouseenter',{'$l': $letters}, function(e){
				$this.css('background', '#52c88c')
			});
	});


	// $.proxy 메서드를 이용한 이벤트 리팩터링
	// ES6의 bind와 같은 역할
	$letters.each(function(index, item){
		// var $this = $(item)
		var $this = $letters.eq(index);
		$this
			.on('mouseenter', $.proxy(letterOvers, $this))
			.on('mouseenter', $.proxy(playEffectSound, $this));
			// .on('mouseenter', playEffectSound.bind($this))
	});
	function letterOvers() {
		this.css('background', '#ff0')
	}

	// HTML5 Audio 객체 생성
	var $effect_sound = $('<audio>');
	$effect_sound.attr({
		'src': 'path/to/audio/file'
	});

	function playEffectSound(){
		audioStop(efs_ob)
		effect_sound.play();
	}

	function audioStop(audio){
		audio.pause();
		audio.currentTime = 0;
	}

})(this, this.jQuery)
```

-

###jQuery 스타일 클래스 속성 제어

- class 속성 제어 방법
 - `.hasClass()` : 해당 클래스가 있는가? `Boolean` 리턴
 - `.addClass()` : 해당 클래스가 없다면 추가
 - `.removeClass()` : 해당 클래스가 있다면 제거, 인자가 없다면 모든 클래스 제거
 - `.toggleClass()` : 해당 클래스 속성을 토글한다. (해단 클래스 속성을 소유했다면 제거, 없다면 추가)

```html
<div class="button-controls" role="group">
	<button type="button" class="addClass_look">add <strong>look</strong></button>
	<button type="button" class="removeClass_look">remove <strong>look</strong></button>
	<button type="button" class="toggleClass_look">toggle <strong>look</strong></button>
</div>
<div class="demo-box">demo-box</div>
```
```css
.demo-box {
	width: 400px;
	height: 60px;
	box-sizing: border-box;
	margin: 1rem 0;
	border: 5px solid #999;
	padding: 1em;
	text-align: center;
	transition: all .3s ease;
}
.demo-box.look {
	border-width: 10px;
	border-color: #5225e2;
	padding: 0.75em 0 0 0;
}
```
```javascript
(function(global, $){
	'use strict';

	$(init);

	var $demo_box = $('.demo-box')

	function init(){
		// 이벤트 위임
		$('.button-controls').on('click', 'button',{'$index': 0} function(event){
			switch(this.getAttribute('class')){
				case 'addClass_look':
					$demo_box.addClass('look');
				break;
				case 'removeClass_look':
					$demo_box.removeClass('look');
				break;
				case 'toggleClass_look':
					// 조건을 넣을 수도 있다
					$demo_box.toggleClass('look', (event.data.$index++) % 3 === 0);
				break;
			}
		})
	}
})(this, this.jQuery)
```

-

###jQuery RWD

```javascript
(function($){
	'use strict';
	// Object.keys를 사용자의 브라우저가 지원하지 않을 수 있다.
	// 이를 추상화 하여jQuery함수의 속성으로 동일한 일을 수행하는 메서드를 추가
	if (!$.keys) {
		$.keys = function(obj){
			if ( $.type(obj) !== 'object' ) { throw new Error('객체를 전달해야 합니다')}
			var keys = [];
			for (var prop in obj){
				if(obj.hasOwnProperty(prop)){
					keys.push(prop);
				}
			}
			return keys;
		}
	}
})(this.jQuery)
(function(global, $){
	'use strict';

	/*
	 STEP 1
	 페이지가 로드될 때 다음의 기기인지 확인
	 Mobile: 0 - 767
	 tablet: 768 - 1024
	 Desktop: 1025 - 1366
	 Wide-Screen: 1367 - 
	 위 조건을 확인하여 <html> 혹은 <body> 요소에 class 속성값으로 추가한다
	 */

	var $html = $('html'), $screen_width = $html.width();

	var breakpoints = {
		'mobile': [767],
		'tablet': [768, 1024],
		'desktop': [1025, 1366],
		'wide': [1367]
	}


	var breakpoints_keys = $.keys(breakpoints);

	function changeDeviceMode(screen, first_exe){
		var screen_width = screen.width();
		screen.removeClass(function(index, current_class){
			if (first_exe){
				// 초기 실행시 html 요소의 class 속성값을 가저와 메모리한다
				screen.data('original-class', current_class) 
			}
			// removeClass가 key값들을 걸러내도록 리턴
			return breakpoints_keys.join(' ');
		});

		if ($screen_width <= breakpoints[breakpoints_keys[0]][0]) {
			$html.addClass('mobile')
		} else if ($screen_width >= breakpoints[breakpoints_keys[1]][0] && $screen_width <= breakpoints[breakpoints_keys[1]][1]) {
			$html.addClass('tablet')
		} else if ($screen_width >= breakpoints[breakpoints_keys[2]][0] && $screen_width <= breakpoints[breakpoints_keys[2]][1]) {
			$html.addClass('desktop')
		} else if ($screen_width >= breakpoints[breakpoints_keys[3]][0]) {
			$html.addClass('wide')
		}
	}
	/*
	 STEP 2
	 창 크기를 조정하면 STEP 1에서 수정했던 결과를 다시 실행하여 class 속성 처리 변경한다
	 */

	$(window).on('load resize', {'i': 0}, function(evt){
		// 최초 로드시에만 evt.data.i === 0 => true를 전달하여 원본 클래스를 캐싱
		changeDeviceMode($html, evt.data.i++ === 0 ? true : false );
	});
})(this, this.jQuery)

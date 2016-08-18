###### Front-End Develop SCHOOL

# DAY 36

###코드를 작성하기 위한 공간을 생성 : IIFE 패턴

```javascript
(function(global){
	'use strict';
	var yamoo9 = 'hi'; // 지역변수
})(this);

console.log(yamoo9) // error
```
```javascript
(function(global){
	'use strict';
	var yamoo9 = 'hi'; // 지역변수

	// 외부에 노출
	global.y9 = yamoo9;
})(this);

console.log(y9) // hi
```

####놀아봅시다

 - 요일 출력하기

```javascript
function today(){
	var today = (new Date()).getDay();
	switch(today){
		case 0:
		case 6:
			console.log('오예 주말 핵이득');
			break
		default
		console.log('하....출근....');
	}
}
// 혹은
function today(date){
	var today = (new Date()).getDay();
	var week = '일월화수목금토'
	if ( date ? (week.indexOf(date) === 0 || week.indexOf(date) === 6 ): week[today] === '일' || week[today] === '토'){
		console.log('오예 주말 핵이득');
	} else {
		console.log('하........');
	}
}
```

 - 버튼 인덱스 출력하기

```html
<div class="button-set" role="group">
	<button class="button" type="button">Button X-01</button>
	<button class="button" type="button">Button X-02</button>
	<button class="button" type="button">Button X-03</button>
	<button class="button" type="button">Button X-04</button>
	<button class="button" type="button">Button X-05</button>
</div>
```
```javascript
(function(global){
	'use strict';

	// .button-set 선택
	var button_set = query('.button-set');
	// .button-set [CONTEXT] 내부에서 .button 을 모두 수집 [NODELIST]
	var buttons = makeArray( queryAll('.button') );
	// 수집된 [NODELIST]를 순환하여 클릭 이벤트에 함수를 연결한다
	buttons.forEach(function(button, idx){
		button.onclick = function(event){
			event.preventDefault();
			console.log(idx)
		}
	});
	// 혹은
	for(var i = 0; i < buttons.length;i++){
		buttons[i].onclick = (function(btn){
			return function() {
				console.log(btn);
			}
		})(i)
	}
	// 혹은( js의 간단한 속성 추가 원리를 이용 )
	for( var i = 0; i < buttons.length; i++ ){
		button = button[i];
		button.index = i;
		button.onclick = function(){
			console.log(this.index);
		}
	}
	// 혹은 ( 유사배열을 배열로 만들지 않고 Array의 메서드를 빌려쓰기 )
	Array.prototype.forEach.call(buttons, function(item, index){
		item.onclick = function(event){
			event.preventDefault();
			console.log(index)
		}
	});
	// 각 버튼을 사용자가 클릭할 경우, 자신의 순환 인덱스 숫자를 콘솔에 출력한다
})(this);
```

> 다양하게 구현해봅시다

####arguments

 - 함수는 arguments라는 유사 배열을 가진다

```javascript
function air(arg1, arg2, arg3) {
	console.log(arguments);
	console.log(arguments.length)
}
air('hello', '안녕', '니하오');
air();
```


-

###오늘의 헬퍼 함수

```javascript
function makeArray(data){
	// 전달된 객체는 배열 또는 유사 배열인가?
	var check_data = isType(data), result_arr = [], len = data.length;
	if ( check_data === 'array') {
		return data;
	} else if ( len && check_data !== 'string' ) {
		while( len-- ) {
			result.push( data[len] )
		}
	}
	return  result_arr.reverse();
	
}

// 이미 제공되는 메서드를 사용할 수 있다. (크로스 브라우징 이슈 있음)
Array.from([])
function convertArray(data){
	if (Array.form){
		return Array.from
	} else {
		return Array.prototype.slice.call(data);
	}
}
```

> 킁킁...냄새가 난다. -> 리팩터링이 필요하다!

```javascript
// 1. 정식으로 클로저를 사용하는 방법으로 문제 해결 방법
function convertArray_wrapper() {
	var closureFn;
	if (Array.from) {
		closureFn = function(data) {
			return Array.from(data);
		}
	} else {
		closureFn = function(data) {
			return Array.prototype.slice.call(data);
		}
	}
	// 내부에서 클로저 함수를 반환
	return closureFn 
}
// 리턴될 내부 함수를 covertArray에 할당
var convertArray = convertArray_wrapper();

// 2. 약식(IIFE 패턴)을 사용하여 클로저를 처리하는 문제 해결 방법
var convertArray = (function(){
	if (Array.from) {
		return function(data) {
			return Array.from(data);
		}
	} else {
		return function(data){
			return Array.prototype.slice.call(data);
		}
	}
})();

// 함수 선언부를 괄호로 감싸고 `()`로 호출하였으므로 [ 선언과 동시에 호출 ]
// Array.from을 지원한다면 위의 구문이
var convertArray = function(data0 {
	return Array.from(data);
})
// 이렇게 바뀌고

// Array.from을 지원하지 않는다면
var convertArray = function(data){
	return Array.prototype.slice.call(data);
}
// 이렇게 바뀐다
```

> 클로저로 인해 더이상 컴퓨터의 리소스를 쓸때없이 소모할 필요가 없어졌다!

-

###객체

 - 속성과 메서드를 포함하는데 이는 속성과 함수일 뿐이다
 - 객체.속성 / 객체.메서드()

```javascript
// 관례상 생성자 합수는 첫글자를 대문자로 표기한다
function Coffee(name){
	this.name = name;
}

var americano = new Coffee('아메리카노');
var latte = new Coffee('라떼');
var mocha = new Coffee('모카');

// Math는 new 키워드를 사용하지 않아도 된다
```

####객체 생성

```javascript
(function(global){
	'use strict';

	// 숫자 객체 생성자를 사용하여 숫자 1부터 10까지를 변수 num1 ~ num10에 생성
	// num1 ~ num10 에는 숫자 값이 담겨야 한다

	var num1 = (new Number(1)).valueOf()
	var num2 = (new Number(2)).valueOf()
	var num3 = (new Number(3)).valueOf()
	var num4 = (new Number(4)).valueOf()
	var num5 = (new Number(5)).valueOf()
	.
	.
	.

	// 불리언 객체 생성자를 사용하여 불리언 true, false로 연속되는 변수 boo1 ~ boo10에 생성
	// boo1 ~ boo10에는 불리언 값이 담겨야 한다
	var boo1 = (new Boolean(true)).valueOf()
	var boo2 = (new Boolean(false)).valueOf()
	var boo3 = (new Boolean(true)).valueOf()
	var boo4 = (new Boolean(false)).valueOf()
	var boo5 = (new Boolean(true)).valueOf()
	.
	.
	.
})(this)
```

-

### jQuery v3.x

- [jquery-core-3-0-upgrade-guide](http://jquery.com/upgrade-guide/3.0/#jquery-core-3-0-upgrade-guide)
- [whats-new-jquery-3-0](https://codebrahma.com/whats-new-jquery-3-0/)
- [jquery-3-1-0-released-no-more-silent-errors](https://blog.jquery.com/2016/07/07/jquery-3-1-0-released-no-more-silent-errors/)
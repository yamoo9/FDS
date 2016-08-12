###### Front-End Develop SCHOOL

# DAY 33

### 1. 자바스크립트 데이터 유형
#### 1.1. 원시형 데이터 (숫자,문자,논리,null,undefined)
#### 1.2. 자료형 데이터 (함수,배열,객체)

-

###객체

 - 객체 리터럴 표현식, 변수에 참조
  - `var obj = { key1: value1, key2: value2 };`
  - `value`에 다시 객체를 할당할 수 있다.

```javascript
var students = {
	name: 'Tom',
	info: {
		birth: 19931212,
		school: 'Fast Middle School'
	}
}
```

-

###데이터 유형 체크

####typeof

```javascript
// 데이터 유형 체크
var num, str, boo, fnc, arr, obj;

// 선언된 변수에 각각 데이터를 리터럴 표현식으로 복사/참조
// 원시 데이터 유형
num = 1234;
str = 'hello';
boo = true;
// 자료형 데이터 (참조)
fnc = function() {};
arr = [];
obj = {};

// var 키워드를 한 번만 사용하는 패턴
var num = 9,
	str = 'hi',
	boo = true,
	fnc = function () {},
	arr = [],
	obj = {};

typeof num;	// number
typeof str;	// string
typeof boo;	// boolean
typeof fnc;	// function
typeof obj;	// object
typeof undefined;	// undefined

typeof RegExp;	// function
typeof new RegExp;	// object
typeof Math;	// object

// typeof는 대게의 경우 잘 작동하지만, 아래 두가지는 이해할 수 없는 작동을 한다
typeof arr // object 출력
typeof null // object 출력
```

####instanceof

 - 객체를 생성하는 생성자 함수를 통해 생성된 객체인지 확인
 - 원시 데이터 리터럴의 경우 쓸모가 없다.

```javascript
9 instanceof Number // false
'hi' instanceof String // false
false instanceof Boolean // false

new Number(9) Number // true
new String('hi') instanceof String // true
new Boolean(true) instanceof Boolean
```

####constructor(데이터가 생성된 객체)

 - 객체 유형에 한해서 완벽하다
 - 객체가 아닌 것에선 부정확하다. constructor 속성은 객체만 가지는 속성이기 때문이다. ( ex - `null`, `undefined` )
  - 유형검사에 사용할 경우, undefined 혹은 null 인지 우선적으로 검사 해야한다.

```javascript
(2016).constructor// Number
(2016).constructor === Number // true

'hi'.constructor // String
'hi'.constructor === String // true

true.constructor // Boolean
true.constructor === Boolean // true

null.constructor // error!
undefined.constructor // error!
```

```javascript
// null, undefined에 취약
function checkDataType(data, maker) {
	return data.constructor === maker;
}
```

####다른 객체의 메서드를 빌려쓰는 패턴(Object.prototype.toString)

 - 모든 경우에 정확한 값을 반환
 - `jQuery`의 `type()`과 같은 원리

```javascript
function isType(data) {
	return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
```

-

###연산자

```javascript
// % 나머지 연산자
var message = ['hi', 'hello', 'come on', 'bye'];
for (var count = 0, messages = message.length; count < messages; count++) {
	console.log(message[ count % messages ]);
}

// + 연산자로 문자열 접합
var something = 12345
var result = 'string ' + something + ' plus'; // 'string 12345 plus'

// ES6의 문자열 템플릿( 위 방식보다 편하게 접합 )
result = `string ${something} plus` // 'string 12345 plus'

// 숫자와 문자를 접합하면 문자화 된다
2016 + '년' // '2016년'

// (선, 후)증가, 감소 연산
var start = 0;

while( ++start < 10) {
	console.log(start);}
while( start++ < 10) {
	console.log(start);}

var start = 10;

while( --start > 0) {
	console.log(start);}
while( start-- > 0) {
	console.log(start);}
```

-

###조건문

```javascript
if ( condition ) {
	// condition이 참일경우 실행
} else if ( condition2 ) {
	// condition이 거짓이고 condition2가 참일경우 실행
} else {
	condition과 condition2 모두 거짓일 경우 실행
}

// else가 반드시 필요한것은 아니다. 아래의 경우,
// condition과 condition2 모두 거짓이면, 아무일도 일어 나지 않는다
if ( condition ) {
	// condition이 참일경우 실행
} else if ( condition2 ) {
	// condition이 거짓이고 condition2가 참일경우 실행
}

window.fastcampus && console.log('Front End Develop')	// undefined


// 다중 삼항식을 이용해 요일을 반환
// 0: 일요일, 1: 월요일, ~ , 6: 토요일
var today = 5;

var today_is = today === 0 ? '일' :
				today === 1 ? '월' :
				today === 2 ? '화' :
				today === 3 ? '수' :
				today === 4 ? '목' :
				today === 5 ? '금' :
				today === 6 ? '토' : '장난 하냐';
console.log('오늘은 ' + today_is + '요일 입니다.');

// switch, case, default 활용
var today = 1
var today_is;

switch (today): {
	case 0: 
		today_is = '일';
		break
	case 1: 
		today_is = '월';
		break
	case 2: 
		today_is = '화';
		break
	case 3:
		today_is = '수';
		break
	case 4:
		today_is = '목';
		break
	case 5:
		today_is = '금';
		break
	case 6: 
		today_is = '토';
		break
	default: 
		today_is = false;
}
console.log( (today_is ? '오늘은 ' + today_is + '요일 입니다.' : '장난하냐?'));

// 항상 break가 필요한건 아니다
var event_types = ['click', 'dbclick', 'mouseover', 'mouseenter', 'mouseleave', 'mouseout','focus', 'blur'];
var random_count = Math.floor(Math.Ramdom() * event_types.length );

var event_type = event_types[random_count];
var callback;
var dom_el =query('.result');

dom_el.innerHTML = 'DOM object'
dom_el.setAttribute('tabindex', 0);

switch (event_type): {
	case 'click': 
	case 'dbclick': 
		callback = function(){
			console.log('clicked object');
		};
		break
	case 'mouseenter':
	case 'mouseover':
		callback = function(){
			console.log('mouse entered object');
		};
		break
	case 'mouseenter':
	case 'mouseover':
		callback = function(){
			console.log('mouse leaved object');
		};
		break
	case 'focus':
	case 'blur':
		callback = function(){
			console.log('focused object');
		};
		break
}
```

-

###동적으로 HTML 생성하기

 - 이전에 코딩했던 모달 부분을 템플릿으로 이용할 수 있다

```javascript
// var str = '<div class="modal"><h2 class="modal-title">Modal Window</h2><p class="modal-desc">Modal Window Content....</p><button class="modal-cta" type="button">send message</button><button class="modal-close" type="button" aria-label="close modal window">x</button></div>';


var modal_class         = 'modal';
var modal_title_class   = 'modal-title';
var modal_title_content = 'Modal Window';
var modal_desc_class    = 'modal-desc';

var modal_template = [
  '<div class="'+ modal_class +'">',
    '<h2 class="'+ modal_title_class +'">'+ modal_title_content +'</h2>',
    '<p class="'+ modal_desc_class +'">Modal Window Content....</p>',
    '<button class="modal-cta" type="button">send message</button>',
    '<button class="modal-close" type="button" aria-label="close modal window">x</button>',
  '</div>'
].join('');

body.innerHTML += modal_template;
```
-

###Helper 함수 만들기

```javascript
// 데이터 간 동등한지 유무 파악 헬퍼 함수
funtion equal(data1, data2) {
	return data1 == data2;
}

// 데이터 간 완전하게 동등한지 유무 파악 헬퍼 함수
funtion strictEqual(data1, data2) {
	return data1 === data2;
}
```
###### Front-End Develop SCHOOL

# DAY 18
## 1. 자바스크립트 반복문 (ES 3)
###  1.1. While문
- 조건이 참인 경우 코드블럭 내용을 반복 실행한다.
- 기본 문법

```js
while() { ... }
```
- 예제

```js
var condition = true, count = 0;
while (condition) {
	// 조건(condition)이 참일 경우 코드 블록 반속 수행.
	if ( ++count > 3 ) {
	// ++CODE : 선증가. 먼저 숫자를 증가시킨 후 코드 실행.
	// CODE++ : 후증가. 먼저 코드를 실행한 후 숫자 증가.
	// '선증가'와 '후증가'는 반복횟수에 차이가 있다.
	// if (++count > 3) -> 1, 2, 3, 4
	// if (count++ > 3) -> 0, 1, 2, 3, 4
		condition = !condition;
	}
	console.log('count:', count); // 1, 2, 3, 4
}
```

### 1.2. Do While문

- 조건이 거짓이라도 1회는 실행된다.
- 기본 문법

```js
do { ... } while(condition);
```
- 예제

```js
var count = 0;
do {
  if ( ++count > 3 ) {
    condition = !condition;
  }
} while (condition);
console.log('count:', count);  // 4
```

### 1.3. for문

- 반복문에 사용할 변수를 만들고 조건이 거짓이 될 때까지 계속 반복한다.
- 기본 문법

```js
for ( ; ; ) { ... }
```

- 예제

```js
// 1부터 10까지 숫자를 합한 값을 for문으로 구하시오.
for ( var i = 1; i < 11; i++ ) {
  console.log('i:', i); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
console.log('i:', i); // 11

for ( var count = 0, condition = true; condition; ) {
  // 코드 블록 반복 수행
  // if ( count++ > 3 ) { // 0, 1, 2, 3, 4
  if ( ++count > 3 ) { // 1, 2, 3, 4
    condition = !condition;
  }
  console.log('count:', count); // 1, 2, 3, 4
}
```

### 1.4. for in문

- 객체의 내부 속성을 순환하여 처리한다.
- 기본 문법

```js
for ( var property in object ) { ... }
```
- 예제

```js
var kijoong = {
  'name': '기중',
  'role': '학생',
  'age': 20,
  'height': '2m 30cm',
  'weight': '32kg'
};

for (var p in kijoong) {
  console.log('속성: ' + p + ', 값: ' + kijoong[p]);
	// 속성: name, 값: 기중
	// 속성: role, 값: 학생
	// 속성: age, 값: 20
	// 속성: height, 값: 2m 30cm
	// 속성: weight, 값: 32kg
}
```
---
## 2. 자바스크립트 함수
### 2.1. 함수 정의 2가지 방법
- 함수 선언식
```js
function fnName() {}
```

- 함수 표현식 (함수 리터널)
```js
var fnName2 = function() {};
```

### 2.2. 전역 ( Global Scope ) VS 지역 ( Local Scope )

#### 2.2.1. 전역
- 전역이란?
```js
웹 브라우저 환경에서 window {} 객체를 말한다.
```
- 확인 예제

```js
var coffee = "아메리카노"; //window.coffee와 동일
console.log('coffee === window.coffee:', coffee === window.coffee); // coffee === window.coffee: true

```
##### 2.2.1.1. 전역 변수 & 전역 함수
- 전역 변수, 전역 함수란?
```js
웹 브라우저 환경에서 전역 객체인 window {}의 속성이다.
```
- 전역 변수, 전역 함수에서의 this는?
```js
this는 window를 가리킨다.
```
- 확인 예제
```js
var global_valiable = this;
var globalFunction = function() {
  console.log('this:', this); // this: Window { ... }
};

// 전역 함수 실행, 함수를 실행시킨 주체는 누구인가?
globalFunction();
// 위 함수의 실행은 아래 코드와 동일하다. 결국 함수를 실행시킨 주체는
// 전역 객체인 window 이므로 함수 내부의 this는 window를 가리킨다.
// window.globalFunction();

// globalFunction 함수는 전역 함수로 window 객체의 속성이지만...
// 다른 누군가가 이 함수를 빌려 사용할 수 있다.
// 함수를 document객체의 onclick 속성에 참조함으로서 함수 내부의 this는 document 객체를 가리키도록 변경되었다.
document.onclick = globalFunction;

```
#### 2.2.2. 지역
- 지역이란?
```
'함수'에 의해 생성되는 것으로 '함수 내부의 공간'을 지역이라 할 수 있다.
```
- 확인 예제
```js
// if, else, while, for, switch 구문에서는 별도의 지역이 생성되지 않는다.
{
  var scope_variable = '지역 변수?';
  console.log('블록문 내부 scope_variable:', scope_variable); // 블록문 내부 scope_variable: 지역 변수?
}
console.log('블록문 외부 scope_variable:', scope_variable); // 블록문 외부 scope_variable: 지역 변수?

// 그렇다면 블록문이 아닌, 어떤 경우에 전역과 구분되는 지역이 생성되나?
// 그것은 바로 자바스크립트 '함수'이다.
function createLocalScope() {
  var scope_variable = '함수 내부 지역 변수?';
  console.log('함수 내부 scope_variable:', scope_variable); // 함수 내부 scope_variable: 함수 내부 지역 변수?
}
createLocalScope();
console.log('함수 외부 scope_variable:', scope_variable); // 함수 외부 scope_variable: 지역 변수?
```


### 2.3. 스코프 ( Scope )
- 스코프란?
```
변수와 함수의 유효(생존)범위.
크게 전역 유효범위, 지역 유효범위로 나뉜다.
```
#### 2.3.1 스코프 체이닝

- 예제

```js
var hadoom = '하둠';

function localFn() {
  // 지역
  // hadoom = 'Hadoom';
  var hadoom = 'Hadoom';

  function inLocalFn() {
    // 지역 내 지역
    // window.hadoom = '하아둠';
    // hadoom = '하아둠';
    var hadoom = '하아둠';
  }

  inLocalFn();
	console.log('hadoom:', hadoom);
}

localFn();

console.log('hadoom:', hadoom); // ????
```

#### 2.3.2 호이스트(Hoist) 현상
- 호이스팅이란?
```
코드를 실행하기 전에 var, function 선언을 해당 영역(Scope)의 가장 상위에 끌어 올려지는 것.
1. function 선언문의 몸체(body)가 통째로 끌어 올려진다.
2. var 선언문에서 할당된 값이 아닌, 변수 이름만 끌어 올려진다.
```

- 예제
```js
//작성코드
function fn() {
  if (course) {
    var course = 'develop';
    console.log(course); //???
  }
  console.log(course); //???
}

var course = 'design';

fn();

console.log(course); //???
```

```js
//위 코드는 실행 전 호이스트 되어 아래와 같이 바뀐다.
function fn() {
  var course; // undefined
  if (course) {
    course = 'develop';
    console.log(course); // 수행되지 않음
  }
  console.log(course); // undefined
}

var course = 'design';

fn();

console.log(course); // 'design'
```
### 2.4. 유용한 함수 활용: 함수 확장
- 함수 확장이란?
```
매개변수(전달인자)를 설정한 함수.
매개변수를 이용함으로써 같은 함수라도 다르게 제어할 수 있게된다.
```
- 예제

```js
function showMessage(message) {
  message = message || 'default message';
  console.log(message);
}

showMessage('this is message.');
showMessage('this is messanger.');
showMessage('this is cook.');
showMessage();
// message = 'this is message.';
// message = 'this is messanger.';
// message = 'this is cook.';
// default message

```
- 전달 인자 표시

 올바른 전달 인자를 받기 위해 해당 함수의 정보를 표현할 수 있다.
```js
/**
 *  @function sum
 *  @param    {number}  num1
 *  @param    {number}  num2
 *  @return   {number}  두 수의 합을 반환
 */
```
- 유효성 검사 (Validation)

 전달받은 인자를 검증하지 않으면 원하는 결과가 나오지 않을 수도 있다.
따라서 검증 과정을 만든다.
```js
function sum(num1, num2) {
   // 기대하는 데이터 유형을 감별하여 문제가 발생한 경우
   // 사용자에게 안내해줘야 한다. 유효성검사(Validation)
   if ( typeof num1 !== 'number' || typeof num2 !== 'number' ) {
       // console.error('전달된 인자 값은 숫자 유형이 아닙니다. 숫자 유형을 넣어주세요.');
       // 오류 발생시, 코드 중단
       throw new Error('전달된 인자 값은 숫자 유형이 아닙니다. 숫자 유형을 넣어주세요.');
   }
   // return 키워드는 함수를 종료, 값을 반환
   return num1 + num2;
   // return 뒤의 구문은 실행되지 않는다.
   // 함수가 종료되었기 때문....
   var demo = '데모';
   console.log(demo);
}
```

### 2.5. 목적에 맞는 함수: 반환 값이 있는 함수
- 목적에 맞는 함수란?
```js
return 키워드를 사용하여 함수 출력 결과를 돌려주는 함수
```

- 예제

```js
//목적(쓰임새)에 맞지 않는 함수!
function getWindowWidth1() {
  // 창 크기의 가로 폭 길이 (너비, width)
  var _window_width = window.innerWidth;
  console.log('창 크기의 가로 폭 길이 (너비, width):', _window_width);
}
//반환 값이 있는 함수
//목적에 맞는 함수
function getWindowWidth2() {
  // 창 크기의 가로 폭 길이 (너비, width)
  var _window_width = window.innerWidth;
  console.log('창 크기의 가로 폭 길이 (너비, width):', _window_width);
  return _window_width;
  //return window.innerWidth; //한 줄로 간단하게 표현할 수 있다.
}
var get_width_1 = getWindowWidth1();
var get_width_2 = getWindowWidth2();
console.log(get_width_1); // undefined
console.log(get_width_2); // 너비값이 출력된다.

```

### 2.6. arguments
- arguments란?
```js
함수 내부에 전달되는 인자들의 집합으로 유사 배열(like Array Object)이다.
.length 속성을 가지나 .push(), .pop() 같은 배열 메소드는 가지고 있지 않다.
```
- 예제
```js
function sum() {
  // arguments 객체(전달된 인자들의 집합)
  // arguments 객체의 원소 개수: arguments.length
  // length 속성 값을 알고 있다면 순환 처리(for, do ~ while, while)가 가능
  // arguments[0] = ''; // 설정도 가능.
  // console.log(arguments);
  for( var sum = 0, i = 0, l = arguments.length; i < l; i++ ) {
    // console.log(typeof arguments[i]);
    if (typeof arguments[i] !== 'number') { throw new Error('전달된 인자 중 숫자가 아닌 값이 있습니다.') }
    // sum = sum + arguments[i];
    sum += arguments[i];
  }
  return sum;
}
```

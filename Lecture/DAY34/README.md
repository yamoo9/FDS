###### Front-End Develop SCHOOL

# DAY 34

### 8월 16일부터 9월 2일 전까지, 코스 커리큘럼 스케쥴

※ 9월 1, 2일 Back-End 특강

![](../Assets/0816-schedule.jpg)

##### 1. JavaScript 목표
- DOM 헬퍼 함수
- 생성자 함수와 프로토타입 객체
- DOM 헬퍼 라이브러리 구현

##### 2. jQuery v3 목표
- 실무자의 필수 라이브러리, `jQuery` 사용법
- jQuery 라이브러리 카테고리 별 학습
- jQuery 플러그인 개발 패턴
- 비동기 통신 AJAX (+JSON)

##### 3. Node.js + Gulp + AngularJS v1 목표
- `Node.js` 서버 환경
- `Gulp.js` 테스크 러너
- `AngularJS` 사용법
- `SPA` 싱글 페이지 애플리케이션 제작

-

### 9월 3일 이후, 코스 커리큘럼 스케쥴

#### α. 포트폴리오 목표
- GitHub 정리
- 미완의 결과물(팀 엑티비티 과제 및 개인 작업) 보완/완성
- UI Kit / 코딩 스타일 가이드 완성
- 패럴럭스 / 비주얼 임팩트가 큰 RWD 웹 사이트 제작
- 기성 기업 사이트(유명 브랜드) 선택 후, 웹 표준/접근성 고려 리뉴얼 사이트 제작

#### β. 하이어링데이 발표 준비 (19일 이후)
- 발표 슬라이드 준비 (4분 이내)
- 발표 슬라이드 리허설

#### Ω. [특강] ECMAScript 2015 목표
- `ECMAScript 2015`에서 변경된 사항
- `Babel`을 사용한 `ES2015` → `ES5` 컴파일

-

###반복문(Loop)

####while 문

조건이 참(true)일 동안(while) 블럭 코드( { ... } ) 실행

```javascript
var count = 0;

while (count++ <= 15) {
	document.write('<p>' + count + '</p>')
}
```

 - While 문 예시

```javascript
// ES6 : Arrow function
var cleanWhiteSpace = (element=document) => {
	// element = element || document; 기존 ES5 의 초기화
	var current_node = element.firstChild;
	while (cur != null){
		// text 노드이고, 공백이 존재하다면
		if (current_node.nodeType === 3 && !/\S/.test(current_node.nodeValue)){
			// element.removeChild(current_node);
			remove(current_node);
		} else if (current_node.nodeType === 1){
			cleanWhiteSpace(cur);
		}
		current_node = current_node.nextSibling;
	}
}
```

####do while 문

`while`문과 다르게 `do` 블럭의 코드가 무조건 한번 실행이 되고 `while`문 안으로 진입

```javascript
var boo = true, n = 10;

do {
	console.log( boo ? 'True!' : 'False!');
	if ( n-- < 10 ) {
		boo = !boo;
	}
} while(boo)
```

####for 문

 - `for`문의 조건절에서 `var`로 선언된 변수는 전역변수와 똑같다

```javascript
for( var i = 0; boo = false; i < 10; i++ ) {
	if ( i === 9 ) {
		boo = !boo
	}
	//  혹은 boo === 9 ? !boo : boo;
	console.log(boo ? 'True!' : 'False!')
	// 숏 코딩
	// console.log( ( i === 9 ? !boo : boo ) ? 'True!' : 'False!' );
}

```

####continue, break

```javascript
// for 문을 이용하여 과일을 필터링
var fruits = ['banana', true, 'strawberry', false, 'grape', null, 'watermelon'];
// 배열(array) 끝에 추가하는 push() 메서드
fruits.push(function(){});
fruits.push({ 'name': 'object'});

// for문의 변수 선언부를 외부로 분리
var real_fruits = [],
	fruit,
	k =0,
	l = fruits.length;

for ( ; k < l; k++) {
	fruit = fruits[k];
	// 패턴: 문자열만 찾아내면 된다
	if ( isType(fruit) !== 'string') {
		// 다음 for문으로 점프!
		continue
	}
	real_fruits.push(fruit);
}

var collection = document.body.childNodes,
	el_collection = []

for (var i = collection.length - 1 ; collection[i]; i-- ){
	// ES6 let
	let node = collection[i];
	if (node.nodeType === 3 || node.nodeName === 'SCRIPT') {
		continue
	}
	el_collection.push(node)
}


// break 는 continue와 달리 반복문을 끝내버린다
var  units = 'px em rem % vw vh vmin vmax'.split(' ');
var unit;
var i = 0;
var l = units.length;

var demo_container = query('.demo-container');
var get_value = getStyle(domo_container, 'margin-bottom');

for ( ; i < l; i++){
	unit = units[i];
	if (get_value.indexOf(unit) > -1) {
		// 특정 단위가 존재한다
		break
	}
} 

function getUnit(value){
	var i = 0, l = getUnit.units.length - 1, unit;
	for (; i < l; i++){
		unit = getUnit.units[i];
		if ( value.indexOf(unit) > -1) {
			// break
			// 이후 hasUnit의 구현을 위해 return으로 변환
			return unit
		}
		return null;
	}
}
function hasUnit(value){
	return !!getUnit(value);
}
function removeUnit(value){
	removeUnit.unit = getUnit(value)
	return parseFloat(value, 10);
}

// 함수 또한 객체이기 때문에 속성을 가질 수 있다.
getUnit.units = 'px rem em % vw vh vmin vmax'.split(' ');
removeUnit.unit = null;

// ES6 : <for ~ of ~>
for (let unit of units) {
	console.log(unit);
}
```

####for ~ in

 - 객체 탐색

```javascript
var arr = [4, 8,100, 300, -222];

for (var item in arr){
	console.log(item);
	console.log(arr[item]);
}
// 배열에게는 권하지 않음! 메서드 체이닝을 거치기 때문에 느려짐
//  for문, forEach()메서드를 사용

// 그리고 for ~ in 문에는 반드시 검증 과정(hasOwnProperty)을 거처야 한다
var obj = {
	name: 'Tom',
	age: '17',}

for (var property in obj) {
	if (obj.hasOwnProperty(property){
		console.log('속성: ', property);
		console.log('값: ', obj[property]);
	}
}

// 객체에 속성이 있는지 물어본다
'localStorage' in window // true;
```

-

###Helper 함수 만들기

> 기능구현이 어렵다면, 코드를 쓰기 전에 TODO LIST를 차근차근 작성 해봅시다

```javascript
function errorMsg(message){
	if ( isType(message) !== 'string' ){
		// 함수 자신을 다시 호출: 재귀 함수
		errorMsg('오류 메시지는 문자 데이터 유형이어야 합니다.')
	}
	throw new Error(message);
}

function prevEl(node) {
	// 검증: 유효성 검사
	if ( node.nodeType !==1 ){
		errorMsg('전달된 인자는 요소노드여야 합니다.');
	}
	// IE 9+, 최신 브라우저
	if ( node.previousElementSibling ) {
		return node.previousElementSibling;
	} 
	// 구형 IE 6 - 8
	do {
		node =  node.previousSibling
	} while( node && node.nodeType !== 1)
	return node;
}
function nextEl(node) {
	// 검증: 유효성 검사
	if ( node.nodeType !==1 ){
		errorMsg('전달된 인자는 요소노드여야 합니다.');
	}
	if ( node.nextElementSibling ) {
		return node.nextElementSibling;
	} 
	// 구형 IE 6 - 8
	do {
		node =  node.nextSibling
	} while( node && node.nodeType !== 1)
	return node;
}

// checking helper 함수
function isElementNode(node) {
	return node.nodeType === 1;
}

function firstElement(node){
	if ( !isElementNode ){ errorMSG('요소 노드를 전달해야 합니다.')}
	// 함수내에 return이 없을 경우 undefined를 반환
	if (node.firstElementChild) {
		return node.firstElementChild
	} else {
		// IE 6 - 8
		node = node.firstChild

		if (node && !isElementNode(node)){
			// nextEl에서 validation을 없애야 정상 작동 한다
			return nextEl(node);
		}
		return node
	}
}
function _firstElement(node) {
	return node.children[0];
}

function lastElement(node){
	if ( !isElementNode ){ errorMSG('요소 노드를 전달해야 합니다.')}
	// 함수내에 return이 없을 경우 undefined를 반환
	if (node.lastElementChild) {
		return node.lastElementChild
	} else {
		// IE 6 - 8
		node = node.lastChild

		if (node && !isElementNode(node)){
			// prevEl에서 validation을 없애야 정상 작동 한다
			return prevEl(node);
		}
		return node
	}
}
function _lastElement(node) {
	var children = node.children;
	return node.children[children.length - 1];
}

function isElName(node, name) {
	if (node.nodeType !== 1) {
		errorMSG('첫 번째 인자는 노드 객체를 전달해야 합니다.')}
	if (isType(name) !== 'string') {
		errorMSG('두 번째 인자는 소문자 문자열을 전달해야 합니다.')}
	return ( node.localName || node.nodeName.toLowerCase() ) === name
}

function isTextNode(node) {
	return node.nodeType === 3;
}
```

-

###함수

 - 명령문의 묶음이며, 재사용 가능
 - 호출을 하여 사용한다
 - `function fnName1() {...}` : 함수 선언식
 - `var fnName2 = function() {...}` : 함수 리터럴


```javascript
var fn0 = new Function('console.log("쓰지말자!!")');
fn0()

// 1. 함수 선언문
function fn1() {
	console.log('선언되 함수가 실행 됐다');
}
fn1();

// 2. 함수 표현식
var fn2 = function() {
	console.log('표현식(함수 리터럴)이 참조된 변수를 통해 함수가 실행되었다.');
}
fn2();
```

####Hoisting(호이스팅)

 - 선언된 함수는 스코프 최상단으로 올라간다
 - 선언된 변수는 선언 부분만 스코프 최상단으로 올라간다. 할당은 이후에 할당된다.

```javascript
fn1(); //오류가 나지 않고 함수가 실행되는 이유는 아래 함수 선언문이 위로 올라가기 때문이다
function fn1() {
	console.log('선언되 함수가 실행 됐다');
}

fn2(); // 에러가 일어난다. var fn2만 스코프 최상단으로 올라가고 undefined를 호출하기 때문에
var fn2 = function() {
	console.log('표현식(함수 리터럴)이 참조된 변수를 통해 함수가 실행되었다.');
}
```

####Scope(스코프)

 - `if`, `while`, `for` 등은 지역 변수를 가질 수 없다.(ES6에서는 지원)
 - `function(함수)`만 지역 변수를 가질 수 있다.
 - 함수는 외부에 접근이 가능하지만, 외부에서는 함수 내부로 접근할 수 없다.
 - 스코프 체이닝 순서 : `지역` - `매개변수` - `상위 스코프`

```javascript
var king = '전역의 왕';

function kingdomNorth() {
	console.log(king) // 전역의 왕
}
function kingdomSouth() {
	function inKingdomSouth() {
		console.log(king)
	}
	inKingdomSouth();
}
// 다만 스코프 체이닝을 한단계정도 거치는 것은 괜찮지만, 여러 단계를 거치는 것은
// 성능 저하의 원인이 되므로 가능하면 현재 스코프에서만 탐색하도록 설계한다
```


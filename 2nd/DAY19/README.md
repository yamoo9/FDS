# DAY 19
###### Front-End Develop SCHOOL


## 1. Strict Mode
- “use strict” 는 느슨한 JS를 보다 엄격하게 관리할 때 사용한다.   (예 : 변수 선언시 var를 사용하지 않으면 오류) 
- 선언방법  :  전역객체에 사용하는 방법과 함수내에 사용하여 함수에서만 strict 모드를 운용하는 방법이 있다. 

- 예제 (전역에서 strict 모드 사용) 
```js
"use strict";

function a(){
     var hello = 7;
     return hello;
}

hello = 5;
//구문 오류. 
//strict 모드를 전역에 설정하였기 때문에 hello라는 변수를 함수 밖의 변수로 선언할 수 없다.

```

- 예제  (함수 내에서 strict 모드 사용) 

```js
function(){
     "use strict"
     this 
	// undefined, this는 window를 가르치지 않는다.
}
```
- strict mode 참고 사이트 : 
	- [MSDN](https://msdn.microsoft.com/ko-kr/library/br230269(v=vs.94).aspx#rest)
	- [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)
	- [블로그](http://hmmim.tistory.com/5)


---
## 2. 클로저 (closure)

### 2.1. 일급객체(First Class Object) 함수의 특징 
#### 2.1.1 함수의 인자로 함수를 전달할 수 있다. 

- 예시 
```js
//1. localScope라는 함수를 정의한다. 

function localScope(callback){
	// 1-1. 엄격모드 실행 
	'use strict'; 
	
	// 1-2. 특정 코드를 수행 
	 for ( var i=0, l=5; i<l; i++ ) { 
     console.log('i:', i);
	} 
	
	// 1-3. 매개변수에 담긴 전달인자의 type이 function인지 검사 
     var is_callback = typeof callback === 'function';

	// 1-4. 매개변수에 담긴 전달인자의 type이 fucntion인 경우 해당 함수를 실행
     is_callback && callback();
 }    
```
```js

//2. hello 이라는 변수에 함수를 담는다. 

var hello = function(){
   console.log('hello');
};
```
```js
//3. localScope함수의 인자로 hello 함수를 전달하여 실행한다. 

localScope(hello); // 결과값 : 0, 1, 2, 3, 4 hello

```

#### 2.1.2 함수는 함수를 인자로 받을 수 있을 뿐만 아니라, 함수를 반환(return)할 수도 있다.


- 예시1
```js
function returnFunction (data) {
    var a = data[0];
    var b = data[1];
    var c = function(){ return a + b; };
    return c;
  }
 
returnFunction([ 10, 20 ]); // 결과값 : function(){ return a + b; };
```
- 예시2
```js
// 자바스크립트 함수에서 함수를 반환
  function createCountDown(count) {
  
    // count 매개변수(Parameter) 값 초기 설정 
    // 전달인자가 숫자가 아닌 경우, 기본값으로 10을 할당한다. 
    if ( typeof count !== 'number' ) { count = 10; }

    // 함수 createCountDown의 내부에 존재하는 함수
    function _countDown() {
      return --count;       // Count Down하는 로직
    };

    // 내부 함수인 _countDown()을 반환
    return _countDown;
  }
```

####2.1.3 함수는 전달인자로 함수 뿐만 아니라 어떠한 데이터 유형도 받을 수 있다.

- 예시 (객체를 전달받는 함수, 객체를 반환하는 함수)

```js
  function mixin(o) {
    var mix_obj = {name: 'mix', age: 1};
    
    for ( var prop in o ) {  
      mix_obj[prop] = o[prop]; // mix_obj와 o를 합치는 로직
    }
    return mix_obj; // 객체 반환
  }
```
### 2.2. 클로저 함수 

- __클로저란__
	
	- 클로저는 외부함수(포함하고 있는)의 변수에 접근할 수 있는 내부 함수를 말한다. 
	  (스코프 체인(scope chain)으로 표현되기도 한다.)    
	- 클로저는 3가지 스코프 체인을 가진다.  
		- 클로저 자신에 대한 접근(자신의 블럭내에 정의된 변수)
		- 외부 함수의 변수에 대한 접근
		- 전역 변수에 대한 접근.
	- 내부 함수는 외부 함수의 변수뿐만 아니라 파라미터에도 접근할 수 있다. 
	  (단, 내부 함수는 외부 함수의 arguments 객체를 호출할 수는 없다)
	  ---
	- 자바스크립트 함수는 어떤 데이터 유형도 전달 인자로 받을 수 있고, 어떤 데이터 유형도 반환할 수 있다.
		- 이 과정에서 객체 __함수, 배열, 객체__를 반환할 경우 __반환된 객체__가 함수의 감춰진 영역에 접근할 수 있다.
		- 이 부분을  **클로저(영역)** 라고 부른다.



- __예시 1__ 
```js
function init() {
  var name = "변수"; // init에 있는 지역 변수 name
  
  function displayName() { // 내부 함수, 즉 클로저인 displayName()
    alert(name); // 부모 함수에 정의된 변수를 사용한다
  }
  
  displayName();
}

init();
```
>- 예시 설명  
	- 함수 init()은 지역 변수 name과 함수 displayName()을 정의한다. 
	- displayName()은 함수 init() 안에 정의되어 그 __함수(init()) 안에서만 사용할 수 있는 내부 함수__이다.  
	- 함수 displayName() 자신은 지역변수를 가지지 않지만 외부 함수에 정의된 변수에 접근하는 권한이 있어 
__부모 함수에 있는 변수 name__을 사용할 수 있다.

- __예시 2 : 실용적인 클로저 (출처 : MDN)__

- css를 만들고 
```css
body {
  font-size: 20px;
```

- html내에 아래 소스를 넣는다

```html
<a id="size-20" href="#">20</a> 
<a id="size-30" href="#">30</a> 
<a id="size-40" href="#">40</a>

```

- 그리고 자바스크립트를 작성한다.		
```js
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
  //내부함수를 리턴하게 처리하면 클릭이벤트에서 사용시 makeSizer를 선언해도 바로 내부 함수는 실행되지 않고 클릭시 실행하게 된다.
}
var size20 = makeSizer(20);
var size30 = makeSizer(30);
var size40 = makeSizer(40);
document.getElementById('size-20').onclick = size20;
document.getElementById('size-30').onclick = size30;
document.getElementById('size-40').onclick = size40;
```
>-  ‘size-30’를 클릭하면 폰트 사이즈가 30가 되고 40을 클릭하면 40이 된다. 
- [구현화면 codepen](http://codepen.io/siwabada/pen/bwJwQR)
- [상세설명 블로그](http://yookeun.github.io/javascript/2015/01/27/javascript-closure/)


- 클로저 참고 사이트 : 
	- [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)
	- [블로그](https://hyunseob.github.io/2016/08/30/javascript-closure/)


### 2.3. Javascript IIFE

- 모던 자바스크립트에서의 모듈 패턴 
- 함수를 활용하여 언어 차원에서 지원하지 않았던 모듈을 구현한다. 
- 일반 함수가 아닌, `IIFE 패턴`을 사용한 `즉시 실행 함수`  패턴을 활용 
- IIFE(Immediately Invoked Function Expressions: “Iffy”라고 발음 - 즉시 호출 함수 표현식의 줄임말) 
- 즉시 실행함수는 한번 수행 후 다시 호출할수 없다.
- 이런 특성으로 최초 한 번의 실행만을 필요로 하는 초기화 코드 부분에 패턴으로 사용된다. 

- 문법
```js
  +function (){ console.log('IIFE Pattern'); }(); // 권장하지 않음 
  !function (){ console.log('IIFE Pattern'); }(); // 권장하지 않음 
  ~function (){ console.log('IIFE Pattern'); }(); // 권장하지 않음 
  ( function(){ console.log('IIFE Pattern'); }() );  // 권장
  ( function(){ console.log('IIFE Pattern'); } )();
``` 
- IIFE를 사용하는 주된 이유는 변수를 전역(global scope)으로 선언하는 것을 피하기 위함이다. 
- 여러팀이 함께 코드를 짤때 각자의 영역 내에서 코드를 짜면 서로가 접근할수 없어서 안전하다. 
- 이러한 형식을 모듈패턴이라고 한다. 즉시 실행 함수를 통해 전역과 구분되는 독립적 공간에서 코드를 작성할 수 있다. 

-  예시 
```js
// A Team
(function(global){
  'use strict';
  var fds = '프론트엔드 개발 A팀';
})(this);

// B Team
(function(global){
  'use strict';
  var fds = '프론트엔드 개발 B팀';
})(this);
``` 

- IIFE 참고 사이트 : 
	- [블로그](http://chanlee.github.io/2014/01/11/understand-javascript-iife/)
	- [블로그](http://mygumi.tistory.com/34)


---

# NVM(Node Version Manager) 설치

## Windows 설치

[nvm-windows](https://github.com/coreybutler/nvm-windows/releases)

## OSX 설치

### 1. homebrew를 사용해서 인스톨 한 node.js 모두 삭제

[이슈](https://github.com/creationix/nvm/issues/855#issuecomment-146115434)에서 볼 수 있듯, `v0.31.1`의 `nvm`은 `osx`의 `homebrew`를 지원하지 않음. `brew`를 통해서 `nvm` 및 `node`를 설치하면 충돌이 발생! `nvm`을 사용하시기로 마음 먹었다면, `homebrew`를 사용해서 인스톨 한 `nvm`, `node.js`를 모두 삭제.

```sh
$ sudo brew uninstall node —force sudo brew uninstall nvm —force
```

### 2. nvm 설치

[NVM:GitHub](https://github.com/creationix/nvm)의 지시에 따라서 `nvm`을 설치.

최신 버젼은 아래의 커맨드로 설치.

```sh
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
```

### 3. nvm 실행

`nvm` 자동 실행시키기. 이제부터 실행시키는 모든 `node`의 버젼은 `nvm`이 관리하게 될 것.
하지만 위 작업은 영구적인 것이 아니기 때문에, 터미널이 오픈될 때마다 실행시켜주어야 한다는 불편함이 있음.
따라서 사용 중인 컴퓨터의 `.profile`, `.bashrc` 혹은 `.zshrc`에 다음의 문구를 추가.

```sh
$ source /Users/$USER/.nvm/nvm.sh
```

.bashrc 수정시 권한 문제
```sh
sudo chmod +w /etc/bashrc
sudo vi /etc/bashrc
```
수정 방법 : i 를 누르고 위 `source /Users/$USER/.nvm/nvm.sh` 구문을 마지막 줄에 붙여넣고 esc 누르고 :wq! 입력


터미널이 오픈될 때마다, `nvm`이 골라준 `node`를 실행시킬 수 있음.

#### nvm, 설치 가능한 Node 버전 탐색

```sh
$ nvm ls-remote
```

#### nvm, 새로운 Node 버전 설치

```sh
$ nvm install #{version} #6.6.0
```

#### nvm, 설치된 Node 버전 보기

```sh
$ nvm ls
```

#### nvm, 사용할 Node 버전 설정

```sh
nvm use #{version}
```

### NPM 최신 버전 업데이트

```js
$ npm install -g npm@latest
```

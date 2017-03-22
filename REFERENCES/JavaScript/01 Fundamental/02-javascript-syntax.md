[← Back](README.md)

## 자바스크립트 기본 문법

### 1. 헬로우 월드!

```html
<!DOCTYPE html>
<html>
<body>
  <h1>자바스크립트 헬로우 월드!</h1>
  <p id="demo">단락...</p>
  <button type="button" onclick="myFunction()">클릭</button>
  <script>
    function myFunction() {
      var my_para = document.getElementById("demo");
      my_para.innerHTML = "헬로우 월드!";
    }
  </script>
</body>
</html>
```

JavaScript는 interactive한 웹페이지 작성을 가능하게 한다. 즉, 웹 브라우저가 웹페이지를 로드한 후 그 내용을 변경할 수 있다.
예를 들면, 콘텐츠(Contents)에 접근하여 수정할 수 있으며 이벤트(e.g. 버튼 클릭, 웹페이지 로딩 완료 등)에 반응하여 특정 스크립트를 실행할 수 있다.

-

### 2. 외부로 분리된 자바스크립트 파일

```html
<!DOCTYPE html>
<html>
<body>
  <h1>자바스크립트 헬로우 월드!</h1>
  <p id="demo">단락...</p>
  <button type="button" onclick="myFunction()">클릭</button>
  <!-- 외부에 분리된 자바스크립트 파일 로드 -->
  <script src="external.js"></script>
</body>
</html>
```

`external.js`

```js
function myFunction() {
  var my_para = document.getElementById("demo");
  my_para.innerHTML = "헬로우 월드!";
}
```

HTML에서 자바스크립트가 실행될 때 이하와 같은 동작을 할 것이다.

1. 브라우저가 script 요소를 만나면, 문서의 렌더링을 잠시 중단하고
1. 브라우저는 src 속성에 정의된 자바스크립트 파일을 로드한다.
1. 스크립트를 실행한 뒤 다음 작업을 진행한다.

`<body>`요소의 가장 아래에 스크립트를 위치시키는 것은 좋은 아이디어이다. HTML 요소들이 스크립트 로딩 지연으로 인해 렌더링에 지장 받는 일이 발생하지 않아 페이지 로딩 시간이 단축된다.

-

### 3. 자바스크립트 출력(Output)

JavaScript에서 데이터(Data)를 표시하는 방법은 아래와 같다.

| Type            | Code               |
| --------------- | ------------------ |
| alert box       | `window.alert()`   |
| HTML output     | `document.write()` |
| HTML element    |  `innerHTML`       |
| Browser console | `console.log()`    |

```html
<!DOCTYPE html>
<html>
<body>
  <h1>자바스크립트 출력</h1>
  <p id="demo"></p>
  <script>
    window.alert("alert");
    document.write("document.write");
    document.getElementById("demo").innerHTML = "innerHTML";
    console.log("console.log");
  </script>
</body>
</html>
```

-

### 4. Statement (문장)

프로그램(스크립트)은 컴퓨터(Client-side 자바스크립트의 경우, 엄밀히 말하면 웹 브라우저)에 의해 단계별로 수행될 명령들의 집합이다.

각각의 명령을 statement(구문)이라 하며 statement가 실행되면 무슨 일인가가 일어나게 된다.

구문은 값(Values), 연산자(Operators), 표현식(Expressions), Keywords, 주석(Comments)으로 구성되며 세미콜론(`;`)으로 끝나야 한다.

```js
var x = 5;
var y = 6;
var z = x + y;

document.getElementById('demo').onclick = function(){ ... };
```

구문은 code block(`{…}`)으로 그룹화할 수 있다. 그룹화의 목적은 함께 실행되어져야 하는 구문을 정의하기 위함이다. (e.g. function)

```js
function myFunction(x, y) {
  return x + y;
}
```

구문들은 대개 위에서 아래로 순서대로 실행된다. 이러한 실행 순서는 조건문(`if`, `switch`)이나 반복문(`while`, `for`)의 사용으로 제어될수 있으며(이를 `Control Flow`/흐름제어라 한다), 또는 함수 호출로 변경될 수 있다.

```js
var time = 10;
var greeting;

if (time < 10) {
  greeting = "굿 모닝!";
} else if (time < 20) {
  greeting = "굿 데이!";
} else {
  greeting = "굿 이브닝!";
}

console.log(greeting);
```

__다른 언어와 달리 자바스크립트에서는 블록 유효범위(Block-level scope)를 생성하지 않는다. 함수 단위의 유효범위(Function-level scope)만이 생성된다.__

-

### 5. Expression (표현식)

표현식(Expression)은 값, 변수, 연산자의 조합이며 이 조합은 값을 연산한다. 즉, 표현식은 하나의 값으로 평가될 수 있는 문장이다. 아래의 예에서 5 * 10은 50으로 평가(연산)된다.

```js
5 * 10;                // 50
"John" + " " + "Doe";  // "John Doe"
```

-

### 6. Variable (변수)

프로그래밍 언어(Programming Language)에서 변수는 데이터(Data)를 저장(할당), 참조하기 위해 사용된다. 한번 쓰고 버리는 값이 아닌 값(value)을 유지할 필요가 있는 경우에 변수를 사용한다. 변수를 선언할 때 `var` keyword가 사용된다. 등호(`=`, equal sign)는 변수에 값을 할당하기 위해 사용된다. 아래의 예에서 x는 변수로 선언되었고 변수 x에는 정수값 6이 할당되었다.

```js
var x; // 변수의 선언
x = 6; // 정수값의 할당
```

-

### 7. Value (값)

```java
String str = "Hello World";
< 1 > < 2 >      < 3 >
```

위의 Java 예제에서 <1> 은 데이터 타입, <2>는 변수명, <3>은 (String) 리터럴(literal)이다.

자바스크립트는 8가지 데이터 타입을 제공한다.

1. Number
1. String
1. Boolean
1. Object
1. Array
1. Function
1. null
1. undefined

리터럴이란 값을 표현하는 방식을 의미한다. 자바스크립트는 값(value)을 표현하기 위해 리터럴을 사용한다. 그리고 대부분 값은 변수에 저장된다 (변수도 값이다!)

```js
// literal : Number
10.50
1001

// literal : String
"John Doe"
'John Doe'

// literal : Object
{ name: 'Lee', gender: 'male' }

// literal : Array
[ "French Roast", "Colombian", "Kona" ];
```

-

### 8. 연산자(Operator)

연산자(Operators)는 하나 혹은 그 이상의 값을 하나의 값으로 만들 때 사용한다.

```js
// 대입 연산자
var color = "red";

// 산술 연산자
var area = 5 * 4;

// 문자열 연산자
var greeting = "Hi! " + "My name is Lee";

// 비교 연산자
var buy = 3 > 5; // false

// 논리 연산자
var buy = (5 > 3) && (2 < 4);  // true
```

-

### 9. keyword (키워드)

키워드(keyword)는 수행되어져할 동작을 규정한 것이다. 예를 들어 `var` keyword는 브라우저에게 새로운 변수를 생성할 것을 지시한다.

```js
var x = 5 + 6;
var y = x * 10;
```

| 자바스크립트 | 예약어      |  키워드      |           |              |
|-----------|-----------|------------|-----------|--------------|
| abstract  | arguments | boolean    | break     | byte         |
| case      | catch     | char       | class     | const        |
| continue  | debugger  | default    | delete    | do           |
| double    | else      | enum       | eval      | export       |
| extends   | false     | final      | finally   | float        |
| for       | function  | goto       | if        | implements   |
| import    | in        | instanceof | int       | interface    |
| let       | long      | native     | new       | null         |
| package   | private   | protected  | public    | return       |
| short     | static    | super      | switch    | synchronized |
| this      | throw     | throws     | transient | true         |
| try       | typeof    | var        | void      | volatile     |
| while     | with      | yield      |           |              |

-

### 10. Comment

주석(Comment)은 작성된 코드의 의미를 설명하기 위해 사용한다. 코드는 읽기(이해하기) 쉬워야 한다(가독성이 좋아야 한다) 여러분이 작성한 코드를 다른 누군가가 읽는다면 “아니, 이게 뭐하는 코드야?”라고 생각하는 순간이 있기 마련이다. 여러분이 해야 하는 일은 바로 그런 부분에 주석을 다는 것이다. (읽기 좋은 코드가 좋은 코드이다)

한줄 주석은 `//` 다음에 작성하며 여러 줄 주석은 `/*`과 `*/`의 사이에 작성한다. 주석은 해석기가 무시하며 실행되지 않는다.

```js
/*
제목 id = "myH"
단락 id = "myP"
*/

// 제목 변경
document.getElementById("my-heading").firstChild.nodeValue = "첫번째 페이지";

// 단락 변경
document.getElementById("my-paragraph").firstChild.nodeValue = "첫번째 단락";
```
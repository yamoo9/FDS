###### Front-End Develop SCHOOL

# DAY 29

## 코딩(Coding)

### 1. Computational thinking

Coding(프로그래밍)은 수행되어져야 하는 명령을 컴퓨터에 전달하는 일종의 커뮤니케이션이다.

이때 “수행되어져야 하는 명령”을 정의하기 위해서는 해결 과제(요구사항)를 명확히 이해한 후, 복잡함을 단순하게 분해하고 자료를 정리하고 구분해야하며 순서에 맞게 행위를 배열해야 한다.

사람의 일반적인 사고 방식은 매우 포괄적이며 실생활에서 경험하고 있는 익숙한 사항에 대해 당연시하는 안이한 인식이 있다. 예를 들어 “듣다(Listen)”라는 행위를 사람은 하나의 간단하고 당연한 기능으로 생각하지만 컴퓨터에게 이 행위를 설명하는 것은 단순하지 않다. 그리고 소리의 크기를 사람은 크다 또는 작다라고 표현하지만 컴퓨터에게 크다 또는 작다라는 의미는 상대적인 개념으로 양적 개념인 숫자로 표현되는 것이 일반적이다. 또한 “좋다”, “붉다”, “사랑”과 같은 관념적 개념은 컴퓨터에게는 매우 난해한 개념이다. 사람은 지인의 얼굴을 보고 누구인지 바로 인지하지만 컴퓨터에게 이것은 매우 어려운 일이다. 347⁴의 계산은 사람에게는 어렵지만 컴퓨터에게는 매우 쉬운 작업이다.

이처럼 컴퓨터와 사람은 사고, 인지의 방식이 다르다. 따라서 프로그래밍을 위해서는 해결 과제를 __컴퓨터의 관점으로 사고(Computational thinking)__해야 한다. 이에는 논리적, 수학적 사고가 필요하게 되며 해결 과제를 작은 단위로 분해하고 패턴화하여 추출하며 프로그래밍 내에서 사용될 모든 개념은 평가할 수 있도록 정의되어야 한다.

예를 들어 사람처럼 두발로 걷는 로봇을 위해 “걷다”라는 기능을 design해 보자.

![](../Assets/walk.png)

상태를 판단하는 시기와 판단하여야 하는 상태와 그 기준을 정의하여야 하며 이를 바탕으로 분해한 처리(Process)의 실행 여부를 결정한다. 예를 들어 장애물은 어떤 것(크기, 움직임…)인지 어떤 범위 내에 있는 것인지 명확히 수치화하여 정의해야 한다.

-

### 2. Syntax & Semantics

Coding(프로그래밍)은 수행되어져야 하는 명령을 컴퓨터에 전달하는 일종의 커뮤니케이션이다.

이때 명령을 수행할 주체는 컴퓨터이므로, 인간이 이해할 수 있는 자연어가 아니라 컴퓨터가 이해할 수 있는 언어인 기계어로 명령을 전달해야 한다. 컴퓨터는 아쉬울 것이 전혀 없다...

하지만 인간이 기계어를 이해하여 직접 명령을 전달하는 것은 매우 어려운 작업이다. 왜냐하면, 기계어는 우리가 사용하는 언어와는 너무나도 다른 체계를 가지기 때문이다. 심지어 비트 단위로 기술되어 있다.

아래는 x86 아키텍처 리눅스 환경에서 그 유명한 `"hello world"`를 출력하는 기계어 코드이다.

```sh
7F 45 4C 46 01 01 01 00 00 00 00 00 00 00 00 00 02 00 03 00 01 00 00 00 35 40 B3 04 2C 00 00 00 00 00 00 00 00 00 00 00 34 00 20 00 01 00 00 00 00 00 00 00 00 40 B3 04 B2 0C EB 1C 62 00 00 00 62 00 00 00 05 00 00 00 00 10 00 00 48 65 6C 6C 6F 20 77 6F 72 6C 64 0A B9 4C 40 B3 04 93 CD 80 EB FB
```

가장 유용한 대안은 사전에 정의된 문법(Syntax)을 사용하여 프로그램을 작성하면 그것을 컴퓨터가 이해할 수 있는 기계어로 변환하여 주는 일종의 번역기를 이용하는 것이다. 이 일종의 번역기를 __컴파일러(compiler)__ 혹은 __인터프리터(interpreter)__라고 한다.

아래는 `“hello world”`를 출력하는 __JavaScript__ 코드이다.

```js
console.log('hello world');
```

따라서 프로그래밍을 학습한다고 하는 것은 문법을 배우는 것이 된다. 이는 외국어 학습과도 유사하다 할 수 있는데 문법을 잘 안다고해서 외국어를 잘한다고 말 할 수는 없을 것이다.

상대방의 말이나 문장을 정확히 이해한 후, 문맥에 따른 적절한 어휘 선택과 결론으로 이끌어가는 순차적인 문장의 구성이 필요할 것이다.

> 각각의 낱말들이 모여서 완전한 하나의 생각을 표현하게 되는데, 그 생각은 글쓴이의 머리 속에서 탄생하여 읽는이의 머리 속으로 전해진다.<br>
> ¶ 스티븐 킹의 ‘유혹하는 글쓰기’

즉 의미(Semantics)를 가지고 있어야 한다.

> Colorless green ideas sleep furiously.<br>
> ¶ Noam Chomsky

위 문장은 문법(Syntax)적으로 전혀 문제가 없지만 의미(Semantics)는 없다. 즉, 문법적으로 말이 되는 올바른 문장인 동시에 의미적으로 아무 말도 안되는 문장이라는 것이다. 이 문장은 언어학자 촘스키가 당시 행동주의자들이 주장한 언어 행동에 비판을 가하기 위하여 만들었다.

[#촘스키가 이 문장을 만든 이유 살펴보기](http://terms.naver.com/entry.nhn?docId=2094142&cid=41991&categoryId=41991)

```c
// 문법은 올바르다. (type identifier = value)
// 하지만 의미적이지는 않다. ("five"는 정수가 아니다)
// 프로그래밍은 문법에 부합해야 하며, 의미적이어야 한다.
int x = "five";
```

위 C언어 구문은 문법적으로 문제가 없으나 의미적으로는 틀리다. (“five”는 정수가 아니라 문자열이다.)

결국 프로그래밍은 문법에 부합하는 것은 물론이고 수행하고자 하는 바를 정확히 수행(요구사항의 실현)하여야 의미가 있다.

이것을 위하여 일반적 프로그래밍 언어는 `변수`와 `값`, `키워드`, `연산자`, `표현식`(결국 __하나의 값으로 수렴되는 식__이다), `조건문`과 `반복문`에 의한 `흐름제어(Flow control)`, `함수`, `객체`, `배열` 등의 `자료구조`를 제공한다.

자연어 문장은 프로그래밍 언어의 구문(Statement)에 해당한다. 구문은 변수와 값, 키워드, 연산자, 표현식, 주석으로 구성된다. 즉, 변수를 통해 값을 저장하고 참조하며 연산자로 값을 연산, 평가하고 조건문과 반복문에 의한 흐름제어로 데이터의 흐름을 제어하고 함수로 구문의 집합을 만들며 객체, 배열 등으로 자료를 구조화한다.

> 프로그래밍은 요구사항의 집합을 분석하여 적절한 자료구조와 함수의 집합으로 변환한 후 그 흐름을 제어하는 것이다.

---

### 스크립트 파일을 외부에서 분리하여 로드 시 참고할 점.

HTML에서 javascript가 실행될 때 이하와 같은 동작을 할 것이다.

1. 브라우저가 script 요소를 만나면, 문서의 렌더링을 잠시 중단하고
1. 브라우저는 src 속성에 정의된 자바스크립트 파일을 로드한다.
1. 스크립트를 실행한 뒤 다음 작업을 진행한다.

`<body>`요소의 가장 아래에 스크립트를 위치시키는 것은 좋은 아이디어이다. HTML 요소들이 스크립트 로딩 지연으로 인해 렌더링에 지장 받는 일이 발생하지 않아 페이지 로딩 시간이 단축된다.

-

### Statement (문장)

프로그램(스크립트)은 컴퓨터(Client-side Javascript의 경우, 엄밀히 말하면 웹 브라우저)에 의해 단계별로 수행될 명령들의 집합이다. 각각의 명령을 statement(구문)이라 하며 statement가 실행되면 무슨 일인가가 일어나게 된다. 구문은 값(Values), 연산자(Operators), 표현식(Expressions), Keywords, 주석(Comments)으로 구성되며 세미콜론(;)으로 끝나야 한다.

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

### Expression (표현식)

표현식(Expression)은 값, 변수, 연산자의 조합이며 이 조합은 값을 연산한다. 즉, 표현식은 하나의 값으로 평가될 수 있는 문장이다. 아래의 예에서 5 * 10은 50으로 평가(연산)된다.

```js
5 * 10;                // 50
"John" + " " + "Doe";  // "John Doe"
```

### Variable (변수)

프로그래밍 언어(Programming Language)에서 변수는 데이터(Data)를 저장(할당), 참조하기 위해 사용된다. 한번 쓰고 버리는 값이 아닌 값(value)을 유지할 필요가 있는 경우에 변수를 사용한다. 변수를 선언할 때 `var` keyword가 사용된다. 등호(`=`, equal sign)는 변수에 값을 할당하기 위해 사용된다. 아래의 예에서 x는 변수로 선언되었고 변수 x에는 정수값 6이 할당되었다.

```js
var x; // 변수의 선언
x = 6; // 정수값의 할당
```

-

### Value (값)

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
8. Operator
```

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

### keyword (키워드)

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

### Comment

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
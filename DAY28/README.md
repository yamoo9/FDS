###### Front-End Develop SCHOOL

# DAY 28

## 코딩(Coding)

### 1. Computational thinking

Coding(프로그래밍)은 수행되어져야 하는 명령을 컴퓨터에 전달하는 일종의 커뮤니케이션이다.

이때 “수행되어져야 하는 명령”을 정의하기 위해서는 해결 과제(요구사항)를 명확히 이해한 후, 복잡함을 단순하게 분해하고 자료를 정리하고 구분해야하며 순서에 맞게 행위를 배열해야 한다.

사람의 일반적인 사고 방식은 매우 포괄적이며 실생활에서 경험하고 있는 익숙한 사항에 대해 당연시하는 안이한 인식이 있다. 예를 들어 “듣다(Listen)”라는 행위를 사람은 하나의 간단하고 당연한 기능으로 생각하지만 컴퓨터에게 이 행위를 설명하는 것은 단순하지 않다. 그리고 소리의 크기를 사람은 크다 또는 작다라고 표현하지만 컴퓨터에게 크다 또는 작다라는 의미는 상대적인 개념으로 양적 개념인 숫자로 표현되는 것이 일반적이다. 또한 “좋다”, “붉다”, “사랑”과 같은 관념적 개념은 컴퓨터에게는 매우 난해한 개념이다. 사람은 지인의 얼굴을 보고 누구인지 바로 인지하지만 컴퓨터에게 이것은 매우 어려운 일이다. 3479의 계산은 사람에게는 어렵지만 컴퓨터에게는 매우 쉬운 작업이다.

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

## DOM(Document Object Model) JavaScript

### 1. Introduction

브라우저는 HTML 문서를 로드할 때 DOM(문서 객체 모델: Document Object Model)을 생성한다. DOM은 HTML과 XML 문서를 위한 API로 웹페이지의 각 요소에 접근하고 수정하는 방법을 제시한다. DOM은 플랫폼/프로그래밍 언어 중립적으로 구조화된 문서를 표현하는 W3C의 공식 표준이다. 일반적으로 JavaScript와 함께 사용되지만 프로그래밍 언어에 독립적으로 설계되어 있어 어떤 프로그래밍 언어로도 구현될 수 있다.

DOM은 다음 두 가지 기능을 담당한다.

- __HTML 문서에 대한 모델 구성__<br>
  브라우저는 HTML 문서를 로드한 후 해당 문서에 대한 모델을 메모리에 생성한다. 이때 모델은 객체의 트리로 구성되는데 이것을 DOM tree라 한다.
- __HTML 문서 내의 각 요소에 접근 / 수정__<br>
  DOM은 모델 내의 각 객체에 접근하고 수정할 수 있는 메서드와 속성들을 제공한다. DOM이 수정되면 브라우저를 통해 사용자가 보게 될 Contents 또한 변경된다.

  ### 2. DOM tree

DOM tree는 브라우저가 HTML 문서를 로드한 후 생성하는 모델을 의미하는데 객체의 트리로 구조화되어 있기 때문에 DOM tree라 부른다.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .red  { color: #ff0000; }
      .blue { color: #0000ff;}
    </style>
  </head>
  <body>
    <div>
      <h1>Cities</h1>
      <ul>
        <li id='one' class='red'>Seoul</li>
        <li id='two' class='red'>London</li>
        <li id='three' class='red'>Newyork</li>
        <li id='four'>Tokyo</li>
      </ul>
    </div>
  </body>
</html>
```

![](../Assets/dom-tree.png)

DOM tree는 네 종류의 노드로 구성된다.

- __문서 노드__<br>
트리의 최상위에 존재하며 각각 요소, 속성, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다.
- __요소 노드__<br>
요소 노드는 HTML 요소를 표현한다. 속성, 텍스트 노드에 접근하려면 먼저 요소 노드를 찾아 접근해야 한다.
- __속성 노드__<br>
속성 노드는 HTML 요소의 속성을 표현한다. 먼저 요소 노드를 찾고 해당 요소의 속성을 참조 또는 수정할 수 있는 자바스크립트 메서드, 속성을 사용하여 참조, 수정할 수 있다.
- __텍스트 노드__<br>
텍스트 노드는 HTML 요소의 텍스트을 표현한다. 텍스트 노드는 자식 노드를 가질 수 없다.

DOM tree는 브라우저가 생성한다. 생성되어 있는 DOM을 가지고 웹페이지를 조작(manipulate)하기 위해서는 DOM에 접근하여 조작하고자하는 요소를 선택 또는 탐색한 후
선택된 요소의 내용(contents) 또는 속성을 조작하는 것이 필요하다.

JavaScript는 이것에 필요한 수단을 제공한다.

### 3. DOM Query / Traversing (요소에의 접근)

#### 3.1 하나의 요소 노드 선택(DOM Query)

![](../Assets/select-an-individual-element-node.png)

요소의 id 속성값으로 선택할 수 있다.

```js
var elem = document.getElementById('one');
elem.className = 'blue';
```

### 4. 수업 시간에 다룬 내용

```js
// DOM Lv.0 방식
var forms = document.forms;
// console.log(forms); // [form, form]

// ---------------------------------------------
// 과거의 코드는 사라져야....
if (document.layers) {
// NN
// console.info('NN 웹 브라우저가 확실합니다!');
} else {
// IE
// console.info('IE 웹 브라우저가 확실합니다!');
}

/**
 * --------------------------------
 * DOM Level 1
 * document.documentElement
 * document.getElementsByTagName()
 * document.getElementById()
 * ----------------------------- */

var root_element;

root_element = document.documentElement; // HTML 문서에서만 가능
root_element = document.getElementsByTagName('html')[0] // XML, HTML 문서에서 사용 가능
// console.log('root_element:', root_element); // <html>

var head = document.head; // HTML 에서만 사용 가능
var body = document.body; // HTML 에서만 사용 가능

var inputs = document.getElementsByTagName('input');
var buttons = document.getElementsByTagName('button');
// console.log('inputs:', inputs);
// console.log('buttons:', buttons);

// ID 속성을 통한 접근 방법(Interface: Selecting)
var c_id = document.getElementById('c_id');
var c_mail = document.getElementById('c_mail');
// console.log('c_id:', c_id);
// console.log('c_mail:', c_mail);

// ----------

var first_para = document.getElementsByTagName('p').item(0);
var first_para_nodes = first_para.childNodes;

console.log(first_para_nodes[0].nodeType === document.ELEMENT_NODE);
console.log(first_para_nodes[1].nodeType === document.ELEMENT_NODE);
console.log(first_para_nodes[2].nodeType === document.TEXT_NODE);
```
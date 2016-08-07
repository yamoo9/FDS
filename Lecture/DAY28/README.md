###### Front-End Develop SCHOOL

# DAY 28

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
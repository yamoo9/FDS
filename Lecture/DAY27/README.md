###### Front-End Develop SCHOOL

# DAY 27

> 웹 브라우저 상에서 자바스크립트가 주로 할 일은, HTML 문서의 요소를 찾아서(Traversing, Selecting)
> 조작(Manipulation, Interactive)을 수행한다. 인터페이스로서 DOM이 제공되고, 이때 사용되는 언어가 자바스크립트이다.
> CSS와 맞물려 생각한다면 어렵지 않게 다가갈 수 있다.

###DOM(Document Object Model)

 - DOM Legacy (Lv.0)
 - DOM Lv.1
 - DOM Lv.2
 - DOM Lv.3
 - DOM Lv.4

**JavaScript** 입장에서 모든 요소를 `Node`로써 바라본다. 트리 형태를 이루며 `html`요소가 루트 요소가 된다.

 - [노드 타입 분류, MDN](https://developer.mozilla.org/ko/docs/Web/API/Node/nodeType)

```html
<p title="time is gold">오늘 잠시 졸은 시간은 더 이상 오지 않는다.</p>
<p id="notification">보충은 다음 주부터 다시 시작합니다.</p>
```
```javascript
// 유사배열(Like Array): NodeList or HTMLCollection 반환
// 집합을 반환하므로 각 객체를 조작하기 위해 집합에서 조작하려는 객체를 꺼내야 한다
console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByTagName('p').length)

// 같은 결과를 반환
console.log(document.getElementsByTagName('p').item(0));
console.log(document.getElementsByTagName('p')[0]);

// 노트 타입 체크
console.log(document.getElementsByTagName('p')[0].nodeType));
```

> 위 코드에서 냄새가 나지 않는가? 프로그래머로서 중복을 용인할 수 없다.
> 중복되는 코드가 보이므로 이를 변수에 담아서 사용한다.

```javascript
// 변수 선언, 선언된 메모리 공간(변수)에 레이블(이름표)를 달다.
var paras;

// 레이블이 달린 메모리 공간(변수)에 사물(데이터)를 담는다.
// 대입 연산자(=)를 이용한다
paras = document.getElementsByTagName('p');

// 아래처럼 쓸 수 있다.
var paras = document.getElementsByTagName('p');

// Helper 함수 정의
function log(msg){
  console.log(msg);
}
function tag(name){
  return document.getElementsByTagName(name);
}
function id(name){
  return document.getElementById(name);
}
```

```javascript
// 이와같이 변수를 선언할 수도 있다.
var paras, divs, uls, lis, headings, links;

var paras = tag('p'),
    divs = tag('div'),
    uls = tag('ul'),
    lis = tag('li'),
    headings = tag('h2'),
    links = tag('a'),

    h2_1 = id('heading-01'),
    h2_2 = id('heading-02'),
    h2_3 = id('heading-03'),
    h2_4 = id('heading-04');
```

####Interactive Page 구현하기

```javascript
// body요소를 메모리, 캐시(cache)
var body = document.body // DOM Legacy (Lv.0) HTML DOM
// body요소에 사용자가 마우스를 올리면(이벤트) 배경 색이 붉은 색으로 변경
// onmouseover는 권장하지 않습니다
body.onmouseenter = function(){
  // 어떤 일을 수행(배경색 변경), 문자열 값을 넣어준다
  body.style.backgroundColor = '#f00';
}
body.onmouseleave = function(){
  body.style.backgroundColor = 'fff';
}
```
---
```html
<div id="button-group" role="group">
  <button type="button">#f50054</button>
  <button type="button">#8800f3</button>
  <button type="button">#139df3</button>
  <button type="button">#20f97d</button>
  <button type="button">#f2ce09</button>
</div>
```
```css
#button-group {
  display: flex;
  flex-flow: ;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
#button-group button {
  flex: 1;
  border: none;
  padding: 1em;
  color: #fff;
  text-shadow: 0 0 3px rgba(0,0,0,0.6);
  cursor: pointer;
```
```javascript
var body = document.body;
var btn_group = document.getElementById('button-group');
var btns = btn_group.getElementsByTagName('button');

function changeColor(){
  var wanted_color = this.firstChild.nodeValue;
  body.style.backgroundColor = wanted_color;
}

btns[0].onclick =
btns[1].onclick =
btns[2].onclick =
btns[3].onclick =
btns[4].onclick = changeColor;
```


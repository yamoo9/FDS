###### Front-End Develop SCHOOL

# DAY 29

```js
// undefined, null 이 객체가 아닌 이유
// Object // 생성자/함수, Constructor
// 모든 객체의 종(소유한 능력)
// .toString()

// Number, String, Boolean, Array, Function, Object, Math, Date, RegExp, ...
// 위에 나열된 객체 생성자로부터 태어난 객체(인스턴스)를 통해 확인(검증)

!!'날이 더워요.'.toString
```

###DOM Traversing

 - [선택] 현재 선택한 대상 `el`
 - [탐색] 부모노드 `el.parentNode`
 - [탐색] 첫번째 자식노드 `el.firstChild`
 - [탐색] 마지막 자식노드 `el.lastChild`
 - [탐색] 이전 형제 노드 `el.previousSibling`
 - [탐색] 다음 형제 노드 `el.nextSibling`
 - [탐색] 자식 노드들 `el.childNodes`

```html
<div id="parent">
	<div class="child">
		<div class="children">child 1</div>
		<div class="children">child 2</div>
		<div class="children">child 3</div>
		<div class="children">child 4</div>
		<div class="children">child 5</div>
	</div>
	<div class="child">
		<div class="children">child 1</div>
		<div class="children">child 2</div>
		<div class="children">child 3</div>
		<div class="children">child 4</div>
		<div class="children">child 5</div>
	</div>
	<div class="child">
		<div class="children">child 1</div>
		<div class="children">child 2</div>
		<div class="children">child 3</div>
		<div class="children">child 4</div>
		<div class="children">child 5</div>
	</div>
</div>
```
```javascript
var parent_el = document.getElementById('parent');
var parent_el_child_nodes = parent_el.childNodes;

// parent_el 변수에 참조된 객체의 자식 노드들을 수집
console.log(parent_el_child_nodes);
console.log('수집된 parent_el의 자식 노드 개수', parent_el_child_nodes.length);

console.log(0, parent_el_child_nodes.item(0).nodeType);
console.log(1, parent_el_child_nodes.item(1).nodeType);
// 위와 같은 결과
console.log(1, parent_el_child_nodes[1].nodeType);
console.log(2, parent_el_child_nodes.item(2).nodeType);
console.log(3, parent_el_child_nodes.item(3).nodeType);
console.log(4, parent_el_child_nodes.item(4).nodeType);
console.log(5, parent_el_child_nodes.item(5).nodeType);
console.log(6, parent_el_child_nodes.item(6).nodeType);
console.log(7, parent_el_child_nodes.item(7).nodeType);
console.log(8, parent_el_child_nodes.item(8).nodeType);

// 미리보는 자바스크립트의 반복 구문
// while, do ~ while , for, for ~ in, for ~ of, forEach
for (var i = 0; i < 9; i = i + 1) {
	//console.log('i: ', i)
	console.log(i, parent_el_child_nodes.item(i).nodeType);
}

// 미리보는 자바스크립트의 조건 구문
// if ~ else, switch case default break, 3항식
for (var i = 0; i < 9; i = i + 1) {
	if (parent_el_child_nodes.item(i).nodeType === 1) {
		console.log('현재 노드는 ELEMENT_NODE');
	} else {
		console.log('현재 노드는 TEXT_NODE');
	}
}

// 크롬에서 콘솔창 출력 스타일링 하기
console.log('%c some text', 'background: #222; color: #f00')

// #parent .child:first-child 요소의 자식노드를 순환하여 노드 유형 로그하기
// children => 요소 노드만 수집한다
var parent_el_first_child_el = parent_el.children[0];

var test_list = parent_el_first_child_el.children;
var test_list_len = test_list.length;

for (i = 0; i < test_list_len; i++) {
	console.log(test_list[i].nodeType);
}
```

| 속성 | 특성 |
|---|---|
|nodeType| 노드의 타입 반환 |
|nodeName| 요소의 이름을 문자(대문자)로 반환 |
|nodeValue| `Text` 노드에서만 접근 가능, `ELEMENT_NODE`는 `null` 반환 |

 - nodeType
  - `ELEMENT_NODE` = 1
  - `TEXT_NODE` = 3
  - `COMMENT_NODE` = 8

 - 요소를 탐색할 때 고려할 수 있는 DOM API (단! IE 9 이상에서만 작동)
  - `노드.firstElementChild` : 자식중에서 첫번째 요소 노드를 반환
  - `노드.lastElementChild` : 자식중에서 마지막 요소 노드를 반환
  - `노드.previousElementSibling` : 노드의 이전 위치에 자리한 형제 요소 노드 반환
  - `노드.nextElementSibling` : 노드의 다음 위치에 자리한 형제 요소 노드 반환
  - `노드.parentElement` : 노드의 부모 요소 노드 반환

###NODE Information

HTML DOM 방식의 속성 접근 방법, 웹 초창기 때부터 존재했던 속성들

```javascript
var parent_el = document.getElementById('parent');

parent_el.id
parent_el.className
parent_el.title
```

__그렇다면 새롭게 등장한 속성들은 어떻게 가져오는가?__(data-*, role, aria)

```html
<div id="parent" role="group" aria-hidden="true" data-container="false"></div>
```
```javascript
parent_el.getAttribute('role');
parent_el.getAttribute('data-container');
parent_el.getAttribute('aria-hidden');
```

####DOM Method

```javascript
parent_el.hasChildNodes() // true

// #parent 내부의 요소 중 자식이 없는 요소를 모두 콘솔에 기록하기
var parent_childs = parent_el.getElementsByTagName('div');

for (var child, i = 0, len=parent_childs.length; i < len; i++){
	child = parent_childs[i]
	if ( !child.hasChildNodes() ) {
		console.log(child)
	}
}
```

- `document.getElementById('ID_NAME')`
- `document.getElementsByClassName('CLASS_NAME')`
- `document.getElementsByTagName('TAG_NAME')` ( IE9+ )

```javascript
var container = document.getElementsByClassName('container');
// 유사 배열에 담겨서 나온다
```

 - `document.querySelector('css selector')` : `querySelectorAll('css selector')[0]`과 같다
 - `document.querySelectorAll('css selector')`
 - IE 8 이상 지원
 - `jQuery`보다 빠르다

```javascript
document.querySelector('#parent > .child:nth-child(3)');
```

-

###노드 만들기

문서 객체를 동적으로 생성한다
 - `createElement('element')`
 - `createAttribute('attribute')`
 - `createTextNode('text')`

```javascript
var maked_div = document.createElement('div');

var maked_ul = document.createElement('ul');
var maked_ul_li = document.createElement('li');

var maked_div_text = document.createTextNode('this is division');
var maked_li_text = document.createTextNode('this is list item');
```

-

###노드 조작

문서 객체를 동적으로 조작한다
 - `appendChild(node)`
 - `insertBefore(insert, target)`
 - `removeChild(node)`
 - `replaceChild(alternate, target)`
 - `cloneNode(boolean)`
 - `innerHTML`

```javascript
// 동적으로 생성한 텍스트를 역시나 동적으로 생성한 div에 추가
maked_div.appendChild(maked_div_text);

// 동적으로 생성한 div 요소를 문서의 특정한 목적지에 추가
document.querySelector('#parent > .child:last-child').append(maked_div);

maked_ul_li.appendChild(maked_li_text);
maked_ul.appendChild(maked_ul_li);

var target_container = document.createElement('div');
target_container.appendChild(maked_ul);

document.body.appendChild(target_container);
// 혹은
var target = document.body.firstChild;
target.parentNode.insertBefore(target_container, target)
```

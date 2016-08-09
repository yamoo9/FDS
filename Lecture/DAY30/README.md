###### Front-End Develop SCHOOL

# DAY 30

## DOM API

### 1. 선택

- `document.getElementById('id name')`
- `.getElementsByTagName('element node(tag) name')`
- `.getElementsByClassName('class attribute value name')`
- `.querySelector('css selector')`
- `.querySelectorAll('css selector')`

### 2. 탐색

- `.firstChild`
- `.firstElementChild` (IE 9+)
- `.lastChild`
- `.lastElementChild` (IE 9+)
- `.parentNode`
- `.parentElement` (DOM Lv4)
- `.childNodes`
- `.children`
- `.previousSibling`
- `.previousElementSibling` (IE 9+)
- `.nextSibling`
- `.nextElementSibling` (IE 9+)

### 3. 조작

- `parent_node.appendChild(child_node)`
- `target_node.parentNode.insertBefore(insert_node, target_node)`
- `parent_node.removeChild(child_node)`
- `target_node.parentNode.replaceChild(replace_node, target_node)`
- `node.cloneNode()`
- `node.hasChildNodes()`
- `node.isEqualNode()` (DOM Lv3, IE 호환 가능[#](https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode))
- `node.contains(other_node)` (DOM Lv4, IE 호환 가능[#](https://developer.mozilla.org/en/docs/Web/API/Node/contains))
- `node.normalize()` (DOM Lv2, IE 호환 가능[#](https://developer.mozilla.org/en-US/docs/Web/API/Node/normalize))

-

###DOM Helper 함수 만들기

 - 사용자 정의 삽입 함수(`prependChild`, `insertAfter`)

```javascript
function prependChild(parent_node, child_node) {
  parent_node.insertBefore(child_node, parent_node.firstChild);
}
```
```html
<div class="modal">
	<h2 class="modal-title">Modal Window</h2>
	<p class="modal-desc">Modal Window Content....</p>
	<button class="modal-cta">send message</button>
	<button class="modal-close" aria-label="close modal window">x</button>
</div>
```
```javascript
// 특정 노드 ~ 뒤에 삽입하는 헬퍼 함수
// insertBefore(insert_node, target_node)
// insertAfter(target_node, insert_node)
function insertAfter(target_node, insert_node) {
  // 삽입하고자 하는 노드를 목표 노드 뒤에 추가해주는 헬퍼 함수이다.
  // 함수 내부의 var 키워드를 사용한 변수 선언은 『지역 변수』가 된다.
  var next_node = target_node.nextSibling;
  var parent_node = target_node.parentNode;
  // 만약 next_node가 존재한다면
  if ( next_node ) {
    parent_node.insertBefore(insert_node, next_node);
  }
  // next_node가 존재하지 않는다면
  else {
    parent_node.appendChild(insert_node);
  }
}

var script = document.querySelector('script');
var modal = document.querySelector('.modal');

insertAfter(script, modal);
```

 - 사용자 정의 노드 선택 함수(`queryAll`, `query`)

```javascript
function queryAll(selector, context) {
	// 유효성 검사
	if (typeof selector !== 'string') { 
		// 사용자가 올바른 데이터를 전달하였는가?
		throw new Error('전달인자는 문자열만 가능합니다.'); 
	}
	// 사용자가 context를 전달하지 않는다면
	if (!context) { context = document; }
	return context.querySelectorAll(selector);
}

// queryAll 재사용
funtion query(selector , context) {
	return queryAll(selector, context)[0];
}

// 두 함수를 하나의 함수로 합칠 경우
function $q(selector, hook, context) {
	var method;
	if (hook){
		method = 'query';
	} else {
		method ='queryAll';
	}
	return window[method](selector, context);
}
```

-

###`Modal` 생성, 삭제

```javascript
var body = document.body;
var exist_modal = false;
var scripts_in_body = queryAll('script');
var last_script = scripts_in_body[scripts_in_body.length - 1];
var make_btn = query('.btn_make_modal');


function makeModal() {
	if (!exist_modal) {
		var modal = document.createElement('div');
		modal.setAttribute('class', 'modal');

		var modal_title = document.createElement('h2');
		var modal_title_txt = document.createTextNode('Modal Window');
		modal_title.setAttribute('class', 'modal-title');
		modal_title.appendChild(modal_title_txt);
		//------------------------------------------
		var modal_desc = document.createElement('p');
		var modal_desc_txt = document.createTextNode('Modal Window Content....');
		modal_desc.setAttribute('class', 'modal-desc');
		modal_desc.appendChild(modal_desc_txt);
		//------------------------------------------
		var btn_modal_cta = document.createElement('button');
		var btn_modal_cta_txt = document.createTextNode('send message');
		btn_modal_cta.setAttribute('class', 'modal-cta');
		btn_modal_cta.setAttribute('type', 'button');
		btn_modal_cta.appendChild(btn_modal_cta_txt);
		//------------------------------------------
		var btn_modal_close = document.createElement('button');
		var btn_modal_close_txt = document.createTextNode('x');
		btn_modal_close.setAttribute('class', 'modal-close');
		btn_modal_close.setAttribute('type', 'button');
		btn_modal_close.setAttribute('aria-label', 'close modal window');
		btn_modal_close.appendChild(btn_modal_close_txt);
		//------------------------------------------
		// 생성된 모든 노드를 병합
		modal.appendChild( modal_title );
		modal.appendChild( modal_desc );
		modal.appendChild( btn_modal_cta );
		modal.appendChild( btn_modal_close );
		body.appendChild(modal);

		insertAfter(last_script, modal);
		// 상태 변경
		exist_modal = !exist_modal;
		this.setAttribute('disabled', 'true')
}

function removeModal() {
	var modal = query('.modal');
	modal.parentNode.removeChild(modal);

	exist_modal = !exist_modal;
	make_btn.setAttribute('disabled', '')
	// 혹은
	make_btn.removeAttribute('disabled')
}
```
-

 - __참고__ : `typeof`의 문제점

```javascript
typeof null // object 출력
typeof [] // object 출력
```
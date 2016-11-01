###### Front-End Develop SCHOOL

# DAY 22

## 1. JavaScript

**복습**

    - 선택
    	- (ELEMENT_NODE || document).getElementById();
    	- (ELEMENT_NODE || document).getElementsByTagName();
    	- (ELEMENT_NODE || document).getElementByClassName();
    	- (ELEMENT_NODE || document).querySelector();
    	- (ELEMENT_NODE || document).querySelectorAll();
    
    - 탐색
    	- PARENT_NODE: parentNode
    	- CHILD_NODE | NODE_LIST:
    		.firstChild, .lastChild, .childNodes, .child
    		.firstElementChild, .lastElementChild
    	- SIBLING_NODE:
    		.nextSibling, .previousSibling
    		.nextElementSibling, .previousElementSibling
    		
    - 삽입(추가)
    	- PARENT_NODE.appendChild(CHILD_NODE)
    	- TARGET_NODE.appendChild(CHILD_NODE)
    	- TARGET_NODE.parentNode.insertBefore(INSERT_NODE, TARGET_NODE)
    
    - 제거
    	- PARENT_NODE.removeChild(CHILD_NODE)
    	- CHILD_NODE.parentNode.removeChild(CHILD_NODE)
   

### 1.1. DOM API
####1.1.1 대체

----
- node를 다른 node와 위치를 서로 변경하는 것이 아니다.
- 기존 node를 제거(반환) 후, 새로운 node를 해당 위치에 대체하는 것이다.
- `TARGET_NODE.parentNode.replaceChild(REPLACE_CHILD, TARGET_NODE)`

```js
(function(global) {
  'use strict';
  
  var gnb = document.querySelector('.gnb');
  var target_p = document.querySelector('.target-paragraph');

  // console.log(gnb);
  // console.log(target_p);

  // 코드 갈무리
  function bindEvent(container_el, target_selector) {
    if(!container_el || container_el.nodeType !== 1) {
      throw new Error('첫번째 인자는 요소 노드를 전달해야 합니다.');
    }

    target_selector = target_selector || 'a';

    var bind_els = container_el.querySelectorAll(target_selector);

    for(var i = 0, l = bind_els.length; i < l; i++) {
      var el = bind_els[i];
      el.onclick = changePositionStrongElement;
    }
  }

  bindEvent(gnb);
  
  // 선택된 a 요소를 strong 요소로 대체하는 메소드
  function replaceStrongElement() {
    // 대체
    var target_strong = target_p.querySelector('strong');

    var replace_el = this.parentNode.replaceChild(target_strong, this);

    // 브라우저의 기본 동작을 차단
    // 오래 전 방법
    return false;
    // 아래 코드 실행 안됨.
  }

  // 선택된 a 요소와 strong 요소를 서로 교체하는 메소드
  function changePositionStrongElement() {
    var parent = this.parentNode;
    var target_strong = target_p.querySelector('strong');
    var target_strong_next_sibling = target_strong.nextSibling;

    var replace_el = parent.replaceChild(target_strong, this);
    target_strong_next_sibling.parentNode.insertBefore(this, target_strong_next_sibling)

    return false;
  }
  
})(this);
```

####1.1.2. 복사
요소를 복사한다.
- jQuery: 이벤트도 복사된다.
- DOM Script: 이벤트는 복사되지 않는다.

```js
(function(global) {
  'use strict';

  var gnb = document.querySelector('.gnb');
  var copy_btn = document.querySelector('.copy-gnb-button');
  var copyzone = document.querySelector('.copyzone');


  copy_btn.onclick = function() {
    var deep_copy_gnb = gnb.cloneNode(true);

    // 이벤트 복사
    bindEvent(deep_copy_gnb); // 재사용
    copyzone.appendChild(deep_copy_gnb);
  };
  
  // 선택된 a 요소와 strong 요소를 서로 교체하는 메소드
  function changePositionStrongElement() {
    var parent = this.parentNode;
    var target_strong = target_p.querySelector('strong');
    var target_strong_next_sibling = target_strong.nextSibling;
    // console.log(target_strong_next_sibling);

    var replace_el = parent.replaceChild(target_strong, this);
    target_strong_next_sibling.parentNode.insertBefore(this, target_strong_next_sibling)

    return false;
  }
  
  // 이벤트
  function bindEvent(container_el, target_selector) {
    if(!container_el || container_el.nodeType !== 1) {
      throw new Error('첫번째 인자는 요소 노드를 전달해야 합니다.');
    }

    target_selector = target_selector || 'a';

    var bind_els = container_el.querySelectorAll(target_selector);

    for(var i = 0, l = bind_els.length; i < l; i++) {
      var el = bind_els[i];
      el.onclick = changePositionStrongElement;
    }
  }
  
})(this);
```

####1.1.3. innerHTML 
- innerHTML: 요소 블럭의 HTML 문서 전체를 텍스트로 가져온다.(자식 다 포함)

- 동적으로 코드를 가져와 화면에 보여주는 방법 

```js
var body = document.body;
var data = 'data';

var table_caption = 'this is table caption';

// 방법 0.
var table_code = '<table border="1" class="fds-table"><caption>'+ table_caption +'</caption><thead><tr><th scope="col">heading</th><th scope="col">heading</th><th scope="col">heading</th><th scope="col">heading</th></tr></thead><tbody><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr><tr><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td><td>'+ data +'</td></tr></tbody></table>';

// 방법 1.
// 마크업 하듯이 볼 수 있다.
var table_code = '';
table_code += '<table border="1" class="fds-table">';
table_code +=   '<caption>' + table_caption + '</caption>';
table_code +=   '<thead>';
table_code +=      '<tr>';
table_code +=         '<th scope="col">heading</th>';
table_code +=         '<th scope="col">heading</th>';
table_code +=         '<th scope="col">heading</th>';
table_code +=         '<th scope="col">heading</th>';
table_code +=      '</tr>';
table_code +=   '</thead>';
table_code += '</table>';

// 방법 2.
// 코드를 배열로 만들어서 합친다.
// 특정 부분을 찾아 수정할 때 어렵다.
var table_code = [
  '<table border="1" class="fds-table">',
    '<caption>' + table_caption + '</caption>',
    '<thead>',
      '<tr>',
        '<th scope="col">heading</th>',
        '<th scope="col">heading</th>',
        '<th scope="col">heading</th>',
        '<th scope="col">heading</th>',
      '</tr>',
    '</thead>',
].join('');

// 방법 3.
// ECMAScript 2015
var table_code = `
  <table border="1" class="fds-table">
    <caption>${table_caption}</caption>
    <thead>
      <tr>
        <th scope="col">${table_heading_1}</th>
        <th scope="col">${table_heading_2}</th>
        <th scope="col">${table_heading_3}</th>
        <th scope="col">${table_heading_4}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>data</td>
      </tr>
      <tr>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>data</td>
      </tr>
      <tr>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>data</td>
      </tr>
      <tr>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>data</td>
      </tr>
      <tr>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>data</td>
      </tr>
      <tr>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>data</td>
      </tr>
      <tr>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>data</td>
      </tr>
      <tr>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>data</td>
      </tr>
    </tbody>
  </table>
`;

// ES6  -> BabelJS     -> ES5
// Sass -> Sass Engine -> CSS

var table_code = "\n    <table border=\"1\" class=\"fds-table\">\n      <caption></caption>\n      <thead>\n        <tr>\n          <th scope=\"col\">1</th>\n          <th scope=\"col\">2</th>\n          <th scope=\"col\">3</th>\n           <th scope=\"col\">4</th>\n       </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n        <tr>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n          <td>data</td>\n        </tr>\n      </tbody>\n    </table>\n  ";

body.innerHTML = table_code + body.innerHTML;
```


###1.2. DOM Helper
####1.2.1. Init
```html
<!-- 문서 객체 모델 API를 보다 손쉽게 처리해주는 자바스크립트 라이브러리 -->
<!-- 의존성 때문에 Helper를 먼저 부른다. app.js는 DOM_Helper.js에 의존한다. -->
<script src="lib/DOM_Helper.js" charset="utf-8"></script>
<script src="js/app.js" charset="utf-8"></script>
```   

**DOM_Helper.js**
```js
// 모듈 패턴(Module Pattern)
// 클라이언트 사이트 환경에서 사용하는 방법
this.DOM_Helper = (function() {
  'use strict';
  
  // 라이브러리 정보
  var name = 'DOM_Helper Library';
  var version = '0.0.1';
  
  // 외부로 내보내지는 모듈
  // 클로저(은폐)
  // 공개하지 않으면 외부에서 접근 불가능
  return {
    'name': name,
    'version': version
  };

})(this);
```    

**app.js**
```js
// 의존 모듈 주입(Dependency Module Injection)
// DOM_Helper 모듈
(function(global, $) {
  'use strict';
  
  // var $ = this.DOM_Helper;
  // $ === DOM_Helper 라이브러리
  // 보통 자바스크립트 라이브러리는 $를 사용한다.
  
})(this, this.DOM_Helper);
```

####1.2.2. Utilities

#####1.2.1.1. 모든 자바스크립트 유형을 검토하는 유틸리티 함수
	- 공개할 메소드는 return에 추가한다.    

**DOM_Helper.js**
```js
// 비공개
function _isDataType(data) {
  return toString.call(data).slice(8, -1).toLowerCase();
}

// 공개
function isNumber(data) {
  return _isDataType(data) === 'number';
}

function isString(data) {
  return _isDataType(data) === 'string';
}

function isBoolean(data) {
  return _isDataType(data) === 'boolean';
}

function isFunction(data) {
  return _isDataType(data) === 'function';
}

function isArray(data) {
  return _isDataType(data) === 'array';
}

function isObject(data) {
  return _isDataType(data) === 'object'
}


```

#####1.2.1.2. 문서 유형을 체크하는 유틸리티 함수
```js
function isElementNode(node) { return node && node.nodeType === document.ELEMENT_NODE; }
function isTextNode(node) { return node && node.nodeType === document.TEXT_NODE; }
function isNodeList(nodelist) { return nodelist && _isDataType(nodelist) === 'nodelist'; }

function validate(condition, error_message) {
  if(condition) {
    throw new Error(error_message);
  }
}
```

#####1.2.1.3. 선택
```js
function id(id_name) {
  // 문자열 검증
  validate(!isString(id_name), '전달인자는 문자열이어야 합니다.');
  return document.getElementById(id_name);
}

function tag(tag_name, context) {
  // 문자열 검증
  validate(!isString(tag_name), '전달인자는 문자열이어야 합니다.');
  validate(context && !isElementNode(context), '두번째 전달인자는 노드요소이어야 합니다.');
  return (context || document).getElementsByTagName(tag_name);
}

function queryAll(selector, context) {
  validate(!isString(selector), '전달인자는 문자열이어야 합니다.');
  validate(context && !isElementNode(context), '두번째 전달인자는 노드요소이어야 합니다.');
  return (context || document).querySelectorAll(selector);
}

function query(selector, context) {
  return queryAll(selector, context)[0];
}
```

#####1.2.1.4. 탐색
- parentNode
```js
function parentEl(el_node, count) {
  validate(!isElementNode(el_node), '전달인자는 노드요소이어야 합니다.');
  count = count || 1;

  do {
    el_node = el_node.parentNode;
  } while(el_node && --count);

  return el_node;
}
```

- nextSibling

```js
var next;

// nextElementSibling
if('nextElementSibling' in Element.prototype) {
  next = function(el_node) {
    validate(!isElementNode(el_node), '전달인자는 요소노드여야 합니다.');
    return el_node.nextElementSibling;
  }
}
// nextSibling
// IE 6-8
else {
  next = function(el_node) {
    validate(!isElementNode(el_node), '전달인자는 요소노드여야 합니다.');
    do {
      el_node = el_node.nextSibling;
    } while (el_node && !isElementNode(el_node));

    return el_node;
  }
}
```

- previousSibling

```js
var prev;

// previousElementSibling
if('previousElementSibling' in Element.prototype) {
  prev = function(el_node) {
    validate(!isElementNode(el_node), '전달인자는 요소노드여야 합니다.');
    return el_node.previousElementSibling;
  }
}
// previousSibling
// IE 6-8
else {
  prev = function(el_node) {
    validate(!isElementNode(el_node), '전달인자는 요소노드여야 합니다.');
    do {
      el_node = el_node.previousSibling;
    } while (el_node && !isElementNode(el_node));

    return el_node;
  }
}
```
 
 - firstChild

```js
function first(el_node) {
 validate(!isElementNode(el_node), '전달인자는 요소노드여야 합니다.');
  return el_node.firstChild;
}
```

- lastChild

```js
function last(el_node) {
  validate(!isElementNode(el_node), '전달인자는 노드요소이어야 합니다.');
  return el_node.lastChild;
}
```

**외부에서 사용할 수 있도록 공개**

- DOM_Helper.js 하단에 작성해준다.

```js
// 외부로 함수 공개하기 위함.
// _isDataType은 비공개이기 때문에 아래에 추가하지 않는다.
return {
    'name': name,
    'version': version,

    // 유틸리티(네입스페이스 패턴), 함수 공개
    'isNumber': isNumber,
    'isString': isString,
    'isBoolean': isBoolean,
    'isFunction': isFunction,
    'isArray': isArray,
    'isObject': isObject,
    'isElementNode': isElementNode,
    'isTextNode': isTextNode,
    'isNodeList': isNodeList,

    // 문서 객체 선택
    'id': id,
    'tag': tag,
    'query': query,
    'queryAll': queryAll,

    // 문서 객체 탐색
    'parent': parent,
    'next': next,
    'prev': prev,
    'first': first,
    'last': last
  };
```



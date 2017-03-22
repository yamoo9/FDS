/*! dom-method.js © yamoo9.net, 2017 */

// 대상 찾기
// .getElementById()
// .getElementsByName()
// .getElementsByTagName()
// .getElementsByClassName() // IE 9+
// .querySelector() // IE 8+, DOM API v4 Selector API

// 아주 오래전 방식
// var page = document.getElementById('page');
// var divs = page.getElementsByTagName('div');

// querySelector() -> ElementNode
var page      = document.querySelector('#page');
// var container = page.querySelector('> .conatiner');
// console.log('container:', container);

// querySelectorAll() -> Nodelist
var divs = document.querySelectorAll('div');
// document.querySelectorAll('div')[0];
// document.querySelector('div');
// console.log('divs:', divs);

/**
 * --------------------------------
 * DOM API
 * Creating Node
 * ----------------------------- */

// 요소 노드 생성
var new_div = document.createElement('div');
// 속성 노드 생성
var new_div_class = document.createAttribute('class');

// console.log('new_div:', new_div);
// console.log('new_div_class:', new_div_class);

// 생성된 속성 노드의 유형을 알아내려면?
new_div_class.nodeType; // 2 === document.ATTRIBUTE_NODE
// 생성된 속성 노드의 값을 설정하려면?
new_div_class.nodeValue = 'container'; // class="container"
// 결론은... 안 쓴다.

// 그렇다면? 어떤 방법을?
// getAttribute(), setAttribute()를 사용하면 된다.

// 텍스트 노드는 어떻게 생성할까?
var el      = document.createElement('span');         // 요소노드 생성
var attr    = document.createAttribute('title');      // 속성노드 생성
var content = document.createTextNode('goodday :-)'); // 텍스트노드 생성

console.log('el:', el);
console.log('attr:', attr);
console.log('content:', content);
console.log('%c------------------------------', 'color: #3d9a21');
console.log('el.nodeType:', el.nodeType);
console.log('attr.nodeType:', attr.nodeType);
console.log('content.nodeType:', content.nodeType);

// 삽입(Insertion Inside)
// <parentNode>.appendChild(<childNode>)
// el, attr, content
// 텍스트노드를 요소노드의 마지막 자식으로 추가
el.appendChild(content); // <span>goodday :-)</span>

// 속성노드를 요소노드의 속성으로 설정하는 방법은?
// attr // title=""
attr.nodeValue = 'this is span element.'; // title="this is span element."
el.setAttributeNode(attr); // <span title="this is span element.">goodday :-)</span>

console.log('완성 조립된 el:', el);



// async.js 파일 로드
// <script src="../js/async.js"></script>
var head = document.head;
var async_js = document.createElement('script');
async_js.setAttribute('src', '../js/async.js');
console.log('async_js:', async_js);

// <link rel="stylesheet" href="../css/a.css">
// <link rel="stylesheet" href="../css/b.css">
var css_a_file = document.createElement('link');
var css_b_file = document.createElement('link');

css_a_file.setAttribute('rel', 'stylesheet');
css_b_file.setAttribute('rel', 'stylesheet');
css_a_file.setAttribute('href', '../css/a.css');
css_b_file.setAttribute('href', '../css/b.css');

head.appendChild(css_a_file);
head.appendChild(css_b_file);
// <head> 내부 안쪽 마지막 자식으로 async_js 코드를 추가(삽입)
head.appendChild(async_js);

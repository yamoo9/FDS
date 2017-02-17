/*! node-info.js © yamoo9.net, 2017 */

/*
 * Node Information
 * ------------------------
 * .id
 * .className
 * .title
 * .nodeName  <-> .tagName
 * .nodeType
 * .nodeValue <-> .data
 */

var body = document.body;

// body.style.margin = 0;

// var first_element = body.firstElementChild; // IE 9+
var first_element = body.children[0]; // IE 8- 호환

// console.log('body 요소노드의 첫번째 자식 요소노드의 id 속성 값:', first_element.id);

var container_in_doc      = document.getElementsByClassName('container');
var container_in_first_el = first_element.getElementsByClassName('container');

// console.log('container_in_doc:', container_in_doc);
// console.log('container_in_first_el:', container_in_first_el);

var container = container_in_doc[0];

// console.log('container 첫번째 요소노드의 title 속성 값:', container.title);
// console.log('container 첫번째 요소노드의 class 속성 값:', container.className);

// <a> 요소의 속성 값에 접근
var h1_link = container.getElementsByTagName('a').item(0);
// console.log('h1 요소노드의 자식노드인 a 요소노드:', h1_link);
var h1_link_title, h1_link_target, h1_link_href;

h1_link_title  = h1_link.title;
h1_link_target = h1_link.target;
h1_link_href   = h1_link.href;

// console.log('h1_link_title:', h1_link_title);
// console.log('h1_link_target:', h1_link_target);
// console.log('h1_link_href:', h1_link_href);

// h1_link 요소노드 찾아놓은 상태
// h1_link 요소노드의 부모노드를 찾으려면?
var h1 = h1_link.parentNode;
// h1 요소노드의 data-heading-level 속성 값을 가져오려면?
// data-heading-level 속성은 웹의 초창기에 없던 속성이기에 XML DOM API 방식을 사용해야 한다.
h1.getAttribute('data-heading-level');

// 노드의 이름은?
console.log('h1 변수에 참조된 요소노드 객체의 노드 이름(대문자)은?: ', h1.nodeName);
console.log('h1 변수에 참조된 요소노드 객체의 태그 이름(대문자)은?: ', h1.tagName);
console.log('h1 변수에 참조된 요소노드 객체의 로컬 이름(소문자)은?: ', h1.localName);

// 문자 유형의 데이터를 소문자로 변경하려면?
h1.nodeName.toLowerCase();

console.log('h1.nodeType:', h1.nodeType);   // 1
console.log('h1.nodeValue:', h1.nodeValue); // null

// h1 변수가 참조하는 객체의 자식 텍스트 노드에 접근하려면?
console.log('h1_link.firstChild:', h1_link.firstChild);
console.log('h1_link.firstChild.nodeValue:', h1_link.firstChild.nodeValue);

// 텍스트 노드와 텍스트 값?
// ※ 차이점을 이해하라!
console.log('h1_link.firstChild.nodeType:', h1_link.firstChild.nodeType);
console.log('h1_link.firstChild.nodeValue.nodeType:', h1_link.firstChild.nodeValue.nodeType);

// 요소노드가 자식 노드를 가졌는가 확인하려면?
var containers = document.getElementsByClassName('container');

containers[0].hasChildNodes(); // true
containers[1].hasChildNodes(); // false
containers[2].hasChildNodes(); // false

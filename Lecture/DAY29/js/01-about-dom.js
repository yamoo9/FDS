/*! about-dom.js © yamoo9.net, 2016 */

// DOM API
// [선택] 현재 선택한 대상 el
// - id 속성으로 대상(요소노드)을 선택 document.getElementById('id_name')
// - 요소노드의 이름으로 대상(요소노드)을 선택 .getElementsByTagName('tag_name')
// - class 속성으로 대상(요소노드)을 선택
// - 특정 속성으로 대상(요소노드)을 선택

// [탐색] 부모노드 el.parentNode
// [탐색] 첫번째자식노드 el.firstChild
// [탐색] 마지막자식노드 el.lastChild
// [탐색] 이전 형제 노드 el.previousSibling
// [탐색] 다음 형제 노드 el.nextSibling
// [탐색] 자식 노드들 el.childNodes

var parent_el = document.getElementById('parent');
var parent_el_child_nodes = parent_el.childNodes;
// parent_el 변수에 참조된 객체의 자식 노드들을 수집
// console.log(parent_el_child_nodes);
// console.log('수집된 parent_el의 자식 노드의 개수:', parent_el_child_nodes.length);

// 콘솔 패널 화면에 각 수집된 parent_el_child_nodes의 노드 유형을 출력해보세요.
// console.log( 0, parent_el_child_nodes.item(0).nodeType );
// console.log( 1, parent_el_child_nodes[1].nodeType );
// console.log( 2, parent_el_child_nodes.item(2).nodeType );
// console.log( 3, parent_el_child_nodes.item(3).nodeType );
// console.log( 4, parent_el_child_nodes.item(4).nodeType );
// console.log( 5, parent_el_child_nodes.item(5).nodeType );
// console.log( 6, parent_el_child_nodes.item(6).nodeType );
// console.log( 7, parent_el_child_nodes.item(7).nodeType );
// console.log( 8, parent_el_child_nodes.item(8).nodeType );

// 미리보는 자바스크립트의 반복 구문
// while, do ~ while, [for], for ~ in, for ~ of , forEach
// 미리보는 자바스크립트의 조건 구문
// if ~ else if ~ else, switch case defaut break, 3항식
for ( var i=0; i<9; i=i+1 ) {
  // console.log('i:', i);
  // parent_el_child_nodes.item(i).nodeType 이 반환하는 값?

  // 1: ELEMENT_NODE
  if ( parent_el_child_nodes[i].nodeType === 1 ) {
    // console.log( '%c current node is ELEMENT_NODE.', 'background: #222; color: #bada55' );
    // console.log( 'current node is ELEMENT_NODE.' );
    parent_el_first_child_el = parent_el_child_nodes[i];
    break;
  }
  // 3: TEXT_NODE
  else {
    // console.log( '%c current node is TEXT_NODE.', 'background: #222; color: #fc414b' );
    // console.log( 'current node is TEXT_NODE.' );
  }
}

/**
 * -------------------------------------------------------------
 * #parent .child:first-child 요소의 자식노드들 순환하여 노드 유형 로그하기
 * ------------------------------------------------------------- */
var parent_el_first_child_el;

// console.log(parent_el_first_child_el);

// var test_list     = parent_el_first_child_el.childNodes;
var test_list     = parent_el_first_child_el.children;
var test_list_len = test_list.length;

for ( var node_type, k=0; k<test_list_len; k=k+1 ) {
  node_type = test_list[k].nodeType;
  if (node_type === 1) {
    // console.log('%c current node is ELEMENT_NODE.', 'font-weight: 900');
  }
  if (node_type === 3) {
    // console.log('current node is TEXT_NODE.');
  }
  if (node_type === 8) {
    // console.log('current node is COMMENT_NODE.');
  }
}


// ------------------------------------------
// 노드(Node)의 유형/이름/값을 출력하는 방법
// ------------------------------------------
// 1. nodeType
//    ELEMENT_NODE = 1
//    TEXT_NODE    = 3
//    COMMENT_NODE = 8
// 2. nodeName
//    ELEMENT_NODE의 경우는 요소 이름을 대문자로 반환
//    TEXT_NODE의 경우는 '#text' 반환
// 3. nodeValue
//    TEXT_NODE의 경우만 접근이 가능
//    ELEMENT_NODE의 경우는 null 반환

/**
 * --------------------------------
 * DOM API | IE 9+
 * Traversal Properties
 * .firstChild      -> .firstElementChild
 * .lastChild       -> .lastElementChild
 * .previousSibling -> .previousElementSibling
 * .nextSibling     -> .nextElementSibling
 * .parentNode      -> .parentElement
 * ----------------------------- */

// -----------------------------
// NODE Information
// -----------------------------
// HTML DOM 방식의 속성 접근 방법
// 웹의 초창기 때부터 존재하던 속성들
// id, className, title, ...
// console.log('parent_el 요소노드의 id 속성:', parent_el.id);           // 'parent'
// console.log('parent_el 요소노드의 class 속성:', parent_el.className); // ''
// console.log('parent_el 요소노드의 title 속성:', parent_el.title);     // ''

// 새롭게 등장한 속성들
// data-*, aria-*, role, ...

// console.log('parent_el.role: ', parent_el.role);
// console.log('parent_el.role: ', parent_el.getAttribute('role'));
// console.log('parent_el.data-container: ', parent_el.data-container);
// console.log('parent_el.data-container: ', parent_el['data-container']);
// console.log('parent_el.data-container: ', parent_el.getAttribute('data-container'));
// console.log('parent_el.aria-hidden: ', parent_el.aria-hidden);
// console.log('parent_el.aria-hidden: ', parent_el['aria-hidden']);
// console.log('parent_el.aria-hidden: ', parent_el.getAttribute('aria-hidden'));


/**
 * ----------------------------------------------------------------------------
 * #parent 내부의 요소 중 자식이 없는 요소를 모두 콘솔에 기록하라.
 * ※ 주의! hasChildNodes()는 빈 공백 또한 자식노드로 읽기 때문에 공백이 없을 때만 사용 가능하다.
 * ---------------------------------------------------------------------------- */

var parent            = document.getElementById('parent');
var parent_childs     = parent.getElementsByTagName('div');
var parent_childs_len = parent_childs.length;

for(var i=0; i<parent_childs_len; i=i+1) {
  var child = parent_childs[i];
  if ( !child.hasChildNodes() ) {
    // console.log(child);
  }
}

/**
 * --------------------------------
 * 클래스 속성 값으로 문서 객체 대상 선택하기
 * IE 9+ 지원
 * ----------------------------- */
// document.links; // HTMLCollection
var childs = document.getElementsByClassName('child'); // NodeList
// console.log(childs, childs.length);

var container = document.getElementsByClassName('container');
// console.log(container, container.length);

/**
 * --------------------------------
 * CSS 선택자를 통해 문서 객체를 선택하는 방법
 * IE 8+ 지원
 * .querySelector('#id .class');
 * .querySelectorAll('#id .class');
 * .querySelector() === .querySelectorAll()[0]
 * ----------------------------- */

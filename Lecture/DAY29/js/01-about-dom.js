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
  }
  // 3: TEXT_NODE
  else {
    // console.log( '%c current node is TEXT_NODE.', 'background: #222; color: #fc414b' );
    // console.log( 'current node is TEXT_NODE.' );
  }
}
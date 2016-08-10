/*! DOMHelper.js © yamoo9.net, 2016 */

/**
 * prependChild(부모노드, 자식노드)
 * 부모노드의 첫번째 자식노드로 삽입한다.
 * ---------------------------------------------
 * @작성자    yamoo9
 * @버전     0.0.1
 * @param  {ELEMENT_NODE}  parent_node 부모노드
 * @param  {ELEMENT_NODE}  child_node  자식노드
 * @return {undefined}
 */
function prependChild(parent_node, child_node) {
  parent_node.insertBefore(child_node, parent_node.firstChild);
}

/**
 * insertAfter(목표노드, 삽입노드)
 * 목표노드 뒤에 삽입노드를 추가한다.
 * ---------------------------------------------
 * @작성자    yamoo9
 * @버전     0.0.1
 * @param  {ELEMENT_NODE}  target_node  목표노드
 * @param  {ELEMENT_NODE}  insert_node  삽입노드
 * @return {undefined}
 */
function insertAfter(target_node, insert_node) {
  var next_node = target_node.nextSibling;
  var parent_node = target_node.parentNode;
  if ( next_node ) { parent_node.insertBefore(insert_node, next_node); }
  else { parent_node.appendChild(insert_node); }
}

// .querySelectorAll() 메소드를 단축하여 사용할 수 있는 헬퍼 함수
function queryAll(selector_str, context) {
  // 사용자가 올바른 데이터를 전달하였는가? 검증
  if ( typeof selector_str !== 'string') {
    // 조건이 참이 되면 오류 발생
    throw new Error('첫번째 전달인자는 문자 유형이어야 합니다.');
  }
  // context 인자 값을 사용자가 전달하였는가?
  // 사용자가 context 값을 전달하지 않았을 경우는 undefined 이다.
  // if (typeof context === 'undefined') {
  if (!context) { context = document; }
  return context.querySelectorAll(selector_str);
}

function query(selector, parent) {
  return queryAll(selector, parent)[0];
}

// function $q(selector, hook, context) {
//   var method;
//   if ( hook === 1 ) {
//     method = 'query';
//   } else {
//     method = 'queryAll';
//   }
//   return window[method](selector, context);
// }

// 문서 객체(노드)를 제거하는 헬퍼 함수
function removeNode(node) {
  node.parentNode.removeChild(node);
}

// createElement(), createTextNode()
// 2가지 일을 동시에 수행하는 헬퍼 함수
// "요소노드를 생성한 다음 내부에 텍스트노드를 자식 노드로 삽입"
function createNode(el_name, text) {
  var el_node = document.createElement(el_name);
  var text_node = document.createTextNode(text);
  el_node.appendChild(text_node);
  return el_node;
}
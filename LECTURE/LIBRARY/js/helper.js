/*! helper.js © yamoo9.net, 2017 */

/**
 *  querySelector 헬퍼 함수
 *  @param    {String}      selector_str
 *  @return   {HTMLElement} 문서 요소노드 반환
 */
function query(selector_str) {
  return document.querySelector(selector_str);
}
/**
 *  querySelectorAll 헬퍼 함수
 *  @param    {String}   selector_str
 *  @return   {Nodelist} 문서 요소노드 집합 반환
 */
function queryAll(selector_str) {
  return document.querySelectorAll(selector_str);
}

/**
 *  부모 노드 내부에 마지막 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement}  parent_node 부모노드
 *  @param    {HTMLElement}  child_node  자식노드
 */
function appendChild(parent_node, child_node) {
  parent_node.appendChild(child_node);
  return child_node;
}
/**
 *  부모 노드 내부에 첫번째 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement}  parent_node 부모노드
 *  @param    {HTMLElement}  child_node  자식노드
 */
function prependChild(parent_node, child_node) {
  var first = parent_node.children[0];
  parent_node.insertBefore(child_node, first);
  return child_node;
}

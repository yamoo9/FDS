/*! helper.js © yamoo9.net, 2017 */

/**
 *  querySelector 헬퍼 함수
 *  @param    {String}      selector_str  CSS 선택자
 *  @param    {HTMLElement} context       컨텍스트(부모) 요소노드
 *  @return   {HTMLElement}               문서 요소노드 반환
 */
function query(selector_str, context) {
  var parent = null;
  if ( context !== undefined ) {
    parent = context;
  } else {
    parent = document;
  }
  return parent.querySelector(selector_str);
}
/**
 *  querySelectorAll 헬퍼 함수
 *  @param    {String}      selector_str  CSS 선택자
 *  @param    {HTMLElement} context       컨텍스트(부모) 요소노드
 *  @return   {Nodelist}                  문서 요소노드 집합 반환
 */
function queryAll(selector_str, context) {
  var parent = null;
  if ( context !== undefined ) {
    parent = context;
  } else {
    parent = document;
  }
  return parent.querySelectorAll(selector_str);
}

/**
 *  부모 노드 내부에 마지막 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement}  parent_node 부모노드
 *  @param    {HTMLElement}  child_node  자식노드
 *  @return   {HTMLElement}              자식노드
 */
function append(parent_node, child_node) {
  parent_node.appendChild(child_node);
  return child_node;
}
/**
 *  부모 노드 내부에 첫번째 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement}  parent_node 부모노드
 *  @param    {HTMLElement}  child_node  자식노드
 *  @return   {HTMLElement}              자식노드
 */
function prepend(parent_node, child_node) {
  var first = parent_node.children[0];
  parent_node.insertBefore(child_node, first);
  return child_node;
}

/**
 *  insertNode를 targetNode 앞에 삽입하는 헬퍼 함수 (형제로서 삽입)
 *  @param    {HTMLElement}  insert_node 삽입 요소 노드
 *  @param    {HTMLElement}  target_node 목표 요소 노드
 *  @return   {HTMLElement}              삽입 요소 노드를 반환
 */
function before(insert_node, target_node) {
  target_node.parentNode.insertBefore(insert_node, target_node);
  return insert_node;
}
/**
 *  insertNode를 targetNode 뒤에 삽입하는 헬퍼 함수 (형제로서 삽입)
 *  @param    {HTMLElement}  target_node 목표 요소 노드
 *  @param    {HTMLElement}  insert_node 삽입 요소 노드
 *  @return   {HTMLElement}              삽입 요소 노드를 반환
 */
function after(target_node, insert_node) {
  var next = target_node.nextElementSibling;
  // 조건 1. target_node 뒤에 형제 노드가 없다면?
  if ( next === null ) {
    append(target_node.parentNode, insert_node);
  }
  // 조건 2. target_node 뒤에 형제 노드가 있다면?
  else {
    before(insert_node, next);
  }
  return insert_node;
}
/**
 *  전달된 요소노드를 부모노드로부터 제거하는 헬퍼 함수
 *  @param    {HTMLElement}  element_node 제거할 요소노드
 *  @return   {HTMLElement}               제거된 요소노드 반환
 */
function remove(element_node) {
  element_node.parentNode.removeChild(element_node);
  return element_node;
}
/**
 *  새로운 노드로 이전 노드를 대체하는 헬퍼 함수
 *  @param    {HTMLElement}  replace_node   대체할 노드
 *  @param    {HTMLElement}  replaced_node  대체될 노드
 *  @return   {HTMLElement}                 대체될 노드 반환
 */
function replace(replace_node, replaced_node) {
  replaced_node.parentNode.replaceChild(replace_node, replaced_node);
  return replaced_node;
}
/**
 *  노드 A와 노드 B의 위치를 교체하는 헬퍼 함수
 *  @param    {HTMLElement}  replace_node   대체할 노드
 *  @param    {HTMLElement}  replaced_node  대체될 노드
 */
function change(replace_node, replaced_node) {
  var sibling = replace_node.nextElementSibling;
  var parent  = replace_node.parentNode;

  replace(replace_node, replaced_node);

  if ( sibling !== null ) {
    // 형제
    // before(삽입, 목표)
    before(replaced_node, sibling);
  } else {
    // 부모
    // append(부모, 자식)
    append(parent, replaced_node);
  }
}

/**
 *  노드를 가볍게 또는 깊게(자손, 인라인 스크립트 이벤트 까지) 복제하는 헬퍼 함수
 *  @param    {HTMLElement}  node   복사할 노드
 *  @param    {Boolean}      deep   깊은 복사 설정
 *  @return   {HTMLElement}         복제된 노드 반환
 */
function clone(node, deep) {
  if ( deep === undefined ) {
    deep = false;
  }
  return node.cloneNode(deep);
}

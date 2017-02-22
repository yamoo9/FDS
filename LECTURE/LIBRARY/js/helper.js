/*! helper.js © yamoo9.net, 2017 */

/**
 *  요소 노드를 생성하는 헬퍼 함수
 *  @param   {String}  el_name   생성하고자 하는 노드 이름
 *  @return  {HTMLElement}       생성된 요소 노드 반환
 */
function createElement(el_name) {
  return document.createElement(el_name);
}
/**
 *  텍스트 노드를 생성하는 헬퍼 함수
 *  @param   {String}  content   생성하고자 텍스트 콘텐츠
 *  @return  {TextNode}          생성된 텍스트 노드
 */
function createText(content) {
  return document.createTextNode(content);
}

/**
 *  요소노드를 생성(콘텐츠[HTML 유형 가능] 포함)하거나, 특정 부모노드에 자식노드로 삽입하는 헬퍼 함수
 *  @param   {String}        el_name  생성할 노드 이름
 *  @param   {String}        html_str 생성된 노드 내부에 삽입될 HTML 코드
 *  @param   {HTMLElement}   context  생성된 노드의 부모 요소노드
 *  @param   {String}        method   삽입될 위치 [append, prepend]
 *  @return  {HTMLElement}   생성된 요소노드 반환
 */
function makeEl(el_name, html_str, context, method) {
  // 초기 값 설정
  method  = method || 'append';
  // 전달인자로 요소 노드와 HTML Code 생성
  var el = createElement(el_name);
  el.innerHTML = html_str;
  // 만약 context 가 존재한다면?
  if ( context ) {
    if ( method === 'append' ) {
      context.insertAdjacentElement('beforeend', el);
    } else {
      context.insertAdjacentElement('afterbegin', el);
    }
  }
  // 생성된 요소노드 반환
  return el;
}

/**
 *  querySelector 헬퍼 함수
 *  @param    {String}      selector_str  CSS 선택자
 *  @param    {HTMLElement} context       컨텍스트(부모) 요소노드
 *  @return   {HTMLElement}               문서 요소노드 반환
 */
function query(selector_str, context) {
  return (context || document).querySelector(selector_str);
}
/**
 *  querySelectorAll 헬퍼 함수
 *  @param    {String}      selector_str  CSS 선택자
 *  @param    {HTMLElement} context       컨텍스트(부모) 요소노드
 *  @return   {Nodelist}                  문서 요소노드 집합 반환
 */
function queryAll(selector_str, context) {
  return (context || document).querySelectorAll(selector_str);
}

/**
 *  부모 노드 내부에 마지막 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement|Selector}  parent 부모노드 또는 선택자(문자열)
 *  @param    {HTMLElement|Selector}  child  자식노드 또는 선택자(문자열)
 *  @return   {HTMLElement}                  자식노드
 */
function append(parent, child) {
  if ( parent.nodeType !== 1 ) {
    parent = query(parent);
  }
  if ( child.nodeType !== 1 ) {
    child = query(child);
  }
  // return parent.appendChild(child);
  return parent.insertAdjacentElement('beforeend', child);
}
/**
 *  부모 노드 내부에 첫번째 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement|Selector}  parent 부모노드 또는 선택자(문자열)
 *  @param    {HTMLElement|Selector}  child  자식노드 또는 선택자(문자열)
 *  @return   {HTMLElement}           자식노드
 */
function prepend(parent, child) {
  if ( parent.nodeType !== 1 ) {
    parent = query(parent);
  }
  if ( child.nodeType !== 1 ) {
    child = query(child);
  }
  // parent.insertBefore(child, parent.children[0]);
  // return child;
  return parent.insertAdjacentElement('afterbegin', child);
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

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

function queryAll(selector, context) {
  // 유효성 검사
  // 문자 데이터인지 확인
  if ( typeof selector !== 'string' ) { throw new Error('전달인자는 문자열만 가능합니다.'); }
  // if ( typeof selector !== 'string' ) { console.error('전달인자는 문자열만 가능합니다.'); }
  // console.info('오류 발생 후 코드가 실행되는가?');
  if ( !context ) { context = document; }
  return context.querySelectorAll(selector);
}

function query(selector, context) {
  return queryAll(selector, context)[0];
}
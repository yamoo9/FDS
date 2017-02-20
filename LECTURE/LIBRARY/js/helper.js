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

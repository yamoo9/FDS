// 문서에서 id, class 같은 선택자로 문서 객체를 찾아오는데 도움을 주는 함수

/**
 *  querySelector 헬퍼 함수
 *  @author   yamoo9
 *  @version  1.0.0
 *  @param    {String}  selector_str
 *  @return   {ElementNode}  문서 요소노드 반환
 */
function query(selector_str) {
  return document.querySelector(selector_str);
}
/**
 *  querySelectorAll 헬퍼 함수
 *  @author   yamoo9
 *  @version  1.0.0
 *  @param    {String}  selector_str
 *  @return   {Nodelist}  문서 요소노드 집합 반환
 */
function queryAll(selector_str) {
  return document.querySelectorAll(selector_str);
}

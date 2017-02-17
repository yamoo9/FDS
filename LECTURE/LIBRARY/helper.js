// 문서에서 id, class 같은 선택자로 문서 객체를 찾아오는데 도움을 주는 함수

/**
 *  querySelector 헬퍼 함수
 *  @author   yamoo9
 *  @version  1.0.0
 *  @param    {Strong}  selector_str
 *  @return   {ElementMNode}  문서 요소노드 반환
 */
function q(selector_str) {
  return document.querySelector(selector_str);
}
function qa(selector_str) {
  return document.querySelectorAll(selector_str);
}

/*! js-utils.js © yamoo9.net, 2016 */

/**
 * --------------------------------
 * 언어 차원에서 지원되지 않는 사용자 정의 함수
 * isType() 유틸리티 헬퍼 함수
 * 객체가 아닌 유형도 검증이 가능
 * ----------------------------- */

/**
 *  @function isType        데이터 유형을 정확하게 감지하는 함수
 *  @param    {everything}  data
 *  @return   {string}      데이터 유형을 문자열로 반환
 */
function isType(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}

function isExist(node) {
  return isType(node) !== 'null';
}
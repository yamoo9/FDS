/*! js-utils.js © yamoo9.net, 2016 */

/**
 * --------------------------------
 * 언어 차원에서 지원되지 않는 사용자 정의 함수
 * isType() 유틸리티 헬퍼 함수
 * 객체가 아닌 유형도 검증이 가능
 * ----------------------------- */

/** @function isType */
function isType(data) {
  // return 키워드는 함수 내에서 처리된 결과 값을 반환한다.
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}
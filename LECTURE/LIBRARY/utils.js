/*! utils.js @ 2017, yamoo9.net */


/**
 * JavaScript 데이터 유형을 완벽하게 문자열로 반환하는 유틸리티 함수
 *
 * @param {any} data - JavaScript 모든 데이터 유형
 * @returns {String} - 소문자로 데이터 유형 이름을 문자열로 반환
 */
function type(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}


/*! utils.js @ 2017, yamoo9.net */

/**
 * JavaScript 데이터 유형을 완벽하게 문자열로 반환하는 유틸리티 함수
 *
 * @param   {any} data - JavaScript 모든 데이터 유형
 * @returns {string}   - 소문자로 데이터 유형 이름을 문자열로 반환
 */
function type(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

/**
 * JavaScript 데이터 유형을 검증하여 참/거짓을 반환하는 유틸리티 함수
 *
 * @param   {any}     data - JavaScript 모든 데이터 유형
 * @param   {string}  kind - 데이터 유형 이름(소문자)
 * @returns {boolean}      - 데이터 일치 검증 결과를 참/거짓으로 반환
 */
function isType(data, kind) {
  validateError(kind, '!string', '2번째 전달인자는 문자열이어야 합니다');
  return type(data) === kind;
}

/**
 * 전달된 데이터, 데이터 유형을 검증하여 조건이 참일 경우, 오류를 발생시키는 유틸리티 함수
 *
 * @param   {any}    data          - JavaScript 모든 데이터
 * @param   {string} kind          - 오류 검증을 위한 문자열 데이터
 * @param   {string} error_message - 오류 메시지
 * @returns {string}               - 유효한 경우 출력되는 메시지
 */
function validateError(data, kind, error_message) {
  var is_invalid = kind.indexOf('!') > -1;
  data = type(data);
  if (is_invalid) {
    if (data !== kind.slice(1)) { throw error_message || '두 값이 다르기에 오류입니다.'; }
  } else {
    if (data === kind) { throw error_message || '두 값은 동일하기에 오류입니다.'; }
  }
  return '오류는 발생하지 않았습니다';
}
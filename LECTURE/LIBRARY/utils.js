/*! utils.js @ 2017, yamoo9.net */

/**
 * JSDOC @Ref: http://usejsdoc.org/
 * @규칙에 대해 참고한 후, 추가
 * @global, @func, @param, @return, ...
 */

/**
 * JavaScript 데이터 유형을 완벽하게 문자열로 반환하는 유틸리티 함수
 *
 * @global
 * @func    type
 * @param   {any} data - JavaScript 모든 데이터 유형
 * @returns {string}   - 소문자로 데이터 유형 이름을 문자열로 반환
 */
function type(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

/**
 * JavaScript 데이터 유형을 검증하여 참/거짓을 반환하는 유틸리티 함수
 *
 * @global
 * @func    isType
 * @param   {any}     data - JavaScript 모든 데이터 유형
 * @param   {string}  kind - 데이터 유형 이름(소문자)
 * @returns {boolean}      - 데이터 일치 검증 결과를 참/거짓으로 반환
 */
function isType(data, kind) {
  // validateError()를 사용하여 오류 조건을 발생시킴:
  // kind 데이터 유형이 'string'이 아니면(!), 오류를 발생시킨다. (설정 메시지 출력)
  validateError(kind, '!string', '2번째 전달인자는 문자열이어야 합니다');
  return type(data) === kind;
}

/**
 * 오류 조건을 발생시키는 문장을 만들어 내는 유틸리티 함수
 *
 * @global
 * @func    validateError
 * @param   {any}    data          - JavaScript 모든 데이터
 * @param   {string} kind          - 오류 검증을 위한 문자열 e.g) 'string', '!string'
 * @param   {string} error_message - 출력할 오류 메시지(옵션)
 * @returns {string}               - 유효한 경우 출력되는 메시지
 */
function validateError(data, kind, error_message) {
  data = type(data);
  if ( kind.indexOf('!') === 0 ) {
    if ( data !== kind.slice(1) ) { throw error_message || '두 값이 다르기에 오류입니다.'; }
  } else {
    if ( data === kind ) { throw error_message || '두 값은 동일하기에 오류입니다.'; }
  }
  return '오류는 발생하지 않았습니다';
}

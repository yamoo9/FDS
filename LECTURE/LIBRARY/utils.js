/*! utils.js @ 2017, yamoo9.net */

// JSDOC @Ref: http://usejsdoc.org/
// @규칙에 대해 참고한 후, 추가
// @global, @func, @param, @return, ...

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

/**
 * 전달된 숫자보다 하나 작은 수까지의 난수를 반환하는 유틸리티 함수
 *
 * @global
 * @func    randomNumber
 * @param   {number} n - 난수의 최댓값보다 하나 더 큰 값
 * @default {number}   - 2
 * @returns {number}   - 난수
 */
function randomNumber(n) {
  n = n || 2; // 0, 1
  validateError(n, '!number', '숫자 값을 전달해주세요.');
  return Math.floor( Math.random() * n );
}

/**
 * 전달된 최솟값, 최댓값 사이의 난수를 반환하는 유틸리티 함수
 *
 * @global
 * @func    randomMinMax
 * @param   {number} min - 최솟값
 * @param   {number} max - 최댓값
 * @returns {number}     - 난수
 */
function randomMinMax(min, max) {
  validateError(min, '!number', '첫번째 인자 최솟값을 전달해주세요.');
  validateError(max, '!number', '두번째 인자 최댓값를 전달해주세요.');
  max = max - min;
  return Math.round( Math.random() * max ) + min;
}

/**
 * 전달된 인자에서 최솟값, 최댓값을 구분한 후, 그 사이의 난수를 반환하는 유틸리티 함수
 *
 * @global
 * @func    randomRange
 * @param   {number} n1 - 수(최댓 혹은 최솟값)
 * @param   {number} n2 - 수(최댓 혹은 최솟값)
 * @returns {number}     - 난수
 */
function randomRange(n1, n2) {
  var min, max;
  min = Math.min(n1, n2);
  max = Math.max(n1, n2);
  return randomMinMax(min, max);
}
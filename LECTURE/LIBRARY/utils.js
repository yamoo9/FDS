/*! utils.js @ 2017, yamoo9.net */


/**
 * JavaScript 데이터 유형을 완벽하게 문자열로 반환하는 유틸리티 함수
 *
 * @param {any} data - JavaScript 모든 데이터 유형
 * @returns {string} - 소문자로 데이터 유형 이름을 문자열로 반환
 */
function type(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

/**
 * JavaScript 데이터 유형을 검증하여 참/거짓을 반환하는 유틸리티 함수
 *
 * @param {any}     data - JavaScript 모든 데이터 유형
 * @param {string}  kind - 데이터 유형 이름(소문자)
 * @returns {boolean}    - 데이터 일치 검증 결과를 참/거짓으로 반환
 */
function isType(data, kind) {

  // 데이터 검증 (유효성 검사: validate)
  // 조건 문: if ~ else
  // kind 매개변수(전달된 인자)의 유형이 문자열이 아니면... 조건이 참
  // if (type(kind) !== 'string') {
    // throw 'kind 전달 인자는 문자열이 전달되어야 합니다';
  // }

  // ⬇︎ --------------------------------------------------------------

  // 위 코드 구문을 아래처럼 인라인 코드로 사용할 수 있도록 함수를 정의해보세요.

  // kind 유형이 string이면 유효한 값이다.
  valid(kind, 'string');

  // kind 유형이 string이 아니면 유효하지 않은 값이다.
  invalid(kind, 'string', 'kind 전달 인자는 문자열이 전달되어야 합니다');






  // 유효성 검사를 통과하면 아래 코드를 실행
  return type(data) === kind;
}
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
  //   throw 'kind 전달 인자는 문자열이 전달되어야 합니다';
  // }

  // ⬇︎ --------------------------------------------------------------

  // 위 코드 구문을 아래처럼 인라인 코드로 사용할 수 있도록 함수를 정의해보세요.

  // 유효성 검사가 요구됨.
  // 검사를 통과하지 못하면 오류를 발생하여 코드를 중지
  // 콘솔에 오류 메시지를 출력하여 사용자에게 정보를 제공.
  // invalid(kind, 'string');
  validate(kind, '!string', '2번째 전달인자는 문자열이어야 합니다');

  // 유효성 검사를 통과하면 아래 코드를 실행
  return type(data) === kind;
}

// valid(kind, 'string', 'kind 전달 인자가 문자열이어서는 안됩니다');
// 인자 1(필수) : 모든 데이터
// 인자 2(필수) : 데이터 유형 문자열(소문자)
// 인자 3(선택) : 콘솔에 출력할 오류 메시지
// 오류 조건: type(kind) === 'string' 비교 값이 참일 경우

// kind 유형 값이 string 이면 오류 메시지 출력
// 오류 조건: type(kind) === 'string' 비교 값이 참일 경우
// valid(kind, 'string', 'kind 전달 인자가 문자열이어서는 안됩니다');
// validate(kind, 'string');
function valid(data, kind, error_message) {
  if ( type(data) === kind ) {
    // throw error_message;
    throw error_message || '두 값은 동일하기에 오류입니다.';
  }
  return '오류는 발생하지 않았습니다';
}

// kind 유형 값이 string 이 아니면, 오류 메시지 출력
// 오류 조건: type(kind) !== 'string' 비교 값이 참일 경우
// invalid(kind, 'string', 'kind 전달 인자는 문자열이 전달되어야 합니다');
// validate(kind, '!string', 'kind 전달 인자는 문자열이 전달되어야 합니다');
function invalid(data, kind, error_message) {
  if ( type(data) !== kind ) {
    throw error_message || '두 값이 다르기에 오류입니다.';
  }
  return '오류는 발생하지 않았습니다';
}

// validate() 함수 정의
// 인자 1(필수) : 모든 데이터
// 인자 2(필수) : 데이터 유형 문자열(소문자)
// 인자 3(선택) : 콘솔에 출력할 오류 메시지
function validate(data, kind, error_message) {
  if ( kind.indexOf('!') > -1 ) {
    invalid(data, kind.slice(1), error_message);
  } else {
    valid(data, kind, error_message);
  }
}
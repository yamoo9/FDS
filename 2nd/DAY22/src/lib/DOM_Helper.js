/*! DOM_Helper.js © yamoo9.net, 2016 */

// 모듈 패턴(Module Pattern)
// 클라이언트 사이트 환경에서 사용하는 방법
this.DOM_Helper = (function(){

  // 라이브러리 정보
  var name    = 'DOM_Helper Library';
  var version = '0.0.1';

  // 자바스크립트 네이티브 객체/메소드 참조
  var toString = Object.prototype.toString;

  // 유틸리티 ---------------------------------------------------------------------------------
  // 모든 자바스크립트의 자료 유형 검증 함수
  // 비공개 (Private Member)
  function _isDataType(data) {
    return toString.call(data).slice(8,-1).toLowerCase();
  }
  // 공개 (Public Members)
  function isNumber(data) {
    return _isDataType(data) === 'number';
  }
  function isString(data) {
    return _isDataType(data) === 'string';
  }
  function isBoolean(data) {
    return _isDataType(data) === 'boolean';
  }
  function isFunction(data) {
    return _isDataType(data) === 'function';
  }
  function isArray(data) {
    return _isDataType(data) === 'array';
  }
  function isObject(data) {
    return _isDataType(data) === 'object';
  }
  //문서 유형을 체크하는 유틸리 함수

  // 선택 ---------------------------------------------------------------------------------
  // document.getElementById()
  // id(id_name)
  function id(id_name) {
    // 문자열 검증
    // if () {}
    return document.getElementById(id_name);
  }

  // 탐색 ---------------------------------------------------------------------------------

  // 삽입 ---------------------------------------------------------------------------------

  // 제거 ---------------------------------------------------------------------------------

  // 대체 ---------------------------------------------------------------------------------

  // 복사 ---------------------------------------------------------------------------------



  // 외부로 내보내지는 모듈
  return  {
    'name': name,
    'version': version,
    // 유틸리티 (네임스페이스 패턴)
    'isNumber': isNumber,
    'isString': isString,
    'isBoolean': isBoolean,
    'isFunction': isFunction,
    'isArray': isArray,
    'isObject': isObject,
  };

})(this);
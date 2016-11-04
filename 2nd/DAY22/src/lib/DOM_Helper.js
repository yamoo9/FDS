/*! DOM_Helper.js © yamoo9.net, 2016 */

// 모듈 패턴(Module Pattern)
// 클라이언트 사이트 환경에서 사용하는 방법
this.DOM_Helper = (function(global){
  'use strict';

  // 라이브러리 정보
  var name    = 'DOM_Helper Library';
  var version = '0.0.1';

  // 자바스크립트 네이티브 객체/메소드 참조
  var document = global.document;
  var toString = Object.prototype.toString;

  // 유틸리티 -------------------------------------------------------------------------------
  // 모든 자바스크립트의 자료 유형 검증 함수
  // 비공개 (Private Member)
  function _isDataType(data) { return toString.call(data).slice(8,-1).toLowerCase(); }
  // 공개 (Public Members)
  function isNumber(data)   { return _isDataType(data) === 'number';   }
  function isString(data)   { return _isDataType(data) === 'string';   }
  function isBoolean(data)  { return _isDataType(data) === 'boolean';  }
  function isFunction(data) { return _isDataType(data) === 'function'; }
  function isArray(data)    { return _isDataType(data) === 'array';    }
  function isObject(data)   { return _isDataType(data) === 'object';   }

  //문서 유형을 체크하는 유틸리 함수
  function isElementNode(node)  { return node && node.nodeType === document.ELEMENT_NODE;  }
  function isTextNode(node)     { return node && node.nodeType === document.TEXT_NODE;     }
  function isNodeList(nodelist) { return nodelist && _isDataType(nodelist) === 'nodelist'; }

  // 전달인자가 올바른지 유무를 파악하여 올바르지 않을 경우 코드 중지와 함께 오류메시지 출력하는 함수
  function validate(condition, error_message) { if ( condition ) { throw new Error(error_message); } }

  // 선택 ---------------------------------------------------------------------------------
  function id(id_name) {
    validate( !isString(id_name), '전달인자는 문자열이어야 합니다.' );
    return document.getElementById(id_name);
  }

  function tag(tag_name, context) {
    validate( !isString(tag_name), '전달인자는 문자열이어야 합니다.' );
    validate( (context !== document) && (context && !isElementNode(context) ), '두번째 전달인자는 요소노드여야 합니다.' );
    return ( context || document ).getElementsByTagName(tag_name);
  }

  var classes;
  if ( document.getElementsByClassName ) {
    classes = function (class_name, context) {
      validate( !isString(class_name), '전달인자는 문자열이어야 합니다.' );
      validate( context && !isElementNode(context), '두번째 전달인자는 요소노드여야 합니다.' );
      return (context || document).getElementsByClassName(class_name);
    };
  } else {
    classes = function (class_name, context) {
      validate( !isString(class_name), '전달인자는 문자열이어야 합니다.' );
      validate( context && !isElementNode(context), '두번째 전달인자는 요소노드여야 합니다.' );
      context = context || document;
      var el, filtered_els = [], all_els = tag( '*', context );
      var class_reg = new RegExp('(^|\\s)+' + class_name + '(\\s+|$)');
      for( var i=0, l=all_els.length; i<l; i++ ) {
        el = all_els[i];
        if ( class_reg.test(el.className) ) { filtered_els.push(el); }
      }
      return filtered_els;
    };
  }

  function queryAll(selector, context) {
    validate( !isString(selector), '전달인자는 문자열이어야 합니다.' );
    validate( context && !isElementNode(context), '두번째 전달인자는 요소노드여야 합니다.' );
    return ( context || document ).querySelectorAll(selector);
  }

  // function query(selector, context) { return queryAll(selector, context)[0]; }
  function query(selector, context) {
    validate( !isString(selector), '전달인자는 문자열이어야 합니다.' );
    validate( context && !isElementNode(context), '두번째 전달인자는 요소노드여야합니다.' );
    return ( context || document ).querySelector(selector);
  }


  // 탐색 ---------------------------------------------------------------------------------
  // parentNode
  // parentEl( $.query('a') )
  // parentEl( $.query('a') , 2)
  function parent(el_node, count) {
    validate(!isElementNode(el_node), '전달인자는 요소노드여야 합니다.');
    count = count || 1;
    do { el_node = el_node.parentNode; }
    while( el_node && --count );
    return el_node;
  }

  var next;
  // nextElementSibling
  if ( 'nextElementSibling' in Element.prototype) {
    next = function (el_node) {
      validate(!isElementNode(el_node), '전달인자는 요소노드여야 합니다.');
      return el_node.nextElementSibling;
    };
  }
  // nextSibling
  else {
    next = function (el_node) {
      validate(!isElementNode(el_node), '전달인자는 요소노드여야 합니다.');
      do { el_node = el_node.nextSibling; }
      while ( el_node && !isElementNode(el_node) );
      return el_node;
    };
  }

  var prev;
  // previousElementSibling
  if ( 'previousElementSibling' in Element.prototype) {
    prev = function (el_node) {
      validate(!isElementNode(el_node), '전달인자는 요소노드여야 합니다.');
      return el_node.previousElementSibling;
    };
  }
  // previousSibling
  else {
    prev = function (el_node) {
      validate(!isElementNode(el_node), '전달인자는 요소노드여야 합니다.');
      do { el_node = el_node.previousSibling; }
      while ( el_node && !isElementNode(el_node) );
      return el_node;
    };
  }

  var first;
  // firstElementChild
  if ( 'firstElementChild' in Element.prototype ) {
    first = function (el_node) {
      validate(!isElementNode(el_node), '전달인자는 요소노드여야 합니다.');
      return el_node.firstElementChild;
    };
  }
  // firstChild
  else {
    first = function (el_node) {
      validate(!isElementNode(el_node), '전달인자는 요소노드여야 합니다.');
      return next( el_node.firstChild );
    };
  }

  var last;
  // lastElementChild
  if ( 'lastElementChild' in Element.prototype ) {
    last = function (el_node) {
      validate(!isElementNode(el_node), '전달인자는 요소노드여야 합니다.');
      return el_node.lastElementChild;
    };
  }
  // lastChild
  else {
    last = function (el_node) {
      validate(!isElementNode(el_node), '전달인자는 요소노드여야 합니다.');
      return next( el_node.lastChild );
    };
  }

  // 삽입 ---------------------------------------------------------------------------------

  // 함수형 프로그래밍 (절차 지향)
  function prependChild(parent_node, child_node) {
    var first_child = parent_node.firstChild;
    parent_node.insertBefore(child_node, first_child);
  }

  // 객체 지향 (극히 위험!!!!!!!!!!!!!!!)
  Node.prototype.prependChild = function(child_node) {
    this.insertBefore(child_node, this.firstChild);
  };

  // 아래는 아주 바람직한 객체 지향
  function Hayoon() {}

  Hayoon.prototype.prependChild = function(child_node) {
    this.insertBefore(child_node, this.firstChild);
  };

  // 제거 ---------------------------------------------------------------------------------

  // 대체 ---------------------------------------------------------------------------------

  // 복사 ---------------------------------------------------------------------------------



  // 외부로 내보내지는 모듈
  return  {

    // 라이브러리 정보
    'name'          : name,
    'version'       : version,

    // 유틸리티 (네임스페이스 패턴)
    'isNumber'      : isNumber,
    'isString'      : isString,
    'isBoolean'     : isBoolean,
    'isFunction'    : isFunction,
    'isArray'       : isArray,
    'isObject'      : isObject,
    'isElementNode' : isElementNode,
    'isTextNode'    : isTextNode,
    'isNodeList'    : isNodeList,

    // 문서객체 선택
    'id'            : id,
    'tag'           : tag,
    'classes'       : classes,
    'queryAll'      : queryAll,
    'query'         : query,

    // 문서객체 탐색
    'parent'        : parent,
    'next'          : next,
    'prev'          : prev,
    'first'         : first,
    'last'          : last,
  };

})(this);
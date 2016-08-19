/*! DOMHelper.js © yamoo9.net, 2016 */

// ECMAScript 2015 Syntax
// var cleanWhiteSpace = ( el=document ) => {
// ECMAScript 3rd Edition
function cleanWhilteSpace(el) {
    el = el || document;
    var current_node = el.firstChild;
    while( current_node ) {
      if ( current_node.nodeType === 3 && !/\S/.test(current_node.nodeValue) ) {
          removeNode(current_node);
      } else if ( current_node.nodeType === 1 ) {
          cleanWhiteSpace(current_node);
      }
      current_node = current_node.nextSibling;
    }
};


// 자바스크립트의 모든 데이터 유형을 올바르게 감지할 수 있는 헬퍼 함수
function isType(data) {
   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

// 데이터 간 동등한지 유무 파악 헬퍼 함수
function equal(data1, data2) {
   return data1 == data2;
}

// 데이터 간 완전하게 동등한지 유무 파악 헬퍼 함수
function strictEqual(data1, data2) {
   return data1 === data2;
}

function throwError(type1, type2, err_msg) {
  err_msg = err_msg || '기본 오류 메시지';
  if ( isType(type1) !== type2 ) { throw new Error(err_msg); }
}

function validDate(data, type) {
  throwError(type, 'string'); // 오류 발생 시 멈추고 화면에 오류 메시지 출력
  return strictEqual( isType(data), type );
}

/**
 * prependChild(부모노드, 자식노드)
 * 부모노드의 첫번째 자식노드로 삽입한다.
 * ---------------------------------------------
 * @작성자    yamoo9
 * @버전     0.0.1
 * @param  {ELEMENT_NODE}  parent_node 부모노드
 * @param  {ELEMENT_NODE}  child_node  자식노드
 * @return {undefined}
 */
function prependChild(parent_node, child_node) {
  parent_node.insertBefore(child_node, parent_node.firstChild);
}

/**
 * insertAfter(목표노드, 삽입노드)
 * 목표노드 뒤에 삽입노드를 추가한다.
 * ---------------------------------------------
 * @작성자    yamoo9
 * @버전     0.0.1
 * @param  {ELEMENT_NODE}  target_node  목표노드
 * @param  {ELEMENT_NODE}  insert_node  삽입노드
 * @return {undefined}
 */
function insertAfter(target_node, insert_node) {
  var next_node = target_node.nextSibling;
  var parent_node = target_node.parentNode;
  if ( next_node ) { parent_node.insertBefore(insert_node, next_node); }
  else { parent_node.appendChild(insert_node); }
}

// .querySelectorAll() 메소드를 단축하여 사용할 수 있는 헬퍼 함수
function queryAll(selector_str, context) {
  // 사용자가 올바른 데이터를 전달하였는가? 검증
  if ( typeof selector_str !== 'string') {
    // 조건이 참이 되면 오류 발생
    throw new Error('첫번째 전달인자는 문자 유형이어야 합니다.');
  }
  // context 인자 값을 사용자가 전달하였는가?
  // 사용자가 context 값을 전달하지 않았을 경우는 undefined 이다.
  // if (typeof context === 'undefined') {
  if (!context) { context = document; }
  return context.querySelectorAll(selector_str);
}

function query(selector, parent) {
  return queryAll(selector, parent)[0];
}

// function $q(selector, hook, context) {
//   var method;
//   if ( hook === 1 ) {
//     method = 'query';
//   } else {
//     method = 'queryAll';
//   }
//   return window[method](selector, context);
// }

// 문서 객체(노드)를 제거하는 헬퍼 함수
function removeNode(node) {
  node.parentNode.removeChild(node);
}

// createElement(), createTextNode()
// 2가지 일을 동시에 수행하는 헬퍼 함수
// "요소노드를 생성한 다음 내부에 텍스트노드를 자식 노드로 삽입"
function createNode(el_name, text) {
  var el_node = document.createElement(el_name);
  if ( typeof text !== 'undefined' && typeof text === 'string' ) {
    var text_node = document.createTextNode(text);
    el_node.appendChild(text_node);
  }
  return el_node;
}


// ------------------------------------------------
// 웹 브라우저에서 계산된 CSS 스타일 값 가져오는 방법
// ------------------------------------------------
// 비 표준 MS IE 방식 (IE 8-)
// 대상.currentStyle.스타일속성
// ------------------------------------------------
// 표준 W3C 방식 (IE 9+)
// window.getComputedStyle(대상,가상요소).스타일속성
// ------------------------------------------------
function getStyle(el, property, pseudo) {
  var value, el_style;
  // 유효성 검사
  if ( el.nodeType !== 1 ) {
    console.error('첫번째 인자 el은 요소노드여야 합니다.');
  }
  if ( typeof property !== 'string' ) {
    console.error('두번째 인자 property는 문자열이야 합니다.');
  }
  if ( pseudo && typeof pseudo !== 'string' ) {
    console.error('세번째 인자 pseudo는 문자열이야 합니다.');
  }

  // CSS 속성 이름이 카멜케이스화
  property = camelCase(property);

  if ( window.getComputedStyle ) {
    el_style = window.getComputedStyle(el,pseudo);
    if (pseudo && el_style.content === '') {
      return null;
    }
    value = el_style[property];
  } else {
    value = el.currentStyle[property];
  }
  return value;
}

function setStyle(elNode, property, value) {
  if ( isntElNode(elNode) ) {
    errorMsg('요소노드가 전달되어야 합니다.');
  }
  if (isType(property) !== 'string') {
    errorMsg('두번째 전달인자는 문자열이어야 합니다.');
  }
  elNode.style[property] = value;
}

function css(elNode, prop, value) {
  if ( !value ) {
    return getStyle(elNode, prop);
  } else {
    setStyle(elNode, prop, value);
  }
}

// ------------------------------------------------
// 전달된 텍스트를 카멜케이스화하여 반환하는 헬퍼 함수
function camelCase(text) {
   return text.replace(/(\s|-|_)./g, function($1){
      return $1.replace(/(\s|-|_)/g,'').toUpperCase();
   });
}

// ------------------------------------------------
// 오류 메시지를 출력하는 헬퍼 함수
function errorMsg(message) {
  if ( isType(message) !== 'string' ) {
    // 함수 자신을 다시 호출: 재귀함수
    errorMsg('오류 메시지는 문자 데이터 유형이어야 합니다.');
  }
  throw new Error(message);
}

// ------------------------------------------------
// 요소노드인지 아닌지를 체크하여 참/거짓을 반환하는 헬퍼함수
function isElNode(node) {
  return node.nodeType === 1;
}
function isntElNode(node) {
  return !isElNode(node);
  // return node.nodeType !== 1;
}

// ------------------------------------------------
// 요소노드의 이름이 동일한지, 아닌지 체크하는 헬퍼 함수
function isElName(node, name) {
  if ( isntElNode(node) ) { errorMsg('첫번째 인자로 요소노드가 전달되어야 합니다.') }
  if ( isType(name) !== 'string' ) { errorMsg('두번째 인자로 텍스트 데이터 유형이 전달되어야 합니다.') }
  return (node.localName || node.nodeName.toLowerCase()) === name;
}
function isntElName(node, name) {
  return !isElName(node, name);
}

// ------------------------------------------------
// 텍스트노드의 유형인지, 아닌지 체크하는 함수
function isTextNode(node) {
  return node.nodeType === 3;
}
function isntTextNode(node) {
  // return !isTextNode(node);
  return node.nodeType !== 3;
}

// ------------------------------------------------
// 이전 형제요소 노드를 찾는 헬퍼 함수
function prevEl(node) {
  // 검증: 유효성 검사
  if ( isntElNode(node) ) {
    errorMsg('전달된 인자는 요소노드여야 합니다.');
  }
  // 구형 IE 9+, 신형 웹 브라우저
  if ( node.previousElementSibling ) {
    return node.previousElementSibling;
  }
  // 구형 IE 6-8
  else {
    do { node = node.previousSibling; }
    while(node && !isElNode(node) );
    return node;
  }
}

// ------------------------------------------------
// 다음 형제요소 노드를 찾는 헬퍼 함수
function nextEl(node) {
  // 검증: 유효성 검사
  // if ( isntElNode(node) ) {
  //   errorMsg('전달된 인자는 요소노드여야 합니다.');
  // }
  // 구형 IE 9+, 신형 웹 브라우저
  if ( node.nextElementSibling ) {
    return node.nextElementSibling;
  }
  // 구형 IE 6-8
  else {
    do { node = node.nextSibling; }
    while(node && !isElNode(node) );
    return node;
  }
}

// ------------------------------------------------
// 첫번째 자식요소 노드를 찾는 헬퍼 함수
function firstEl(node) {
  if ( isntElNode(node) ) { errorMsg('요소노드를 전달해야 합니다.'); }
  if ( node.firstElementChild ) {
    return node.firstElementChild;
  } else {
    node = node.firstChild;
    return ( node && isntElNode(node) ) ? nextEl(node) : node;
  }
}
// 마지막 자식요소 노드를 찾는 헬퍼 함수
function lastEl(node) {
  if ( isntElNode(node) ) { errorMsg('요소노드를 전달해야 합니다.'); }
  if ( node.lastElementChild ) {
    return node.lastElementChild;
  } else {
    node = node.lastChild;
    return ( node && isntElNode(node) ) ? prevEl(node) : node;
  }
}
// 목적에 도달하는 쉬운 헬퍼 함수
function _firstEl(node) {
  return node.children[0];
}
function _lastEl(node) {
  var children = node.children;
  return children[children.length - 1];
}

// ------------------------------------------------
// 단위 제거/가져오기/소유하고 있는지 확인
function getUnit(value){
  var i=0,l=getUnit.units.length,unit;
  var reg;
  for ( ; i<l; i++ ) {
    unit = getUnit.units[i];
    if ( value.indexOf(unit) > -1 ) {
      // break;
      return unit;
    }
  }
  return null;
}
getUnit.units = 'px rem em % vw vh vmin vmax'.split(' ');

// JavaSCript 함수는 객체이다.
// 객체는 속성을 가진다.
function removeUnit(value) {
  removeUnit.unit = getUnit(value);
  return parseFloat(value, 10);
}
removeUnit.unit = null;

function hasUnit(value) {
  return !!getUnit(value);
}

// 함수를 작성하는 이유
// 재사용할 것 같은 코드들....
// 매번 짜는 것은 비 효율적이다 보니
// 능률적으로 코드를 처리하기 위해 코드 묶음을
// 재사용/확장할 수 있도록 처리.
// 유사 배열을 배열화
function makeArray(data) {
  // 전달된 객체는 배열 또는 유사 배열인가?
  var check_data = isType(data), result_arr = [], len = data.length;
  // 실제 배열
  if (check_data === 'array') {
    return data;
  }
  // 유사 배열
  if ( len && check_data !== 'string' ) {
    while( len-- ) {
      result_arr.push( data[len] );
    }
  }
  return result_arr.reverse();
}

// function convertArray( data ){
//     if ( Array.from ) {
//         return Array.from( data );
//     } else {
//         return Array.prototype.slice.call(data);
//     }
// }

// 1. 정식으로 클로저를 사용하는 방법으로 문제 해결 방법
function convertArray_wrapper() {
  // 내부에서 클로저 함수를 반환
  var closureFn;
  if ( Array.from ) {
    // Array.from이 지원되는가?
    closureFn = function(data) {
      return Array.from(data);
    };
  } else {
    // 지원되지 않는가?
    closureFn = function(data) {
      return Array.prototype.slice.call(data);
    }
  }
  return closureFn;
}

var convertArray = convertArray_wrapper();

// 2. 약식(IIFE 패턴)을 사용하여 클로저 처리하는 문제 해결 방법
var convertArray = (function(){
  if (Array.from) {
    return function(data) {
      return Array.from(data);
    }
  } else {
    return function(data) {
      return Array.prototype.slice.call(data);
    }
  }


})();
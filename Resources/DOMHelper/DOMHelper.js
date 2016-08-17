/*! DOMHelper.js © yamoo9.net, 2016 */

// 클라이언트 환경
// 프론트엔드 개발 환경
// 모던 자바스크립트 모듈 패턴
(function(global){
  'use strict';

  function cleanWhilteSpace(el) {
    el = el || document;
    var current_node = el.firstChild;
    while (current_node) {
      if (current_node.nodeType === 3 && !/\S/.test(current_node.nodeValue)) {
        removeNode(current_node);
      } else if (current_node.nodeType === 1) {
        cleanWhiteSpace(current_node);
      }
      current_node = current_node.nextSibling;
    }
  };


  function isType(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
  }

  function equal(data1, data2) {
    return data1 == data2;
  }

  function strictEqual(data1, data2) {
    return data1 === data2;
  }

  function throwError(type1, type2, err_msg) {
    err_msg = err_msg || '기본 오류 메시지';
    if (isType(type1) !== type2) {
      throw new Error(err_msg); }
  }

  function validDate(data, type) {
    return strictEqual(isType(data), type);
  }

  function prependChild(parent_node, child_node) {
    parent_node.insertBefore(child_node, parent_node.firstChild);
  }

  function insertAfter(target_node, insert_node) {
    var next_node = target_node.nextSibling;
    var parent_node = target_node.parentNode;
    if (next_node) { parent_node.insertBefore(insert_node, next_node); } else { parent_node.appendChild(insert_node); }
  }

  function queryAll(selector_str, context) {
    if (typeof selector_str !== 'string') {
      throw new Error('첫번째 전달인자는 문자 유형이어야 합니다.');
    }
    if (!context) { context = document; }
    return context.querySelectorAll(selector_str);
  }

  function query(selector, parent) {
    return queryAll(selector, parent)[0];
  }


  function removeNode(node) {
    node.parentNode.removeChild(node);
  }

  function createNode(el_name, text) {
    var el_node = document.createElement(el_name);
    if (typeof text !== 'undefined' && typeof text === 'string') {
      var text_node = document.createTextNode(text);
      el_node.appendChild(text_node);
    }
    return el_node;
  }


  function getStyle(el, property, pseudo) {
    var value, el_style;
    if (el.nodeType !== 1) {
      console.error('첫번째 인자 el은 요소노드여야 합니다.');
    }
    if (typeof property !== 'string') {
      console.error('두번째 인자 property는 문자열이야 합니다.');
    }
    if (pseudo && typeof pseudo !== 'string') {
      console.error('세번째 인자 pseudo는 문자열이야 합니다.');
    }

    property = camelCase(property);

    if (window.getComputedStyle) {
      el_style = window.getComputedStyle(el, pseudo);
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

  function camelCase(text) {
    return text.replace(/(\s|-|_)./g, function($1) {
      return $1.replace(/(\s|-|_)/g, '').toUpperCase();
    });
  }

  function errorMsg(message) {
    if (isType(message) !== 'string') {
      errorMsg('오류 메시지는 문자 데이터 유형이어야 합니다.');
    }
    throw new Error(message);
  }

  function isElNode(node) {
    return node.nodeType === 1;
  }

  function isntElNode(node) {
    return !isElNode(node);
  }

  function isElName(node, name) {
    if (isntElNode(node)) { errorMsg('첫번째 인자로 요소노드가 전달되어야 합니다.') }
    if (isType(name) !== 'string') { errorMsg('두번째 인자로 텍스트 데이터 유형이 전달되어야 합니다.') }
    return (node.localName || node.nodeName.toLowerCase()) === name;
  }

  function isntElName(node, name) {
    return !isElName(node, name);
  }

  function isTextNode(node) {
    return node.nodeType === 3;
  }

  function isntTextNode(node) {
    return node.nodeType !== 3;
  }

  function prevEl(node) {
    if (isntElNode(node)) {
      errorMsg('전달된 인자는 요소노드여야 합니다.');
    }
    if (node.previousElementSibling) {
      return node.previousElementSibling;
    }
    else {
      do { node = node.previousSibling; }
      while (node && !isElNode(node));
      return node;
    }
  }

  function nextEl(node) {
    if (node.nextElementSibling) {
      return node.nextElementSibling;
    }
    else {
      do { node = node.nextSibling; }
      while (node && !isElNode(node));
      return node;
    }
  }

  function firstEl(node) {
    if (isntElNode(node)) { errorMsg('요소노드를 전달해야 합니다.'); }
    if (node.firstElementChild) {
      return node.firstElementChild;
    } else {
      node = node.firstChild;
      return (node && isntElNode(node)) ? nextEl(node) : node;
    }
  }
  function lastEl(node) {
    if (isntElNode(node)) { errorMsg('요소노드를 전달해야 합니다.'); }
    if (node.lastElementChild) {
      return node.lastElementChild;
    } else {
      node = node.lastChild;
      return (node && isntElNode(node)) ? prevEl(node) : node;
    }
  }
  function _firstEl(node) {
    return node.children[0];
  }

  function _lastEl(node) {
    var children = node.children;
    return children[children.length - 1];
  }

  function getUnit(value) {
    var i = 0,
      l = getUnit.units.length,
      unit;
    var reg;
    for (; i < l; i++) {
      unit = getUnit.units[i];
      if (value.indexOf(unit) > -1) {
        return unit;
      }
    }
    return null;
  }
  getUnit.units = 'px rem em % vw vh vmin vmax'.split(' ');

  function removeUnit(value) {
    removeUnit.unit = getUnit(value);
    return parseFloat(value, 10);
  }
  removeUnit.unit = null;

  function hasUnit(value) {
    return !!getUnit(value);
  }

  // 외부에 공개하는 API
  // 함수를 개별 반환 (위험....)
  // global.type = isType;
  // global.getCSS = getStyle;

  // 네임스페이스 패턴
  // 네임스페이스 객체를 생성하여 외부에 공개한다.
  global.yamoo9 = {
    'type':     isType,
    'isElName': isElName,
    'isElNode': isElNode,
    'css':      css,
  };

})(this); // this === window object
/*! helper.js © yamoo9.net, 2017 */

/**
 *  JavaScript 데이터 유형을 정확히 체크해주는 헬퍼 함수
 *  @param  {everything}  data JavaScript 데이터 유형
 *  @return {String}           체크된 데이터 유형을 문자열로 반환
 */
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}
/**
 *  JavaScript 숫자 데이터 유형인지 감지하는 헬퍼 함수
 *  @param  {everything}  data JavaScript 데이터 유형
 *  @return {Boolean}          체크된 데이터 유형이 숫자 유형인지 참/거짓 반환
 */
function isNumber(data) {
  return checkType(data) === 'number';
}
/**
 *  JavaScript 문자 데이터 유형인지 감지하는 헬퍼 함수
 *  @param  {everything}  data JavaScript 데이터 유형
 *  @return {Boolean}          체크된 데이터 유형이 문자 유형인지 참/거짓 반환
 */
function isString(data) {
  return checkType(data) === 'string';
}
/**
 *  JavaScript 불리언 데이터 유형인지 감지하는 헬퍼 함수
 *  @param  {everything}  data JavaScript 데이터 유형
 *  @return {Boolean}          체크된 데이터 유형이 불리언 유형인지 참/거짓 반환
 */
function isBoolean(data) {
  return checkType(data) === 'boolean';
}
/**
 *  JavaScript 함수 데이터 유형인지 감지하는 헬퍼 함수
 *  @param  {everything}  data JavaScript 데이터 유형
 *  @return {Boolean}          체크된 데이터 유형이 함수 유형인지 참/거짓 반환
 */
function isFunction(data) {
  return checkType(data) === 'function';
}
/**
 *  JavaScript 배열 데이터 유형인지 감지하는 헬퍼 함수
 *  @param  {everything}  data JavaScript 데이터 유형
 *  @return {Boolean}          체크된 데이터 유형이 배열 유형인지 참/거짓 반환
 */
function isArray(data) {
  return checkType(data) === 'array';
}
/**
 *  JavaScript 객체 데이터 유형인지 감지하는 헬퍼 함수
 *  @param  {everything}  data JavaScript 데이터 유형
 *  @return {Boolean}          체크된 데이터 유형이 객체 유형인지 참/거짓 반환
 */
function isObject(data) {
  return checkType(data) === 'object';
}
/**
 *  요소노드 데이터 유형인지 감지하는 헬퍼 함수
 *  @param  {Node}    node  노드 유형
 *  @return {Boolean}       체크된 데이터 유형이 요소노드 유형인지 참/거짓 반환
 */
function isElementNode(node) {
  return node && node.nodeType === 1;
}


// ----------------------------------------------------

/**
 *  요소 노드를 생성하는 헬퍼 함수
 *  @param   {String}  el_name   생성하고자 하는 노드 이름
 *  @return  {HTMLElement}       생성된 요소 노드 반환
 */
function createElement(el_name) {
  return document.createElement(el_name);
}
/**
 *  텍스트 노드를 생성하는 헬퍼 함수
 *  @param   {String}  content   생성하고자 텍스트 콘텐츠
 *  @return  {TextNode}          생성된 텍스트 노드
 */
function createText(content) {
  return document.createTextNode(content);
}
/**
 *  요소노드를 생성(콘텐츠[HTML 유형 가능] 포함)하거나, 특정 부모노드에 자식노드로 삽입하는 헬퍼 함수
 *  @param   {String}        el_name  생성할 노드 이름
 *  @param   {String}        html_str 생성된 노드 내부에 삽입될 HTML 코드
 *  @param   {HTMLElement}   target   생성된 노드의 부모 요소노드
 *  @param   {String}        method   삽입될 위치 [append, prepend, before, after]
 *  @return  {HTMLElement}   생성된 요소노드 반환
 */
function makeEl(el_name, html_str, target, method, callback) {
  // 초기 값 설정
  // method  = method || 'append';
  // 전달인자로 요소 노드와 HTML Code 생성
  var el = createElement(el_name);

  // 3항식
  // 변수 = 조건 ? 참인 경우 값 : 거짓인 경우 값;
  el.innerHTML = (!html_str || !isString(html_str)) ? '' : html_str;
  // if ( !html_str || !isString(html_str) ) {
  //   el.innerHTML = '';
  // } else {
  //   el.innerHTML = html_str;
  // }
  // 만약 target 가 존재한다면?
  if ( target && isElementNode(target) && target.parentNode ) {
    // switch ~ case 구문 사용
    switch( method ) {
      default:
      case 'append':
        target.insertAdjacentElement('beforeend', el);
      break;
      case 'prepend':
        target.insertAdjacentElement('afterbegin', el);
      break;
      case 'before':
        target.insertAdjacentElement('beforebegin', el);
      break;
      case 'after':
        target.insertAdjacentElement('afterend', el);
      break;
    }

    // ------------------------------------------------
    // if ( method === 'append' ) {
    //   target.insertAdjacentElement('beforeend', el);
    // } else {
    //   target.insertAdjacentElement('afterbegin', el);
    // }
  }
  // callback 이 존재하고, callback 매개변수에 전달된 데이터 유형이 함수라면?
  // callback 실행하라.
  if ( callback && typeof callback === 'function' ) {
    callback();
  }
  // 생성된 요소노드 반환
  return el;
}
/**
 *  querySelector 헬퍼 함수
 *  @param    {String}      selector_str  CSS 선택자
 *  @param    {HTMLElement} context       컨텍스트(부모) 요소노드
 *  @return   {HTMLElement}               문서 요소노드 반환
 */
function query(selector_str, context) {
  return (context || document).querySelector(selector_str);
}
/**
 *  querySelectorAll 헬퍼 함수
 *  @param    {String}      selector_str  CSS 선택자
 *  @param    {HTMLElement} context       컨텍스트(부모) 요소노드
 *  @return   {Nodelist}                  문서 요소노드 집합 반환
 */
function queryAll(selector_str, context) {
  return (context || document).querySelectorAll(selector_str);
}
/**
 *  부모 노드 내부에 마지막 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement|Selector}  parent 부모노드 또는 선택자(문자열)
 *  @param    {HTMLElement|Selector}  child  자식노드 또는 선택자(문자열)
 *  @return   {HTMLElement}                  자식노드
 */
function append(parent, child) {
  if ( parent.nodeType !== 1 ) {
    parent = query(parent);
  }
  if ( child.nodeType !== 1 ) {
    child = query(child);
  }
  // return parent.appendChild(child);
  return parent.insertAdjacentElement('beforeend', child);
}
/**
 *  부모 노드 내부에 첫번째 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement|Selector}  parent 부모노드 또는 선택자(문자열)
 *  @param    {HTMLElement|Selector}  child  자식노드 또는 선택자(문자열)
 *  @return   {HTMLElement}           자식노드
 */
function prepend(parent, child) {
  if ( parent.nodeType !== 1 ) {
    parent = query(parent);
  }
  if ( child.nodeType !== 1 ) {
    child = query(child);
  }
  // parent.insertBefore(child, parent.children[0]);
  // return child;
  return parent.insertAdjacentElement('afterbegin', child);
}
/**
 *  insertNode를 targetNode 앞에 삽입하는 헬퍼 함수 (형제로서 삽입)
 *  @param    {HTMLElement}  insert_node 삽입 요소 노드
 *  @param    {HTMLElement}  target_node 목표 요소 노드
 *  @return   {HTMLElement}              삽입 요소 노드를 반환
 */
function before(insert_node, target_node) {
  target_node.parentNode.insertBefore(insert_node, target_node);
  return insert_node;
}
/**
 *  insertNode를 targetNode 뒤에 삽입하는 헬퍼 함수 (형제로서 삽입)
 *  @param    {HTMLElement}  target_node 목표 요소 노드
 *  @param    {HTMLElement}  insert_node 삽입 요소 노드
 *  @return   {HTMLElement}              삽입 요소 노드를 반환
 */
function after(target_node, insert_node) {
  var next = target_node.nextElementSibling;
  // 조건 1. target_node 뒤에 형제 노드가 없다면?
  if ( next === null ) {
    append(target_node.parentNode, insert_node);
  }
  // 조건 2. target_node 뒤에 형제 노드가 있다면?
  else {
    before(insert_node, next);
  }
  return insert_node;
}
/**
 *  전달된 요소노드를 부모노드로부터 제거하는 헬퍼 함수
 *  @param    {HTMLElement}  element_node 제거할 요소노드
 *  @return   {HTMLElement}               제거된 요소노드 반환
 */
function remove(element_node) {
  element_node.parentNode.removeChild(element_node);
  return element_node;
}
/**
 *  새로운 노드로 이전 노드를 대체하는 헬퍼 함수
 *  @param    {HTMLElement}  replace_node   대체할 노드
 *  @param    {HTMLElement}  replaced_node  대체될 노드
 *  @return   {HTMLElement}                 대체될 노드 반환
 */
function replace(replace_node, replaced_node) {
  replaced_node.parentNode.replaceChild(replace_node, replaced_node);
  return replaced_node;
}
/**
 *  노드 A와 노드 B의 위치를 교체하는 헬퍼 함수
 *  @param    {HTMLElement}  replace_node   대체할 노드
 *  @param    {HTMLElement}  replaced_node  대체될 노드
 */
function change(replace_node, replaced_node) {
  var sibling = replace_node.nextElementSibling;
  var parent  = replace_node.parentNode;

  replace(replace_node, replaced_node);

  if ( sibling !== null ) {
    // 형제
    // before(삽입, 목표)
    before(replaced_node, sibling);
  } else {
    // 부모
    // append(부모, 자식)
    append(parent, replaced_node);
  }
}
/**
 *  노드를 가볍게 또는 깊게(자손, 인라인 스크립트 이벤트 까지) 복제하는 헬퍼 함수
 *  @param    {HTMLElement}  node   복사할 노드
 *  @param    {Boolean}      deep   깊은 복사 설정
 *  @return   {HTMLElement}         복제된 노드 반환
 */
function clone(node, deep) {
  if ( deep === undefined ) {
    deep = false;
  }
  return node.cloneNode(deep);
}

/**
 * 요소노드에 전달된 class 속성 이름 값이 일치하는 것이 있는지 유무 파악 헬퍼 함수
 * @param {HTMLElement} el_node    - class 속성 값을 포함하는지 확인하고자 하는 요소노드
 * @param {String}      class_name - 일치 유무를 파악하고자 하는 문자형 데이터
 * @returns {boolean}                일치 유무 파악 후 결과 반환
 */
function hasClass(el_node, class_name) {
  // el_node의 class 속성 값에 전달된 class_name 이 존재한다면? true 반환

  // el_node 요소노드에서 class 속성 값을 가져온다.
  var old_classes = el_node.getAttribute('class') || '';
  //if ( typeof old_classes !== 'string' ) {
  //  old_classes = '';
  //}
  // 가져온 속성 값을 .split()로 쪼개서 집합(배열)을 만든다.
  old_classes = old_classes.split(' ');
  // 반복문을 사용해서 class_name 값과 일치하는 원소(아이템)가 있는지 확인한다.
  for ( var i=0; i<old_classes.length; i++ ) {
    var class_item = old_classes[i];
    if ( class_item === class_name ) {
      // 만약 일치하는 원소가 있다면 true를 반환한다.
      return true;
    }
  }
  // 아니라면 false를 반환한다.
  return false;
}

/**
 *  요소노드에 class 속성을 추가하는 헬퍼 함수
 *  @param  {HTMLElement}  el_node    - class 속성을 추가할 HTML 요소노드
 *  @param  {String}       class_name - 적용할 class 속성 값 이름
 */
function addClass(el_node, class_name) {
  // 전달인자 검증(Arguments Validation)
  if ( el_node.nodeType !== 1 ) {
    // 문제가 발생하면, 오류 발생
    throw new Error('첫번째 전달 인자의 유형은 요소노드여야 합니다.');
  }
  if ( typeof class_name !== 'string' ) {
    throw new Error('두번째 전달 인자의 유형은 문자형 이어야 합니다.');
  }
  if ( !hasClass(el_node, class_name) ) {
    // HTML DOM 방식
    //el_node.className += ' ' + class_name;

    // Core DOM 방식
    var old_class = el_node.getAttribute('class') || '';
    el_node.setAttribute('class', old_class + ' ' + class_name);
  }
}

/**
 *  요소노드에 class 속성을 제거하는 헬퍼 함수
 *  @param  {HTMLElement}  el_node    - class 속성을 제거할 HTML 요소노드
 *  @param  {String}       class_name - 제거할 class 속성 값 이름
 */
function removeClass(el_node, class_name) {
  // [옵션] class_name 값을 사용자가 전달하지 않았을 경우
  if ( !class_name ) {
    //el_node.removeAttribute('class');
    el_node.setAttribute('class', '');
  }
  // 해당 클래스 속성 이름이 존재하면 제거
  if ( hasClass(el_node, class_name) ) {
    var old_classes = el_node.getAttribute('class').split(' ');
    for ( var i=0; i<old_classes.length; i++ ) {
      var class_item = old_classes[i];
      if ( class_item === class_name ) {
        old_classes.splice(i, 1);
      }
    }
    el_node.setAttribute('class', old_classes.join(' '));
  }
}

/**
 *  부모노드를 찾아 반환하는 헬퍼 함수 (옵션: 몇 번째 부모 설정)
 *  @param  {Node}    node        - 노드
 *  @param  {Number}  above_depth - 몇 단계 위인지 설정
 *  @return {Node}                - 부모 노드 반환
 */
function parent(node, above_depth) {
  // 초기 값 설정: 사용자가 전달하지 않아도 기본 값을 1로 설정
  above_depth = above_depth || 1;
  while ( above_depth-- ) {
    // node의 부모노드를 찾는다.
    node = node.parentNode;
  }
  return node;
}

// 첫번째 자식 요소노드를 반환하는 헬퍼 함수
function first(node) {
  // 전달인자 유효성 검사
  if ( !isElementNode(node) ) {
    throw new Error('사용된 함수는 요소노드를 전달해야 합니다.');
  }
  // 인자가 요구하는 조건을 통과하면
  return node.children[0];
}

// 마지막 자식 요소노드를 반환하는 헬퍼 함수
function last(node) {
  if ( !isElementNode(node) ) {
    throw new Error('사용된 함수는 요소노드를 전달해야 합니다.');
  }
  var childs = node.children;
  return childs[ childs.length - 1 ];
}

// 다음 형제 요소노드를 반환하는 헬퍼 함수
function next(el_node) {
  // 검증
  if ( !isElementNode(el_node) ) {
    throw new Error('사용된 함수는 요소노드를 전달해야 합니다.');
  }
  // el_node의 다음에 인접한 형제 노드는 요소노드인가? [반복]
  do {
    el_node = el_node.nextSibling;
  } while( el_node && !isElementNode(el_node) );
  // 반복하다가 요소노드가 나오면 반복을 중지하고, 요소노드를 반환
  return el_node;
}

// 이전 형제 요소노드를 반환하는 헬퍼 함수
function prev(el_node) {
  // 검증
  if ( !isElementNode(el_node) ) {
    throw new Error('사용된 함수는 요소노드를 전달해야 합니다.');
  }
  // el_node의 다음에 인접한 형제 노드는 요소노드인가? [반복]
  do {
    el_node = el_node.previousSibling;
  } while( el_node && !isElementNode(el_node) );
  // 반복하다가 요소노드가 나오면 반복을 중지하고, 요소노드를 반환
  return el_node;
}

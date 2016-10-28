/*! dom.js © yamoo9.net, 2016 */
(function(global){
  'use strict';

  /////////////
  // DOM API //
  /////////////

  // 문서 객체 모델
  // 도서 추천: "DOM을 깨우치다."

  // JavaScript 언어 공부
  // 언어 공부로 끝나면 안된다.

  // 결론! 우리의 목표 "돔스크립트: Native JavaScript"
  // 문서객체 모델 접근(선택), 탐색, 조작, 이벤트

  // jQuery 라이브러리로
  // 문서객체모델 조작, 탐색, 선택, 이벤트

  // AngularJS 프레임워크
  // v1, v2 [ECMA Script 2015, TypeScript]

  // --------------------------------------------------------------------------------

  // document {}를 참조
  var document = global.document;
  // 참조된 document {}를 통해 documentElement 객체를 참조
  var html     = document.documentElement;
  var head, body;
  head = document.head;
  body = document.body;

  // 문서에서 <p> 요소의 집합
  // HTML 문서에서 찾은 요소노드의 집합 => 유사 배열
  var p_elements = document.getElementsByTagName('p');
  var first_p    = p_elements.item(0);
  // console.log(p_elements[0]);
  // console.log(p_elements.item(0));

  var strong_element       = first_p.firstChild; // <strong> element node
  var last_text_in_first_p = first_p.lastChild; // text node

  // console.log('strong_element:', strong_element);
  // console.log('last_text_in_first_p:', last_text_in_first_p);

  strong_element.parentNode; // <p>
  last_text_in_first_p.parentNode; // <p>

  // console.log( strong_element.parentNode === last_text_in_first_p.parentNode ); // true

  // 부모 노드에서 자식을 찾을 때
  // .firstChild, .lastChild

  // 자식 노드에서 부모를 찾을 때
  // .parentNode

  // 형제 노드 사이 서로를 찾을 때
  // .nextSibling
  // .previousSibling

  // console.log( strong_element.nextSibling === last_text_in_first_p ); // true
  // console.log( last_text_in_first_p.previousSibling === strong_element ); // true

  var first  = document.querySelector('#dom-test-first');
  var second = document.querySelector('#dom-test-second');
  var last   = document.querySelector('#dom-test-last');

  var fitered_second = [];

  for ( var i=0, l=second.childNodes.length; i<l; i++ ) {
     var node = second.childNodes.item(i);
     var type = node.nodeType;
     if ( type === 1 || ( type === 3 && node.nodeValue.trim() !== '' ) ) {
         fitered_second.push(node);
     }
  }

  console.log(fitered_second);

})(this);

// document.ELEMENT_NODE   === 1;
// document.ATTRIBUTE_NODE === 2;
// document.TEXT_NODE      === 3;
// document.COMMENT_NODE   === 8;


function addTitle(node, content) {
  if ( typeof content !== 'string' ) { throw new Error('오류 발생!'); }
  if ( node.nodeType !== 1 ) { throw new Error('오류 발생!'); }
  // HTML DOM 방식
  node.title = content;
  // XML DOM 방식
  // node.setAttribute('title', content);
}

function addDataAttr(node, data, value) {
  if ( typeof data !== 'string' ) { throw new Error('오류 발생!'); }
  if ( node.nodeType !== 1 ) { throw new Error('오류 발생!'); }
  // HTML DOM 방식
  // node.title = content;
  // XML DOM 방식
  node.setAttribute('data-'+data, value);
}
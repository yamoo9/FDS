/*! dom-study.js © yamoo9.net, 2016 */

// IIFE 패턴을 사용하여 독립된 코드 공간을 생성
// 모듈 패턴
(function(global){
  'use strict';

  // 문서에서 제어할 객체를 각 변수에 참조합니다.
  // [ IE 8+ ] .querySelector(), .querySelectorAll()
  // #gnb, #print-area
  var doc        = global.document;
  var gnb        = doc.querySelector('#gnb'); // ElementNode
  var gnb_links  = gnb.querySelectorAll('a'); // NodeList
  var print_area = doc.querySelector('#print_area');
  var updatePrintMessage = function () {
    // ????
  }

  // NodeList <= Like Array Object
  console.log( 'gnb_links.length:', gnb_links.length );

  // length 속성이 있는 객체를 순환할 준비가 되었다.
  // 반복 구문 사용할 수 있다.
  for ( var i=0, l=gnb_links.length; i<l; i++ ) {
    var gnb_link = gnb_links[i];
    // gnb_link // NodeList ?, ElementNode ?
    // 문서객체 집합을 순환한 이유: 이벤트 핸들러(함수) 연결
    gnb_link.onclick = updatePrintMessage;
  }


})(this);

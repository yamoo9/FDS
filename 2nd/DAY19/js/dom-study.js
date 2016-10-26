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
  var print_area = doc.querySelector('#print-area');
  var i; // undefined
  var l;

  var wrapperUpdatePrintMessage = function(i) {
    var _updatePrintMessage = function () {
      // 함수 내부의 this 키워드는 함수를 실행한 주체를 가리킨다.
      // console.log(this);
      var message = this.getAttribute('data-print-message');
      // #print-area
      // console.log(print_area.firstChild.nodeValue);
      // GET
      // console.log(print_area.innerHTML);
      // SET
      print_area.innerHTML = message;
      console.log(i); // 5
      // 웹 브라우저의 기본 동작을 차단
      return false;
    };
    return _updatePrintMessage;
  }

  // NodeList <= Like Array Object
  console.log( 'gnb_links.length:', gnb_links.length );

  // length 속성이 있는 객체를 순환할 준비가 되었다.
  // 반복 구문 사용할 수 있다.
  i = 0;
  l = gnb_links.length;
  for ( ; i<l; i++ ) {
    var gnb_link = gnb_links[i]; // 0, 1, 2, 3, 4
    // gnb_link // NodeList ?, ElementNode ?
    // 문서객체 집합을 순환한 이유: 이벤트 핸들러(함수) 연결
    gnb_link.onclick = wrapperUpdatePrintMessage(i);
    // gnb_link.onclick = function () {
    //   // 함수 내부의 this 키워드는 함수를 실행한 주체를 가리킨다.
    //   // console.log(this);
    //   var message = this.getAttribute('data-print-message');
    //   // #print-area
    //   // console.log(print_area.firstChild.nodeValue);
    //   // GET
    //   // console.log(print_area.innerHTML);
    //   // SET
    //   print_area.innerHTML = message;
    //   console.log(i); // 5
    //   // 웹 브라우저의 기본 동작을 차단
    //   return false;
    // };
  }
  // i = 5
  // global.gnb_links = gnb_links;

})(this);

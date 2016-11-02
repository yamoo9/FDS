(function(global){
  'use strict';

  /**
   * --------------------------------
   * 진보 이벤트 모델: W3C 표준 vs MS 비표준
   */

  window.onload = init;

  function init() {

    var boxs = document.querySelectorAll('.box');

    // W3C 표준 진보 이벤트 추가 방법
    // NODE.addEventListener(event_type, event_handler, capture)
    // for ( var i=0, l=boxs.length; i<l; i++ ) {
    //   boxs[i].addEventListener('click', function(event){
    //     console.log('this:', this);
    //     console.log('event.target:', event.target);
    //     console.log('event.currentTarget:', event.currentTarget);
    //     console.log('%c------------------------------', 'color: #3d9a21');
    //   }, true);
    // }

    var target = boxs.item(0);
    // 구형 이벤트 모델 VS 신형 이벤트 모델

    // 구형
    var fnA = function(){ console.log('A'); console.log('this:', this); };
    var fnB = function(){ console.log('B'); console.log('this:', this); };

    var event_type = 'mouseover';

    // target['on'+event_type] = fnA;
    // target['on'+event_type] = fnB;

    target['on'+event_type] = function() {
      // this !== target
      // fnA.call(document);
      // fnB.call(window);
      fnA();
      fnB();
    };

    // IE 6-8
    // 신형
    // 구형과 달리, 여러 개의 이벤트를 요소에 연결 가능
    // 함수 내부의 this도 이벤트가 연결된 문서 객체를 참조
    // target.addEventListener(event_type, fnA);
    // target.addEventListener(event_type, fnB);

  }




})(this);
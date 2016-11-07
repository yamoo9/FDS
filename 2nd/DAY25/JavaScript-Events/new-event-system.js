(function(global){
  'use strict';

  var on, off;

  on = (function(){
    var _on;
    // W3C 표준 신형
    if ( global.addEventListener ) {
      _on = function(el, type, fn, capture) {
        el.addEventListener(type, fn, ( capture || false ) );
      };
    }
    // MS 비표준 신형
    else if ( global.attachEvent ) {
      _on = function(el, type, fn) {
        el.attachEvent('on'+type, fn);
      };
    }
    // 구형 이벤트 모델
    else {
      _on = function(el, type, fn) {
        el['on'+type] = fn;
      };
    }
    return _on;
  })();

  off = (function(){
    var _off;
    // W3C 표준 신형
    if ( global.removeEventListener ) {
      _off = function(el, type, fn, capture) {
        el.removeEventListener(type, fn, ( capture || false ) );
      };
    }
    // MS 비표준 신형
    else if ( global.dettachEvent ) {
      _off = function(el, type, fn) {
        el.dettachEvent('on'+type, fn);
      };
    }
    // 구형 이벤트 모델
    else {
      _off = function(el, type) {
        el['on'+type] = null;
      };
    }
    return _off;
  })();

  global.on = on;
  global.off = off;

  // global.y9 = {};
  // global.y9.events = {
  //   'on': on,
  //   'off': off
  // };

})(this);




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
    for ( var i=0, l=boxs.length; i<l; i++ ) {
      boxs[i].addEventListener('click', function(event){
        console.log('this:', this);
        console.log('event.target:', event.target);
        if ( event.target.className.indexOf('parent') > -1 ) {

        }
        console.log('event.currentTarget:', event.currentTarget);
        console.log('%c------------------------------', 'color: #3d9a21');
      }, false);
    }

    var target = boxs.item(boxs.length - 1);
    // 구형 이벤트 모델 VS 신형 이벤트 모델

    // 구형
    var fnA = function(e){
      e = e || window.event;
      e.target e.target || e.srcElement;
      console.log('A');
      console.log('this:', this);
    };
    var fnB = function(){ console.log('B'); console.log('this:', this); };

    var event_type = 'mouseover';

    // target['on'+event_type] = fnA;
    // target['on'+event_type] = fnB;

    // target['on'+event_type] = function() {
    //   // this !== target
    //   // fnA.call(document);
    //   // fnB.call(window);
    //   fnA();
    //   fnB();
    // };

    // IE 6-8
    // 신형
    // 구형과 달리, 여러 개의 이벤트를 요소에 연결 가능
    // 함수 내부의 this도 이벤트가 연결된 문서 객체를 참조
    // target.addEventListener(event_type, fnA);
    // target.addEventListener(event_type, fnB);

    // --------------------------------------------------------------------------------

    // W3C Starndard Event Model VS MS Non Standard Event Model
    // .addEventListener(type, handler, capture)  VS  .attachEvent('on'+type, handler)

    // target.attachEvent('on'+event_type, fnA);
    // target.attachEvent('on'+event_type, fnB);

    // 함수형 프로그래밍
    // on(el_node, type, handler, capture);
    // off(el_node, type, handler);
    // on(target, 'click', fnA, true);
    // on(target, 'mousemove', fnB);

    // 객체형 프로그래밍
    // $('selector').on(type, handler);
    // $('selector').off(type, handler);

  }




})(this);
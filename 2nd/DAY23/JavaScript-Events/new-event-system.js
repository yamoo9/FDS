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
        console.log('event.currentTarget:', event.currentTarget);
      }, false);
    }
  }




})(this);
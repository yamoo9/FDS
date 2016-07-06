/*! toggleBaseline.js © yamoo9.net, 2016 */
'use strict';

(function(document){
  // 사용자가 Shift + G 키를 누르면
  // 토글 베이스라인이 설정된다.
  document.addEventListener('keydown', function(event) {
    var shift = event.shiftKey;
    var key = event.keyCode;
    if(shift && key === 71) {
      this.body.classList.toggle('show-baseline');
    }
  });
})(this.document);
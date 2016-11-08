/*! jquery-selection.js © yamoo9.net, 2016 */

/**
 * --------------------------------
 * Module A: Setting
 */
var fds = (function(global, jQuery){
  'use strict';

  // jQuery 사용 가능
  // 외부에서 접근이 불가능한 private jQuery

  return {
    $: jQuery // 비공개 멤버인 jQuery에 접근 가능한 유일한 방법: 특권 부여
  };

})(this, this.jQuery.noConflict(true));

//////////////////////////////////////////
// this.jQuery.noConflict(true) 처리 결과
//////////////////////////////////////////
// $ != jQuery
// jQuery === undefined
// fds.$ === jQuery
//////////////////////////////////////////

/**
 * --------------------------------
 * Module B: using `fds`
 */
(function(fds){
  'use strict';
  var jQuery_version = fds.$().jquery;

  console.log('jQuery_version:', jQuery_version);

})(this.fds);
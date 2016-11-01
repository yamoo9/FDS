/*! app.js © yamoo9.net, 2016 */

// 의존 모듈 주입 (Dependency Module Injection)
// DOM_Helper 모듈
(function(global, $){
  'use strict';

  var gnb                       = $.query('#gnb');
  var gnb_first                 = $.first(gnb);
  var gnb_first_first           = $.first(gnb_first);
  var gnb_first_first_next      = $.next(gnb_first_first);
  var gnb_first_first_next_prev = $.prev(gnb_first_first_next);
  var gnb_links                 = $.queryAll('a', gnb);
  var gnb_prev_el               = $.prev(gnb);
  var gnb_next_p                = $.next(gnb);
  var gnb_next_p_parent         = $.parent(gnb_links[2], 4);

  console.log('gnb_first_first_next_prev:', gnb_first_first_next_prev);


})(this, this.DOM_Helper);
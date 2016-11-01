/*! app.js © yamoo9.net, 2016 */

// 의존 모듈 주입 (Dependency Module Injection)
// DOM_Helper 모듈
(function(global, $){
  'use strict';

  // var gnb = $.id('gnb');
  var gnb = $.query('#gnb');
  console.log('gnb:', gnb);

  var target_p = $.classes('target-paragraph');
  console.log('target_p:', target_p);

  // tag(tag_name[, context_obj]);
  // var gnb_links = $.tag('a', gnb);
  var gnb_links = $.queryAll('a', gnb);
  console.log('gnb_links:', gnb_links);



})(this, this.DOM_Helper);
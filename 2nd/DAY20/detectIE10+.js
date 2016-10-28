/*! detectIE10+.js © yamoo9.net, 2016 */

// IE 10, 11의 식별자를 통해 브라우저 감지하는 작은 프로그램
// https://blogs.msdn.microsoft.com/ie/2011/04/15/the-ie10-user-agent-string/
// https://blogs.msdn.microsoft.com/ieinternals/2013/09/21/internet-explorer-11s-many-user-agent-strings/

// [IE 10] MSIE 10.0     Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)
// [IE 11] rv:11.0       Mozilla/5.0 (Windows NT 6.3; Trident/7.0; .NET4.0E; .NET4.0C; rv:11.0) like Gecko

(function(){
  'use strict';

  var html      = window.document.documentElement,
      pre_class = html.getAttribute('class') || '',
      userAgent = window.navigator.userAgent.toLowerCase();

  var detectIE = function(version_id, class_name) {
    if ( typeof version_id !== 'string' || typeof class_name !== 'string' ) {
      throw new Error('첫번째, 두번째 전달인자 모두 문자열이어야 합니다.'); }
    if ( userAgent.indexOf(version_id) > -1 ) {
      html.setAttribute('class', (pre_class + ' ' + class_name).trim()); }
  };

  detectIE('msie 10.0', 'ie10');
  detectIE('rv:11.0', 'ie11');

})();
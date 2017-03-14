/*! jquery.ajax.extensions.js © yamoo9.net, 2017 */
(function(global, $){
  'use strict';

  // jQuery 보다 이 파일이 먼저 불러와지면, 코드 차단 및 사용자에게 안내
  if ( !$ ) {
    console.info('jQuery 라이브러리를 먼저 호출해야 jquery.ajax.extensions을 사용할 수 있습니다.');
    return; // 조건이 참이면, 함수는 아래 코드를 아무 것도 수행하지 않고 종료.
  }

  // GET, POST
  // return: jqXHR
  // $.get(url[, data][, success][, dataType]);
  // $.post(url[, data][, success][, dataType]);
  // $.ajax()

  // PUT, DELETE
  // return jqXHR
  if (!$.put) {
    $.put = function(url, data, success, dataType){
      return $.ajax({
                 type     : 'PUT',
                 url      : url,                // [required]
                 data     : data || null,       // [option]
                 success  : success || null,    // [option]
                 dataType : dataType || 'json'  // [option]
               });
    };
  }
  if (!$.delete) {
    $.delete = function(url, success, dataType){
      return $.ajax({
                 type     : 'DELETE',
                 url      : url,                // [required]
                 success  : success || null,    // [option]
                 dataType : dataType || 'json'  // [option]
               });
    };
  }

})(window, window.jQuery);

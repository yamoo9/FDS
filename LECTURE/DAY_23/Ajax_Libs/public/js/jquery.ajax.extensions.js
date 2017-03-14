/*! jquery.ajax.extensions.js © yamoo9.net, 2017 */
(function(global, $){
  'use strict';

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

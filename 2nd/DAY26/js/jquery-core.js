// </body> 끝 위치에서 호출할 경우 사용하는 패턴
(function($){
  'use strict';
  // $ === jQuery

  var $body = $('body').attr('data-end-body', 'yes');

  console.log('$body:', $body);

})(jQuery);
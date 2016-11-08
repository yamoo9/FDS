// </body> 끝 위치에서 호출할 경우 사용하는 패턴
(function($){
  'use strict';
  // $ === jQuery

  var $body = $('body').attr('data-end-body', 'yes');

  console.log('$body:', $body);

})(jQuery);

// 외부에 공개될 네임스페이스 객체
var fds = (function(){
  'use strict';
  // 반환 객체
  return {
    // $ 속성에 jQuery 팩토리 함수 참조
    $: jQuery.noConflict(true)
  };

})();
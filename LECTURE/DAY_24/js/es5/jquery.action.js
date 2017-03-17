'use strict';

// jQuery 팩토리 함수
// JS 팩토리 패턴

// ES6
(function ($) {
  'use strict';

  $.capitalize = function (words, divider) {
    return $.map(words.split(divider), function (word) {
      return word.replace(/^./, function ($1) {
        return $1.toUpperCase();
      });
    }).join(' ');
  };
})(window.jQuery);

(function (global, $) {
  'use strict';

  var $body = $('body');

  console.log('$body.jquery:', $body.jquery);

  // --------------------------

  // var $wrapper_header = $('.wrapper h1, .wrapper h2');
  // let $wrapper = $('.wrapper');
  // 선택자가 아닌 경우
  var $wrapper = $(document.querySelector('.wrapper'));
  // $() 두번째 인자로 컨텍스트 객체가 올 수 있다.
  // let $wrapper_header = $(':header', $wrapper);
  // 탐색 인스턴스 메서드 .find(), .children() 활용
  var $wrapper_header = $wrapper.find(':header');

  console.log('$wrapper_header:', $wrapper_header);

  $wrapper_header.css('font-size', '+=30px');

  // LIBRARY, FRAMEWORK => Model
  var web_techniques = {
    'css': {
      'type': 'framework',
      'resources': ['twitter bootstrap', 'bulma', 'zurb foundation']
    },
    'js': {
      'type': 'library',
      'resources': ['jquery', 'dojo', 'mootools', 'yui']
    }
  };

  global.web_techniques = web_techniques;

  // 동적으로 요소를 추가해서 Wrapper_header 내부에 코드 삽입
  var lang = Object.keys(web_techniques)[0];
  var lang_type = web_techniques.css.type;
  var lang_resources = web_techniques.css.resources;
  var html_template = ['<ul class="' + lang + '-' + lang_type + '">', '<li><a href="#!' + lang_resources[0] + '">' + $.capitalize(lang_resources[0]) + '</a></li>', '<li><a href="#!' + lang_resources[1] + '">' + $.capitalize(lang_resources[1]) + '</a></li>', '<li><a href="#!' + lang_resources[2] + '">' + $.capitalize(lang_resources[2]) + '</a></li>', '</ul>'].join('\t');

  console.log(html_template);

  $('<ul class="css-framworks">\n        <li><a href="#!bootstrap">Bootstrap</a></li>\n        <li class="active"><a href="#!bulma">Bulma</a></li>\n        <li><a href="#!foundation">Foundation</a></li>\n      </ul>').prependTo($wrapper);
})(window, window.jQuery);
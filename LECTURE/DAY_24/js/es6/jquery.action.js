
// jQuery 팩토리 함수
// JS 팩토리 패턴

// ES6
($=> {
  'use strict';

  $.capitalize=(words,divider)=>$.map(words.split(divider),word=>word.replace(/^./,$1=>$1.toUpperCase())).join(' ');

})(window.jQuery);






((global, $)=>{
  'use strict';

  let $body = $('body');

  console.log('$body.jquery:', $body.jquery);

  // --------------------------

  // var $wrapper_header = $('.wrapper h1, .wrapper h2');
  // let $wrapper = $('.wrapper');
  // 선택자가 아닌 경우
  let $wrapper = $( document.querySelector('.wrapper') );
  // $() 두번째 인자로 컨텍스트 객체가 올 수 있다.
  // let $wrapper_header = $(':header', $wrapper);
  // 탐색 인스턴스 메서드 .find(), .children() 활용
  let $wrapper_header = $wrapper.find(':header');

  console.log('$wrapper_header:', $wrapper_header);

  $wrapper_header.css('font-size', '+=30px');

  // LIBRARY, FRAMEWORK => Model
  let web_techniques = {
    'css': {
      'type': 'framework',
      'resources': [
        'twitter bootstrap', 'bulma', 'zurb foundation'
      ]
    },
    'js': {
      'type': 'library',
      'resources': ['jquery', 'dojo', 'mootools', 'yui']
    }
  };

  global.web_techniques = web_techniques;

  // 동적으로 요소를 추가해서 Wrapper_header 내부에 코드 삽입
  let lang = Object.keys(web_techniques)[0];
  var lang_type = web_techniques.css.type;
  var lang_resources = web_techniques.css.resources;
  let html_template = [
    '<ul class="'+ lang +'-' + lang_type + '">',
      `<li><a href="#!${lang_resources[0]}">${$.capitalize(lang_resources[0])}</a></li>`,
      `<li><a href="#!${lang_resources[1]}">${$.capitalize(lang_resources[1])}</a></li>`,
      `<li><a href="#!${lang_resources[2]}">${$.capitalize(lang_resources[2])}</a></li>`,
    '</ul>'
  ].join('\t');

  console.log(html_template);


  $(`<ul class="css-framworks">
        <li><a href="#!bootstrap">Bootstrap</a></li>
        <li class="active"><a href="#!bulma">Bulma</a></li>
        <li><a href="#!foundation">Foundation</a></li>
      </ul>`).prependTo( $wrapper );

})(window, window.jQuery);

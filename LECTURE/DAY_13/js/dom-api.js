/*! dom-api.js © yamoo9.net, 2017 */

// .component 요소를 찾아 이 내부에 위의 HTML 코드를 동적으로 추가해보자.
var comp = query('.component');

var comp_input_heading              = '섹션 제목';
var comp_input_heading_placeholder  = '아름다운 우리 강산';
var comp_input_language             = '작성된 언어(스크린리더가 사용할 음성엔진 언어)';
var comp_input_language_placeholder = 'ko';
var comp_button_content             = '문서객체 생성';

// HTML TEMPLATE CODE

// Markup 하듯이 하는 방법 1
// var comp_complete_html_str = '';

// comp_complete_html_str += '<div class="input-field" role="group" lang="en">';
// comp_complete_html_str +=   '<div role="group">';
// comp_complete_html_str +=     '<label for="input-heading">'+ comp_input_heading +'</label>';
// comp_complete_html_str +=     '<input type="text" id="input-heading" placeholder="'+ comp_input_heading_placeholder +'">';
// comp_complete_html_str +=   '</div>';
// comp_complete_html_str +=   '<div role="group">';
// comp_complete_html_str +=     '<label for="input-language">'+ comp_input_language +'</label>';
// comp_complete_html_str +=     '<input type="text" id="input-language" placeholder="'+ comp_input_language_placeholder +'">';
// comp_complete_html_str +=   '</div>';
// comp_complete_html_str +=   '<button type="button" class="add-HTML-btn">'+ comp_button_content +'</button>';
// comp_complete_html_str += '</div>';

// --------------------------------------------------------------
// Markup 하듯이 하는 방법 2 - using Array Object

var comp_complete_html_str = [
  '<div class="input-field" role="group" lang="en">',
    '<div role="group">',
      '<label for="input-heading">'+ comp_input_heading +'</label>',
      '<input type="text" id="input-heading" placeholder="'+ comp_input_heading_placeholder +'">',
    '</div>',
    '<div role="group">',
      '<label for="input-language">'+ comp_input_language +'</label>',
      '<input type="text" id="input-language" placeholder="'+ comp_input_language_placeholder +'">',
    '</div>',
    '<button type="button" class="add-HTML-btn">'+ comp_button_content +'</button>',
  '</div>'
].join('');

comp.innerHTML = comp_complete_html_str;

// --------------------------------------------------------------------------------


// 문서에서 .demo-innerHTML 대상 찾기
var demo = query('.demo-innerHTML');
// 문서에 동적으로 생성할 HTML 코드 문자 유형 데이터(자료)
var add_html_string = '<header class="container-header"><h1 class="site-brand" lang="en">Using DOM Script</h1></header>';
// demo 참조 변수에 add_html_string 문자열을 innerHTML 속성을 사용하여 문서 객체를 해석/생성한다.
// demo.innerHTML = add_html_string;

// 문서에서 .add-HTML-btn 버튼을 찾아 이벤트를 연결해보자.
query('.add-HTML-btn').onclick = function() {
  // demo.innerHTML = add_html_string;

  // 사용자가 입력한 데이터(Model) -----------------
  // 사용자가 <input> 필드에 입력한 데이터 값을 가져와
  // 아래 변수에 할당하시오.
  var lang    = query('#input-language').value || 'ko';
  var heading = query('#input-heading').value || '오늘은 눈인지 비인지...';

  // 데이터를 조합할 HTML 템플릿 -------------------
  var template = '<header class="container-header"><h1 class="site-brand" lang="'+ lang +'">'+ heading +'</h1></header>';

  // Template + Model(Data) -> View 완성되어 화면에 실제 구현
  demo.innerHTML = template;

};


// --------------------------------------------------------------------------------

// innerHTML을 사용하여 동적으로 문서가 로드됨과 동시에 코드가 생성되도록 해보자.
/*
<div class="input-field" role="group" lang="en">
  <div role="group">
    <label for="input-heading">Heading:</label>
    <input type="text" id="input-heading" placeholder="DOM Script">
  </div>
  <div role="group">
    <label for="input-language">Language:</label>
    <input type="text" id="input-language" placeholder="ko">
  </div>
  <button type="button" class="add-HTML-btn">add HTML using Template.</button>
</div>
*/


// ----------------------------------------------------
// DOM API - HTMLElement.matches('css selector')

var demo_matches          = query('.demo-matches');
var demo_matches_children = demo_matches.children;
// var demo_matches_target = query('.demo-matches-target', demo_matches);

// 질문!!! demo_matches_target 참조 변수의
// 문서 요소객체는 부모 demo_matches의 몇번째 자식일까요?
for (var m=0; m<demo_matches_children.length; m+=1) {
  var item = demo_matches_children.item(m);
  var matching = null; // undefined, null
  if ( item.matches ) {
    matching = item.matches('.demo-matches-target');
  } else {
    // MS IE, Edge
    matching = item.msMatchSelector('.demo-matches-target');
  }
  // console.log('matching:', matching);
  if ( matching === true ) {
    item.setAttribute('style', 'font-weight: 900; letter-spacing: 0.34em;');
  }
  // if ( demo_matches.children.item(m) === demo_matches_target ) {
  //   console.log(m + 1, '번째 자식' );
  // }
}

console.log( demo_matches.contains( query('a', demo_matches) ) );

// --------------------------------------------------------------------------------
// .demo-insertAdjacentHTML 예제

var demo_insert_ad = query('.demo-insertAdjacentHTML');

var prev_sibling = '<section class="before-demo-insertAdjacentHTML">이전 형제</section>';
var next_sibling = '<section class="after-demo-insertAdjacentHTML">다음 형제</section>';
var first_child  = '<article class="first-child-demo-insertAdjacentHTML">첫번째 자식</article>';
var last_child   = '<article class="last-child-demo-insertAdjacentHTML">마지막 자식</article>';

demo_insert_ad.insertAdjacentHTML('beforebegin', prev_sibling);
demo_insert_ad.insertAdjacentHTML('afterbegin', first_child);
demo_insert_ad.insertAdjacentHTML('beforeend', last_child);
demo_insert_ad.insertAdjacentHTML('afterend', next_sibling);

// insertAdjacentElement() 예제
var demo_element = query('.demo-insertAdjacentElement');

// <h1>Insert Adjacent Element</h1>
var h1 = document.createElement('h1');
h1.innerText = 'Insert Adjacent Element';
// <p>Lorem ipsum dolor sit amet.</p>
var p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit amet.';

demo_element.insertAdjacentElement('beforebegin', document.createElement('figure'));
demo_element.insertAdjacentElement('afterbegin', h1);
demo_element.insertAdjacentElement('beforeend', p);
demo_element.insertAdjacentElement('afterend',  document.createElement('span'));


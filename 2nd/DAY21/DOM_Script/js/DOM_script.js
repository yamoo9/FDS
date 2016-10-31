////////////
// REVIEW //
////////////
(function(global){
  'use strict';
  // 문서객체모델 API
  // DOM Lv0, Lv1, Lv2, Lv3, Lv4

  // W3C에서 제정된 DOM API를 사용하여
  // HTML 문서를 JavaScript를 사용하여
  // 객체를 생성하거나, 제거하거나, 조작하는 것을 말한다.

  ////////////////////
  // Node Interface //
  ////////////////////

  // window.document 객체는 노드의 집합

  // 각 노드는 유형이 구분
  // 1 요소노드(ElementNode)
  // 2 속성노드(AttributeNode)
  // 3 텍스트노드(TextNode)
  // 8 주석노드(CommentNode)
  // 문서유형정의노드(DoctypeNode)

  // 노드의 속성
  // DOM Lv0에서 사용되던 오래된 속성은 아래와 같은 방법으로 접근이 가능하다.
  // HTML DOM 방식 [Getter | Setter]
  // .id
  // .title
  // .className
  // 반면 새롭게 등장한 속성들은 XML DOM 방식으로 속성 값을 가져와야 한다.
  // [Getter] .getAttribute(key),
  // [Setter] .setAttribute(key, value)
  // .getAttribute('aria-labelledby');
  // .getAttribute('data-ng-app');

}); // (this)


//////////////////////////
// DOM API: Selection 1 //
//////////////////////////

(function(global){
  'use strict';

  // 문서에서 id 속성으로 객체를 찾는(선택하는) 방법(Method)
  var page, main;
  page = document.getElementById('page');
  main = document.getElementById('main');

  // 문서에서 요소 객체를 요소이름으로 찾는 방법 (집합)
  var headings2, paragraphs;
  headings2 = document.getElementsByTagName('h2');
  paragraphs = document.getElementsByTagName('p');

  // 문서에서 클래스 속성으로 요소를 찾는 방법 (집합)
  var issues, issue_contents;
  issues = document.getElementsByClassName('issue');
  issue_contents = document.getElementsByClassName('issue-content');

  // 문서에서 CSS 선택자로 대상 객체를 찾아오는 방법 (단수, 노드)
  var issue = document.querySelector('.issue');
  // 문서에서 CSS 선택자로 대상 객체를 찾아오는 방법 (집합, 노드리스트)
  var all_in_issue = issue.querySelectorAll('*');

  console.log('id 속성으로 찾은 문서 요소 객체');
  console.log('page:', page);
  console.log('main:', main);

  console.log('%c------------------------------', 'color: #3d9a21');

  console.log('요소(태그)이름으로 찾은 문서 요소 객체들');
  console.log('headings2:', headings2);
  console.log('paragraphs:', paragraphs);

  console.log('%c------------------------------', 'color: #3d9a21');

  console.log('클래스 속성 이름으로 찾은 문서 요소 객체들');
  console.log('issues:', issues);
  console.log('issue_contents:', issue_contents);

  console.log('%c------------------------------', 'color: #3d9a21');

  console.log('CSS 선택자로 찾은 문서 요소 객체 또는 객체들');
  console.log('issue:', issue);
  console.log('all_in_issue:', all_in_issue);
}); // (this)


//////////////////////////
// DOM API: Selection 2 //
//////////////////////////

(function(global){
  'use strict';

  var document = global.document,
      page,
      main,
      brand,
      slogan,
      issues,
      issue_headlines = [],
      issue_contents = [];

  page   = document.querySelector('#page');
  main   = document.querySelector('#main');
  brand  = page.querySelector('.brand');
  slogan = page.querySelector('.slogan');
  issues = main.querySelectorAll('.issue');

  // for ( var i=0, l=issues.length; i<l; i++ ) {
  //   issue_headlines.push( issues[i].querySelectorAll('.issue-headline') );
  //   issue_contents.push( issues[i].querySelectorAll('.issue-content') );
  // }
  // Depth 1
  for ( var i=0, l=issues.length; i<l; i++ ) {
    var issue = issues[i];
    var _issue_headlines = issue.querySelectorAll('.issue-headline');
    var _issue_contents  = issue.querySelectorAll('.issue-content');
    // Depth 2
    for ( var ii=0, ll=_issue_headlines.length; ii<ll; ii++ ) {
      var _issue_headline = _issue_headlines[ii];
      var _issue_content  = _issue_contents[ii];
      issue_headlines.push(_issue_headline);
      issue_contents.push(_issue_content);
    }
  }

  console.log('issue_headlines:', issue_headlines);
  console.log('issue_contents:', issue_contents);

}); // (this)


///////////////////////
// DOM API: Creation //
///////////////////////
(function(global){
  'use strict';

  // 동적으로 아래 HTML 구조화를 생성해본다.
  // <div id="page"></div>

  // 요소노드를 생성해보자.
  // create Elemen tNode
  // document.createElement()
  var page_div = document.createElement('div');

  // 생성된 요소노드에 속성을 추가해보자.
  // Create Attribute
  // var page_div_id = document.createAttribute('id');
  // page_div_id.value = 'page';
  // console.log(page_div_id);

  // Add(Set) Attribute
  // ELEMENT_NODE.setAttribute(key, value);
  page_div.setAttribute('id', 'page');

  // console.log(page_div);

  var page_brand = document.createElement('h1');
  page_brand.setAttribute('class', 'brand');

  // create Text Node
  // document.createTextNode()
  var page_brand_text = document.createTextNode('JavaScript Future');

  // 자식노드로 텍스트노드를 요소노드에 추가
  // Append Child
  // ELEMENT_NODE.appendChild(NODE)
  page_brand.appendChild(page_brand_text);

  var page_slogan = document.createElement('p');
  page_slogan.setAttribute('class', 'slogan');
  var page_slogan_text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, cupiditate?');

  page_slogan.appendChild(page_slogan_text);

  // console.log(page_brand);
  // console.log(page_slogan);

  page_div.appendChild(page_brand);
  page_div.appendChild(page_slogan);

  console.log(page_div);

  var body = document.querySelector('body');

  body.appendChild(page_div);

})(this);
/*! dom-api.js © yamoo9.net, 2017 */

/**
 *  DOM API
 *
 *  ⏣ 아래 기능으로 jQuery를 안 써도 된다는 의견이 등장
 *  .classList   [IE 10+]
 *    .add()
 *    .remove()
 *    .contains()
 *    .toggle()
 */

// 버튼 탐색해서 변수에 참조(Reference)
var demo_button = query('button');

// ---------------------------------------------------------
// 동적으로 속성 할당

// HTML DOM 방식
// demo_button.className = 'demo-button';
// demo_button.className += ' ';
// demo_button.className += 'demo-button--pressed';

// Core DOM 방식
// demo_button.setAttribute('class', 'demo-button');
// var old_demo_button_class = demo_button.getAttribute('class');
// console.log(old_demo_button_class);
// demo_button.setAttribute('class', old_demo_button_class + ' ' + 'demo-button--pressed');

// 헬퍼 함수
// addClass(el_node, class_name)
// addClass(demo_button, 'demo-button');

// classList API 활용
demo_button.classList.add('demo-button');

demo_button.onclick = function () {
  if (this.classList.contains('on')) {
    this.classList.remove('on');
  } else {
    this.classList.add('on');
  }
  // VS
  this.classList.toggle('on');
};

// DocumentFragment 객체 생성
var doc_frag = document.createDocumentFragment();

//console.log('doc_frag 1:', doc_frag); // #document-fragment

// 첫번째 자식 생성한 후 doc_frag에 삽입
var _div = createElement('div');

doc_frag.appendChild(_div);

console.log('_div:', _div);

//console.log('doc_frag 2:', doc_frag);  // #document-fragment > div

_div = createElement('span');

console.log('_div:', _div);

doc_frag.appendChild(_div);

//console.log('doc_frag 3:', doc_frag);

// ------------------------------------------------
// CSSOM

var div = createElement('div');
var wrapper = createElement('div');
wrapper.classList.add('wrapper');

prepend(wrapper, div);
prepend(document.body, wrapper);

wrapper.style.cssText = [
  'position: absolute',
  'top: 200px',
  'left: 200px',
  'width: 500px',
  'height: 500px',
  'padding: 1rem',
  'border: 4px solid lightgray'
].join(';');

div.style.position = 'absolute';
div.style.top = '30px';
div.style.left = '70px';
div.style.width = '300px';
div.style.height = '300px';
div.style.background = '#333';
div.style.boxSizing = 'border-box';

console.log('height:', window.parseInt(div.style.height, 10));
console.log('width:', window.parseInt(div.style.width, 10));
//
div.style.padding = '10px';
//
console.log('width | context-box + padding-box:', div.clientWidth);
console.log('height | context-box + padding-box:', div.clientHeight);
//
div.style.border = '5px solid #32d2ff';
console.log('width | context-box + padding-box + border-box:', div.offsetWidth);
console.log('height | context-box + padding-box + border-box:', div.offsetHeight);

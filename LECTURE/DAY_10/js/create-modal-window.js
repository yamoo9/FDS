/*! create-modal-window.js © yamoo9.net, 2017 */

var body      = document.body;
// 사용자가 클릭할 버튼을 찾아온다.
var modal_btn = document.querySelector('.button__create-modal');
// 사용자가 버튼을 클릭하면
modal_btn.onclick = createModalWindow;
// modal_btn.onclick = createDim;

// modal_btn.onclick = function() {
//   createModalWindow();
//   createDim();
// };

// 함수 craeteDim() 정의
function createDim() {
  var dim = document.createElement('div');
  dim.setAttribute('class', 'modal-dim');
  body.appendChild(dim);
}
// 함수 createModalWindow() 정의
function createModalWindow() {
  // 동적으로 모달 윈도우를 생성하여 화면에 표시한다.
  // console.log('created modal window');
  // #1
  var modal = document.createElement('div');
  modal.setAttribute('class', 'modal-window');
  // #2
  var modal_headline         = document.createElement('h1');
  var modal_headline_content = document.createTextNode('Modal Window');
  modal_headline.appendChild(modal_headline_content);
  modal_headline.setAttribute('class', 'modal-window__headline');
  // #3
  var modal_btn         = document.createElement('button');
  var modal_btn_content = document.createTextNode('X');
  modal_btn.appendChild(modal_btn_content);
  modal_btn.setAttribute('type', 'button');
  modal_btn.setAttribute('class', 'modal-window__close-button');
  modal_btn.setAttribute('aria-label', 'Close Modal Window');
  // #4
  modal.appendChild(modal_headline);
  modal.appendChild(modal_btn);
  // #5
  body.appendChild(modal);

  createDim();
}

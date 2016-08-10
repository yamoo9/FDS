/*! make-remove-modal.js © yamoo9.net, 2016 */

var body            = document.body;
var exist_modal     = false;
var scripts_in_body = queryAll('script');
var last_script     = scripts_in_body[scripts_in_body.length - 1];
var make_btn        = query('.btn_make_modal');

function makeModal() {
  if (!exist_modal) {
    var modal = createNode('div');
    modal.setAttribute('class', 'modal');
    var modal_title = createNode('h2', 'Modal Window');
    modal_title.setAttribute('class', 'modal-title');
    var modal_desc = createNode('p', 'Modal Window Content....');
    modal_desc.setAttribute('class', 'modal-desc');
    var btn_modal_cta = createNode('button', 'send message');
    btn_modal_cta.setAttribute('class', 'modal-cta');
    btn_modal_cta.setAttribute('type', 'button');
    var btn_modal_close = createNode('button', 'x');
    btn_modal_close.setAttribute('class', 'modal-close');
    btn_modal_close.setAttribute('type', 'button');
    btn_modal_close.setAttribute('aria-label', 'close modal window');
    btn_modal_close.onclick = removeModal;
    modal.appendChild( modal_title );
    modal.appendChild( modal_desc );
    modal.appendChild( btn_modal_cta );
    modal.appendChild( btn_modal_close );
    insertAfter(last_script, modal);
    // 상태 변경
    exist_modal = !exist_modal;
  }
  // this.setAttribute('disabled', true);
}

function removeModal() {
  // Modal???
  // 방법 1. .modal 찾아와서 제거할 것
  var modal = query('.modal');
  // remove(modal); 함수를 생성해보세요.
  // modal.parentNode.removeChild(modal);
  removeNode(modal);
  // 방법 2. 함수 실행 전에 컨텍스트를 변경해서 제거하는 방법

  // 상태 변경
  exist_modal = !exist_modal;
  // make_btn.removeAttribute('disabled');
}

make_btn.onclick = makeModal;


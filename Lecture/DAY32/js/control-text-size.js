// 문서에서 선택한 요소노드(객체) 참조
var page_header  = query('.page-header');
var increase_btn = query('.btn-increase-text');
var decrease_btn = query('.btn-decrease-text');
var change_text  = 10;

// 글자 크기 변경 함수
function changeTextSize() {
  // console.log('context:', this.firstChild.nodeValue);
  var operator = this.firstChild.nodeValue;
  var _change_text = change_text;
  // page_header의 글자 크기를 키운다.
  // 글자 크기를 연산이 가능하도록 변경
  var current_size = parseInt(page_header.style.fontSize);
  // 글자 크기를 변경(키움)하여 해당 요소에 설정
  if (operator === '-') {
    _change_text = change_text * -1;
  }
  page_header.style.fontSize = current_size + _change_text + 'px';
  console.log(page_header.style.fontSize);
};

// 검증
// console.log('page_header:', page_header);
// console.log('increase_btn:', increase_btn);
// console.log('decrease_btn:', decrease_btn);

// page_header 요소 객체의 글자 크기 초기화
page_header.style.fontSize = '16px';

// 버튼에 이벤트 핸들링(핸들러 - 바인딩)
increase_btn.onclick = changeTextSize;
decrease_btn.onclick = changeTextSize;
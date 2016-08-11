// 문서에서 선택한 요소노드(객체) 참조
var page_header  = query('.page-header');
var increase_btn = query('.btn-increase-text');
var decrease_btn = query('.btn-decrease-text');

// 검증
// console.log('page_header:', page_header);
// console.log('increase_btn:', increase_btn);
// console.log('decrease_btn:', decrease_btn);

// page_header 요소 객체의 글자 크기 초기화
page_header.style.fontSize = '16px';

// 버튼에 이벤트 핸들링(핸들러 - 바인딩)
increase_btn.onclick = function() {
  // page_header의 글자 크기를 키운다.
  console.log(page_header.style.fontSize);
};

decrease_btn.onclick = function() {
  // page_header의 글자 크기를 줄인다.
};
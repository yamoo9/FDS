// 문서에서 선택한 요소노드(객체) 참조
var page_header  = query('.page-header');
var increase_btn = query('.btn-increase-text');
var decrease_btn = query('.btn-decrease-text');
var change_text  = 10;
var limit_up     = 46;
var limit_down   = 12;

// 글자 크기 변경 함수
function changeTextSize() {
  // console.log('context:', this.firstChild.nodeValue);
  var operator = this.firstChild.nodeValue;
  var _current_text;
  // page_header의 글자 크기를 키운다.
  // 글자 크기를 연산이 가능하도록 변경
  var current_size = parseInt(page_header.style.fontSize);

  if (operator === '+') {
    _current_text = current_size + change_text;
  } else {
    _current_text = current_size - change_text;
  }
  // 글자 크기를 변경(키움)하여 해당 요소에 설정
  if ( _current_text > limit_up || _current_text < limit_down) {
    _current_text = current_size;
  }

  page_header.style.fontSize = _current_text + 'px';
  // console.log(page_header.style.fontSize);
};

// 검증
// console.log('page_header:', page_header);
// console.log('increase_btn:', increase_btn);
// console.log('decrease_btn:', decrease_btn);

// page_header 요소 객체의 글자 크기 초기화
// page_header.style.fontSize = '16px';

// 버튼에 이벤트 핸들링(핸들러 - 바인딩)
increase_btn.onclick = changeTextSize;
decrease_btn.onclick = changeTextSize;


// ------------------------------------------------
// 웹 브라우저에서 계산된 CSS 스타일 값 가져오는 방법
// ------------------------------------------------
// 비 표준 MS IE 방식 (IE 8-)
// 대상.currentStyle.스타일속성
// ------------------------------------------------
// 표준 W3C 방식 (IE 9+)
// window.getComputedStyle(대상,가상요소).스타일속성
// ------------------------------------------------
function getStyle(el, property, pseudo) {
  var value, el_style;
  // 유효성 검사
  if ( el.nodeType !== 1 ) {
    console.error('첫번째 인자 el은 요소노드여야 합니다.');
  }
  if ( typeof property !== 'string' ) {
    console.error('두번째 인자 property는 문자열이야 합니다.');
  }
  if ( typeof pseudo !== 'string' && pseudo ) {
    console.error('세번째 인자 pseudo는 문자열이야 합니다.');
  }

  // CSS 속성 이름이 카멜케이스화
  property = camelCase(property);

  if ( window.getComputedStyle ) {
    el_style = window.getComputedStyle(el,pseudo);
    if (pseudo && el_style.content === '') {
      return null;
    }
    value = el_style[property];
  } else {
    value = el.currentStyle[property];
  }
  return value;
}

function camelCase(css_prop) {
   return css_prop.replace(/-./g, function($1){
      return $1.replace('-','').toUpperCase();
   });
}

// ------------------------------------------------
// 대괄호 표기법
// ------------------------------------------------
// getStyle(el, 'outline')

// 펜.색상
// 펜.길이
// 펜.용도
// 펜.가격
// 펜.종료

// 속성 = '색상';

// 펜[속성]
###### Front-End Develop SCHOOL

# DAY 32

###텍스트 사이즈 조절

```html
<button class="btn-group">
	<button type="button" class="btn-increase-text" aria-label="텍스트 크게">+</button>
	<button type="button" class="btn-decrease-text" aria-label="텍스트 작게">+</button>
</button>
<header class="page-header">
	<h1 class="brand">Brand Identity</h1>
	<p class="brand-desc">Lorem ipsum dolor sit amet.</p>
</header>
```
```javascript
var page_header = query('.page-header');
var increase_btn = query('btn-increase-text');
var decrease_btn = query('btn-decrease-text');

//page_header 요소 객체의 글자 크기 초기화
page_header.style.fontSize = '16px';

increase_btn.onclick = function(){
	//page-header의 글자 크기를 키운다

	var current_font_size = parseInt(page_header.style.fontSize);
	page_header.style.fontSize = current_font_size + 4 + 'px';
}

decrease_btn.onclick = function(){
	//page-header의 글자 크기를 줄인다

	var current_font_size = parseInt(page_header.style.fontSize);
	page_header.style.fontSize = current_font_size + -4 + 'px';
}

// 두 함수를 묶을 수도 있다
var change_text = 5;	// 참조할 전역 변수
var limit_up = 40;
var limit_down = 10;

changeTextSize() {
	var operator = this.firstChild.nodeValue
	var _change_text;

	if (operator === '-') {
		_change_text = change_text * -1;

	}

	var current_font_size = parseInt(page_header.style.fontSize);

	if (current_font_size > ( limit_up - change_text) ) {
		page_header.style.fontSize = limit_up;
		return
	}
	if ( current_font_size < (limiut_down + change_text) ) {
		page_header.style.fontSize = limit_down;
		return
	}
	page_header.style.fontSize = current_font_size + _change_text + 'px';
}
// 이벤트 등록
increase_btn.onclick = changeTextSize
decrease_btn.onclick = changeTextSize
```

 - 요소의 스타일 값을 가지고오는 헬퍼 함수

```javascript
비 표준 MS IE 방식 (IE 8-)
node.currentStyle.fontSize

표준 방식(IE 9+)
// window.getComputedStyle(대상, 가상요소).fontSize
window.getComputedStyle(target, null).fontSize

// 사용자 정의 함수( 크로스 브라우징 )
function getStyle(el, property, pseudo) {
	var value;
	// 유효성 검사
	if ( el.nodeType !== 1 ) {
		console.error('첫번째 인자 el은 요소노드 이어야 합니다.')
	}
	if ( typeof property !== 'string' ) {
		console.error('두번째 인자 property는 문자열이어야 합니다.');
	}
	// pseudo를 인자로 전달할 의도라면 더 까다롭게 검사한다.
	if ( typeof pseudo !== 'string' && pseudo ) {
		console.error('세번째 인자 pseudo는 문자열이어야 합니다.');
	}

	property = camelCase(property);


	if (window.getComputedStyle) {
		// property에 어떤 값이 올지 모르기 때문에
		el_style = window.getComputedStyle(el,pseudo)
		if (pseudo && el_style.content === '') {
			return null;
		}
	} else {
		value = el_Style[property];
	}
	return value;
}
```

```javascript
// css 속성 입력 표기 방식 -> camelCase [ 정규 표현식 ]

function camelCase(text) {
	return text.replace(/(\s|-|_)./g, function($1){
		return $1.replace(/(\s|-|_)/g, '').toUpperCase();
	});
}
```
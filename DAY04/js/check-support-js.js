// 스크립트가 지원되는 환경이라면
// <html> 요소의 class 속성 값을 no-js → js로 변경
var html = document.documentElement;
var body = document.body;
var body_style = body.style;

// 체크
var is_borderradius = 'border-radius' in body_style;

html.setAttribute('class', 'js');

if (!is_borderradius) {
  html.classList.add('cssborderradius');
} else {
  html.classList.add('no-cssborderradius');
}
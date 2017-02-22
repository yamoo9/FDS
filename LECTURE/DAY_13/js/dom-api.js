/*! dom-api.js © yamoo9.net, 2017 */

// 문서에서 .demo-innerHTML 대상 찾기
var demo = query('.demo-innerHTML');
// 문서에 동적으로 생성할 HTML 코드 문자 유형 데이터(자료)
var add_html_string = '<header class="container-header"><h1 class="site-brand" lang="en">Using DOM Script</h1></header>';
// demo 참조 변수에 add_html_string 문자열을 innerHTML 속성을 사용하여 문서 객체를 해석/생성한다.
// demo.innerHTML = add_html_string;

// 문서에서 .add-HTML-btn 버튼을 찾아 이벤트를 연결해보자.
query('.add-HTML-btn').onclick = function() {
  demo.innerHTML = add_html_string;
};

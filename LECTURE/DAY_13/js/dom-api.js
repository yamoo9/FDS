/*! dom-api.js © yamoo9.net, 2017 */

// 문서에서 .demo-innerHTML 대상 찾기
var demo = query('.demo-innerHTML');
// 문서에 동적으로 생성할 HTML 코드 문자 유형 데이터(자료)
var add_html_string = '<header class="container-header"><h1 class="site-brand" lang="en">Using DOM Script</h1></header>';
// demo 참조 변수에 add_html_string 문자열을 innerHTML 속성을 사용하여 문서 객체를 해석/생성한다.
// demo.innerHTML = add_html_string;

// 문서에서 .add-HTML-btn 버튼을 찾아 이벤트를 연결해보자.
query('.add-HTML-btn').onclick = function() {
  // demo.innerHTML = add_html_string;

  // 사용자가 입력한 데이터(Model) -----------------
  // 사용자가 <input> 필드에 입력한 데이터 값을 가져와
  // 아래 변수에 할당하시오.
  var lang    = query('#input-language').value || 'ko';
  var heading = query('#input-heading').value || '오늘은 눈인지 비인지...';

  // 데이터를 조합할 HTML 템플릿 -------------------
  var template = '<header class="container-header"><h1 class="site-brand" lang="'+ lang +'">'+ heading +'</h1></header>';

  // Template + Model(Data) -> View 완성되어 화면에 실제 구현
  demo.innerHTML = template;

};

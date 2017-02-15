/*! lecture.js © yamoo9.net, 2016 */
/*
BOM
  global object -> window object
                    -> document object
                    -> navigator object
                      -> userAgent
                      -> geolocation
                    -> screen object
                      -> width
                      -> availWidth
                    -> location object
                      -> hash
                      -> protocol
                      -> host
                      -> pathname
                      -> search
                      -> href
                      -> reload()
                      -> replace()
                    -> history object
                      -> back()
                      -> go()
                      -> forward()

DOM(Document Object Model) API(Application Programming Interface)
  -> Selection API
    -> .getElementById()
    -> .getElementsByTagName()
    -> .getElementsByClassName() // IE 9+

CSSOM
*/
/*! lecture.js © yamoo9.net, 2016 */

// 초기 실행 함수
function init() {
  // console.log('loaded window all object');

  // 문서에서 .rect, .circle 요소노드를 찾는다.
  var rect, circle, rect_bg, circle_bg;
  // rect      = document.getElementsByTagName('figure').item(0);
  // circle    = document.getElementsByTagName('figure').item(1);
  rect      = document.getElementsByClassName('rect')[0];
  circle    = document.getElementsByClassName('circle')[0];
  rect_bg   = '#9292b9';
  circle_bg = '#d485af';

  console.log('rect:', rect);
  console.log('circle:', circle);

  // 찾은 문서 객체의 스타일을 변경한다.
  // border 속성을 설정하겠다. (테두리 디자인 적용)
  rect.style.border   = '4px solid ' + rect_bg;
  circle.style.border = '4px solid ' + circle_bg;
  // 탐색(Traversing)
  // parentNode
  console.log('rect 변수가 참조하는 객체의 부모노드는?:', rect.parentNode);
  // firstChild
  console.log('rect 변수가 참조하는 객체의 첫번째 자식노드는?:', rect.firstChild);
  // lastChild
  console.log('rect 변수가 참조하는 객체의 마지막 자식노드는?:', rect.lastChild);
  // .rect 요소노드의 첫번째 자식 요소노드 <strong>을 변수에 참조
  var rect_firstchild = rect.firstChild;
  // nextSibling
  console.log('rect_firstchild의 다음 형제 노드는?:', rect_firstchild.nextSibling);
  // previousSibling
  var rect_firstchild_next_sibling = rect_firstchild.nextSibling;
  console.log('rect_firstchild_next_sibling의 이전 형제 노드는?:', rect_firstchild_next_sibling.previousSibling);

  console.log('%c------------------------------', 'color: #fe4940');

  // parentNode
  console.log('circle 변수가 참조하는 객체의 부모노드는?:', circle.parentNode);
  // firstChild
  console.log('circle 변수가 참조하는 객체의 첫번째 자식노드는?:', circle.firstChild);
  // lastChild
  console.log('circle 변수가 참조하는 객체의 마지막 자식노드는?:', circle.lastChild);
  // .circle 요소노드의 첫번째 자식 요소노드 <strong>을 변수에 참조
  var circle_firstchild = circle.firstChild;
  // nextSibling
  console.log('circle_firstchild의 다음 형제 노드는?:', circle_firstchild.nextSibling);
  // previousSibling
  var circle_firstchild_next_sibling = circle_firstchild.nextSibling;
  console.log('circle_firstchild_next_sibling의 이전 형제 노드는?:', circle_firstchild_next_sibling.previousSibling);
}


// 이벤트
// window 로드된 후에 실행되는 이벤트
// load event
window.onload = init;


// --------------------------------------------------------------------------------

function printHTMLElements() {
  var html, head, body;

  html = document.documentElement;
  head = document.head;
  body = document.body;

  console.log('html:', html);
  console.log('head:', head);
  console.log('body:', body);
}

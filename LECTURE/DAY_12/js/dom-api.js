/*! dom-api.js © yamoo9.net, 2017 */

// 생성 (요소노드, 텍스트노드, *코멘트노드)
// 삽입
// 제거
// 대체 replace(), change()
// 복제

// ----------------------------------------------------
// Section 요소노드 하위에 li 요소노드를 클릭하면
// 해당 li 요소노드에 active 클래스 속성이 추가된다.
// Section 요소노드를 변수에 참조(Reference)한다.
// 하위의 li를 수집하여 클릭 이벤트를 연결한다.

// var sections = queryAll('[class*="section-"]');
// console.log('sections:', sections);

var section_a, section_b;
section_a = query('.section-A');
section_b = query('.section-B');
// console.log('section_a:', section_a);
// console.log('section_b:', section_b);

// 각 섹션 영역의 리스트 아이템 수집
var section_a_lis = queryAll('li', section_a);
var section_b_lis = queryAll('li', section_b);
// console.log('section_a_lis:', section_a_lis);
// console.log('section_b_lis:', section_b_lis);

// assignActiveClass 함수 정의
var assignActiveClass = function(clicked_target) {
  // console.log('assignActiveClass:', clicked_target);
  // return; // 함수 종료
  // ----------------------------------------------------
  // 클릭된 li 요소노드의 부모노드로 접근하여,
  // 부모노드의 자식 중 활성화된 active 클래스를 가진 요소를 찾아
  // 해당 요소에 class 속성 값을 제거한다.
  var actived_li = null;
  var parent = clicked_target.parentNode;
  actived_li = query('.active', parent);
  if(actived_li !== null) {
    actived_li.removeAttribute('class');
  }
  // clicked_target === 사용자가 클릭한 li 요소노드를 가리킨다.
  clicked_target.setAttribute('class', 'active');
};

var detectActivateState = function(child_node) {
  var cross_actived = null;
  if ( child_node.parentNode === section_a ) {
    // 사용자가 클릭한 li의 부모가 section-A인 경우
    // console.log('A');
    cross_actived = query('.active', section_b);
  } else {
    // 사용자가 클릭한 li의 부모가 section-B인 경우
    // console.log('B');
    cross_actived = query('.active', section_a);
  }
  return cross_actived;
};

var switchNode = function() {
  var our_actived = this;
  var cross_actived = detectActivateState(our_actived.parentNode);
  if ( cross_actived !== null ) {
    // change(교체할노드, 교체될노드);
    change(our_actived, cross_actived);
    // 활성화 아이템을 비활성화
    cross_actived.removeAttribute('class');
  } else {
    // 사용자가 클릭한 대상을 활성화
    assignActiveClass(our_actived);
  }
};

// 반복문을 사용하여 수집된 li 요소노드에 일괄적으로 이벤트를 연결
for ( var i=0; i<section_a_lis.length; i=i+1 ) {
  var section_a_li = section_a_lis.item(i);
  section_a_li.onclick = switchNode;
}
for ( var i=0; i<section_b_lis.length; i=i+1 ) {
  var section_b_li = section_b_lis.item(i);
  section_b_li.onclick = switchNode;
}


// --------------------------------------------------------------------------------


/*! dom-api-tester.js © yamoo9.net, 2017 */
// buttons
//  - prepend, append 버튼의 경우 (.tester)
//  - before, after 버튼의 경우 (.tester *:last-child)

// 1) 버튼 수집, 각 버트에 이벤트 연결, 확인
var prepend_btn, append_btn, before_btn, after_btn;
prepend_btn = query('.prepend-button');
append_btn  = query('.append-button');
before_btn  = query('.before-button');
after_btn   = query('.after-button');

// 2) .tester, .repo 찾기
// .tester 영역
//  - 마지막 자식 요소 기점(기준)
var tester = query('.tester');
// var tester_last_child = query('.tester > :last-child');
// .repository 영역
//  - 첫번쩨 자식 요소(이동 객체)
var repo = query('.repository');
// var repo_first_child = query('.repository > :first-child');
// console.log('tester_last_child:', tester_last_child);
// console.log('repo_first_child:', repo_first_child);

// 3) 이벤트 연결
append_btn.onclick = function() {
  // console.log('clicked append_btn');
  // .repository 요소의 첫번째 자식요소노드를 .tester 내부 마지막 자식요소노드로 이동
  append(tester, repo.children[0]);
};
prepend_btn.onclick = function() {
  // console.log('clicked prepend_btn');
  prepend(tester, repo.children[0]);
};

var tester_target = null;

var oneClickActivation = function() {
  // console.log(this);
  tester_target = this;
  this.setAttribute('class', 'activation');
  tester.children[0].onclick = null;
  tester.children[1].onclick = null;
};

tester.children[0].onclick = oneClickActivation;
tester.children[1].onclick = oneClickActivation;

before_btn.onclick = function() {
  // 검증 tester_target이 null 이라면?
  // 사용자에게 정보를 제공하자.
  // console.log('tester_target:', tester_target);
  if ( tester_target === null ) {
    window.alert('왼쪽에 위치한 tester 목록 아이템 중 하나를 선택하세요.');
    return;
  }
  before(repo.children[0], tester_target);
  // console.log('clicked before_btn');
};
after_btn.onclick = function() {
  // console.log('clicked after_btn');
  if ( tester_target === null ) {
    window.alert('왼쪽에 위치한 tester 목록 아이템 중 하나를 선택하세요.');
    return;
  }
  after(tester_target, repo.children[0]);
};

/*! dom-api-tester.js © yamoo9.net, 2017 */
// buttons
//  - prepend, append 버튼의 경우 (.tester)
//  - before, after 버튼의 경우 (.tester *:last-child)

// 1) 버튼 수집, 각 버트에 이벤트 연결, 확인
var prepend_btn, append_btn, before_btn, after_btn, remove_btn;

prepend_btn = query('.prepend-button');
append_btn  = query('.append-button');
before_btn  = query('.before-button');
after_btn   = query('.after-button');
remove_btn  = query('.remove-button');

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

var assignWillRemoveClass = function() {
  this.setAttribute('class', 'will-remove');
};

for (var i=0; i<repo.children.length; i=i+1) {
  repo.children[i].onclick = assignWillRemoveClass;
}
// repo.children[0].onclick = assignWillRemoveClass;
// repo.children[1].onclick = assignWillRemoveClass;
// repo.children[2].onclick = assignWillRemoveClass;
// repo.children[3].onclick = assignWillRemoveClass;
// repo.children[4].onclick = assignWillRemoveClass;
// repo.children[5].onclick = assignWillRemoveClass;

remove_btn.onclick = function() {
  // console.log(this);
  // .reposity 내부에서 .will-remove 요소를 찾아
  // 부모노드로부터 .will-remove 요소노드를 제거한다.
  // var remove_els = repo.querySelectorAll('.will-remove');
  var remove_els = queryAll('.will-remove', repo);
  if ( remove_els.length === 0) {
    window.alert('오른쪽에 위치한 repository 아이템 중 하나를 반드시 클릭하셔서 제거할 대상을 선택해주셔야 합니다.');
    return;
  }
  for ( var i=0; i<remove_els.length; i=i+1 ) {
    remove(remove_els[i]);
  }
  // remove_el.parentNode.removeChild(remove_el);
  // remove(remove_el);
};


// --------------------------------------------------------------------------------
// replaceChild() 실습
// <h1 class="alternate-h1">DOM API 완전 정복 했다! :-)</h1>
// 1) .replace-button 찾기
var replace_btn = query('.replace-button');
var replaced_h1 = query('.replaced-h1');
var alt_h1 = document.createElement('h1');
alt_h1.setAttribute('class', 'alternate-h1');
var alt_h1_content = document.createTextNode('DOM API 완전 정복 했다! :-)');
append(alt_h1, alt_h1_content);
// console.log('alt_h1:', alt_h1);
// 2) .replace-button 요소노드 클릭 이벤트 설정(연결)
replace_btn.onclick = function() {
  // console.log(this);
  replaced_h1.parentNode.replaceChild(alt_h1, replaced_h1);
};
// 3) .replaced-h1 대신 직접 생성한 요소노드를 대체하기 (헬퍼함수 replace() 만들어 보기)


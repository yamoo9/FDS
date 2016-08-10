/**
 * ----------------------------------------------------------------
 * DOM API
 * ----------------------------------------------------------------
 * target_node.parentNode.replaceChild(replace_node, target_node)
 * node.cloneNode()
 * node.isEqualNode() (DOM Lv3, IE 호환 가능)
 * node.contains(other_node) (DOM Lv4, IE 호환 가능)
 * ---------------------------------------------------------------- */

// 노드 교체(※ 위치를 교체하는 것이 아니라, 이전 노드를 삭제하지만 결과 값으로 반환된다.)
var replace_p = createNode('p', 'replaced paragraph.');
var body_firstElChild = body.replaceChild(replace_p, body.children[0]);

// 노드 복사
var clone_replace_p = replace_p.cloneNode(); // <p>만 복제
var deep_clone_replace_p = replace_p.cloneNode(true); // <p>의 모든 것을 복제

// console.log('일반 복제:', clone_replace_p);
// console.log('깊은 복제:', deep_clone_replace_p);

// prependChild(body, deep_clone_replace_p);

// for (var i=0; i<10; i++) {
//   prependChild(body, deep_clone_replace_p);
// }

// 코드 설계
// 이 함수는 어떤 일을 하나?
// 전달된 2개의 노드 위치를 교체한다.
// 이 함수를 왜 만들어야 하나? (feat. 신고운)
// 매개변수 1: 이동시키고자 하는 노드
// 매개변수 2: 이동시키고자 하는 목표가 되는 노드
function changePositionNodes(moving_node, target_node) {
  // moving_node의 위치를 기억하기 위한 위치 변수로 다음 노드를 참조.
  var next_node = moving_node.nextSibling;
  // moving_node의 부모 노드가 존재하는지 유무를 파악하기 위한 변수.
  var parent_node = moving_node.parentNode;
  // 교체 과정에서 사라진 노드를 변수에 기억시킴.
  var removed_node = target_node.parentNode.replaceChild(moving_node, target_node);
  // 다음 노드가 존재할 경우
  if (next_node) {
    next_node.parentNode.insertBefore(removed_node, next_node);
  }
  // 부모 노드가 존재할 경우
  else if (parent_node) {
    parent_node.appendChild(removed_node);
  }
  // 부모 노드가 존재하지 않을 경우
  else {
    return removed_node;
  }
}

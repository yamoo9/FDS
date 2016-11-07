// 함수형 프로그래밍
function insertAfter( insert_node, target_node ){
  // target_node -> insert_node
  // insertBefore
  // appendChild

  // 전달인자 검증
  // 요소노드인지

  // 조건 1. target_node의 뒤에 형제 노드가 있는 경우
  var next_sibling = target_node.nextSibling;
  if ( next_sibling ) {
    next_sibling.parentNode.insertBefore(insert_node, next_sibling);
  }
  // 조건 2. target_node의 뒤에 형제 노드가 없는 경우
  else {
    target_node.parentNode.appendChild(insert_node);
  }
}

// DOM API Standard
// target_node.parentNode.insertBefore(insert_node, target_node);

console.log('%c------------------------------', 'color: #3d9a21');

// 객체형 프로그래밍
// Node 생성자의 prototype 확장
// target_node.parentNode.insertAfter(insert_node, target_node);
// parent.insertAfter(insert_node, parent.childNodes);

//  Node.prototype을 확장하는 것은 극히 위험한 일로 권장하지 않습니다!!!!
Node.prototype.insertAfter = function(insert_node, target_node) {
  // 검증
  if ( this !== target_node.parentNode ) { throw new Error('목표노드의 부모 노드를 확인'); }
  // 실현
  var next_sibling = target_node.nextSibling;
  if ( next_sibling ) {
    next_sibling.parentNode.insertBefore(insert_node, next_sibling);
  } else {
    this.appendChild(insert_node);
  }
};
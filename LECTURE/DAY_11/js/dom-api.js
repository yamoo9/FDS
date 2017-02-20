/*! dom-api.js © yamoo9.net, 2017 */

// .parent, .target, .insert, .insert-action-button
var parent = query('.parent');
var target = query('.target');
var insert = query('.insert');
var button = query('.insert-action-button');
// console.log('parent:', parent);
// console.log('target:', target);
// console.log('insert:', insert);
// console.log('button:', button);

// .insert-action-button을 사용자가 클릭하면
button.onclick = function() {
  // console.log('clicked button');
  // .insert 요소노드를 .target 요소노드 앞에 삽입한다.
  // 목표노드.부모노드.insertBefore(삽입노드, 목표노드)

  // 경우 1. target의 부모를 이미 알고 있을 때
  // parent.insertBefore(insert, target);

  // 경우 2. target의 부모를 모를 때
  // target.parentNode.insertBefore(insert, target);

  // 경우 3-1. 헬퍼함수 prepend()를 활용한 예
  prepend(target.parentNode, insert);

  // 경우 3-2. 헬퍼함수 append() 사용
  // append(target.parentNode, insert);
};

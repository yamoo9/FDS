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
	var next_node = moving_node.nextSibling;
	target_node.parentNode.replaceChild(moving_node, target_node);
	if (next_node) {
		next_node.parentNode.insertBefore(target_node, next_node);
	} else {
		moving_node.parentNode.appendChild(target_node);
	}
}
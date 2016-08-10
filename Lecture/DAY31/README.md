###### Front-End Develop SCHOOL

# DAY 31

###Helper 함수 만들기

```javascript
// 사용자 정의 remove 함수
function remove(to_be_removed_node){
	to_be_removed_node.parentNode.removeChild(to_be_removed_node);
} 

// createElement + createTextNode, 요소 노드를 생성한 후 내부에 텍스트노드를 자식 노드로 삽입
function createNode(node, text){
	if ( !node ) { throw new Error('첫 번째 인자는 반드시 입력해야 합니다'); }
	if (typeof node !== 'string') { throw new Error('첫 번째 인자는 엘리먼트 문자열이어야 합니다');}
	var new_node = document.createElement(node);
	if ( (typeof text !== 'undefined') && (typeof text === 'string') ) {
		var new_text = document.createTextNode(text);
		new_node.appendChild(new_text);
	}
	return new_node;
}

// 사용자 정의 changeNodePosition(a, b)
// -- 코드 설계 --
// 이 함수는 무슨 일을 하나? - 이미 존재하는 두 노드의 위치를 맞바꾼다
// 이 함수를 왜 만들어야 하나?
// 매개변수 1: 이동시키고자 하는 노드
// 매개변수 2: 이동시키고자 하는 목표가 되는 노드
function changeNodePosition(moving_node, target_node) {
	// moving_node의 위치를 기억하기 위한 위치 변수로 다음 노드 참조
	var next_node = moving_node.nextSibling;
	// moving_node의 부모 노드가 존재하는지 유무르 판단하기 위한 변수 할당
	var parent_node = moving_node.parentNode;
	//  교체 과정에서 사라진 노드를 변수에 기억시킴
	var removed_node = target_node.parentNode.replaceChild(moving_node, target_node)

	if (next_node) {
		next_node.parentNode.insertBefore(removed_node, next_node)
	} else if (parent_node) {
		parent_node.appendChild(removed_node);
	} else {
		return removed_node
	}
}
```

-

###DOM API

 - replaceChild(replace_node, target_node)

```javascript
// 사용법은 insertBefore와 유사하다
// 노드 교체, 기존에 있던 target_node는 리턴된다.

var replace_p = createNode('p', 'replaced paragraph.');
body.replaceChild(replace_p, body.children[0])

var clone_replace_p = replace_p.cloneNode(); // <p>만 복제
var clone_all_replace_p = replace_p.cloneNode(true); // <p>의 모든 것을 복제

prependChild(body, clone_all_replace_p);
```
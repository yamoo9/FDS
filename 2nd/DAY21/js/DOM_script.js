// Review

// 문서객체모델 API
// DOM Lv0, Lv1, Lv2, Lv3, Lv4

// W3C에서 제정된 DOM API를 사용하여
// HTML 문서를 JavaScript를 사용하여
// 객체를 생성하거나, 제거하거나, 조작하는 것을 말한다.

////////////////////
// Node Interface //
////////////////////

// window.document 객체는 노드의 집합

// 각 노드는 유형이 구분
// 1 요소노드(ElementNode)
// 2 속성노드(AttributeNode)
// 3 텍스트노드(TextNode)
// 8 주석노드(CommentNode)
// 문서유형정의노드(DoctypeNode)

// 노드의 속성
// DOM Lv0에서 사용되던 오래된 속성은 아래와 같은 방법으로 접근이 가능하다.
// HTML DOM 방식 [Getter | Setter]
// .id
// .title
// .className
// 반면 새롭게 등장한 속성들은 XML DOM 방식으로 속성 값을 가져와야 한다.
// [Getter] .getAttribute(key),
// [Setter] .setAttribute(key, value)
// .getAttribute('aria-labelledby');
// .getAttribute('data-ng-app');
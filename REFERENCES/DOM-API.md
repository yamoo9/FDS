
## 자주 사용되는 DOM API

### Node 속성

- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling
- parentNode
- nodeType
- nodeName
- nodeValue

### Node 메서드

- hasChildNodes()
- appendChild()
- insertBefore()
- removeChild()
- replaceChild()
- cloneNode()
- [contains()](https://developer.mozilla.org/en-US/docs/Web/API/Node/contains)
- [isEqualNode()](https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode) (IE 9+)
- [compareDocumentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition) (IE 9+)

### Document 메서드

- createElement()
- createTextNode()

### HTML*Element 속성

- children
- firstElementChild
- lastElementChild
- nextElementSibling
- previousElementSibling
- innerHTML
- outerHTML
- innerText
- [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) (IE 9+)
- [childElementCount](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount) (IE 9+)

### HTML*Element 메서드

- getAttribute()
- setAttribute()
- removeAttribute()
- [insertAdjacentHTML()](https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML)
- [insertAdjacentElement()](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)
- [insertAdjacentText()](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText) (IE ?)

#### 특징(주의 할 점!)

- `innerHTML`은 HTML 텍스트 코드를 실제 DOM 노드로 변환한다.
- `textContent`는 HTML 텍스트 코드를 단순히 텍스트로 출력한다.
- `document.write()` 구문은 로딩 시 HTML 문서 해석을 지연/차단시키니 사용하지 않는 것이 좋다.
- `innerHTML`은 무겁고 비싼 대가를 치는 HTML 해석기를 호출하므로 사용에 주의가 요구된다.
- `insertAdjacentHTML()`은 `beforebegin`, `afterend` 옵션은 노드가 문서 트리에 존재하고 부모 요소노드를 가진 경우에만 동작한다.
- `textContent`는 모든 요소의 내용을 가져올 수 있다. 반면 `innerText`는 그렇지 않다.
- `innerText`는 `textContent`와 달리 숨겨진 요소들의 텍스트는 반환하지 않는다.
- `insertBefore()` 사용 시, 두번째 인자를 전달하지 않으면 `appendChild()`처럼 동작한다.
- `cloneNode()` 사용 시, 모든 속성/값(인라인 이벤트 포함)을 복제한다. 하지만 외부 스크립트에 연결된 이벤트는 복제하지 않는다.
- `cloneNode()` 사용 시, `id` 속성을 사용할 경우 문서 내 `id` 속성 값이 중복되니 주의가 요구된다.

#### Nodelist & HTMLCollection

Nodelist는 새로운 API(e.g `.querySelector()`)를 사용하여 수집한 집합을 말하며, HTMLCollection은 과거의 API(e.g `document.images`)를 사용하여 수집한 집합을 말한다. 이들은 배열 객체(Array Object)와 유사하여 유사 배열 객체(Array Like Object)라고 부른다.

- 집합은 정적(Static)일 수 있다. 이는 집합에 포함된 노드들이 현재 문서에 대한 스냅샷(Snapshot)이라는 것이다.
- 기본적으로 노드는 문서에 구조화된 트리(Tree) 순서에 따라 정렬된다. 요컨데 순서대로 수집된다.
- `length` 속성을 사용하여 집합 내 노드의 개수를 알 수 있다.




## DOM API

자주 사용되는 DOM API를 정리해보자.

### DOM 선택 API 메서드

- getElementById()
- getElementsByTagName()
- getElementsByClassName() (IE 9+)
- querySelector() (IE 8+ CSS2 선택자로 제한, IE 9+)
- querySelectorAll()
- [matches()](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) (IE 9+ `ms` 프리픽스 필요)
  - msMatcheSelector()

#### 특징(주의 할 점!)

querySelector(), querySelectorAll() 메서드로 수집된 집합은 다른 선택 API 메서드와 달리 라이브 상태가 아니다. 일종의 수집 상태를 기억하는 스냅샷이다. 즉, 문서의 변경된 내용이 반영되지 않는다. 반면 getElementsByTagName(), getElementsByClassName()으로 수집된 집합은 라이브 상태이다.

-

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

-

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

-

### Document 메서드

- createElement()
- createTextNode()

-

### HTML*Element 속성

- children
- firstElementChild
- lastElementChild
- nextElementSibling
- previousElementSibling
- attributes (이 속성을 통해 반환되는 유사 배열 집합은 라이브 상태, 즉 실시간으로 변경된다)
- innerHTML
- outerHTML
- innerText
- [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) (IE 9+)
- [childElementCount](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount) (IE 9+)
- classList (IE 10+)
  - add()
  - remove()
  - contains()
  - toggle()
- dataset (JavaScript 객체로 `data-*` 속성에 사용된 `-`은 모두 camelCase로 처리하여 사용)

-

### HTML*Element 메서드

- getAttribute()
- setAttribute()
- removeAttribute()
- hasAttribute() (요소노드에 속성이 있으면 값이 없어도 `true`를 반환, `Boolean` 속성 반환 값일 경우 상태 확인 가능)
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

-

### HTML*Element 스타일

- style
  - `-` 표기 대신 camelCase 사용
  - `float`는 이미 JavaScript에 있으므로 `cssFloat` 사용
  - 인라인 스타일(`style=""`) 속성 값만 가져올 수 있음
  - `cssText`를 사용하거나, `getAttribute('style')`, `setAttribute()`, `removeAttribute()`를 사용하여 조작 가능.
- getComputedStyle() (IE 9+)
  - 최종 계산된 스타일 설정 값을 가져올 수 있음

-

### TextNode 속성/메서드

- data | nodeValue
- textContent
- appendData()
- insertData()
- deleteData()
- replaceData()
- substringData()
- splitText()
- normalize()

---

## [CSSOM](https://developer.mozilla.org/ko/docs/Web/API/CSS_Object_Model), [View Module](https://www.w3.org/TR/cssom-view-1/)

CSSOM은 CSS Object Model을 말한다.

CSSOM View Module 사양의 대부분 속성은 라이브 상태로 접근 시마다 매번 계산되며, 읽기 전용 속성이다.
<br>(`scrollLeft`, `scrollTop` 제외)

### 요소노드 측정(Geometry)

`offsetLeft`, `offsetTop`, `offsetParent` 속성은 HTMLElement 객체의 확장.

- offsetLeft
- offsetTop
- offsetParent

`getBoundingClientRect()` 메서드를 사용하면 뷰포트(Viewport) 왼쪽 상단을 기준으로 요소노드의 외부 테두리 위치를 알려준다.

- getBoundingClientRect() (IE 9+, IE<=11 Bug)
  - top
  - right
  - bottom
  - left
  - width (content-box + padding-box + border-box | offsetWidth 동일)
  - height (content-box + padding-box + border-box | offsetHeight 동일)

#### 테두리(Border)를 제외한 박스 크기

테두리를 제외한 박스 크기를 구할 경우 아래 속성을 사용할 수 있다.

- clientWidth (content-box + padding-box)
- clientHeight (content-box + padding-box)

#### 테두리(Border), 내부 공간(Padding)을 제외한 박스 크기

테두리, 내부 공간을 제외한 박스 크기를 구할 경우 아래 속성을 사용할 수 있다.

- width (content-box)
- height (content-box)

-

### 스크롤링 측정

스크롤 가능한 요소의 크기를 얻을 때 사용된다.

- scrollWidth
- scrollHeight

스크롤 되어 뷰포트에서 보이지 않는 영역의 픽셀을 구하고자 할 때 사용된다.

- scrollLeft
- scrollTop

전달인자가 `true`(기본 값)일 경우 요소의 top 위치로 스크롤 되며, `false`일 경우 bottom 위치로 스크롤 된다.

- scrollIntoView()



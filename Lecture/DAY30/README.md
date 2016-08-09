###### Front-End Develop SCHOOL

# DAY 30

## DOM API

### 1. 선택

- `document.getElementById('id name')`
- `.getElementsByTagName('element node(tag) name')`
- `.getElementsByClassName('class attribute value name')`
- `.querySelector('css selector')`
- `.querySelectorAll('css selector')`

### 2. 탐색

- `.firstChild`
- `.firstElementChild` (IE 9+)
- `.lastChild`
- `.lastElementChild` (IE 9+)
- `.parentNode`
- `.parentElement` (DOM Lv4)
- `.childNodes`
- `.children`
- `.previousSibling`
- `.previousElementSibling` (IE 9+)
- `.nextSibling`
- `.nextElementSibling` (IE 9+)

### 3. 조작

- `parent_node.appendChild(child_node)`
- `target_node.parentNode.insertBefore(insert_node, target_node)`
- `parent_node.removeChild(child_node)`
- `target_node.parentNode.replaceChild(replace_node, target_node)`
- `node.cloneNode()`
- `node.hasChildNodes()`
- `node.isEqualNode()` (DOM Lv3, IE 호환 가능[#](https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode))
- `node.contains(other_node)` (DOM Lv4, IE 호환 가능[#](https://developer.mozilla.org/en/docs/Web/API/Node/contains))
- `node.normalize()` (DOM Lv2, IE 호환 가능[#](https://developer.mozilla.org/en-US/docs/Web/API/Node/normalize))
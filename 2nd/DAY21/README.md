###### Front-End Develop SCHOOL

# DAY 21
## 1. NPM 패키지 정보 생성
### 1.1. 생성 방법
- npm 초기화
```
$  npm init
```

- 설정
```
 name: 이름
 version: 버전
 description: 설명
 entry point: 엔트리 포인트
 test command: 테스트 커맨드
 git repository: 깃 저장소
 keywords: 키워드
 author: 작성자
 license: 저작권
```

- 설정없이 자동 생성
```
$  npm init -y
```

### 1.2. 생성된 json 패키지
- json 문자열은 쌍따옴표("")만 사용해야 한다.
- `"scripts"`내에 원하는 명령어를 작성
```json
{
  "name": "dom-script-using-sass",
  "version": "1.0.0",
  "description": "my DOM Script project using sass",
  "scripts": {
    "sass": "node-sass sass -o css -w -r",
    "serve": "http-server -o -a localhost -p 9090",
    "start": "npm run sass | npm run serve"
  },
  "keywords": [
    "sass",
    "domscript"
  ],
  "author": "DA"
}
```

### 1.3. 패키지 실행
- 기본 문법
```
$  npm scripts의 속성값
```
- 실행 예
```
$  npm sass

$  npm serve

$  npm start
```


---

## 2. DOM
### 2.1. Node Interface
#### 2.1.1. 노드 유형
```js
요소 노드 ELEMENT_NODE = 1
속성 노드 ATTRIBUTE_NODE = 2
텍스트 노드 TEXT_NODE = 3
          .
          .
          .
주석 노드 COMMENT_NODE = 8
          .
          .
문서유형정의 노드 DOCUMENT_TYPE_NODE = 10
          .
          .
          .

```
#### 2.1.2. 노드 속성 접근
- HTML DOM 방식 [Getter | Setter]

DOM Lv0에서 사용되던 오래된 속성은 아래와 같은 방법으로 접근

```js
.id

.title

.className
```

- XML DOM 방식

새롭게 등장한 속성들은 XML DOM 방식으로 접근한다.
```js
[Getter] .getAttribute(key)

[Setter] .setAttribute(key, value)
```

### 2.2. DOM API : Selection 1
- id 속성으로 객체를 찾는 방법
```js
.getElementById()
```
- 요소 이름으로 객체를 찾는 방법 [집합]
```js
.getElementsByTagName()
```
- 클래스 속성으로 요소를 찾는 방법 [집합]
```js
.getElementsByClassName()
```


### 2.3. DOM API : Selection 2
- CSS 선택자로 객체를 찾는 방법 [단수, 노드]
```js
.querySelector()
```
- CSS 선택자로 객체를 찾는 방법 [집합, 노드리스트]
```js
.querySelectorAll()
```

### 2.4. DOM API: Creation 1
- 요소 노드 생성
```js
.createElement()
```
- 속성 추가
```js
.createAttribute()

.setAttribute()
```
> `createAttribute()` 메서드는 `속성(Key)`만을 생성하고 `속성 값(Value)`은 추가로 코드를 작성해야 하므로 코드 양이 많아진다.
따라서 `속성(Key)`과 `속성 값(Value)`를 함께 작성할 수 있는 `setAttribute()` 메서드를 사용한다.

- 텍스트 노드 생성
```js
.createTextNode()
```
- 텍스트 노드를 요소 노드의 자식으로 추가
```js
PARENT_NODE.appendChild(CHILD_NODE)
```

### 2.5. DOM API: Insertion + remove
- 노드 삽입
```js
target_node.parentNode.insertBefore(insert_node, target_node)
```
- 노드 삭제
```js
target_node.parentNode.removeChild(target_node)
```
----------

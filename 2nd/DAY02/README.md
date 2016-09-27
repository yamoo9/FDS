###### Front-End Develop SCHOOL

# DAY 02

## Javascript

자바 스크립트는 동작을 구현(Action, Behavior)하는 언어이다.

> 프론트엔드 웹 환경에서는 HTML과 함께.<br>
> 백엔드 환경에서는 JavaScript 혼자 동작 가능.

### 변수

**변수(Valiable)란?**<br>
데이터 값(Value)을 기억(Memory) 할 수 있는 공간으로<br>
식별 가능한 이름을 붙여 기억된 데이터 값을 활용.

### 상수

고정된 값 e.g) 숫자 상수 `201`, 문자 상수 `"프론트엔드"`

### 행동 1. 변수(Variable) 정의

```js
// x, y 이름으로 식별되는 기억 공간 정의
var x;
var y;
```

### 행동 2. 선언(정의)된 변수 x에 값(데이터)을 할당(대입)
```js
// 숫자(정수, 양의 정수) 상수 값 대입
x = 10;
```

### 사칙연산
```js
// 연산된 결과: 10 + 3 = 13
x = x + 3;
// x값이 10라면? y 값은? 19
y = x + 9;
```

### 행동 3. 변수 선언과 동시에 값(데이터) 할당
```js
// 변수 z 선언과 동시에 오른편의 연산식 결과 값 대입
var z = y + 10; // 19 + 10 = 29
```

### 문자 접합(용접)
```js
var language = 'this is' + ' JavaScript'; // "this is JavaScript"
```

### 브라우저에서 확인하기

> 웹 브라우저 세상에는 콘솔(console)이라고 불리는 객체(사물, Object)가 살고 있다.<br>
> 콘솔을 통해 변수를 화면에 기록(log)한다.<br>
> 예) `콘솔.기록(변수);`

```js
console.log('x:', x);
console.log('y:', y);
```

-

## `<table>` 요소

> `rowspan` : 행을 합칠때 사용.<br>
> `colspan` : 열을 합칠때 사용
> 예)<br>
> ```html
> <th colspan="4"></th>
> ```

> `scope` : "영역"을 의미. 해당 제목이 어느 방향의 내용을 가리키는 것인지 명시하는 속성.<br>
> `scope`를 적어줘야 스크린 리더가 읽어준다.<br>
> 예)
> ```html
> <th scope="row"> - 같은 row(행)에 있는 내용을 가리킴
> <th scope="col"> 같은 col(열)에 있는 내용을 가리킴.
> ```

### `<caption>`

> 반드시 `<table>` 요소 및에 위치하며, 해당 테이블에 대한 자세한 정보를 제공하기.

`<caption>` 요소를 감추는 `class` 스타일

```css
.readable-hidden {
  overflow: hidden;
  posistion: absolute;
  left: -9999em;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
}
```

### WAI-ARIA 접근성 표준

기존 HTML4에서 사용되던 `summary` 속성은 HTML5에서 지원하지 않는다.<br>
따라서 WAI-ARIA 1.0 접근성 표준을 사용하여 테이블 내용이 무엇인지 알려준다.

```html
<table aria-describedby="hd-curture-project-table-summary">...</table>
<p
  class="readable-hidden"
  id="hd-curture-project-table-summary">
  현대카드 컬처프로젝트 24 시규어 로스 티켓 예매 정보를 확인하기 위한 7행 5열로 구성된 표입니다.
</p>
```

### 기타 정보

`font-family`는 속성이 부모로부터 자식으로 상속(Inheritance)이 된다.

### 선택자

- `+`: 바로 다음에 붙어 있는 요소. 예) `a + div`
- `~`: 일반형제 선택자. 예) `a ~ div`

### Emmet 단축키 (Window 운영체제)

- Window 운영체제 > Atom  > Package검색 창 열기: `ctrl + shirf + p`
- Window 운영체제 > Atom  > Emmet 하단에 명령어 창 열기 : `ctrl + alt + enter`
- Window 운영체제 > Atom  > wrap abbreviation 기능쓰기 : `ctrl + alt + w`  : `ul>li*>a`

-

### 가상 요소 vs 가상 클래스

#### 가상 클래스

```css
a:link { color: #34c0ff; }
/* 방문한 상태 */
a:visited { color: #5f00ff; }
/* 호버 상태 */
a:hover { color: #fc0087; }
/* 포커스 상태 */
a:focus { outline: 3px solid #21ff73; }
 /* 활성화 상태 */
a:active { background: #ff0; }
```

#### 가상 요소

```css
p:first-letter {
  float: left;
  margin-right: 10px;
  font-size: 5rem;
  font-weight: 900;
  color: #2bffd4;
}
```

하위 브라우저를 호환을 위해서 가상 요소를 작성할 때는<br>
기존의 방법 `abbr:`과, CSS3부터 지원되는 방법 `abbr::`을 모두 써줘야 한다.

---

### 이번 주 목요일(2016.9.29)까지 과제

- 월요일 과제: __아티클 디자인__ `article.psd` 파일 HTML+CSS로 완성하기
- 화요일 과제: __폼 디자인__ `FDS/2nd/Resources/UI Kit - Aware/form.psd` HTML+CSS로 완성하기
- 화요일 과제: __테이블 디자인__ `현대카드 테이블` HTML+CSS로 완성하기
- ※ 위 과제를 자신의 깃헙에 (아이디/**FDS**/hc-table/**index.html**) 경로로 올리기.
- ※ 자신의 GitHub 저장소에 (아이디/**FDS**/**index.html**)에 해당 과제로 바로 갈 수 있는 링크 리스트 올리기.

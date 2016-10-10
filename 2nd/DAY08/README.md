###### Front-End Develop SCHOOL

# DAY 08

## 오전 시간

### 의미론적 속성
```js
<div class="button-group" role="group"></div>
```
> `div`을 남용하지 말자 아리아에서는` role = "group"` 속성을 주면 그룹의 의미를 가진다.


```js
<button type="button" class="button-increase-font-size" aria-label="글자 크기 키움">+</button>
```
> `aria-label`의 속성을 주면 버튼에 레이블을 읽어준다.<br>
> 컨텐츠 무시하고 aria-label을 읽어줌<br>
> 접근성 향상<br>

- ※ 크롬에서 개발자도구 (Accesibility[접근성확인도구])

### 접근성

1. 인식의 용의성
2. 운용의 용의성
3. 이해의 용의성
4. 기술적 진보성

> 1~3: 사람이 이해를 돕는 것
> 4 : 기술에 대한 이해를 처리해야한다.

### 자바스크립트 수업

#### 도큐멘트.

'.'을 사용하는 이유는 도큐멘트의 속성을 사용하기위해

#### 표기법

- ※ 변수는 밑줄를 붙이는 방식을 사용 var btn_inc
- ※ 함수는 `.querySelector()` 카멜케이스를 사용


#### query는 찾는 다는 의미
```js
.querySelector()
```

- ※ 괄호안의 선택자를 찾아라라는 의미
- ※ CSS의 선택자는 다 되지만
- ※ '>' '+' 이런 명시적이지 않은 속성은 되지 않는다.

#### `<!DOCTYPE html>`

독타입은 표준모드로 실행시키기 위해서 넣는다.

- ※ 독타입 위에 다른 코드가 들어오면 익스폴롤러에서 레이아웃이 깨질 수 있으니 조심하자
- ※ 렌더링 방식을 결정한다. 독타입은

- ※ head안에 있는 것은 디스플레이 none 정보를 제공하기 위한 코드들
- ※ `meta:viewport` , `meta:vp`
> 모바일 환경을 고려할때 사용하는 코드

#### meta tag

- ※ `meta http-equiv` 는 타이틀 요소 상위에 위치 해야한다.
> 서버와 동등하다는 의미

- ※ `meta name` 은 타이틀 요소 하단에 와야한다.


#### 스크립트를 먼저 호출 하면 안되는 이유

- ※ 스크립트 코드를 만나면 html의 해석을 멈추고 스크립트를 먼저 해석하기 때문이다.
- ※ body 위에 해더에 스크립트 코드가 있으면 body의 코드를 인식을 못한다.
- ※ 그러면 body 의 컨텐츠를 null로 인식하기에 아래에 놔야한다.



## 오후시간

### html5 outline 알고리즘 (html outliner- 크롬 플러그인 사용)

- ※ 계층구조에 div 요소는 계층구조(heading)에 영향을 안준다.
- ※ html5 이전은 `<h1>`요소를 한번만 사용가능하다.

#### Section의 암묵적인 계층구조

- ※ 섹션안에 헤딩을 하나만 사용가능하다.
- ※ 만약 섹션안에 제목을 두개 이상 가지고 있으면 계층구조가 암묵적으로 생긴다.
> 다만 시각적으로는 다르게 보이지 않는다.

- ※ 섹션 내에서는 h1을 섹션마다 한번씩 사용해도 된다.

#### 테이블 작성 순서

1. `<thead></thead>`
2. `<tfoot></tfoot>`
3. `<tbody></tbody>`

- ※ 이렇게 작성해도 브라우저상 `<tfoot></tfoot>`가 가장 아래에 시각적으로 배치가 된다.


#### 조건부 주석문

- ※ 가상 컨텐츠는 IE 6,7 는 적용이 안된다.
- ※ EMMET에서 'cc:ie':익스프롤러에서 라는 의미. 'cc:noie': 익스프롤러가 아니다라는 의미.

- ※ `!IE` 익스프롤러가 아니다.

- ※ lt (lessthan) : 미만
> [if lt IE 9] : 9미만 익스프롤러에서 (= 익스프롤러 7,8)

- ※ lte(lessthanequal) : 이하
- ※ gt - 초과
- ※ gte - 이상

#### 핵

브라우저가 가지고 있는 버그를 핵이라고 한다.

- ※ `*margin` : 스타핵
- ※ `_margin` : 언더스코어 핵

- ※ 핵을 모아놓은 사이트 (http://browserhacks.com)

#### 필터링 방식 (명시적으로 표현 가능하게 한다.)

- ※ 불법적인 방식을 사용하지 않고 각 브라우저별로 적용시키는 방식
- ※ 익스프롤러 이하는 조건부 주석문을 해당 주석문으로 처리하지 않기 때문이다.
- ※ 따로 파일을 만들지 않아도 된다.
- ※ 하나의 CSS 파일에서 식별자(class)로 관리가 가능하다.

```html
<!--[if IE 9]> <![endif]-->
```
> 9버전에서 일때

#### 스니펫

- ※ `$1` : 커서가 오게 하는 방법은 '달러'+'숫자'
- ※ `${1:ko-KR}` : ko-KR의 영역을 블록 처리한다. 방법은 달러{숫자: 내용}


### 사용자 정의 목록 디자인 (비순차, 순차, 정의)

#### 사용자 정의 - 비순차 목록 디자인
```html

<ul class="ul-color">
  <li>d1 list
    <ul>
      <li>d2 list
        <ul>
          <li>d2 list</li>
          <li>d2 list</li>
          <li>d2 list</li>
        </ul>
      </li>
      <li>d2 list</li>
      <li>d2 list</li>
    </ul>
  </li>
  <li>d1 list</li>
  <li>d1 list</li>
</ul>

```

```css

.ul-color,
.ul-color ul,
.ul-color ol {
  list-style: none;
  font-family: Verdana;
}
/*
  •  "\2022"
  ◦  "\25E6"
  ▪  "\25AA"
*/
.ul-color li:before {
  display: inline-block;
  width: 0.7em;
  margin-left: -0.7em;
  color: #69d59c;
}
.ul-color li:before {
  content: "\2022";
}
.ul-color li li:before {
  content: "\25E6";
}
.ul-color li li li:before {
  content: "\25AA";
}

```

- ※ 비순차 목록은 가상요소를 사용하여였다.

#### 사용자 정의 - 순차 목록 디자인
```html

<ol class="ol-color">
  <li><div class="ol-color-content">d1 list</div>
    <ol>
      <li><div class="ol-color-content">d2 list</div>
        <ol>
          <li><div class="ol-color-content">d2 list</div></li>
          <li><div class="ol-color-content">d2 list</div></li>
          <li><div class="ol-color-content">d2 list</div></li>
        </ol>
      </li>
      <li><div class="ol-color-content">d2 list</div></li>
      <li><div class="ol-color-content">d2 list</div></li>
    </ol>
  </li>
  <li><div class="ol-color-content">d1 list</div></li>
  <li><div class="ol-color-content">d1 list</div></li>

</ol>
```

```css

.ol-color {
  color: #69d59c;
}
.ol-color .ol-color-content {
  color: black;
}

```

- ※ 순차 목록은 클래스요소를 사용하여, 각 컨텐츠를 감싸 색상을 지정했다.

#### 사용자 정의 - 정의 목록 디자인
```html
<dl class="custom-ui-dl">
  <dt>창의적 문제해결</dt>
  <dd>더 향상된 결과를 위해, 폭넓은 시각에서 다양한 관점을 통합해 새로운 해결안을 제시함.</dd>
  <dt>창의적 문제해결 도구</dt>
  <dd>잘 알려진 창의적 문제 해결법 도출을 위한 방법론들로는 브레인 스토밍, 마인드 맵 등이 있다.</dd>
</dl>
```

```css

    .demo-dl dt {
      font-weight: 700;
      color: #69d59c;
    }
    .demo-dl dd {
      position: relative;
      width: 300px;
      margin-left: 0;
      margin-bottom: 1em;
      padding-left: 1.5em;
    }
    .demo-dl dd::before {
      content: '';
      position: absolute;
      top: 5%;
      bottom: 5%;
      left: 10px;
      width: 0;
      border-left: 3px solid #69d59c;
    }

```

#### Grid-system

- ※ 그리드 시스템에서 컨텐츠를 가리지 않고 보이게 하려면 가상요소(:before)을 사용하여 position:absolute를 시키면 된다.
- ※ `background-blend-mode: overlay;`을 사용하면 투명하게 보일 수 있다.
- ※ 재사용 가능한 모듈을 만들면 빠르게 그리드 시스템이 적용된 wire-frame을 만들 수 있다.

---

### 사용자 정의 - 목록 디자인

- [List Style: Web Style Sheets CSS tips & tricks](https://www.w3.org/Style/Examples/007/color-bullets.en.html)
- [Alt codes list](http://fsymbols.com/keyboard/windows/alt-codes/list/)

```html
<ul class="ul-color">
  <li>d1 list
    <ul>
      <li>d2 list
        <ul>
          <li>d2 list</li>
          <li>d2 list</li>
          <li>d2 list</li>
        </ul>
      </li>
      <li>d2 list</li>
      <li>d2 list</li>
    </ul>
  </li>
  <li>d1 list</li>
  <li>d1 list</li>
</ul>

<ol class="ol-color">
  <li><div class="ol-color-content">d1 list</div>
    <ol>
      <li><div class="ol-color-content">d2 list</div>
        <ol>
          <li><div class="ol-color-content">d2 list</div></li>
          <li><div class="ol-color-content">d2 list</div></li>
          <li><div class="ol-color-content">d2 list</div></li>
        </ol>
      </li>
      <li><div class="ol-color-content">d2 list</div></li>
      <li><div class="ol-color-content">d2 list</div></li>
    </ol>
  </li>
  <li><div class="ol-color-content">d1 list</div></li>
  <li><div class="ol-color-content">d1 list</div></li>
</ol>
```

```css
.ul-color,
.ul-color ul,
.ul-color ol {
  list-style: none;
  font-family: Verdana;
}
/*
  •  "\2022"
  ◦  "\25E6"
  ▪  "\25AA"
*/
.ul-color li:before {
  display: inline-block;
  width: 0.7em;
  margin-left: -0.7em;
  color: #69d59c;
}
.ul-color li:before {
  content: "\2022";
}
.ul-color li li:before {
  content: "\25E6";
}
.ul-color li li li:before {
  content: "\25AA";
}
.ol-color {
  color: #69d59c;
}
.ol-color .ol-color-content {
  color: black;
}
```

-

### 사용자정의 - 정의 목록 디자인

```html
<dl class="custom-ui-dl">
  <dt>창의적 문제해결</dt>
  <dd>더 향상된 결과를 위해, 폭넓은 시각에서 다양한 관점을 통합해 새로운 해결안을 제시함.</dd>
  <dt>창의적 문제해결 도구</dt>
  <dd>잘 알려진 창의적 문제 해결법 도출을 위한 방법론들로는 브레인 스토밍, 마인드 맵 등이 있다.</dd>
</dl>
```

```css
.custom-ui-dl {
  margin-top: 1.3125rem;
  margin-bottom: 1.3125rem;
}
.custom-ui-dl dt {
  font-weight: 700;
  color: #69d59c;
}
.custom-ui-dl dd {
  position: relative;
  width: 300px;
  margin-left: 0;
  margin-bottom: 1.3125rem;
  padding-left: 1.5em;
}
.custom-ui-dl dd::before {
  content: '';
  position: absolute;
  top: 5%;
  bottom: 5%;
  left: 10px;
  width: 0;
  border-left: 3px solid #69d59c;
}
```
###### Front-End Develop SCHOOL

# DAY 03

### DOM Script 기초

#### 변수

> 변수를 지정하는 이유는 캐시에 저장을 해서 성능을 향상시키기 위해서이다.<br>
> 변수를 저장하지 않으면 휘발적으로 값이 없어진다.<br>

※ 문서 열고 개발도구 누르고 엘리먼트 누르고 ESC누르면 콘솔창이 열림.<br>

#### 문서 객체를 찾아오는 방법 1. (단수, 1개)<br>

**id 속성으로 문서 객체를 찾는 방법**<br>
문서에서 #you 요소를 찾는다.

```js
var you = document.getElementById('you');
console.log('you:', you);
```

### 문서 객체를 찾아오는 방법 2. (복수, 여러 개 수집(Collection))

**요소(Element)의 이름으로 문서 객체들을 찾는 방법**<br>

문서에서 `<a>` 요소를 찾는다.

```js
var links  = document.getElementsByTagName('a');
console.log('links:', links);
```

> 여러 개의 `<a>` 요소들을 찾아 온다.<br>
찾아온(수집한) 문서 객체들의 목록을 Nodelist 라고 부른다.<br>
Nodelist 안에서 아이템(item)을 빼오려면 .item() 메소드를 사용해야한다.<br>

```js
var link_1 = links.item(0);
```

> 실무(현업)에서는 메소드 보다는 아래와 같은 방법을 보다 많이 사용한다.

```js
var link_2 = links[1];
```

#### `<vw>`

**viewport width** 라는 의미이다.

> 상대적으로 바뀌는 단위

## CSS

### 자식과 자손

#### 1) 자식과 자손의 선택자 표기법

`.demo.container .align-right`<br>
> 띄어쓰기가 되면 데모컨테이너 내부에서 찾는것 (자식요소)

`.demo.container.align-right`
> 하나의 요소에 두개가 해당된 것을 의미

> 익스스플로러 6버전에서는 선택자의 순서가 중요하다.<br> `.demo-container.align-right`와 `.align-right.demo-container`를 다르게 인식하지만 상위 버전에서는 구분 가능하다.

#### 2) 자식과 자손의 차이 (특정 요소를 선택하는 방법)

`.demo-containter article`
> demo-containter 안에 있는 article(자손) 모두를 찾음<br>
  ex) 총 3개

`.demo-containter > article`
> demo-containter 안에 있는 직계 자식(형제 요소들)를 찾음<br>
  ex) 아래에서는 2번째 줄의 `article`과 3번째 줄의 `article`을 의미한다

```js
<div class="demo-container align-right">
  <article></article>
  <article>
    <div>
      <article>
        <div></div>
      </article>
    </div>
  </article>
</div>
```

### 선택자
`{ }` : Grouping<br>
`*` : Universal selector<br>
> 일반적으로는 사용하지 않는 것을 권장한다.<br>
> `ul, li{ list-style: none;}`이런 방식으로 모두 초기화 시키는것은 좋지 않다.<br>
> ` .demo * {list-style: none;}` 이렇게 특정 선택자 내부에서만 사용하는 것이 좋다.<br>

`> div` : * > div 로 인식 (사용은 피하자)<br>
`+` : Adjacent Sibling Combinator(CSS2부터 사용)
> `h1+p` : + 은 반드시 뒤에 요소를 의미한다. 이것은 h1의 바로 뒤의 형제에 p요소를 의미한다.<br>
> Sibling : 형제들을 의미한다<br>
> `div#content + p` : +에 공백을 넣어도 상관없다<br>

`'~'` : General Sibling Combinator<br>
> '일반 형제' 를 의미한다.<br>

`[]` : 속성 선택자
> `[id]{}` : 문서에서 id를 가진 요소 모두를 의미<br>
`[cite="http:wiki.com/quot"]{}` : 사이트 값이 http:wiki.com/quot 가진 것을 찾는다.<br>
`p [class="note"] = p.note`<br>

`data` : date-app : date를 앞에 다가 넣으면 새로운 속성을 정의 할 수 있다.<br>
`|` : '-'(하이픈)을 의미한다.<br>




### `<nth-child>` 와 `<nth-of-type>`

#### 1)`<nth-child>`

`<nth-child>` : 부모의 n번째 자식 요소를 의미한다.

```js
<ul>
  <li><a href="">하이</a></li>
  <li><a href="">우리</a></li>
  <li><a href="">모두</a></li>
  <li><a href="">다같이</a></li>
  <li><a href="">즐겁게</a></li>
</ul>
```

> `<nth-child>`는 `<li>`에서 특정 요소를 선택할때 사용하는 것이 좋다.<br>
> 상단의 코드에서, 만약 `ul > li:nth-child(2)`라고 선택자를 표시하면 이것은 2번째 자식요소를 말한다.<br>
> 하지만 `<li>`요소가 아닌 다른 요소에서 사용 한다면 <br>
> 코드의`blockqute > p:nth-child(2)` 라고 했을때 blockqute 내부의 `<p>`요소가 <br>
> 2번째 자식 요소라는 보장이 없기 때문에 선택이 되지 않아서 오류가 발생 할수도 있다.

#### 2)`<nth-of-type>`

`<nth-of-type>` : 같은 유형의 n번째 형제를 의미한다.

```js
<blockquote cite="www.naver.com">
  <p>인용 1</p>
  <cite>스피노자</cite>
  <p>인용 2</p>
  <cite>갈릴레오</cite>
  <p>인용 3</p>
  <cite>뉴튼</cite>
</blockquote>
```

> 위의 코드에서 `blockquote` 내부에서 2번째 `p`를 선택하고자 한다면,<br>
> 위의 코드에서 `blockquote > p:nth-child(2)`를 쓰면 <br>
> 2번째 요소가 `p`가 아니기때문에 값이 출력이 되지 않는다.<br>
> 그러므로 `blockquote > p:nth-of-type(2)`를 사용해야한다.<br>

※ 하위 브라우저가 가상 클래스가 작동이 안되니 클래스를 부여하는게 좋다.<br>

#### `<q>`, `<bq>`, `<cite>`

`<q>`  : `quote`의 약자로 인용구가 짧을때 인라인 요소로 사용된다.<br>
`<bq>` : `blockquote`의 약자로 인용구가 많을때 사용한다.<br>

`<cite>` :<br>
1) 요소로써의 `cite`는 인용에 사용된 글을 이야기 한 사람 citation을 의미한다.<br>
2) 속성으로써의 `cite`는 인용한 웹페이지 주소를 표기할때 사용한다.

### 포토샵 기능

포토샵에서 여러 개를 자르기(icon)

> file > automate >Crop and stratighten photo<br>

포토샵에서 같은 색상 없애기

> select > similiar 선택후 레이어에서 masking<br>

### 상대경로와 절대경로

`../` : 현재 폴더에서 한칸 상위로 나가는 명령어<br>
`./` : 자신의 현재 위치에서 찾는 (생략해도 동일한 결과) <br>
`/` : 절대적인 하나의 경로를 기준으로 함 <br>

### 멀티커서 사용법

`컨트롤 + 쉬프트 + 방향키` : 다중으로 선택하기 위한 멀티커서를 사용가능하게 한다.<br>
`멀티커서 상태 + 알트 + 방향키` : 블럭별로 커서 이동 <br>
`멀티커서 상태 + 쉬프트 + 알트 + 방향키` :블럭 선택 <br>

> 서브라임 교육과정 https://www.inflearn.com/?post_type=course&s=sublime <br>
> MDN https://developer.mozilla.org/ko/ (공부하기 좋은 사이트) <br>

## Advanced Attrribute Select

`^` : 첫글자 (처음 부터 찾음) <br>
`$` : 끝에서 부터 찾음 <br>
`*` : 그 문자열 안에 포함이 되어있으면 전부 <br>
`[][]` : 두가지경우 모두 해당 되는 상태일때 사용 (대괄호 사이는 띄어쓰면 안된다.)<br>
> a[href^="https://"][target="_blank"] {}<br>
> href에 "http://"와 target이 블랭크 값을 가진 것을 둘다 해당되는 요소를 의미한다.

#### svg 파일에서 컬러 수정하는 방법

svg 파일 내부에 클래스 path, rect에 공통 클래스를 준다.<br>
스타일 클래스 내부에 부여된 클래스에 fill 요소의 컬러를 적용하면 된다.

-

### 웹 프론트엔드는 아주 쉽습니다...

위 문구에 :fire:**열폭**:fire:한 **프론트엔드 현업 종사자/관계자들**. :rage1: :goberserk: :rage2: :rage3: :finnadie: :goberserk: :godmode: :feelsgood:<br>
주먹:facepunch:을 부르는 문구였던 겁니다! **필살기 연타!!** :arrow_left: :arrow_lower_left: :arrow_down: :arrow_lower_right: :arrow_right: :heavy_plus_sign: :parking: :repeat:

<img src="../Assets/D3-front-end-easy-false.jpg" alt="" width="555" height="2691.75">
<img src="../Assets/D3-daguri.jpg" alt="다구리" width="555" height="363.128571429">
##Javascript
자바 스크립트는 동작을 구현(Action, Behavior)하는 언어이다.


>프론트엔드 웹 환경에서는 HTML과 함께.

>백엔드 환경에서는 JavaScript 혼자 동작 가능.

###변수

컴퓨터가 값을 정의 할 수 있는 공간.(valiable value)

###상수

고정된 값


###행동 1 변수(Variable) 정의
```javascript
  var x;
  
  var y;
```

###행동2 선언(정의)된 변수 x에 값(데이터)을 할당(대입)
```javascript
  x = 10; // 숫자 (정수, 양의 정수)
  ```

###사칙연산
```javascript
  x = x + 3; // 13
  
  y = x + 9; // x값이 10라면? y 값은? 19
  ```

###행동3  변수 선언과 동시에 값(데이터) 할당
```javascript
  var x = y + 10;
```

###문자 접합(용접)
```javascript
  var language = 'this is' + 'JavaScript';
  --> this is JavaScript
  ```

###브라우저에서 확인하기
웹 브라우저 세상에는 콘솔(console)이라고 불리는 객체(사물, Object)가 살고 있다.

이 데이터를 참조한 변수를 화면에 기록(log)해준다.

예)콘솔.기록(변수);
```javascript
console.log('x:', x);
console.log('y:', y);
```


## &lt;table&gt; 태그
>rowspan : 행을 합칠때 사용.

예) 
```html
<th colspan="4"></th>
```
>colspan : 열을 합칠때 사용


>scope :  "영역"을 의미. 해당 제목이 어느 방향의 내용을 가리키는 것인지 명시하는 속성.

>scope를 적어줘야 스크린 리더가 읽어준다.

>예)
```html
<th scope="row"> - 같은 row(행)에 있는 내용을 가리킴
```
```html
<th scope="col"> 같은 col(열)에 있는 내용을 가리킴.
```


###<caption>
>반드시 &lt;table&gt; 태그 및에 위치하며, 해당 테이블에 대한 자세한 정보를 제공하기.

&lt;caption&gt;태그를 감추는 속성
```css
.readable-hidden {
  overflow: hidden;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
}
```

### ARIA 기법

summary 속성은 html5 에서 지원하지 않는다.

따라서 WAI-ARIA 1.0 기법을 이용하여 테이블 내용이 무엇인지 알려준다.


```html
<table aria-describedby="hd-curture-project-table-summary">
<p class="readable-hidden" id="hd-curture-project-table-summary">현대카드 컬처프로젝트 24 시규어 로스 티켓 예매 정보를 확인하기 위한 7행 5열로 구성된 표입니다.</p>
```

###기타 정보.
font-family는 속성이 상속이 된다.


###선택자
&#43; : 바로 다음에 붙어 있는 요소. 예) a+div

~ : 일반형제 선택자. 예)a~div

###Emmet 단축키 (Window 운영체제)

Window 운영체제 > Atom  >Package검색 창 열기: ctrl + shirf + p


Window 운영체제 > Atom  > Emmet 하단에 명령어 창 열기 : ctrl + alt + enter


Window 운영체제 > Atom  > wrap abbreviation 기능쓰기 : ctrl + alt + w  : ul>li*>a

##가상 요소 &amp; 가상 클래스

###가상 클래스

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

###가상 요소
```css
p:first-letter {
      font-size: 5rem;
+     font-weight: 900;
      float: left;
+     margin-right: 10px;
      color: #2bffd4;
    }
```
하위 브라우저를 위해서 가상 요소를 작성할때는
abbr:, abbr:: 두번을 써주기.


#이번주 목요일(2016.9.29)까지 과제
1. 월요일에 수업한 article.psd 파일 html 및 css로 완성하기.
2. 화요일에 수업한 FDS/2nd/Resources/UI Kit - Aware/form.psd html 및 css로 완성하기.
3. 화요일에 수업한 현대카드 테이블 html 및 css 로 완성하기. - 야무님 github 에 html 및 css 참고할 수 있음.

## 위 과제를 자신의 깃헙에 (아이디/*FDS*/hc-table/*index.html*) 경로로 올리기.
## 자신의 깃헙(아이디/*FDS*/*index.html*) 에 해당 과제로 바로 갈 수 있는 링크 리스트올리기.

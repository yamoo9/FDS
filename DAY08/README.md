###### Front-End Develop SCHOOL

# DAY 08

### 수행 과제

- [06/30] CSS Selector 분류 표 작성(`Markdown` 사용)해서 GitHub 저장소에 등록. ※ [W3C, Selectors Level 3](https://www.w3.org/TR/selectors/#selectors) 참고.
- [06/30] 팀 엑티비티 코드 리뷰 로그(Code Review Log), 리팩토링 결과 정리하여 GitHub 저장소에 등록.
- [06/30] 배운 내용을 토대로 시험 문제 20문항 출제. (주관식 최대 5개)
- [06/30] PSD, Sketch 를 사용하여 웹 서비스 와이어프레임 제작.<br>
  ![wireframe](../Assets/wireframe.png)
- [06/30] 오늘 과제 (코드 구현 후, Github 저장소에 등록)
	- [참조: Vertical Centering using CSS](http://www.student.oulu.fi/~laurirai/www/css/middle/)
		- Common code of examples
		- Using line-height (and vertical-align)
		- Using display:table-cell
		- Using line-height and display:inline-block
	- 본문의 높이를 vh를 이용하지 않고 브라우저 창 가득 채우기 (참조: Keynote CSS - 03 Box-Model 63~69페이지)


-

### 진행 내용

- CSS 박스모델
- CSS 상속
- CSS 타이포그래피 속성
- CSS 배경 속성
- CSS 레이아웃 속성

-

###CSS 박스모델

####페이지폭 설정과 가로중앙 정렬
```html
	<div class="print-data-attr page" data-name="page">
		<div class="print-data-attr inner-page" data-name="inner-page"></div>
	</div>
```
```css
.page {
	width: 50vw; /* viewport width 모바일 대응 */
	background: #000;
	heght: 100vh; /* viewport height */
	/* 명시적 표기: 좌우 남는 영역을 자동으로 분배하도록 한다 */
	margin-top: 100px;
	margin-right: auto;
	margin-left: auto;
	/* margin: 100px auto; 속기 스타일. 같은 효과를 줄 수있다. */
	padding-top: 1.25rem;
	padding-left: 1.25rem;
}

.page::before {
	display: block;
	content: attr(class);
	color: #fff;
	font-size: 1.375rem;
}

/* 모듈화 코드 */
.print-data-attr {
	display: block;
	content: attr(data-name);
	color: #fff;
	font-size: 1.375rem;
}
```

####세로 중앙 정렬
```html
<div class="parent">
	<div class="child"></div>
</div>
```
```css
.child {
	height: 10em;
	line-height: 10em;
	/* .child가 이미지라면 vertical-align: middle; */
}
```

> **[IE 비표준 모드]**에서 박스의 폭은 padding과 border를 포함한다. margin: auto; 또한 작동하지 않는다. IE에서 레이아웃이 깨진다면 이러한 이슈를 고려할 수도 있다. 

-

###Margin


```css
p {
	margin-top: 1em;
	margin-left: 1em;
	margin-right: 1em;
	margin-bottom: 1em;

	/* 속기형 */
	margin: top right bottom left;
	margin: top right bottom ???(right);
	margin: top right ???(top) ???(right);
	margin: top ???(top) ???(top) ???(top)
}
/* 시계방향으로 스타일이 적용된다 */
```

####Margin collapsing
 - 세로로 2개 이상 블록요소 마진이 만났을 때, 마진이 겹쳐지는 현상
 - 부모 요소 안에 자식 요소의 경우, 부모에게 패딩, 보더 값이 없을 때 발생

```html
<div class="parent">
	<div class="child">one</div>
</div>
<div class="parent">
	<div class="child">two</div>
</div>
```
```css
.parent {
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 20px;
	width: 500px;
	background: yellow;
}

.parent:last-of-type(1) {
	margin-top: 20px;
	background: orange;
}

.child {
	margin-left: auto;
	margin-right: auto;
	padding-top: 2em;
	padding-bottom: 2em;
	width: 300px;
	text-algin: center;
	background: blue;
}

.parent:last-of-type(1) > .child:only-child {
	/* [조건]부모요소의 패딩(혹은 보더)가 없을 경우:
		 - 자식 마진이 부모의 마진보다 클경우 부모 바깥 범위에 영향을 끼친다.
		 - 부모요소에 패딩(혹은 보더) 값을 주어 자식요소의 마진이 부모요소 내부에만 영향을 주도록 한다
	*/ 
	margin-top: 30px;
	background: purple;
}
```

-

###Border

```html
<div class="box border-solid"></div>
<div class="box border-dashed"></div>
<div class="box border-dotted"></div>
```
```css
.box {
	/* display: table-cell; */
	width: 200px
	height: 200px;
	background: #fff;
	text-align: center;
	/* 색을 기입하지 않으면 글자색을 상속 */
	/* 속경으로 기본 디자인 */
	border: 1px solid;
	/* 이후 개별 디자인 */
	border-bottom-width: 4px;
	border-bottom-color: transparent;
	border-right-color: orange
	/* vertical-align: middle - inline,table 요소에만 적용 가능 */
}

.border-solid {border-right-style: solid;}
.border-dashed {border-right-style: dashed;}
.border-dotted {border-right-style: dotted;}
```

-

###Fonts, Text property

 - Font: 글꼴 관련
 - Text: 문단 관련

```css
p {
	/* 띄어쓰기가 들어갈 경우 쌍따옴표로 묶어준다. 앞선 순서대로 폰트 적용 */
	font-family: "Times New Roman", Times,"Nanum Gothic", "나눔 고딕", 돋움, Dotum, san-serif}
}
```

###### Front-End Develop SCHOOL

# DAY 03

### 진행 내용

- 2일차 수업 내용 복습
- HTML 이미지 (Image)
- HTML 이미지맵 (ImageMap)
- HTML 목록 (Lists)
- HTML 표 (Table)
- HTML 폼 (Form)

-

### 2일차 수업 내용 복습

- 제목 [`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`]
- 강조 문구 [`<em>`,`<strong>`]
- 줄바꿈 `<br>`
- 윗첨자/아랫첨자 [`<sup>`, `<sub>`]
- 링크 [`<link>`, `<a href="">`]
- 보존(공백 포함) 텍스트 `<pre>`
- 수평선 `<hr>`
- 엔티티 코드
- 문법 검사
- IE 조건부 주석문 [ `<!--[if IE]> <![endif]-->`, `<!--[if !IE]><!-->  <!--<![endif]-->`]
- 파비콘
- 서버 (Node.js)
  - 절대 경로(`/`) 사용

-

### HTML 이미지

- `src`, `alt` 속성은 필히 입력해야 한다. (필수 속성)
- `width`, `height` 속성은 필히 입력해야 하는 것은 아니지만, (선택 속성)<br>좋은 UX(사용자 경험)를 위해서는 입력하는 것을 권장한다.

```html
<img src="이미지 경로" alt="이미지 설명" width="이미지 가로 폭" height="이미지 세로 폭">
```

-

### HTML 이미지맵 (클라이언트)

이미지맵이 포개질 경우, 먼저 정의된 영역(Area)의 URL이 우선시 된다.

```html
<!-- 이미지에 연결할 맵을 설정할 경우, usemap 속성 사용. (<map> 요소의 name 속성 이름 앞에 #을 붙임) -->
<img src="images/image-map.jpg" alt="이미지맵 설명" usemap="#image-map">

<map name="image-map">
  <!-- [사각형, Rectangle]: 왼쪽 상단 좌표와 우측 하단 좌표를 이용하여 직사각형 영역을 지정 -->
  <area shape="rect" coords="x1,y1,x2,y2" href="링크1" alt="링크1 설명">
  <!-- [원, Circle]: 중심(Center) 좌표와 반지름(Radius)을 이용하여 원 영역을 지정 -->
  <area shape="cir" coords="center-x,center-y,radius" href="링크2" alt="링크2 설명">
  <!-- [다각형, Polygon]: (X,Y) 좌표들로 이루어진 임의의 다각형 영역을 지정 -->
  <area shape="poly" coords="x1,y1,x2,y2,x3,y3,x4,y4" href="링크3" alt="링크3 설명">
</map>
```

> ※ 이미지맵 참고 URL
> - [image-map](https://blog.goolara.com/tag/image-map/)
> - [image-maps](http://www.jednet.co.uk/edw/image_maps.html)
>
> ※ Adobe Dreamweaver 같은 도구를 사용하면 이미지맵 그리기가 수월하다.
>
> ![DW Imagemap](Assets/coastimagemap.jpg)
>
> ※ Dreamweaver 같은 도구 없이 온라인 상에서도 이미지 맵을 그릴 수 있다.<br>
> [Summer Image Map Creater](https://github.com/summerstyle/summer)

-

### HTML 목록

HTML 표준에서 사용 가능한 목록 유형은 3가지!

- 순차 목록 (Ordered List)
- 비순차 목록 (Unordered List)
- 정의 목록 (Definition List)


```html
<h2>순서가 중요한 목록</h2>
<!-- Ordered List -->
<ol>
	<!-- List Item -->
	<li>라이터(불)</li>
	<li>필터(물)</li>
	<li>칼</li>
</ol>

<h2>순서가 중요하지 않은 목록 설계</h2>
<!-- Unordered List -->
<ul>
	<li>슈즈</li>
	<li>팬츠</li>
	<li>햇</li>
</ul>

<h2>정의 목록(Definition List)</h2>
<!-- Definition List -->
<dl>
	<!-- Definition Term: 정의 용어 -->
	<dt>온새미로</dt>
	<!-- Definition Description: 정의 설명 -->
	<dd>자연 그대로</dd>
	<dd>언제나 변함없이</dd>
	<dt>마루</dt>
	<dd>'하늘'의 순 우리말</dd>
</dl>
```

실제 컨텐츠의 의미에 따라 순차, 비순차, 정의 목록을 사용한다. 각 `li` 요소들은 루트가 되는 `ul(ol)`로 부터 list style을 상속받는다.    
간혹 `li` 요소를 `div`로 나타내는 코드를 볼 수 있는데 이는 잘못된 것이다.

####2-Depth 설계
```html
<ol>
	<li><a href="">불</a>
		<!-- li요소는 자식으로 li요소를 가질 수 없다. ul혹은 ol요소로 다시 감싸준다 -->
		<ul>
			<li><a href="">라이터</a></li>
			<li><a href="">돋보기</a></li>
		</ul>
	</li>
	<li><a href="">필터(물)</a></li>
	<li><a href="">칼</a></li>
</ol>
<!-- 3-Depth도 같은 구조를 가진다 -->
```

 > `li`는 탭 포커스가 가지 않기 때문에 `a`요소를 내부에 넣어주어 접근성을 향상시켜준다. 

####인용문

```html
<!-- 출처는 cite 속성을 이용한다 -->
<blockquote cite="http://blog.naver.com/PostView.nhn?blogId=autumncloud&amp;logNo=70130993741">
	<p>계획 자체는 중요하지 않으나 계획수립은 무엇보다 중요하다.</p>
	<!-- citation -->
	<cite>Dwight D. Eisenhower</cite>
</blockquote>
```

-

### HTML 표

표는 X, Y축으로 구성된 2차원 정보를 나타냄으로 시각 장애인이 읽기 어려운 콘텐츠로 접근성을 고려하여 제작해야 한다.

 > 페이지 레이아웃을 잡을 때 테이블을 쓰면 안되지만, 표를 나타낼 때는 테이블을 써야한다.    
한때 '웹 표준을 위해서 테이블을 쓰면 안된다'라는 말이 퍼진 적이 있는데 이는 와전된 내용이다. 

```html 
<p id="metadata-table-summary">본 표는 4행 3열로 구성된 ...</p>
<!-- 표에 스타일 속성(cellpadding, cellspacing, border)을 직접 사용하지 않는다. CSS로 분리한다 -->
<!-- html5로 넘어오면서 summary 속성은 표준에서 제외됐다. 대신 WAI-ARIA를 이용한다 -->
<!-- WAI-ARIA: 차후 수업에서 다룰 예정 -->
<table aria-decribedby="metadata-table-summary">
	<!-- 테이블의 제목 -->
	<caption>적절한 테이블 제목을 작성해야 한다</caption>
	<!-- 행: table row -->
	<thead>
		<tr>
			<!-- 셀 제목: table cell header -->
			<th scope="col">Element</th>
			<th scope="col">Description</th>
		</tr>
	</thead>
	<!-- 구조적으로 <tfoot>는 <thead>뒤에 작성하지만 표현될 때는 맨 밑에 표현된다. -->
	<tfoot>
		<tr>
			<td colspan="3">Total Count</td>
		</tr>
	</tfoot>
	<tbody>
		<tr>
			<th scope="row">
				<code>&lt;base&gt;</code>
			</th>
			<!-- 셀 내용: tale cell data -->
			<td>
				<!-- <abbr> 축약: abbreviation -->
				<!-- a요소에 속성 target 값으로 "_blank"를 넣어주면 새로운창에 링크가 띄워진다 -->
				HTML Base 요소(<code>&lt;base&gt;</code>)는 문서에 포함된 모든 상대 <a href=" ... " target="_blank"><abbr title="Uniform Resource Locator">URL</abbr></a>들의 기준 <abbr>URL</abbr>을 나타냅니다.
				한 문서에 하나의 <code>&lt;base&gt;</code> 요소만이 올 수 있습니다
			</td>
		</tr>
	</tbody>
</table>
```
 - 표 제목은 WAI-ARIA보다 caption 방식이 더 좋다
 - 접근성 향상을 위해 scope지정을 해주어야 한다.
 - 브라우저가 렌더링 할 때 `thead`, `tfoot`이 없다면 자동적으로 `tbody`를 생성한다

####셀 병합
```html 
<tr>
	<td>something</td>
	<td colspan="2">something</td>
	<!-- <td>something</td> -->
</tr>
<tr>
	<td>something</td>
	<td rowspan="2">something</td>
	<td>something</td>
</tr>
<tr>
	<td>something</td>
	<!-- <td>something</td> -->
	<td>something</td>
</tr>
``` 

-

### Block, Inline 요소

 - block 요소의 기본 값: 높이는 자식만큼, 폭은 부모만큼
 - inline 요소의 기본 값: 높이, 폭 모두 내부 텍스트만큼 가진다.

-

### HTML 폼

```html 
<!-- action: 데이터를 보낼 곳, 메서드: 보내는 방식 -->
<form action="/register.php" method="POST" name="register_form" enctype="multipart/form-data">
	<!-- input 요소에 암묵적 레이블 연결, 일부 스크린리더는 읽지 못하므로 권장하지 않음-->
	<label>ID: <input type="text"></label>
	<!-- input 요소에 명시적 레이블 연결 for와 id가 연결된다 -->
	<!-- id는 접근성, name은 서버에서 필요하므로 둘다 기입한다 -->
	<label for="user_id">ID</label>: <input type="text" id="user_id" name="user_id">
	<button type="submit">전송</button>
</form>

```

####GET vs POST
조건 | GET | POST
---|---|---
보안 | POST에 비해 덜 보안적 | GET에 비해 보안적
데이터 제한 | 제한적, url 허용 길이만큼 | 제한 없음
데이터 타입 제한 | 오직 아스키 문자만 해당 | 제한 없음, 바이너리 역시 사용가능
뒤로가기, 재전송 | 사용자가 입력한 내용 다시 작성 | 사용자에게 지워짐을 경고 함
인코딩 | application-x-www-form-urlencoded | multipart/form-data, application-x-www-form-urlencoded

-

### 기타/참고

- [HTML(하이퍼텍스트 마크업 언어), MDN](https://developer.mozilla.org/ko/docs/Web/HTML)
- [HTML 소개, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Introduction)
- [올바른 주석 작성법, MDN](https://developer.mozilla.org/ko/docs/The_Importance_of_Correct_HTML_Commenting)
- [HTML 요소 레퍼런스, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element)
- [HTML 폼 가이드, MDN](https://developer.mozilla.org/ko/docs/Web/Guide/HTML/%ED%8F%BC)
- [블록 엘리먼트, MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
- [인라인 엘리먼트, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Inline_elements)
- [메타요소 요약, NAVER 카페](http://cafe.naver.com/webstandardproject/603)

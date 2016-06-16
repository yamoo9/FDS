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

-

### HTML 표

표는 X, Y축으로 구성된 2차원 정보를 나타냄으로 시각 장애인이 읽기 어려운 콘텐츠로 접근성을 고려하여 제작해야 한다.

-

### HTML 폼

-

### 기타/참고

- [HTML(하이퍼텍스트 마크업 언어), MDN](https://developer.mozilla.org/ko/docs/Web/HTML)
- [HTML 소개, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Introduction)
- [올바른 주석 작성법, MDN](https://developer.mozilla.org/ko/docs/The_Importance_of_Correct_HTML_Commenting)
- [HTML 요소 레퍼런스, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element)
- [HTML 폼 가이드, MDN](https://developer.mozilla.org/ko/docs/Web/Guide/HTML/%ED%8F%BC)
- [블록 엘리먼트, MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
- [인라인 엘리먼트, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Inline_elements)
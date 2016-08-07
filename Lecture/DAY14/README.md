###### Front-End Develop SCHOOL

# DAY 14

### 커스텀 그리드 만들기 (주말 과제)

1. 사용자 환경을 고려하여 그리드 시스템을 설계한다.
1. 그리드 시스템의 `화면 가로 폭`, `컬럼 개수`, `거터 유무`, `컬럼과 거터의 비율` 등을 설계한다.
1. 포토샵/스케치에 그리드 시스템을 그린다.
1. CSS를 사용하여 시스템을 구현한다.
1. 포토샵/스케치에 그려진 그리드 시스템에 지난 과제로 만든 와이어프레임을 않힌다.
1. CSS 그리드 시스템을 구현하여 페이지를 완성한다.
1. GitHub Page에 올린다.

---

###Grid System

####container 모듈

```html
<body class="overlay-gird">
	<div class="container show-grid hover-hide-grid"></div>
</body>
```
```css
/* static-grid.css */

/* 모듈A. 화면 폭 지정 가운데 배치 */
.container {
	width: 960px;
	margin-left: auto;
	margin-right: auto;
}

/* 모듈 B. 배경이미지 추가 */
.container.show-grid {
	background: url(" ... ")
}

.container.hover-hide-grid:hover {
	background: none;
}

```
```css
/* 코드 최적화 */

body.overlay-grid::after {
	content: '';
	position: absolute;
	z-index: 10000;
	top: 0;
	left: 50%;
	min-height
	transform: translateX(-50%);
}

body.overlay-grid::after,
.container {
	width: 960px;
	margin-left: auto;
	margin-right: auto;
}
```

####Grid row 모듈

 - clearfix 유사

```css
.row::after {
	content: '';
	display: block;
	clear:both;
}
```

####Grid column 모듈

```html
<div class="container">
	<div class="row">
		<div class="col-1"></div>
	</div>
</div>
```
```css
[class*="col-"] {
	float: left;
	margin-left: 10px;
	margin-right: 10px;
}

/* { 컬럼 폭 * X + (거터 * (X - 1)) } */
.col-1 {
	width: 60px
}

.col-2 {
	width: 140px;
}

.
.
.
```

###### Front-End Develop SCHOOL

# DAY 13

### 나는 행복하게 살기로 했다

1. [부정적인 말 습관 알아차리기 1편](https://brunch.co.kr/@awakeup/27)
1. [부정적인 말 습관 알아차리기 2편](https://brunch.co.kr/@awakeup/29)

-

### HTML5 아웃라인 알고리즘

```html
<!-- Outline 알고리즘 -->
<section>

  <!-- <hgroup> -->
  <h1>Main Headline</h1>
  <!-- <section> -->
    <h2>Sub Headline</h2>
  <!-- </section> -->
  <!-- </hgroup> -->

</section>
```

-

### 그리드 시스템 (Grid System)

```html
<body class="show-grid">
	<section class="page-header">
		<div class="wrapper">
			<h1 class="brand"></h1>
			<nav>
				<ul>
					<li>
						<a href="">item1</a>
						<a href="">item2</a>
						<a href="">item3</a>
						<a href="">item4</a>
					</li>
				</ul>
			</nav>
		</div>
	</section>
</body>
```
```css
body.show-grid::before {
	content: '';
	position: absolue;
	top: 0;
	left: 0;
	min-height: 100vh;
	background-image: linear-gradient(transparent)
}

.page-header {
	height: 144px;
	background: #06b1f5;
}
.page-header {
	display: block;
	content: '';
	height: 24px;
	background: #0493d7;
}

/* 모듈화 클래스 */
.wrapper {
	width: 940px;
	height: 96px;
	margin-left: auto;
	margin-right: auto;
}

.page-header .gnb {
	float: right;
}

.page-header .gnb li {
	float: left;
	/* margin-right보다 편리하다. 왼쪽 마진은 디자인에 아무 영향을 끼치지 않음으로 */
	margin-left: 30px;
}

/* Hit Area를 위해 a를 확장해야 한다 */
.page-header .gnb a {
	display: block;
	height: 24px;
	width: 94px;
}
```

### 기타/참고


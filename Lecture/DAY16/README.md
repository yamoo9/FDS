###### Front-End Develop SCHOOL

# DAY 16

### CSS3 버튼 이펙트

1. 기본 스타일
1. 슬라이드(← → ↑ ↓) 이펙트
  - `.slide-from-left`
  - `.slide-from-right`
  - `.slide-from-top`
  - `.slide-from-bottom`
1. 그로우(Grow) 이펙트
  - `.grow-box`
  - `.grow-ellipsis`
  - `.grow-circle`
  - `.grow-skew-45deg`
  - `.grow-skew--45deg`
  - `.grow-spin-cw`
  - `.grow-spin-ccw`

```html
<div class="grow-button-set">
  <button class="button grow-rectangle">GROW RECTANGLE</button>
  <button class="button grow-ellipse">GROW ELLIPSE</button>
  <button class="button grow-circle">GROW CIRCLE</button>
  <button class="button grow-skew">GROW SKEW</button>
  <button class="button grow-skew-45">GROW SKEW-45</button>
  <button class="button grow-spin">GROW SPIN</button>
  <button class="button grow-spin-ccw">GROW SPIN-CCW</button>
</div>
```
```css
button[class*="grow-"] {
  overflow: hidden;
  position: relative;
  z-index: 1;
  padding: 0.825em 0.9em;
  border: 2px solid #de2653;
  background-color: #e0216e;
  color: #fff;
}
button[class*="grow-"]::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #6c1f40;
  z-index: -1;
  transform: scale(0);
  transition: all 0.3s;
}
button.grow-rectangle:hover::after,
button.grow-rectangle:focus::after {
  transform: scale(1);
}

button.grow-ellipse::after {
  border-radius: 50%;
}
button.grow-ellipse:hover::after,
button.grow-ellipse:focus::after {
  transform: scale(2);
}
button.grow-circle::after {
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin: -50px 0 0 -5px;
  border-radius: 50%;
}
button.grow-circle:hover::after,
button.grow-circle:focus::after {
  transform: scale(2);
}
button.grow-skew::after {
  left: -50%;
  right: -50%;
  transform: skewX(45deg);
}
button.grow-skew:hover::after,
button.grow-skew:focus::after {
  left: -20%;
  right: -20%;
}

button.grow-skew-45::after {
  left: -50%;
  right: -50%;
  transform: skewX(-45deg);
}
button.grow-skew-45:hover::after,
button.grow-skew-45:focus::after {
  left: -20%;
  right: -20%;
}

button.grow-spin::after {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: rotate(-180deg) scale(0);
}
button.grow-spin:hover::after,
button.grow-spin:focus::after {
  transform: rotate(0deg) scale(1);
}
button.grow-spin-ccw::after {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: rotate(180deg) scale(0);
}
button.grow-spin-ccw:hover::after,
button.grow-spin-ccw:focus::after {
  transform: rotate(0deg) scale(1);
}
```

####Rotate 축 바꾸기

```css
transform: rotate(0deg);
transform-origin: center center; /* 기본값 */
```

> ##### cw? ccw?
> __cw__ - clockwise(시계방향)
> __ccw__ - counter-clockwise(반시계방향)

-

###애니메이션 사용법

```css
@keyframes 애니메이션 이름 {
  from { /* CSS 속성 */}
  to { /* CSS 속성 */}
}
@keyframes 애니메이션 이름 {
  0% { /* CSS 속성 */}
  10% { /* CSS 속성 */}
  30% { /* CSS 속성 */}
  50% { /* CSS 속성 */}
  70% { /* CSS 속성 */}
  100% { /* CSS 속성 */}
}

.something:hover {
  animation: 애니메이션이름 0.3s;
}
```

> 다만 vendor prefix가 필요하다

-

###동일한 높이의 컬럼 디자인

```html
<div class="grid-container">
  <div class="grid trick-container">
    <div class="main unit-4 push-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, consequuntur.</div>
    <div class="sidebar-A unit-2 pull-4">Lorem ipsum dolor sit amet.</div>
    <div class="sidebar-B unit-2">Lorem ipsum dolor sit amet.</div>
  </div>
</div>
```
```css
.grid > * {
  padding: 1.5rem;
}
.trick-container {
  background: linear-gradient(to right, #34c0ff 320px, #fff 320px, #fff 870px, #fe4940 870px);
}

.sidebar-A, .sidebar-B { color: #fff; }
/* .sidebar-A{ background: #34c0ff; } */
/* .sidebar-A{ background: #fe4940; } */
```

-

###Fluid Grid

```html
<h3>Mobile First Design</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, et!</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, et!</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, et!</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, et!</p>
```
```css
* {
  box-sizing: border-box;
}
p {
  float: left;
  width: 25%;
  background: #ccc;
  padding: 1rem;
  /* 백그라운드 마스킹 */
  /* 컨텐트 영역만 배경색 */
  background-clip: content-box;
  
  /* 백그라운드 이미지 위치 조정 */
  /* 패딩영역 부터 이미지 배치, 기본값은 boder-box */
  background-origin: padding-box;
}
```
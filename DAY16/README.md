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

> ##### cw? ccw?
> __cw__ - clockwise(시계방향)
> __ccw__ - counter-clockwise(반시계방향)

-
























<!-- body {
  margin: 4rem;
}
* {
  box-sizing: border-box;
}
button {
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
button[class*="slide-"] {
  overflow: hidden;
  border: none;
  background-color: #e0216e;
  color: #fff;
  border: 3px solid #e0216e;
  padding: 0.825em 1em;
  position: relative;
  border-radius: 4px;
  z-index: 1;
}
button[class*="slide-"]::before {
  position: absolute;
  z-index: -1;
  content: '';
  background: hsla(0, 0%, 26%, 0.45);
  transition: all 0.3s;
  border-radius: 2px;
}
button[class*="slide-"]:hover::before,
button[class*="slide-"]:focus::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
button.slide-from-left::before {
  top: 0;
  bottom: 0;
  right: 100%;
  left: -100%;
}
button.slide-from-right::before {
  top: 0;
  bottom: 0;
  left: 100%;
  right: -100%;
}
button.slide-from-top::before {
  left: 0;
  right: 0;
  bottom: 100%;
  top: -100%;
}
button.slide-from-bottom::before {
  left: 0;
  right: 0;
  top: 100%;
  bottom: -100%;
}

button[class*="grow-"] {
  overflow: hidden;
  border: none;
  background-color: #e0216e;
  color: #fff;
  border: 3px solid #e0216e;
  padding: 0.825em 1em;
  position: relative;
  z-index: 1;
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
button.grow-box:hover::after {
  transform: scale(1);
}

button.grow-ellipse::after {
  border-radius: 50%;
}
button.grow-ellipse:hover::after {
  transform: scale(2);
}

button.grow-skew-forward::after {
  top: 0;
  bottom: 0;
  left: -20%;
  right: -20%;
  transform: skewX(45deg) scale(0, 1);
}
button.grow-skew-forward:hover::after {
  transform: skewX(45deg) scale(1, 1);
}

button.grow-skew-backward::after {
  top: 0;
  bottom: 0;
  left: -20%;
  right: -20%;
  transform: skewX(-45deg) scale(0, 1);
}
button.grow-skew-backward:hover::after {
  transform: skewX(-45deg) scale(1, 1);
}

button.grow-spin::after {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: rotate(-180deg) scale(0);
}
button.grow-spin:hover::after {
  transform: rotate(0deg) scale(1);
} -->
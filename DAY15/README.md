###Unit Module

```css
.grid [class*="unit-"] { float: left; margin-right: 30px; }
.grid [class*="unit-"]:last-child, .last, .omega { margin-right: 0; }
.grid .unit-1 { width: 130px; }
.grid .unit-2 { width: 290px; }
.grid .unit-3 { width: 450px; }
.grid .unit-4 { width: 610px; }
.grid .unit-5 { width: 770px; }
.grid .unit-6 { width: 930px; }
.grid .unit-7 { width: 1090px; }
.grid .unit-8 { width: 1250px; }
```

-

###Overlay Grid Guideline Module

```css
.grid-container {
  position: relative;
  widht: 1250px;
  margin-left: auto;
  margin-right: auto;
}

.grid-container.show-grid-after::before {
  content: '';
  position: absolute;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: hsla(60, 50%,50%, 0.3);
  background: 
    linear-gradient(90deg, rgba(191, 64,64, 0.3) 81%,transparent 81%),
    linear-gradient(rgba(0,0,0,0) 26px, #26923f 26px);
  background-size: 160px 1px, 1px 1.6875rem; 
}
```

 - `show-grid-before::before`
 - `show-grid-split::before`
 - 만들어 봅시다!

---

###Grid System: Push, Pull, Prefix, Suffix

```html
<div class="grid-container">
  <div class="grid-container">
    <div class="unit-6">
      <img class="flex-img" src="..." alt=""></img>
    </div>
    <div class="unit-2">
      <img class="flex-img" src="..." alt=""></img>
    </div>
  </div>
</div>
```
```css
.grid [class*="push-"] {
  position: relative;
}

.push-1 {
  left: 160px;
}
.push-2 {
  left: 320px;
}
...

.pull-1 {
  right: 160px;
}
.pull-2 {
  right: 320px;
}
...

/* 축 자체를 움직일때 용이 */
/* margin을 padding으로 바꿔도 된다. */
.prefix-1 {
  margin-left: 160px;
}
.prefix-2 {
  margin-left: 320px;
}
...

.suffix-1 {
  margin-right: 160px;
}
.suffix-2 {
  margin-right: 320px;
}
...
```

-

### CSS3 하이퍼링크(`<a href>`) 이펙트 스타일링

1. 기본 스타일
1. 배경 색상 페이드(Fade In/Out)
  - `.fade-bg`
1. 전 방위 슬라이드(← → ↑ ↓)
  - `.slide-from-left`
  - `.slide-from-right`
  - `.slide-from-top`
  - `.slide-from-bottom`
1. 언더라인 페이드
  - `.fade-underline`
1. 언더라인 슬라이드(← → ↔)
  - `.underline-from-left`
  - `.underline-from-right`
  - `.underline-from-center`

```css
/* 기본 링크 스타일 */
a {
  text-decoration: none;
  /* padding-bottom: 2px; */
  padding-bottom: 0.125rem;
  /* border-bottom: 1px solid; */
  border-bottom-width: 0.0625rem solid;
}

/* 배경 색상 페이드(Fade In/Out) */
.fade-bg {
  display: inline-block;
  vertical-align: bottoom;
  padding: 0.25em 0.375em;
  transition: all 0.25s;
}
.fade-bg.round {
  border-radius: 0.1875rem;
}
.fade-bg:hover,
.fade-bg:foucs {
  background: #65b1e3;
  color: #fff;
}
/* 시각적으로 outline이 없어도 되는 경우 */
.fade-bg:focus {
  outline: none;
}

/* 전방위 슬라이드 */
a[class*="slide-"] {
  position: relative;
  overflow: hidden;
  display: inline-block;
  padding-bottom: 0;
  vertical-align: bottom;
  border-bottom: none;
}
a[class*="slide-"]::after {
  position: absolute;
  width: 100%;
  padding: 0.06em 0.12em;
  content: attr(data-linktext);
  background: #1f74bf;
  color: #fff;
  text-align: center;
  transition: all 0.45s;
}
a.slide-from-left {
  left: -100%;
}
a.slide-from-left:hover::after,
a.slide-from-left:focus::after {
  left: 0;
}

/* 방향을 바꾸어 구현해봅시다! */
```
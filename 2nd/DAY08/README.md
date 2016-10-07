###### Front-End Develop SCHOOL

# DAY 08

### 사용자 정의 - 목록 디자인

- [List Style: Web Style Sheets CSS tips & tricks](https://www.w3.org/Style/Examples/007/color-bullets.en.html)
- [Alt codes list](http://fsymbols.com/keyboard/windows/alt-codes/list/)

```html
<ul class="ul-color">
  <li>d1 list
    <ul>
      <li>d2 list
        <ul>
          <li>d2 list</li>
          <li>d2 list</li>
          <li>d2 list</li>
        </ul>
      </li>
      <li>d2 list</li>
      <li>d2 list</li>
    </ul>
  </li>
  <li>d1 list</li>
  <li>d1 list</li>
</ul>

<ol class="ol-color">
  <li><div class="ol-color-content">d1 list</div>
    <ol>
      <li><div class="ol-color-content">d2 list</div>
        <ol>
          <li><div class="ol-color-content">d2 list</div></li>
          <li><div class="ol-color-content">d2 list</div></li>
          <li><div class="ol-color-content">d2 list</div></li>
        </ol>
      </li>
      <li><div class="ol-color-content">d2 list</div></li>
      <li><div class="ol-color-content">d2 list</div></li>
    </ol>
  </li>
  <li><div class="ol-color-content">d1 list</div></li>
  <li><div class="ol-color-content">d1 list</div></li>
</ol>
```

```css
.ul-color,
.ul-color ul,
.ul-color ol {
  list-style: none;
  font-family: Verdana;
}
/*
  •  "\2022"
  ◦  "\25E6"
  ▪  "\25AA"
*/
.ul-color li:before {
  display: inline-block;
  width: 0.7em;
  margin-left: -0.7em;
  color: #69d59c;
}
.ul-color li:before {
  content: "\2022";
}
.ul-color li li:before {
  content: "\25E6";
}
.ul-color li li li:before {
  content: "\25AA";
}
.ol-color {
  color: #69d59c;
}
.ol-color .ol-color-content {
  color: black;
}
```

-

### 사용자정의 - 정의 목록 디자인

```html
<dl class="custom-ui-dl">
  <dt>창의적 문제해결</dt>
  <dd>더 향상된 결과를 위해, 폭넓은 시각에서 다양한 관점을 통합해 새로운 해결안을 제시함.</dd>
  <dt>창의적 문제해결 도구</dt>
  <dd>잘 알려진 창의적 문제 해결법 도출을 위한 방법론들로는 브레인 스토밍, 마인드 맵 등이 있다.</dd>
</dl>
```

```css
.custom-ui-dl dt {
  font-weight: 700;
  color: #69d59c;
}
.custom-ui-dl dd {
  position: relative;
  width: 300px;
  margin-left: 0;
  margin-bottom: 1em;
  padding-left: 1.5em;
}
.custom-ui-dl dd::before {
  content: '';
  position: absolute;
  top: 5%;
  bottom: 5%;
  left: 10px;
  width: 0;
  border-left: 3px solid #69d59c;
}
```
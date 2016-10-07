###### Front-End Develop SCHOOL

# DAY 08

### 목록 가상 요소 디자인

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
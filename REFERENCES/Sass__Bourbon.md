###### Front-End Develop SCHOOL

# Bourbon

가볍고 빠른 Sass 믹스인 라이브러리

-

### 설치 및 파일 호출

```sh
$ npm install --dev-save bourbon # npm i -D bourbon
```

```scss
@import "bourbon";
```

-

### 믹스인(Mixins)

#### Font Face [#](http://bourbon.io/docs/#font-face)

폰트 이름(Family), 파일 경로(File Path), 두께(Weight), 기울기(Style) 등을 설정한다.

```sass
+font-face("source-sans-pro", "/fonts/source-sans-pro-regular")
+font-face("source-sans-pro", "/fonts/source-sans-pro-bold", bold)
+font-face("source-sans-pro", "/fonts/source-sans-pro-italic", normal, italic)
```

`$file-formats` 설정으로 원하는 폰트 포멧을 설정 할 수 있다.

기본 값: `eot`, `woff2`, `woff`, `ttf`, `svg`

```sass
+font-face("source-sans-pro", "/fonts/source-sans-pro-regular", $file-formats: eot woff2 woff)
```

-

#### HiDPI Media Query [#](http://bourbon.io/docs/#hidpi-media-query)

```sass
+hidpi(2)
  width: 20em
```

CSS 코드 변경 후

```css
@media only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (min--moz-device-pixel-ratio: 2),
only screen and (-o-min-device-pixel-ratio: 2/1),
only screen and (min-resolution: 192dpi),
only screen and (min-resolution: 2dppx) {
  width: 20em;
}
```

-

### 함수(Functions)

#### PX → EM [#](http://bourbon.io/docs/#px-to-em)

`px` 단위 값을 `em` 단위 값으로 변환한다.

```sass
font-size: em(12);     // 12 ÷ 16 = 0.75em
font-size: em(12, 24); // 12 ÷ 24 = 0.5em
```

#### PX → REM [#](http://bourbon.io/docs/#px-to-rem)

`px` 단위 값을 `rem` 단위 값으로 변환한다.

```sass
font-size: rem(12); // 12 ÷ 16 = 0.75rem
```

#### Strip Units [#](http://bourbon.io/docs/#strip-units)

단위를 제거한 값을 반환한다.

```sass
strip-units(12px) // 12 반환 (단위 제거)
```

#### Tint & Shade [#](http://bourbon.io/docs/#tint-shade)

틴트(`tint()`)와 쉐이드(`shade()`)는 Sass 기본 컬러 함수 `lighten()`, `darken()`와 다르다.
틴트 함수는 하얀색과 색을 믹스한 결과를 반환하고, 쉐이드 함수는 검정색과 색을 믹스한 결과를 반환한다.

```sass
background: tint(red, 40%)
background: shade(blue, 60%)
```

-

### 애드온(Add-On)

#### 클리어픽스(Clearfix) [#](http://bourbon.io/docs/#clearfix)

```sass
.container
  +clearfix
```

-

#### Ellipsis [#](http://bourbon.io/docs/#ellipsis)

```sass
.element
  +ellipsis(40%)
```

```css
.element {
  overflow: hidden;
  display: inline-block;
  max-width: 40%;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
```

-

#### Font Stacks [#](http://bourbon.io/docs/#font-stacks)

```sass
font-family: $georgia       // "Georgia", "Cambria", "Times New Roman", "Times", serif;
font-family: $helvetica     // "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
font-family: $lucida-grande // "Lucida Grande", "Tahoma", "Verdana", "Arial", sans-serif;
font-family: $monospace     // "Bitstream Vera Sans Mono", "Consolas", "Courier", monospace;
font-family: $verdana       // "Verdana", "Geneva", sans-serif;
```

-

#### Hide Text [#](http://bourbon.io/docs/#hide-text)

[켈리움 메소드](http://zeldman.com/2012/03/01/replacing-the-9999px-hack-new-image-replacement) 활용.

```sass
.element
  +hide-text
  background-image: url(logo.png)
```

```css
.element {
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
  background-image: url(logo.png);
}
```

-

#### Margin [#](http://bourbon.io/docs/#margin)

```sass
+margin(null 10px 3em 20vh)
```

```css
margin-right: 10px;
margin-bottom: 3em;
margin-left: 20vh;
```

#### Padding [#]()

-

#### Position [#]()

-

#### Size [#]()

-

#### Retina Images [#]()

-

#### Text Inputs [#]()

-

#### Timing Functions [#](http://bourbon.io/docs/#timing-functions)

- __`$ease-in-quad`__      : cubic-bezier(0.550,  0.085, 0.680, 0.530)
- __`$ease-in-cubic`__     : cubic-bezier(0.550,  0.055, 0.675, 0.190)
- __`$ease-in-quart`__     : cubic-bezier(0.895,  0.030, 0.685, 0.220)
- __`$ease-in-quint`__     : cubic-bezier(0.755,  0.050, 0.855, 0.060)
- __`$ease-in-sine`__      : cubic-bezier(0.470,  0.000, 0.745, 0.715)
- __`$ease-in-expo`__      : cubic-bezier(0.950,  0.050, 0.795, 0.035)
- __`$ease-in-circ`__      : cubic-bezier(0.600,  0.040, 0.980, 0.335)
- __`$ease-in-back`__      : cubic-bezier(0.600, -0.280, 0.735, 0.045)
- __`$ease-out-quad`__     : cubic-bezier(0.250,  0.460, 0.450, 0.940)
- __`$ease-out-cubic`__    : cubic-bezier(0.215,  0.610, 0.355, 1.000)
- __`$ease-out-quart`__    : cubic-bezier(0.165,  0.840, 0.440, 1.000)
- __`$ease-out-quint`__    : cubic-bezier(0.230,  1.000, 0.320, 1.000)
- __`$ease-out-sine`__     : cubic-bezier(0.390,  0.575, 0.565, 1.000)
- __`$ease-out-expo`__     : cubic-bezier(0.190,  1.000, 0.220, 1.000)
- __`$ease-out-circ`__     : cubic-bezier(0.075,  0.820, 0.165, 1.000)
- __`$ease-out-back`__     : cubic-bezier(0.175,  0.885, 0.320, 1.275)
- __`$ease-in-out-quad`__  : cubic-bezier(0.455,  0.030, 0.515, 0.955)
- __`$ease-in-out-cubic`__ : cubic-bezier(0.645,  0.045, 0.355, 1.000)
- __`$ease-in-out-quart`__ : cubic-bezier(0.770,  0.000, 0.175, 1.000)
- __`$ease-in-out-quint`__ : cubic-bezier(0.860,  0.000, 0.070, 1.000)
- __`$ease-in-out-sine`__  : cubic-bezier(0.445,  0.050, 0.550, 0.950)
- __`$ease-in-out-expo`__  : cubic-bezier(1.000,  0.000, 0.000, 1.000)
- __`$ease-in-out-circ`__  : cubic-bezier(0.785,  0.135, 0.150, 0.860)
- __`$ease-in-out-back`__  : cubic-bezier(0.680, -0.550, 0.265, 1.550)

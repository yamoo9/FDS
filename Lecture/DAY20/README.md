###### Front-End Develop SCHOOL

# DAY 20

### 반응형 웹 디자인 (RWD)
-

### Sublime Text ─ Snippet

```xml
<snippet>
  <content><![CDATA[@media
  (-webkit-min-device-pixel-ratio: ${1:2}),
  (min--moz-device-pixel-ratio: ${1:2}),
  (min-resolution: ${1:2}dppx),
  (min-resolution: 96*${1:2}$2dpi)
{
  $0
}]]></content>
  <tabTrigger>retina/</tabTrigger>
  <scope>source.css</scope>
  <description>Bitmap 고해상도 이미지 미디어쿼리 구문</description>
</snippet>
=======
---

###Flexible Video

####HTML5 &lt;video&gt;

 - Flexible Image와 방법이 유사

####Youtube, Vimeo 비디오 파일( iframe, object, embed )

 - &lt;iframe&gt; 을 감싸는 컨테이너 요소가 필요
 - position 속성 필요(iframe요소는 `absolute` 부모요소는 `relative`)
 - iframe요소에 `top: 0; width: 100%; height: 100%;`
 - 부모 컨테이너 요소에는 `height: 0; padding-bottom: *스크린비율`

```html
<div class="container">
  <h3>iframe 예시</h3>
  <!-- video와 달리 컨테이너가 하나 더 필요하다 -->
  <div class="rwd-media-container">
    <iframe src="..." class="rwd-media" width="640" height="360" allowfullscreen></iframe>
  </div>
  <h3>iframe : vimeo 예시</h3>
  <div class="rwd-media-container">
    <iframe src="..." allowfullscreen class="rwd-media"></iframe>
  </div>
</div>
```
```css
.container {
  max-width: 1130px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background: #aaa;
}
.container h2 {
  margin-top: 0;
}
.rwd-video {
  max-width: 640px;
  width: 100%;
  height: auto;
  border: 1px solid red;
}
iframe {
  border: 0;
}

.rwd-media {
  /*
    width: 100%;
    height: auto;
    html5의 video 처럼 적용되지 않는다.
   */

  position: absolute;
  top: 0
  width: 100%;
  height: 100%;
}

.rwd-media-container {
  position: relative;
  /* 혹시모를 상황에 대비한 height 설정 */
  height: 0;
  /*
    16:9 => 56.25%, 4:3 = 75%, 21:9 = 42.857142857 */
   */
  padding-bottom: 56.25%;
  padding-top: 30px;
}
```

-

###Media Queries, 중단점 설계

참고 링크
[Media Queries, MDN](https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Media_queries)

```css
/* CSS v2 */
@media screen {}
@media all {}
@media print {}

/* CSS v3 */
@media [only|not] <media-type> and (<condition>) { ... }
```

####(Hi-DPI)고해상도 이미지 처리를 위한 미디어 쿼리 구문
```css
@media
  (-webkit-min-device-pixel-ratio: 2),
  (-moz-min-device-pixel-ratio: 2),
  (min-resolution: 2dppx),
  (min-resolution: 192dpi) /* 96 * 2 */
  {
    /* 고해상도 처리를 위한 Bitmap 이미지 코드 */
  }
```

####Viewport
```html
<meta class="viewport" content="width=device-width, initial-scale=1"></meta>
```
```css
/* 실제 viewport 표준 코드, 아직 지원이 많이 되진 않는다. */
@viewport {
  width: device-width;
  zoom: 1;
}
```

```css
body {
  height: 100vh;
  min-width: 30rem;
  background: #fe4940;
  font: 1rem/100vh "Spoqa Han Sans", sans-serif;
  text-align: center;
}

body::before {
  content: 'Mobile View';
  font-size: 6.25rem;
  color: #fff;
}

```

####버티컬 디자인

 - 높이에 따른 디자인을 미디어 쿼리로 제어한다.
 - 여러 테스팅을 통해 코드 변경의 필요성을 알 수 있다.

```css
/* 최소 높이가 600px 이고 orientation이 landscape일 때 */
@media (min-height: 600px) and (orientation: landscape) {
  body {
    background: #8094ff;
  }
}

@media (max-height: 300px) {
  body::before {
    content: 'Mobile View + Max Height';
  }
}

@media (min-width: 600px) {
  body { ... }
  body::before {
    content: 'Tablet View';
  }
}

@media (min-width: 10000px ) {
  body { ... }
  body::before {
    content: 'Desktop View';
  }
}
```

-

###Responsive Grid

```html
<div class="container">
  <section class="unit-m-1-2 unit-l-1-3">
    <h2 class="headline">Headline 1</h2>
  </section>
  <section>
    <h2 class="headline">Headline 2</h2>
  </section>
  <section>
    <h2 class="headline">Headline 3</h2>
  </section>
</div>
```
```css
.container section { box-sizing: border-box; heigth: 100vh; color: white; text-align: center; }
.container section:nth-child(1) { background: red; }
.container section:nth-child(2) { background: green; }
.container section:nth-child(3) { background: blue; }

.container .headline { margin-top: 0; margin-bottom: 0;}

/* 가변 그리드 모듈 */
[class*="unit-"] {
  float:left;
  width: 100%;
}

@media (min-width: ...px) {
  .unit-m-1-2 { width: 50%; }
  .unit-m-1-3 { width: 33.3333%; }
  .unit-m-2-3 { width: 66.66667%; }
}

@media (min-width: ...px) {
  .unit-l-1-2 { width: 50%; }
  .unit-l-1-3 { width: 33.3333%; }
  .unit-l-2-3 { width: 66.66667%; }
}
```

-

### 기타/참고

- [Flexible Grid Standards](http://tgrs.pk/u7kjy)
- [Responsive Images Standards](http://tgrs.pk/9849p)
- [Using Sencha for image optimization](http://tgrs.pk/so2ho)
- [Content Handling](http://tgrs.pk/p8iui)
- [Responsive CMS: modx.com](http://modx.com/)
- [Responsive CMS: wordpress.com](http://wordpress.com/)
- [Performance Best Practices](http://tgrs.pk/7pya9)
- [Examples of great responsive designs](http://mediaqueri.es)
- [Adaptive Content Management](http://tgrs.pk/3gkod)
- [Thought Leadership](http://tgrs.pk/tst71)
- [Thought Leadership](http://tgrs.pk/sjsqn)
- [Thought Leadership](http://tgrs.pk/kfs07)
- [Tigerspike Live Example](http://www.careconnectivity.org)
- [Test a responsive design](http://tgrs.pk/4cyx7)
- [Test a responsive design](http://tgrs.pk/96u9l)
- [Modularity and Style Guides](http://tgrs.pk/4jfqe)
- [Style Tiles](http://styletil.es/)
- [Anatomy of an Adaptive Web Experience](http://tgrs.pk/5j514)
- [embedresponsively.com](http://embedresponsively.com/)
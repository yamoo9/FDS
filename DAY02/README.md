###### Front-End Develop SCHOOL

# DAY 02

### 진행 내용

- HTML 1일차 내용 복습
- Node.js 설치
- http-server 모듈 설치/활용
- HTML 문법 검사(유효성 검사)
- IE 조건부 주석문
- HTML 엔티티 코드
- HTML 제목 6단계
- HTML 보존(공백 포함) 텍스트
- HTML 수평선
- HTML 강조
- HTML 윗첨자/아랫첨자
- 파비콘
- HTML 링크(Link, A)

-

### Node.js 설치

- [nodejs.org](http://nodejs.org/)
- [npmjs.com](https://www.npmjs.com/)

`Node.js`를 설치한 후에 설치된 버전 확인 명령어

```sh
$ node --version # v4.2.4
$ npm --version # 2.14.12
```

-

### http-server 모듈 설치/활용

**http-server** 모듈 전역 설치

```sh
# MacOS 사용자는 명령어 앞에 sudo 라고 붙인 후에 설치 실행
$ npm install --global http-server
```

**http-server** 모듈 실행 명령어

```sh
# -o 는 옵션. 기본 웹브라우저 열기(Open)
$ http-server -o
```

-

### IE 조건부 주석문

MS IE 조건부 주석문 : IE 해석 가능: v6 ~ v9 까지만 적용.<br>
특정 조건에서 주석이 아니라, 코드문으로 해석됨.<br>
조건. IE 브라우저라면? 코드로 해석해서 처리.

```html
<!--[if IE 6]><html lang="ko-KR" class="lt-ie10 lt-ie9 lt-ie8 ie6"><![endif]-->
<!--[if IE 7]><html lang="ko-KR" class="lt-ie10 lt-ie9 lt-ie8 ie7"><![endif]-->
<!--[if IE 8]><html lang="ko-KR" class="lt-ie10 lt-ie9 ie8"><![endif]-->
<!--[if IE 9]><html lang="ko-KR" class="lt-ie10 ie9"><![endif]-->
<!--[if !IE]><!--><html lang="ko-KR"><!--<![endif]-->
```

-

### HTML 엔티티 코드

[HTML Entity Code](http://entitycode.com/)

```html
<!-- HTML Entity Code -->
<title>2일차 공부는 재밌게! &lt; FDS 패스트 캠퍼스</title>
```

-

### HTML 제목

```html
<!-- 제목 6단계 -->
<!-- Heading 1~6 -->
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

-

### HTML 보존(공백 포함) 텍스트

```html
<!-- Preserved Text -->
<!-- Emmet Code: h1+h2+h3+h4+h5+h6|e -->
<pre>
  &lt;h1&gt;&lt;/h1&gt;
  &lt;h2&gt;&lt;/h2&gt;
  &lt;h3&gt;&lt;/h3&gt;
  &lt;h4&gt;&lt;/h4&gt;
  &lt;h5&gt;&lt;/h5&gt;
  &lt;h6&gt;&lt;/h6&gt;
</pre>
```

-

### HTML 수평선

```html
<!-- 수평선 (Horizontal Rule) -->
<hr>
```

-

### HTML 강조

```html
<p>
  <strong>Lorem ipsum</strong> dolor sit <em>amet</em>, consectetur adipisicing elit. Sapiente, ullam.
</p>
```

-

### HTML 윗첨자/아랫첨자

```html
<p>단락 내 <sup>윗첨자</sup></p>
<p>단락 내 <sub>아랫첨자</sub></p>
```

-

### 파비콘

```html
<!-- Favicon: Favorite Icon -->
<link rel="shortcut icon" href="images/starbucks-favicon.png">
```

-

### HTML 하이퍼링크

하이퍼링크

```html
<!-- 외부 페이지 연결: 하이퍼 링크 -->
<p>
  <a href="/">Home</a>
  <a href="/views/about.html">About</a>
  <a href="/views/project.html">Projects</a>
  <a href="/views/service.html">Services</a>
  <a href="/views/contact.html">Contact</a>
</p>
```

목적지 앵커

```html
<h3 id="agenda">목차</h3>
<p>
    <a href="#project-01">프로젝트 주제 01</a>
    <br>
    <a href="#project-02">프로젝트 주제 02</a>
    <br>
    <a href="#project-03">프로젝트 주제 03</a>
    <br>
    <a href="#project-04">프로젝트 주제 04</a>
    <br>
    <a href="#project-05">프로젝트 주제 05</a>
    <br>
    <a href="#project-06">프로젝트 주제 06</a>
    <br>
    <a href="#project-07">프로젝트 주제 07</a>
    <br>
    <a href="#project-08">프로젝트 주제 08</a>
    <br>
    <a href="#project-09">프로젝트 주제 09</a>
    <br>
    <a href="#project-10">프로젝트 주제 10</a>
</p>
<hr>
<div>
    <h2 id="project-01">프로젝트 주제 01</h2>
    .
    .
    .
```

-

### 기타/참고

- [Lorem Ipsum](https://ko.wikipedia.org/wiki/%EB%A1%9C%EB%A0%98_%EC%9E%85%EC%88%A8)
- [한글입숨](http://hangul.thefron.me/)
- [Placehold.it](http://placehold.it/)
- [W3C HTML Validation Service](http://validator.w3.org/)
- [instantlogosearch](http://instantlogosearch.com/)
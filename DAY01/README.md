###### Front-End Develop SCHOOL

# DAY 01

### 진행 내용

1. 스쿨 과정 커리큘럼 [PDF](../Keynotes/00 Intro ─ FastCampus-SCHOOL.pdf)
1. 월드 와이드 웹 (World Wide Web) [PDF](../Keynotes/01 World Wide Web ─ FastCampus SCHOOL.pdf)
1. 웹 기술의 등장과 웹 코리아 [PDF](../Keynotes/02 Web Technology ─ FastCampus SCHOOL.pdf)
1. 웹 표준 [PDF](../Keynotes/03 Web Standard ─ FastCampus SCHOOL.pdf)

-

### HTML 구조화 (기초)

**HTML 문서의 루트 요소(Root Element)**는 `<html>` 요소 뿐이다.

```html
<html></html>
```

루트 요소 `<html>`은 `<head>`, `<body>` 단 2개의 자식 요소만 가질 수 있다.

```html
<html>
  <head></head>
  <body></body>
</html>
```

`<head>` 요소는 내부에 `<title>` 요소를 가지며, 그 값은 웹 브라우저 탭 패널 제목으로 표시된다.

```html
<html>
  <head>
    <title>웹 문서의 제목</title>
  </head>
  <body></body>
</html>
```

텍스트 언어 인코딩을 [**UTF-8**](https://ko.wikipedia.org/wiki/UTF-8)로 설정하여 모든 유니코드 문자를 표현할 수 있도록 설정하고, **깨지는 한글 문제를 해결**한다.

> ※ [`http-equiv`](https://www.w3.org/TR/html5/document-metadata.html#attr-meta-http-equiv) 속성을 사용하면 `<meta>` 요소에서 정의된 명령(사항)을 먼저 실행한 후에 페이지를 로딩한다. 이를 **프라그마 디렉티브(Pragma Directive)**라고 한다. (`equiv`는 **equivalent**의 약자)

```html
<html>
  <head>
    <!-- HTML5 이전에 사용되던 코드 -->
    <!-- <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"> -->
    <!-- HTML5에서는 아래와 같이 단축된 코드를 사용한다. -->
    <meta charset="UTF-8">
    <title>웹 문서의 제목</title>
  </head>
  <body></body>
</html>
```

-

> #### UTF-8 인코딩

> ##### 장점
  - UTF-8은 모든 유니코드 문자를 표현할 수 있다.
  - 바이트 표현의 첫 바이트만 사용하여 해당 바이트 표현의 길이를 결정할 수 있다. 따라서 부분 문자열을 얻는 과정이 매우 쉽다.
  - 인코딩에 간단한 비트 연산만 사용되므로 효과적이다. UTF-8은 곱셈이나 나눗셈과 같은 느린 연산들을 사용하지 않는다.

> ##### 단점
  - 대부분의 UTF-8 문자열은 일반적으로 적당한 기존 인코딩으로 표현한 문자열보다 더 크다. 판독 기호를 사용하는 대부분의 라틴 알파벳 문자는 적어도 2바이트를 사용하며, 한중일 문자들과 표의 문자들은 적어도 3바이트를 사용한다.
  - 한중일 문자들과 표의 문자를 제외한 거의 모든 기존 인코딩들은 한 문자에 1바이트를 사용하므로 문자열 처리가 간편한 반면, UTF-8은 그렇지 않다.

-

문서 유형 정의(DTD, Document Type Definition)를 문서 최상단에 입력하여 웹 브라우저에게 현재 문서가 웹 표준 문서임을 알린다. (표준 모드로 동작)

> ※ [비표준 모드(Quirk Mode) vs 표준 모드(Standard Mode)](http://naradesign.net/wp/2007/03/27/118/)


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>웹 문서의 제목</title>
  </head>
  <body></body>
</html>
```

> ※ [DTD 위에 주석이 올 경우 발생하는 문제점](http://f10024.tistory.com/1)

> [IE renders my page in Quirks mode](http://stackoverflow.com/questions/18517290/ie-renders-my-page-in-quirks-mode?rq=1) 글을 참고해 읽어보면 DTD 위에 코드 또는 주석이 존재할 경우 올바르지 않은 DTD로 간주하여 웹 브라우저는 비표준 모드로 동작하게 됨을 알 수 있다. 고로 DTD 위에는 어떤 텍스트, 주석, 코드 등을 사용하지 않는 것이 좋다.

> ```php
> <?php require'core/init.php';?>
> <?php include_once 'include/IE8Etc.php';?>
> <!DOCTYPE html>
> <meta http-equiv="X-UA-Compatible" content="IE=Edge">
> <html>
> <head>
> <meta charset="UTF-8">
> <title>Title</title>
> ```

-

> ※ 문서가 표준모드로 렌더링되는지 확인하는 방법 [#](https://developer.mozilla.org/ko/docs/Web/API/Document/compatMode)

> ```js
> document.compatMode
> ```

> - 표준 모드일 경우, `CSS1Compat`를 출력
> - 비표준 모드일 경우, `BackCompat`를 출력

-

### HTML 구조화 (기초 응용)

주 언어 명시를 통해 문서의 주요 언어가 무엇인지 명시할 수 있다.

```html
<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <meta charset="UTF-8">
    <title>웹 문서의 제목</title>
  </head>
  <body></body>
</html>
```

문서를 읽는 방향(Direction)을 설정할 경우 `dir` 속성을 사용한다.

- `ltr`: Left to Right
- `rtl`: Right to Left

```html
<!DOCTYPE html>
<!-- 문서를 읽는 방향 설정 -->
<html lang="ko-KR" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <title>웹 문서의 제목</title>
  </head>
  <body></body>
</html>
```

비 표준 코드이나, Microsoft Internet Explorer(이하 IE)의 호환성 보기 모드를 설정하는 코드로 이를 사용할 경우 IE의 동작 버전을 설정할 수 있다.

- 7 버전으로 렌더링. `<meta http-equiv="X-UA-Compatible" content="IE=Emulate7">`
- 8 버전으로 렌더링. `<meta http-equiv="X-UA-Compatible" content="IE=8">`
- 9 버전으로 렌더링. `<meta http-equiv="X-UA-Compatible" content="IE=9">`
- 최신 버전으로 렌더링. `<meta http-equiv="X-UA-Compatible" content="IE=Edge">`

```html
<!DOCTYPE html>
<html lang="ko-KR" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <!-- IE 작동 버전 설정 (비표준) -->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>웹 문서의 제목</title>
  </head>
  <body></body>
</html>
```

모바일 최적화 코드를 사용하면 각각의 모바일 기기에 최적화된 화면을 제공할 수 있다.

> ※ [meta viewport(메타 뷰포트 태그) 사용법](http://aboooks.tistory.com/352)

```html
<!DOCTYPE html>
<html lang="ko-KR" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>웹 문서의 제목</title>
    <!-- 모바일 최적화 환경 설정 -->
    <!-- <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body></body>
</html>
```

검색 엔진 최적화 (SEO, Search Engine Optimization)를 위한 `<meta>` 코드를 추가한다.

> ※ 참고 URL
> - [Google이 이해할 수 있는 메타태그](https://support.google.com/webmasters/answer/79812?hl=ko)
> - [Meta 태그 keywords(키워드) 속성의 진실... 실제 SEO 점수에 미치는 영향은 없다?](http://webisfree.com/blog/?titlequery=seo-meta-%ED%83%9C%EA%B7%B8-keywords-%ED%82%A4%EC%9B%8C%EB%93%9C-%EC%86%8D%EC%84%B1%EC%9D%98-%EC%8B%A4%EC%A0%9C-seo-%EC%A0%90%EC%88%98%EC%97%90-%EB%AF%B8%EC%B9%98%EB%8A%94-%EC%98%81%ED%96%A5%EC%9D%80-%EC%97%86%EB%8B%A4-)

```html
<!DOCTYPE html>
<html lang="ko-KR" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>웹 문서의 제목</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 검색엔진 최적화 SEO -->
    <!-- description: 페이지에 대한 짧은 설명을 제공하는 태그입니다. 200~300자 내외 -->
    <meta name="description" content="프론트엔드 개발을 위한 HTML 마크업을 다루고 있습니다">
    <!-- keywords: 10개 내외 -->
    <meta name="keywords" content="프론트엔드,개발,스쿨,패스트캠퍼스">
    <meta name="author" content="yamoo9">
  </head>
  <body></body>
</html>
```

외부에 존재하는 CSS 파일을 링크(Link) 한다.

- 절대 경로 `/` (웹 서버 환경에서 테스팅 가능)
- 상대 경로 `./`, `../`

```html
<!DOCTYPE html>
<html lang="ko-KR" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>웹 문서의 제목</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="프론트엔드 개발을 위한 HTML 마크업을 다루고 있습니다">
    <meta name="keywords" content="프론트엔드,개발,스쿨,패스트캠퍼스">
    <meta name="author" content="yamoo9">
    <!-- 외부 스타일 문서 파일을 호출(링크, 연결) -->
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body></body>
</html>
```

-

### 기타/참고

- 텍스트 에디터 [Sublime Text](http://sublimetext.com/3)
- 텍스트 에디터 [Brackets](http://brackets.io)
- 텍스트 에디터 [Atom](http://atom.io)
- Sublime Text 패키지 컨트롤 [Package Control](http://packagecontrol.io)
- 빠른 코딩을 위한 도구, [Emmet](http://emmet.io)
- Chrome 익스텐션(Extension) [Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc)







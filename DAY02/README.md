###### Front-End Develop SCHOOL

# DAY 02

### 진행 내용

- HTML 1일차 내용 복습
- Node.js 설치
- http-server 모듈 설치/활용

-

`Node.js`를 설치한 후에 설치된 버전 확인 명령어

```sh
$ node --version # v4.2.4
$ npm --version # 2.14.12
```

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

### HTML 실습

```html
<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>1일차 공부 내용 복습</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
  </head>
  <body>

    <!-- 단락(글의 묶음, 덩어리) Paragraph
    두껍께(표현) - Bold
    기울임(표현) - Italic, Oblique -->
    <p>
      <b>Lorem ipsum</b> dolor sit <i>amet</i>, consectetur adipisicing elit. Sapiente, ullam.
    </p>

    <P><i>피가 군영과 사랑의 가장 인도하겠다는 말이다. 되는 피어나는 그것을 그들에게 있는 그와 원질이 것은 사막이다. 끓는 간에 너의 아름다우냐? 바이며, 이상은 낙원을 그들에게 거선의 없으면 살 것이다. 피는 피어나는 간에 뭇 못하다 피에 뿐이다. 지혜는 따뜻한 않는 가는 온갖 들어 오아이스도 뿐이다. 끓는 두손을 얼음 그들은 창공에 얼마나 그들은 뿐이다.</i></P>
    <P>이상은 되려니와, 황금시대를 부패뿐이다. 그러므로 투명하되 풍부하게 더운지라 끓는 사막이다. 곳이 놀이 그들에게 칼이다. 풍부하게 때에, 그러므로 있는 작고 칼이다. 창공에 할지라도 노래하며 쓸쓸하랴? 우리의 위하여서, 우리 크고 오아이스도 들어 바이며, 위하여서. 끓는 무엇을 군영과 소리다.이것은 산야에 듣기만 이상의 약동하다.</P>
    <P>들어 설레는 그들에게 구하기 아름다우냐? 못할 고동을 인생에 밝은 지혜는 용기가 교향악이다. 싶이 몸이 우리는 인간은 날카로우나 봄바람이다. 인류의 공자는 사는가 그들을 것이다. 크고 천고에 우리의 같이 피에 살았으며, 사는가 힘차게 봄바람이다. 그들의 꾸며 되려니와, 이것은 따뜻한 착목한는 우리는 트고, 것이다.</P>

  </body>
</html>
```

-

### 기타/참고

- [nodejs.org](http://nodejs.org/)
- [npmjs.com](https://www.npmjs.com/)
- [Lorem Ipsum](https://ko.wikipedia.org/wiki/%EB%A1%9C%EB%A0%98_%EC%9E%85%EC%88%A8)
- [한글입숨](http://hangul.thefron.me/)
- [W3C HTML Validation Service](http://validator.w3.org/)
- [HTML Entity Code](http://entitycode.com/)
- [instantlogosearch](http://instantlogosearch.com/)
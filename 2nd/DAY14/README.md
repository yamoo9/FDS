###### Front-End Develop SCHOOL

# DAY 14

## 1. javascript
### 1.1 classList

`classList`는 jQuery의 `hasClass()`,`addClass`,`removeClass`의 기능을 모티브로 javascript에서 동일한 기능을 구현할 수 있게 추가된 함수이다.
기존에 javascript는 특정 클래스를 선택, 추가, 삭제 하거나 존재 여부를 알기위해선 복잡한 과정을 거처야 했다. 하지만 `classList`의 추가로 `hasClass()`,`addClass`,`removeClass`와 같이 쉽게 클래스에 접근할 수 있게 되었다.

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div class="classname"></div>
</body>
</html>
~~~

~~~js
//기존 javascript 에서 classname 이라는 클래스를 가진 요소에서 addclass가 존재하는지 확인하고 없다면 추가하고 있다면 삭제하는 작업
var node = document.querySelector(".classname");
var class_node = node.getAttribute('class', 'classname');

if(class_node.indexOf("addclass") == -1){
  node.setAttribute('class', class_node + " " + 'addclass');
} else {
  class_node.replace("addclass", " ");
}

// classList 를 이용한 방법
var node = document.querySelector(".classname");

if(node.classList.contain('addclass')){
  node.classList.remove('addclass');
}else{
  node.classList.add('addclass');
}
~~~

위 코드에서 볼 수 있듯이 코드가 상당히 짧아졌다. 이렇듯 기본에 불편했던 부분을 jQuery의 유용한 기능을 참고한 유용한 기능들이 javascript에 추가되고있다.
> 단, classList는 크로스 브라우징 이슈가 있다.<br>
IE 10 이상부터 부분 지원 하고 있기 때문에 국내 실정 상 아직 범용적으로 사용하기 어려운 점이 있다.

---
### 1.2 요소 안에 텍스트 바꾸기
이제까지 우리는 특정 요소 또는 클래스, 아이디 속성에 접근하는 방법을 다루어 봤다.<br>
그렇다면 특정 Tag 안에 있는 텍스트에 접근하려면 어떻게 하면 될까?

~~~html
<p>수업 시작</p>
~~~

위 코드를 보면 `p` 태그 안에 '수업 시작'이라는 텍스트가 있다.<br>
`p`태그 안에 택스트를 선택하고 그 텍스트 값을 가져오는 법을 배워보자.

~~~js
var element_node = document.getElementsByTagName(p)[0];
var text_node = element_node.firstchild.nodevalue;
console.log("text_node", text_node);
~~~

위 코드를 분석해보면<br>
`document.getElementsByTagName(p)[0];` : document에 존재하는 첫번째 `p` 태그 요소를 찾는다.<br>
`firstChild` : 찾은 `p` 태그의 첫번째 자식요소를 찾는다.<br>
`nodeValue` : `p` 태그의 첫번째 자식 노드의 값을 가져온다.

> HTML의 모든 요소는 node이다.<br>
> `p`는 ELEMENT_NODE, `title` 은 ATTRIBUTE_NODE, `p`태그 안에 있는 택스트는 TEXT_NODE 이다.<br>
> 때문에 `p`태그 안에 텍스트를 가져오기 위해 `nodeValue` 라는 속성을 사용한다.

---

## 2. CSS

### 2.1. 플렉시블 박스 Flexbox: CSS Layout Module

#### 2.1.1. 유연한 그리드 시스템(Flexible Grid System)

##### 2.1.1.1. gutters 일괄제어
- `gutters` | `gutter-before` | `gutter-after`

grid system 을 사용하며 gutter 값의 유무를 일괄적으로 관리하기 위하여 위 클레스를 모듈화하여 사용한다.

~~~css
/* 거터 일괄(개별) 제어 */

.row.gutters .column,
.grid.gutters .column,
.row .column.gutters {
  padding-left: 1em;
  padding-right: 1em;
  /* background-clip: content-box; */
}

.row.gutter-before .column,
.grid.gutter-before .column,
.row .column.gutter-before {
  padding-left: 2em;
}

.row.gutter-before .column:first-child,
.grid.gutter-before .column:first-child {
  padding-left: 0;
}

.row.gutter-after .column,
.grid.gutter-after .column,
.row .column.gutter-after {
  padding-right: 2em;
}

.row.gutter-after .column:last-child,
.grid.gutter-after .column:last-child {
  padding-right: 0;
}
~~~

##### 2.1.1.2. 플렉스박스 모던 기술을 사용한 그리드 시스템(Flexbox Grid System)

지금까지의 CSS 레이아웃은 `float` 또는 `position` 등을 사용하여 제작했습니다. 그러나 이러한 기술들은 요구되는 레이아웃을 구현하기에는 각각 취약점을 가지고 있습니다.

`float`의 경우는 해제(clear)를 설정하지 않을 경우 다음에 위치한 요소에 영향을 미치는 문제가 있으며, 이 문제를 해결하기 위한 방법을 사용할 경우 `::before`, `::after`를 사용하기에 다른 용도로는 사용될 수 없는 문제 또한 가집니다.

`position`의 경우는 그리드 시스템보다는 각 객체 간 정밀한 위치 조정에 더 많이 사용되고 있습니다. 그리드 시스템에는 적합하지 않기 때문이죠.

Flexbox는 이러한 문제를 모두 해결하는 모던 레이아웃 CSS 모듈입니다. Flexbox를 사용한 그리드 시스템은 아래 나열된 요구사항을 모두 충족합니다.

#### 그리드 시스템 요구사항

- 기본적으로 행(`row`)의 각 그리드 셀(`cell`)은 같은 폭과 높이를 가짐.
- 더 세심한 조정을 위한 각각의 그리드 셀(`cell`) 크기 클래스 속성을 추가. 클래스 속성이 없으면 남은 공간을 자동 배분.
- 반응형 그리드(Responsive Grid)를 위한 미디어쿼리 프리픽스 클래스 속성을 그리드 셀에 적용 가능.
- 각 행의 콘텐츠를 수평 방향(`left` | `center` | `right`)으로, 각 그리드 셀은 수직 방향(`top` | `middle` | `bottom`)으로 정렬 가능.
- 모든 그리드 셀에 동일한 설정을 원한다면 행에 이를 제어하기 위한 클래스 속성을 추가하는 것으로 불 필요한 반복을 제거.
- 중첩된 그리드 레이아웃이 가능.

#### 플렉스박스 그리드시스템

- 유연한 그리드(Fluid grid)
- 반응형 그리드(Responsive grid)
- 스마트 컬럼(Smart columns)
- 거터 제거(Gutterless)
- 중첩 그리드 레이아웃(Subgrids)
- 순서 변경(Reverse order)
- 정렬(Alignment)
- 감춤(Hide)

---

### 2.2. 반응형 그리드 시스템(Responsive Grid System)

#### 워크프로세스

- __Mobile First__<br>
Mobile → Tablet → Desktop
- __Desktop First__<br>
Desktop → Tablet → Mobile

> Desktop First방식을 사용할 경우 문제점
> - CSS 를 불러올때 브라우저는 첫번재 줄부터 마지막 줄까지 순차적으로 코드를 읽는다.
> 이때 Desktop First 방식을 사용할경우 모바일사용자는 Desktop 코드를 모두 읽고난 후에야 Mobile 코드를 읽어 화면에 출력하게 된다. 이럴경우 데이터를 사용하는 모바일 사용자는 데이터를 낭비하게 된다.
> - hover기능은 마우스를 올렸을때 작동하는 기능인데 Mobile에서는 마우스를 올린다는 개념이 없기 때문에 hover의 효과를 어떻게 대처해야하는지를 다시한번 고려해야한다.

그렇기 때문에 Mobile First 방식을 권장한다.

### 2.3. Sass 프리프로세싱

#### 2.3.1 CSS Preprocessor

CSS Preprocessor는 CSS의 한계를 극복하기위해 개발된  Sass, LESS, Stylus 들을 말한다.
CSS는 쉽고 간단하지만 갈수록 요구사항과 스펙이 복잡해지고 있고 그에따라 유지보수도 힘들어 지고 있다. Sass등은 변수, 함수, 확장/상속 등의 기능을 추가해 이를 돕는다.

#### 2.3.2 Ruby기반의 Sass

Sass는 Ruby 기반의 언어이다. Sass를 사용하기 위해서는 Ruby를 깔아야 하지만, window의 경우 한글 사용에 있어 충돌 문제가 빈번하게 발생한다.

#### 2.3.3 NodeJs 기반 Sass 설치 및 사용법

1. NodeJS

Sass를 사용하기에 앞서 Sass를 컴파일해 줄 NodeJS를 깔아보자.
우선 명령 프롬프트(`terminal`, `cmd` 등) 창을 띄운다.
nodejs가 깔려있다면 깔 필요가 없기 때문에 우선 내 컴퓨터에 nodejs가 있는지 확인한다.

~~~sh
node --version   # nodejs가 깔려있다면 버전이 무엇인지 물어보는 명령문
node -v          # --version 을 전부 쓰기엔 좀 긴 느낌이 든다. -v 로 축약해서 사용할 수 있다.
~~~

> cmd 명령어에서 `--` 은 옵션값을 사용할때 사용된다.
> `-` 를 두 번 쓰면 사용할 옵션의 풀네임을, 한 번 쓰면 축약된 명령어를 입력할수 있다.

nodejs 버전이 출력된다면 이미 깔려있기 때문에 따로 설치하지 않아도 괜찮다.
만약 설치가 되어있지 않다면.[NodeJS 홈페이지](https://nodejs.org/ko/)에 가서 다운받아 설치한다.

> 버전은 4버전과 6버전이 있다.
> 4버전은 모든 패키지를 한번에 다운받아 사용한다. 용량은 크지만 별다른 설정없이 안정적으로 사용할 수 있다.
> 6버전은 부분적인 패키지만 설치하여 사용한다. 필요에 맞게 설정해준다면 적은 용량으로 사용가능하고 성능면에서 빠른 사용감을 준다.
> 4버전과 달리 6버전은 ECMAScript 2015를 상당 부분 지원한다. [# 참고](http://node.green/)

2. Sass 파일을 보관할 디렉토리 생성

~~~sh
mkdir sass-project  # sass-project 라는 폴더를 생성한다.

cd sass-project     # sass-project 폴더로 이동한다.

mkdir sass && touch sass/style.sass # sass 폴더를 생성하고 sass 폴더 안에 style.sass파일을 만든다.
~~~

> `touch` 명령어는 파일을 만드는 명령어이다.
> 단, windows에서는 powersell, git bash 같은 도구에서 사용이 가능하다.

3. node-sass 설치
~~~sh
npm i -g node-sass // 노드 기반의 sass 설치
~~~
> i는 install 를 줄여쓴 것이다.<br>
> -g 는 --global 을 줄여쓴 것이다.<br>
> 특정 프로그램 설치할때 global 옵션을 쓴다면 어떤 상황에서도 설치한 프로그램의 명령어를 사용할 수 있다.

4. sass 파일을 css 파일로 변환
~~~
node-sass sass/style.sass > css/style.css // sass 파일을 css 파일로 변환
~~~
> sass 폴더 안에 있는 `style.sass` 파일을 css 폴더안에 `style.css` 파일로 변경한다.

#### 2.3.4 특정 폴더를 서버로 사용하기
`http-server` 모듈을 설치하여 특정 폴더를 서버처럼 동작하게 할 수있다.
1. http-server 설치
~~~sh
npm install --global http-server
~~~
2. 서버 시작
~~~sh
http-server
~~~
3. 서버종료
~~~
ctrl + c
~~~
4. 서버를 실행시 포트변경
~~~sh
http-server -o -a localhost -p 9090
~~~
> 외부에서 내가 개설한 서버에 들어오기 위해서는 주소와 들어올 입구가 필요하다.<br>
> 여기서 주소는 ip를 말하고 입구는 port를 말한다.<br>
> -o는 --open 을 줄인 것이다.<br>
> -a는 --address 를 줄인 것이다.<br>
> localhost는 자신의 아이피 (123.21.0.1)과 같은 주소를 바꿔 부르는것이다.<br>
> -p는 --port를 줄인 것이다.<br>
> http-server 모듈의 기본 포트 번호는 8080이며 9090과 같이 변경하여 쓸 수 있다.

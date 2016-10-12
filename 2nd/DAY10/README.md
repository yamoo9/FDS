###### Front-End Develop SCHOOL

# DAY 10

### 자바스크립트 객체 유형

- 함수(Function)
- 배열(Array)
- 객체(Object)

-

### CSS 그리드 시스템(Grid System)

- 고정(Static)형 → 유동(Fluid, Liquid)형

### 반응형 웹 디자인 RWD: Responsive Web Design

- 키노트(Keynote)

---

## 오전시간 ##

### 자바스크립트 데이터 자료형 체크###


### 1. 함수형

#### 함수 값 참조
(예시)
>
문서에서 각 컨트롤(button, a)을 선택
~~~js
var button, link, eventHandler;
button = document.querySelector('button');
link = document.querySelector('a');
~~~
변수 이름 공간에 함수 값(표현식, 무명함수)를 참조
~~~js
eventHandler = function( ){ console.log('call Me'); };
function evHandle( ){
  console.log('ev Handler');
}
>
button.onclick = eventHandler; //변수에 참조된 함수 값을 실행
button.onkeyup = evHandle; //함수 이름을 통해 참조된 함수 실행
link.mouseover = eventHandler;
~~~

---
**끝에 세미콜론을 넣는 경우 / 안 넣는 경우?**

1) 함수 값 그 자체를 변수에 할당하는 방식
~~~js
eventHandler = function( ){ console.log('call Me'); };
~~~
끝에 세미콜론을 넣어줘야 한다.

2) 함수를 선언하는 방식
~~~js
function eventHandler2( ){ console.log('call Me'); }
~~~
끝에 세미콜론 넣지 않는다.

---


####함수(Function), 변수에 참조

<3가지 방법>

1. 함수 객체 생성
```js
var fnobj = new Function('console.log(" ")'; );
```
이렇게 함수 코드를 넣는 경우, 보안에 취약해지는 문제가 있기 때문에 위험하다.

2. 함수 표현식
```js
var fnobjexp = function( ){ console.log(" "); };
```
변수에 값으로 할당(권장, 아무 곳에나 정의하면 오류 발생)

3. 함수 선언식
```js
function fnObjDec( ){ console.log(" "); }
```
(권장, 그러나 아무 곳에나 무분별하게 정의하지 말고, 영역의 상단에 정의하는 것을 권장함)

--------------------------------------

### 2. 배열형


#### 배열, 변수에 참조
~~~js
var arr = new Array( );
~~~

**배열이 왜 필요한가?**

변수는 하나의 데이터 값을 복사하거나 참조한다.
```js
var member1 = '기중';
var member2 = '근희';
var member3 = '세진';
```

모두 담으려면 수많은 변수가 필요한데, 이들을 넘버링하고 값을 기억하기가 쉽지 않다.

**배열로 만들면?** 원소를 여러개 담을 수 있다.
```js
var members = new Array('기중', '근희', '세진');
```
따라서 일일이 변수를 만드는 것보다 이렇게 배열로 만드는 게 효율적임

아래처럼 쓸 수도 있다.
```js
members[0] = '기중';
members[1] = '근희';
members[200] = '세진';
```
그런데 이렇게 숫자 유형으로 추가하는 경우 그 사이 값들이 전부 undefined로 정의되는 문제가 발생한다.

해결하려면? **push 메소드를 사용!**
```js
members.push('지훈');
members.push('현주');
```

```js
console.log('members:', members);
console.log('members[0]:', members[0]);
console.log('members[1]:', members[1]);
console.log('members[2]:', members[2]);
```
이런 식으로 순서별 호출도 가능함

------------------------------------------------------------------------------------------

## 오후 시간

### 고정 형태의 그리드 시스템을 유동형 그리드 시스템으로 변경

> **percent ( target / context ) 함수**<br>
> Target : context (현재 길이 / 전체 길이) = results

RWD에서는 픽셀이 아닌, 상대 단위(em, rem, %)등을 사용하고,
이를 위해서는 픽셀을 상대 단위로 바꾸는 계산식을 사용해야 한다.
다만 브라우저마다 해석하는 방법의 차이로 오차가 생길 수 있고 이를 해결하는 방법이 isolate-테크닉 등등이 된다.

--------------------------------------------------------------

### RWD 반응형 웹 디자인 ###

(Responsive Web Design)

- 반응형 웹에서 중요한 것은 다양한 웹 디바이스에서의 비주얼만을 의미하는 것이 아니라,
우리가 만들어야 할 서비스를 이루는 콘텐츠와 컨텍스트에 관한 것!

- 반응형 웹의 목적 : 어떤 디바이스든 컨텐츠를 읽을 수 있도록 만들어 동일한 정보를 제공해 주는 것

- 각기 다른 기기의 다른 비율과 해상도를 이해한 뒤, 스케치, 프로토타입, 시각화, 테스트 등을 진행해야 함

- RWD + AWD : 모바일 페이지를 위한 RWD + 태블릿과 데스크탑을 위한 AWD =  하이브리드 방법

- 디바이스마다 콘텐츠를 감추거나 격리시키는 것보다는,
각 기기의 경험을 맞춰 최적화된 뷰(view)를 사용자에게 제공하여
콘텐츠를 효율적으로 담는 것이 필요하다.


**반응형 웹 프로젝트를 시작하기 전 고려해야 할 점**

1. 콘텐츠 전략(Content Strategy)
2. 유연한 그리드 레이아웃 (Flexible grid layout)
3. 유연한 이미지 / 미디어 (Flexible images and media) : responsive & adaptable
4. 디바이스 픽셀 밀도 (Divice Pixel Density) : 레티나 디스플레이의 농도는 2, 픽셀 농도는 2x2=4
5. 중단점 / 미디어쿼리 (Breakpoint and Media Queries) : 사용자 행동패턴/선호도에 대한 통계가 필요함


### 유연한 이미지 실습 ###

- 컨텐츠 이미지를 넣었을 때
~~~css
.fluid img,
img.rwd-img {
  width: 100%;
  height: auto;
}
~~~
이미지 부모의 클래스에 fluid를 주거나
이미지 클래스에 rwd-img를 주면 됨

- 배경 이미지를 넣었을 때
~~~html
<div role="image" class="maestro rwd-bg" aria-label="전설적인 작곡가"></div>
~~~
~~~css
.fluid .rwd-bg {
  width: 100%;
  height: 0;
  background-size: cover;
}
~~~
~~~css
.maestro {
  background: url ("...") no-repeat center;
  padding-bottom: 71.08% /* 543/740(세로/가로비율) X 100% */
}
~~~
html에 클래스값 maestro과 rwd-bg를 가진 div 요소를 생성하고
배경에 이미지를 삽입,
원래 이미지의 세로/가로 비율에 맞게 % 값을 설정해 줌

- 재단 이미지 : 이미지를 포함하는 컨테이너 요소의 폭에 맞춰 크기가 동적으로 잘려지는 이미지
~~~css
.crop-img{
  width: 100%;
  height: 100vh;
  background: url( ) center top;
  background-size: cover;
}
~~~


------------------------------------------------------------------------------------
참고 링크

**_A list apart_**
http://alistapart.com/


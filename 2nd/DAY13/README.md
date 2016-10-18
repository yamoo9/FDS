###### Front-End Develop SCHOOL

# DAY 13

## **1. javascript**
### **1.2 의존성**
> 의존성이란 자바스크립트 함수를 모듈화 하여 관리할때 알아두어야 할 특징이다.
> 우리가 모듈화한 함수를 불러와 사용할경우 실행문이 모듈화 함수보다 먼저 선언된 경우
> 에러가 발생한다.

**utils.js**
~~~js
  function module (){
    console.log('의존성 : ', "의존성")
  }
~~~
**core.js**
~~~js
  module();
~~~
위와 같이 두개의 자바스크립트 파일이 있을 경우 `core.js` 파일을 먼저 선언할 경우 에러가 발생한다.
~~~html
// 에러
<script src="core.js"></script>
<script src="utils.js"></script>

// 정상 작동
<script src="utils.js"></script>
<script src="core.js"></script>
~~~
이는 `core.js`파일 안에 있는 실행함수 `module();` 가 실행해야 할 대상을 찾을 수 없기 때문에 발생한다. 주방에 요리 재료보다 요리사가 먼저 도착하여 요리를 할 수 없는것과 비슷한 경우이다.

### **1.3 자바스크립트 제어문(조건에 따라 코드를 처리하는 구문)**
1. if, else, else if
2. 논리 연산자 &&(AND), ||(or)
3. 3항 연산자 ?:
4. switch, case, default, break

#### **1.3.1 조건문**
`if(조건){}`
> 참 또는 거짓 에 따라 결과가 다른 결과를 보여준다.
> 만약 조건이 참이면 if(조건) { 조건이 참일 경우 코드 수행 } 을 실행하라
~~~js
if(3>5){
  alert('3은 5보다 크지않죠 거짓입니다.')
}
~~~

`else{}`
> 만약 조건이 거짓이라면 else { 조건이 거짓일 경우 코드 수행 }을 실행하라
~~~js
if(3>5){
  alert('3은 5보다 크지않죠 거짓입니다.')
} else {
  alert('3은 5보다 작습니다. 참입니다.')
}
~~~
`else if (조건) {}`
> 처음 조건이 거짓일 경우 else가 실행된다 이때 새로운 조건을 부여하여 조건에 부합할때 {...}을 실행하라
~~~js
if ( 3 > 5 ){
  alert('3은 5보다 크지않죠 거짓입니다.')
} else if ( 5 > 3 ) {
  alert('3은 5보다 작습니다. 참입니다.')
}
~~~
#### **1.3.2 조건문 사용 방법**
##### 올바른 사용법
~~~js
if (조건) {
  참일경우 실행
} else {
  거짓일 경우 실행
}
~~~

##### 권장하지 않는 사용방법
~~~js
if (조건)
  참일경우 실행
else
  거짓일경우 실행
=====================================================
if (조건) 참일경우 실행
else 거짓일경우 실행
~~~

> 위와같이 {} 를 생략하여 사용 할 수 있지만 다음에 오는 코드가 한줄일 경우만 사용이 가능하다. 때문에 권장하지 않는다.

## **2. 반응형 웹 디자인 RWD: Responsive Web Design**

### **2.1 `@media`쿼리**
>`@media` 뒤에 오는 조건이 참일경우 내부에 정의된 stylesheet 내용을 적용시킨다.

~~~
@media (max-width : 960px){
  style 값
}
~~~

위 코드를 사용하여 모바일, 테블릿, PC에 맞는 뷰를 보여주는 것이 가능하다.
단 크로스브라징 문제로 IE8 이하의 경우 javascript 플러그인을 사용해야한다.

### **2.2 2배율 해상도**
기술의 발달로 인하여 우리는 보다 선명한 해상도를 통하여 매체를 접한다.
윈도우 기반의 브라우저의 경우 아직 1배율의 해상도로 컨텐츠를 제공하지만 맥의 경우 레티나 디스플리이를 통하여 2배의 해상도를 제공한다.
이때 `width : 1000px` 짜리 이미지를 레티나디스플레이 에서 보게 된다면 `width : 2000px` 로 확대 되고 이미지는 깨져 보일것이다.
이러한 현상을 막기위해 디자이너와 개발자들은 각 배율에 맞는 이미지를 준비하여 그에 맞는 이미지를 제공해주고 있다.
컨텐츠 이미지와 백그라운드 이미지의 제공방법이 다르기때문에 그에대해 알아보자.

#### **2.2.1 content img**
1. `<picture>` // 크로스 브라우징 문제로 IE에서는 사용이 불가능하다.
2. `<img>`
3. `<fiqure>`

등의 방법이 있다 이때 `srcset` 속성을 사용하여 배율에 맞는 이미지를 제공할 수 있다.
~~~html
<img src="images/map.png" srcset="images/map.png 1x">
<img src="images/map.png" srcset="images/map.png 2x">
~~~
> 위와같이 사용하면 내 화면 해상도에 맞는 이미지를 보여준다.

#### **2.2.2 background img**
background img는 `srcset`과 같은 속성을 사용할 수 없기 때문에 `@media`의 `resolution` 속성을 이용하여 2배율 해상도를 지원한다.

~~~
@media (-webkit-min-device-pixel-ratio: 2), /*크롬*/
       (min--moz-device-pixel-ratio: 2), /*파이어폭스*/
       (min-resolution: 192dpi),
       (min-resolution: 2dppx) /*현재 w3c에서 지정한 표준*/
~~~
**72dpi**
> Xerox PARC 연구소는 1 point가 1/72 inch인 것에 착안하여 72 ppipixels-per-inch의 화면해상도를 가진 디스플레이를 표준으로 채택합니다. 72 ppi 해상도에서는 1 pt가 1 px이 되게 됩니다.
>Apple은 72 ppi의 규격을 채용하여 OS에 적용합니다. 타자기 세대에 널리 쓰이던 10pt 크기의 글씨를 모니터 상에서 10 px로 보이게 하겠다는 의도였습니다.

**92dpi**
>반면 Microsoft는 96 dpi를 표준 해상도로 채택하게 됩니다. Microsoft가 Apple과는 달리 96 dpi를 표준 해상도로 설정한 이유는 다음과 같습니다.
Microsoft는 인간이 컴퓨터 디스플레이를 볼 때는 책이나 문서를 볼 때 눈(망막)에서 책이나 문서까지의 거리보다 1/3 가량 더 멀리 본다고 주장합니다. 그래서 72 dpi 스크린에서의 글씨는 실제 편집자에 의해 의도되었던 글씨 크기보다 작게 보이기 때문에 가독성에 해를 끼친다고 판단합니다.

현재 W3C 에서는 dppx라는 표준 단위를 발표했다.
이는 96dpi 의 해상도를 기준으로 96dpi = 1dppx 로 환산한 값이다.
그렇기 때문에 2배율 화면의 사용자에게 그에 맞는 이미지를 제공하기 위해선 2dppx 일때 2배율의 이미지를 제공하면 된다.
~~~html
@media
  (-webkit-min-device-pixel-ratio: 2),
  (min--moz-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx)
{
  .detect-DPRx2 {
    background-image: url("images/board-girlx2.jpg");
    background-size: 400px 247px;
  }
}
~~~

### **2.3 Flexbox `flex` 단축 속성(Shortcode)** [#](https://developer.mozilla.org/ko/docs/Web/CSS/flex)

- `flex-grow`, `flex-shrink`에 설정된 음수 값은 무효.
- `flex-grow`, `flex-shrink`, `flex-basis` 값은 애니메이션 적용 가능.
- `none` 키워드는 `0 0 auto` 값으로 처리.

```css
/* 값이 1개(단위가 없는 숫자): flex-grow */
flex: 2;

/* 값이 1개 width/height: flex-basis */
flex: 10em;
flex: 30px;
flex: auto;
flex: content;

/* 값이 2개(단위가 포함된 경우는 flex-basis): flex-grow | flex-basis */
flex: 1 30px;

/* 값이 2개: flex-grow | flex-shrink */
flex: 2 2;

/* 값이 3개: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* 초기 값: 0 1 auto */
flex: initial;

/* 상위 요소의 설정 값 상속(Inheritance) */
flex: inherit;

/* 0 0 auto */
flex: none;
```


### **2.4 유연한 그리드 시스템(Flexible Grid System)**

#### **2.4.1 그리드 시스템 모듈**

- `container`
- `row`(`grid`)
- `col`(`cell`)
- `gutters` | `gutter-before` | `gutter-after`

#### **2.4.2 컬럼 모듈**

- `col-1of2`(`col--1-2`)
- `col-1of3`(`col--1-3`)
- `col-2of3`(`col--2-3`)
- `col-1of4`(`col--1-4`)
- `col-2of4`(`col--2-4`)
- `col-3of4`(`col--3-4`)

#### **2.4.3 유틸리티 모듈**

- `offset`(`prefix`|`suffix`)
- `push`|`pull`
- `isolate`


### **2.5 반응형 그리드 시스템(Responsive Grid System)**

#### **2.5.1 워크프로세스**

- __Mobile First__<br>
Mobile → Tablet → Desktop
- __Desktop First__<br>
Desktop → Tablet → Mobile

#### **2.5.2 중단점 모듈 프리픽스**

- `s` | `xs`(`mobile`)
- `s` | `sm`(`mobile`)
- `m` | `md`(`tablet`)
- `l` | `lg`(`desktop`)
- `l` | `xl`(`wide`)

#### **2.5.3 컬럼 모듈**

- `{s}-1of2`(`{xs}--1-2`)
- `{m}-1of3`(`{sm}--1-3`)
- `{l}-2of3`(`{md}--2-3`)
- `{s}-1of4`(`{lg}--1-4`)
- `{m}-2of4`(`{xl}--2-4`)
- `{l}-3of4`(`{xs}--3-4`)

### **2.6 참고 자료**

#### **2.6.1 Inline Block**

`inline-block` 요소 사이 간격을 제거하는 방법

- https://css-tricks.com/fighting-the-space-between-inline-block-elements/
- https://davidwalsh.name/remove-whitespace-inline-block


#### **2.6.2 Flexbox**

- [The Flex Grid](http://jeroenoomsnl.github.io/the-flex-grid/)
- [Core Flex Grid](https://splintercode.github.io/core-flex-grid/)
- [Flex Grid](https://github.com/ptb/flexgrid)
- [Flexbox Grid](http://flexboxgrid.com/)
- [Better, Simpler Grid Systems](https://philipwalton.github.io/solved-by-flexbox/demos/grids/)

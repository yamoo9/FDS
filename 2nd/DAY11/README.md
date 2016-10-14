###### Front-End Develop SCHOOL

# DAY 11

### 자바스크립트 데이터 자료형 체크

데이터 자료형 체크 방법

- `typeof`의 설계 오류
- `instanceof`의 설계 오류
- `constructor`의 문제
- `isType()` 헬퍼 함수

### 자바스크립트 제어문

- 조건문
  - `if`
  - `if, else`
  - `if, else if, else`
  - `switch, case, break, default`
- 반복문
  - `while`
  - `do, while`
  - `for`
  - `for, in`
  - `for, of`
  - `forEach`
  - `map`

-

### 반응형 웹 디자인 RWD: Responsive Web Design

- 키노트(Keynote)
- 데몬스트레이션(Demonstration)

### CSS 그리드 시스템(Grid System)

- 반응(Responsive)형
- 적응(Adaptive)형

### 플렉시블 박스 Flexbox: CSS Layout Module

- 키노트(Keynote)
- 데몬스트레이션(Demonstration)

---

## Javascript

* Array, Function, Object 형은 모두 참조가 가능한 객체이다.
* Object 는 `length` 속성을 가지지 않는다.

### 정보분석 (Comparative Data)

#### 1. `typeof | typeof() (키워드)`
typeof는 함수가 아니라, 뒤에나오는 데이터 유형을 감지하여 감지된 데이터 유형 값을 문자열로 반환한다.
```js
// 싱글 'var' 패턴(single 'var' pattern)
var num = 102,
    str = 'typeof는 함수가 아니다.';

console.log("num 변수에 복사된 데이터 유형:", typeof num); // => number
console.log("str 변수에 복사된 데이터 유형:", typeof str); // => string
```

만약 감지하고자 하는 데이터 유형이 2개 이상이라면 _괄호()를 사용하여 데이터를 묶어서 체크_ 해야 한다.
```js
console.log( typeof num + str );    // 'number'
console.log( typeof (num + str) );  // 'string'
```

array, object, null 모두 `'object'` 를 반환하므로 typeof 로 구분할 수 없다.
```js
var arr = [num, boo, fnc],
    obj = {"number_type": num, "boolean": boo };

console.log("arr 데이터 유형:", typeof arr);
console.log("obj 데이터 유형:", typeof obj);
console.log("null 데이터 유형:", typeof null);
```


#### 2. `instanceof (키워드)`
* instance 란?
    - 실체화된(생성된) 객체
    - 생성된 객체의 모체(클래스(Class), 프로토타입(prototype))
    - 설계가 바뀌면 인스턴스도 바뀐다.
```js
// 인트턴스 instanseof 원형(모체)  => '인스턴스' 는 '원형'으로 생성된 객체인가
// return BOOLEAN {true, false
console.log( 'obj instanceof Object:'   , obj instanceof Object);   // true
console.log( 'arr instanceof Array:'    , arr instanceof Array);    // true
console.log( 'arr instanceof Object:'   , arr instanceof Object);   // true
console.log( 'fnc instanceof Function:' , fnc instanceof Function); // true
```

* 원시데이터 유형 > 객체인것처럼 메소드를 지원해주지만 객체가 아니다.
```js
// 원시 데이터 유형은 실상 객체가 아닌, 값이다.
// 자바스크립트 엔진이 원시 데이터 유형(null, undefined 제외)의 값을 마치 객체인 것처럼 사용할 수 있게 제공하는 것일뿐.
console.log( 'num instanceof Number:', num instanceof Number);
console.log( 'str instanceof String:', str instanceof String);
console.log( 'boo instanceof Boolean:', boo instanceof Boolean);
```


#### 3. `constructor (속성)`
* 자바스크립트 객체라면 모두 가지고 있는 속성으로 자신을 생성한 생성자를 가리켜서 알려준다.
* 객체에 대해서는 정확한 값을 반환하지만, 아래와 같이 null, undefined 은 에러를 발생한다.
```js
// 에러 발생
console.log( "null.constructor : ", null.constructor );
console.log( "undefined.constructor : ",  undefined.constructor );
```

<br>
> 결국, 자바스크립트는 올바르게 데이터타입을 체크하는 기능을 제공하지 않는다.
<br>

#### 4. `isType() (사용자정의)`
없는건 만들어 쓰자!
```js
// 언어 차원에서 지원되지 않는 사용자 정의 함수
// isType() 유틸리티 헬퍼 함수
// 객체가 아닌 유형도 검증이 가능
function isType(data) {
    return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}
```

<br>
> 참고서적 : _자바스크립트 + jQuery 완전정복 스터디 - 김춘경 저_


---

## CSS

### 초기화 모듈

#### # [reset.css](http://meyerweb.com/eric/tools/css/reset/)
- 비표준 또는 마크업에서 사용하지 않는 요소 제거
- 성능상 좋지 않은 코드 제거

#### # [normalize.css](https://necolas.github.io/normalize.css/)
- 브라우저 사이의 간극을 줄이는 목적으로 제작됨.
- /*! 주석문 */ 은 삭제하지 않는다.
- reset.css 는 오래되서 현재와 맞지 않는다.
```css
-ms-text-size-adjust: 100%; /* 3 */
-webkit-text-size-adjust: 100%; /* 3 */
```

#### # [ress.css](https://github.com/filipelinhares/ress)
- normailize 에서 확장한 모듈

### Crop Image
* .webp 포맷 - 구글에서 만듬 용량이 가볍고, 퀄리티가 좋으나 지원하는 브라우저가 적다.
```css
/* 재사용을 위한 모듈 내용은 수정하지 않고, 별도의 파일에서 커스텀 스타일을 준다.  */
/* 모듈내에서 너무 많은 스타일(제약)을 두면, 재사용성이 떨어진다.             */
.page.container {
    min-width: 960px;
    max-width: 1380px;
}
```

calc() 내장함수를 사용하여 퍼센트 계산
```css
{ padding-bottom: 50%;
  padding-bottom: calc(350/700*100%); }
```

문서에서 키보드이벤트 연결하여 'show-grid' 스타일 토글하기
```js
// function toggleGrid()
function toggleGrid() {
  var _container = document.querySelector('.container');

  // 있으면?
  if ( _container.classList.contains('show-grid')  ) {
    _container.classList.remove('show-grid');
  }
  // 없으면?
  else {
    _container.classList.add('show-grid');
  }
}
// [shift+g] 키 감지하여 toggleGrid() 실행
document.onkeydown = function(event) {
    if ( event.shiftKey && (event.keyCode === 71) ) {
      toggleGrid();
    }
}
```

### iframe (inline frame) 반응형 모듈
* map 이나 video 에 많이 사용.
* `frameborder="0"` 속성은 비표준, `border: 0` 으로 대체할 수 있다.

* 배경이미지와 마찬가지로 width 폭을 모를 경우, height를 고정적으로 명시할 수 없어 반응형 이미지에
적용되는 기술을 사용할 수 없다.
* 반응형 배경이미지에 적용되어 사용되었던 기술을 활용
```css
.rwd-iframe-container {         /* iframe 을 감싸는 요소가 필요. */
    overflow: hidden;
    position: relative;
    min-width: 100%;
    height: 0;
    /*
     *  4:3 = 75%
     *  16:9 = 56.25%
     *  21:9 = 42.857142857
    */
    padding-bottom: 56.25%;     /* 가로 대비 세로의 화면 비율  */
}
.rwd-iframe-container.ratio-4-3 {
    padding-bottom: 75%;
}
.rwd-iframe-container.ratio-21-9 {
    padding-bottom: 42.857142857%;
}
.rwd-iframe-container iframe {
    border: 0;                  /* frameborder="0"를 대체 */
    position: absolute;
    width: 100%;
    height: 100%;
}
```

### 픽셀 밀도
> 공간 (대부분inch에서 사용)에 픽셀이 들어가는 물리적인 수치를 말한다.
> 웹브라우저는 96ppi

* Retina Display
  - inch당 픽셀을 x2배로 제작한 디스플레이.
  - 물리적인 크기는 같으나 픽셀 집약도을 높임.

* 디바이스 픽셀 밀도
  - 벡터그래픽과 달리 비트맵그래픽(gif, jpg, png..) 은 디바이스 픽셀 밀도에 영향을 받는다.
  - 벡터그래픽은 색이 많아지면 용량이 커진다.
  - `window.devicePixelRatio` 로 콘솔에서 확인 가능.
  - 픽셀 면적이 x2배일 때, 44px 버튼은 88px이 되어야한다.

* 그래픽 디자이너는 x1 배율의 벡터그래픽을 제작한 후, 디바이스 픽셀 밀도를 고려하여 내보내야 한다.

* 사진 같은 비트맵 이미지를 제외하고는 대부분의 UI는 벡터를 사용하여 제작하며, 디자인 배율은 x1에서
시작해야 한다.

* 브레이크포인트
  - 우리가 만드는 서비스의 사용자층을 고려하고 콘텐츠를 분석하여 전략을 수립.

### CSS3 미디어쿼리
* 각 디바이스 환경을 식별하는 조건 처리 구문.
* Mobile > Tablet > PC 순으로 작업하는 것이 좋다.
  - Mobile First : 정말 중요한 콘텐츠를 보여 줄 수 있게 된다.
```css
@media only screen and (min-width: 768px) and (max-width: 1024px) {
      body {
        background: #21ffdf;
        color: #000000;
      }
      body::before {
        content: "Tablet";
      }
    }
```

---

<br><br>
참조)
> [Device metrics](https://design.google.com/devices/)
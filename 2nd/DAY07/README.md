###### Front-End Develop SCHOOL

# DAY 07

## Javascript - 데이터 타입 변형, 타입 체크

### 숫자 -> 문자 변환방법

#### 1. `''`,`""` 사용
```js
var h = '90120';
var h = "90120";
```

#### 2. 빈 문자열과 숫자를 더하면 문자열로 변환된다. (자주 사용됨)
```js
var k = 9 + ''
```

#### 3. Strting() 함수 사용
```js
var k = 90120;
k = String(k);
```
※ 첫글자가 대문자인 함수는 관례적으로 생성자(Constructor) 함수를 지칭한다.

#### 4. .toString() 메소드 사용
```js
var m = 9000;
m = m.toString();
```
- ※ 숫자 상수 값에 불과한 데이터를 마치 객체인 것처럼 허용한다.
- ※ 객체가 소유한 함수 유형의 속성을 특별히 `메소드(Method)`라고 부른다
- ※ 자바스크립트의 모든 객체는 .toString() 메소드를 사용할 수 있다.
- ※ 단 숫자 상수 값의 경우 바로 .toString()메소드를 사용할 수 없다.
- ※ 자바스크립트 언어에서 객체가 아닌것들 (null, undefined)은 객체가 아니기 때문에 속성(메소드 같은)이 존재하지 않는다.

#### 함수이름 camelCase 작성법
```js
function showMeTheMoney() {}
```
※ 첫 글자는 소문자, 이어지는 각 단어의 첫 글자는 대문자로 표기


### 문자 -> 숫자 변환방법

#### 1. 빼기(-0), 곱하기(*1), 나누기(/1)를 하면 숫자로 변환된다.
```js
var u = '90231';
u - 0;
u * 1;
u / 1;
```

#### 2. 숫자형 문자 앞에 +를 붙이면 숫자로 변환이 된다. (은근 많이 사용)
```js
var h = '34';
h = +h;
```

#### 3. 숫자형 문자를 Number() 함수에 전달하여 처리한 결과는 숫자가 된다.
```js
var r = '3.141592';
r = Number(r);
```

### 숫자와 단위(문자)를 포함한 문자 (단위 유형)을 숫자로 변환하다.

#### 단위를 제거하는 함수를 사용한다.
```js
var parse_int   = window.parseInt(font_size, 10);  // 내장 메소드 parseInt 를 사용하여 10진수로 반환하라.
var parse_float = window.parseFloat(font_size, 10);
```
- `parseInt`('단위유형의문자', '반환진수') 해석해서 `정수`를 반환
- `parseFloat`('단위유형의문자', '반환진수') 해석해서 `실수`를 반환

※ 각 브라우저마다 실수를 해석하는 결과 값이 다르기 때문에 가급적 결과 값이 정수가 나오게끔 설계하는것이 좋다.

### style 속성을 사용하지 않고 CSS문서의 스타일 값을 가져오는 방법

#### 표준 방법 (모던 웹 브라우져 + IE 9 이상)
```js
window.getComputedStyle({문서객체}).fontSize
```

#### 비 표준 방법 (IE 8 이하)
```js
{문서객체}.currentStyle.fontSize
```



## HTML & CSS - Typography System
모듈러스케일(Modular Scale)을 이용하여 일정한 배율을 반영한 타이포 그래픽 시스템 설계

### 가독성, 판독성
- 행간 > 어간 > 자간 순으로 간격이 커야 가독성이 좋다.
- 한글 11px 영문 9px 이하는 판독성이 떨어진다.
- 웹브라우져의 기본 폰트 사이즈는 16px
- 포토샵과 웹브라우져 기본 행간크기는 1.2(120%) 이지만 너무 좁아 가독성이 떨어지기 때문에
대부분 1.4 ~ 1.8을 적용한다.
- 배경색, 전경색의 명도대비는 4.5:1(24px, 18px bold의 경우는 3:1)을 지켜줘서 접근성(명료성)을 고려한다.

### 포토샵의 텍스트 자간 CSS 적용
- Character 패널의 VA 값 나누기 1000 (ex. -50이면 -50/1000 = -0.05em)
- 단위는 em적용

### 명도 대비 체크툴
- 포토샵 애드온 : https://creative.adobe.com/addons/products/12170#.V_SXueiLR3g
- 크롬 플러그인 : https://chrome.google.com/webstore/detail/contrast-ratio-checker/kmicfegjejpginnockfnjpdgeffebdcf

### 가이드 라인 설정
```css
.guide {
  background: url("../images/leading-21.png");
  min-height: 100vh;
}
```
- CSS : 반복가능한 패턴 이미지를 만들어 background로 사용한다.
- 포토샵 : 패턴기능을 이용하여 가이드 레이어를 만들어 사용한다.


#### 글자 크기 단위
- 픽셀 : 고정값으로 사용이 쉬우나, 반응형 웹 디자인에서는 상대 값을 요구하기에 선택적 사용이 필요하다.
- em : 요소에 지정하는 글자 크기 단위로 부모 요소에서 지정한 글자 크기를 기준으로 배율을 조정한다. 계층이 복잡해지면 요소들(크기,행간,마진등등)을 계산하기가 까다로워 지며 관리도 어렵다.
- rem : HTML 문서의 root 요소인 `<html>`에 지정된 크기를 기준으로 상대적인 값으로 사용자가 설정한 폰트 크기에 따라 사이트에 배치된 모든 구성 요소를 적절하게 설계 가능하다.


#### Javascript를 이용한 guide 클래스 속성 제어
```css
.guide {
  background: url("../images/leading-21.png");
  min-height: 100vh;
}
```

```js
function assignGuideClass() {
  var body = document.body;
  var body_current_class = body.getAttribute('class');
  body.setAttribute('class', body_current_class + ' guide');
}

document.onclick = assignGuideClass;
```
마우스 클릭시 함수를 이용하여 body에 guide class를 추가


#### placehold 더미 이미지 사용
```html
<img src="http://placehold.it/210x210/000/fff/?text=don't breath" alt="숨 쉬지마!">
```
원하는 크기의 더미 이미지를 사용할 수 있다.


#### 이미지 아래 빈 공간 제거
```html
img {
  vertical-align: top;
}
```
이미지 삽입시 원인 모를 공백을 제거한다.





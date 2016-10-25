###### Front-End Develop SCHOOL

# DAY 17

## 1. Sass
### 1.1. Mixins(믹스인)

- @mixin
- @include
- =
- +

----
#### 1.1.1. 전달인자 기본 값 설정(Args, Default Value)

- 믹스인 호출시 값을 전달하지 않아 오류가 발생하는 것을 방지하기 위해 특정 값을 기본으로 설정할 수 있다.

```scss
@mixin transition($매개변수: 초기값) {
 -webkit-transition: $매개변수;
 -moz-transition: $매개변수;
 -o-transition: $매개변수;
 transition: $매개변수;
}

body {
 @include transition(전달인자);
 // 믹스인 호출 시 전달인자가 없으면 초기값이 대입된다.
}

// ---------------------------------------------

@mixin transition($param: all 0.2s ease-in-out) {
 -webkit-transition: $param;
 -moz-transition: $param;
 -o-transition: $param;
 transition: $param;
}

body {
 @include transition();
 // 믹스인 호출 시 전달인자가 없으면 초기값이 대입된다.
}
```

#### 1.1.2. 키워드 전달 인자(Args, Keyword)

- 특정 인자만 전달/수정하는 것이 가능하다.

특정 키워드를 지정해 믹스인에 인자 값을 전달할 수 있어 수정이 용이하다.
전달인자의 순서를 기억하기 힘들기 때문에 사용한다.

```scss
@mixin hover-link($padding-bottom: 2px, $border-bottom: 1px solid tomato) {
  text-decoration: none;
  &:hover, &:focus {
    padding-bottom: $padding-bottom;
    border-bottom: $border-bottom;
  }
}

@include hover-link($border-bottom: 1px dashed #6b6b6b);
```

#### 1.1.3. 멀티 전달 인자, 유지보수 문제(Maintenance)

- 믹스인에 전달할 인자의 개수가 고정된 경우, 응용하여 활용하기 불편하다.

```scss
@mixin multi-background-image($bg1, $bg2) {
  -webkit-background-image: $bg1, $bg2;
  -moz-background-image: $bg1, $bg2;
  background-image: $bg1, $bg2;
}
// 2개 이상 박스 그림자를 설정해야 할 경우, 믹스인을 수정해야 됨.
```

#### 1.1.4. 가변 전달 인자(Args, Variable)

- 믹스인 호출시 전달 받을 인자 List를 ... 로 처리하면 복수의 인자를 처리하기 쉽다.

$args... : 집합, list parameter

```scss
@mixin multi-background-image($bgs...) {
  -webkit-background-image: $bgs;
  -moz-background-image: $bgs;
  background-image: $bgs;
}
```

#### 1.1.5. Create Configurable  CSS3 Shapes with Mixins

- circle 믹스인 작성

```scss
@mixin border-radius($radius: 4px) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

@mixin background-origin($origin: padding-box) {
  -webkit-background-origin: $origin;
  -moz-background-origin: $origin;
  background-origin: $origin;
}

@mixin background-clip($clip: padding-box) {
  -webkit-background-clip: $clip;
  -moz-background-clip: $clip;
  background-clip: $clip;
}

@mixin circle($diameter: 100px, $bg-color: #000) {
  width: $diameter;
  height: $diameter;
  background: $bg-color;
  @include border-radius($diameter / 2);
  @include background-clip;
}
```

- 호출

```sass
.circle-1
  @include circle()

.circle-2
  @include circle($bg-color: red)
  // 특정 인자만 수정(키워드 전달인자)
```

#### 1.1.6. 변수 범위(Scope)와 콘텐츠 블록(@content)

- 변수 범위는 JS의 전역/지역 변수 개념과 유사하며, 콘텐츠 블록은 믹스인 호출 시 {} 코드문

```scss
// 전역 변수
$color: #3fb5c8;
@mixin colors($color: darkred) {
  // 믹스인 내부에서 $color 값은 지역 변수인 '전달인자'
  background-color: $color; // darkred
  // @content 값은 @include 믹스인 {} 에서 {} 블록 영역
  @content;
  border-color: $color; // darkred
}

.bg-border-colors {
  // $color는 전역 변수인 #3fb5c8이 대입된다.
  @include colors { color: $color; }
}
```

#### 1.1.7. 믹스인 *.sass 문법

- scss

```scss
@mixin my-btn($color) {
  color: $color;
}

@include my-btn(red);
```

- sass

```sass
=my-btn($color) color: $color // @mixin
+my-btn(red)                  // @include
```

- 추가

> placeholder selector(%)와 mixin 비교
> - placeholder selector(%): 코드가 정해져있다. 이 코드 모듈을 사용하는 선택자를 placeholder selector(%)의 위치로 끌어올린다.
> - mixin: 인자에 따라 바뀔 수 있다. mixin을 사용하는 선택자에 mixin 코드들이 붙는다.


### 1.2. function(함수)

- @function
- @return

---
#### 1.2.1. 컬러 함수(Color Functions)

- RGBA 함수

```sass
// SET 함수
rgb($red, $green, $blue)
rgba($red, $green, $blue, $alpha)
rgba($color, $alpha)

// GET 함수
red($color)
green($color)
blue($color)

// 혼색 함수
mix($color-1, $color-2, [$weight])
```

- HSLA 함수

```sass
// SET 함수
hsl($hue, $saturation, $lightness)
hsla($hue, $saturation, $lightness, $alpha)

// GET 함수
hue($color)
saturation($color)
lightness($color)
```

```sass
// 컬러, 각도로 변경 함수
adjust-hue($color, $degrees)

// 많이 사용되는 컬러 함수
lighten($color, $amount)
darken($color, $amount)
saturate($color, $amount)
desaturate($color, $amount)
grayscale($color)

complement($color) // 보완색
invert($color) // 반전색
```

- Opacity 함수

```sass
// GET 함수
alpha($color) / opacity($color)

// SET 함수
rgba($color, $alpha)

// 불투명도하게 변경 함수, $amount 값은 0~1 사이 소수
opacify($color, $amount) / fade-in($color, $amount)

// 투명하게 변경 함수, $amount 값은 0~1 사이 소수
transparentize($color, $amount) / fade-out($color, $amount)
```

- Other Color 함수

```sass
// 컬러 변경 함수
adjust-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])

scale-color($color, [$red], [$green], [$blue],
[$saturation], [$lightness], [$alpha])

change-color($color, [$red], [$green], [$blue], [$hue],
[$saturation], [$lightness], [$alpha])

// IE 헥스 스트링(#rrggbbaa) 변경 함수
ie-hex-str($color)
```

#### 1.2.2. 수학 함수(Number Functions)

- Number 함수

```sass
// 퍼센트 변경 함수
percentage(13/25) // 52%

// 반올림 함수
round(2.4) // 2

// 올림 함수
ceil(2.2) // 3

// 내림 함수
floor(2.6) // 2

// 절대값 함수
abs(-24) // 24

// 비교하여 작은것을 반환하는 함수
min(10px/12px) // 10px

// 비교하여 큰것을 반환하는 함수
max(10px/12px) // 12px

// 난수 함수
random(1) // 0~1
```

#### 1.2.3. 사용자 정의 함수(@function)

- JS 함수와 거의 흡사한 함수로 @function으로 모듈을 정의한 후, 이름으로 호출할 수 있어 재 사용이 가능

- **HEX 코드를 HSLA 코드로 변환하는 함수**

```sass
@function _hsla($hex, $alpha: 1)
  // 헥스 컬러 코드 분해
  // hue, saturation, lightness
  // GET 함수
  $hue: hue($hex)
  $saturation: saturation($hex)
  $lightness: lightness($hex)
  // @debug $hue
  // @debug $saturation
  // @debug $lightness
  // @debug type-of(hsla)
  $result: hsla($hue, $saturation, $lightness, $alpha)

  // 결과값 반환
  @return $result
```

- **grid system에서 column 넓이 구하는 함수**

```sass
$column-base-width: 60px !default // column 넓이
$column-count: 12 !default // column 개수
$gutter-base-width: 10px !default // gutter 넓이
$page-width: ($column-base-width + ($gutter-base-width * 2)) * $column-count // 전체 page 넓이
$fluid: false !default // fluid 사용 여부

@function column($n: 1)
  $result: ($n * $column-base-width) + (($n - 1) * ($gutter-base-width * 2))
  @if $fluid // fluid가 true이면
    $result: percentage($result / $page-width) // 넓이 값을 %로
  @return $result

// 함수 호출
.col-1
  float: left
  width: column(3)
```
 [sass grid system](http://url.yamoo9.net/grid)

- **px 값을 em 단위로 변경하는 함수**

```scss
@function px2em($font_size, $base_font_size: 16) {
  @return $font_size / $base_font_size + em;
}

body {
// 함수 호출
color: px2em(12, 20); // 12/20 + em = 0.6em }
```

### 1.3. Conditions

- @if
- @else if

----
####1.3.1. @if (Condition) @else if, @else

- JS의 if ~ else 문과 유사한 조건문을 처리할 수 있습니다. (JS 코드에서 조건부분의 괄호가 빠진다.)

```scss
$value: null;

#condition {
  @if $value == false {
    color: #eee;
  }
}

#demo {
  @if $value == false { color: #434343; }
  @else { color: #8c8d8a; }
}
```

```scss
// 커스텀 컬러 설정 변수
$custom-red: #e44351;
$custom-green: #3ce1cd;
$custom-blue:  #4524dd;
$custom-dark:  #161515;

// 배경 컬러 설정 변수 
$bg-color: $custom-red;

#page {
  @if $bg-color == $custom-red {
    color: invert($custom-red); }
  @else if $bg-color == $custom-green {
    color: desaturate(fade-out($custom-green, 20%), 30%); }
  @else if $bg-color == $custom-blue {
    color: lighten($custom-blue, 32%); }
  @else {
    color: white; }
  }
```

####1.3.2. Create Adjust Color Contrast Function

- 텍스트, 배경 색상 대조를 조정해주는 사용자 정의 함수

```scss
@function text-contrast($bgcolor, $val: 70%) {
	$value: null;

	// 전달인자 유효성 검사
	@if type-of($bgcolor) != color {
	@warn "전달받은 $bgcolor 인자 값이 올바르지 않습니다.";
	@debug "$bgcolor의 값이 #{$bgcolor} 입니다."; }

	// 전달받은 배경색 인자의 명도 값이 50%보다 클 경우,
	@if lightness($bgcolor) > 50% {
	  $value: darken($bgcolor, $val); }
	// 전달받은 배경색 인자의 명도 값이 50%보다 작을 경우,
	@else {
	$value: lighten($bgcolor, $val); }

	// 결과 값 반환
    @return $value;
}
```


####1.3.3. if() 함수 (Condition, true, false)

- JS의 3항식 조건문과 유사하게 조건문을 처리할 수 있다.

```scss
// 컬러 변수 
$main-bg: #000;

.main {
  // $main-bg 값이 black과 같다면,
  // #fff로 설정
  // 거짓이라면,
  // #000으로 설정
  color: if($main-bg == black, #fff, #000);
}
```

###1.4. Loops

- @while
- @for
- @each

---
####1.4.1. @while (iteration)

- JS의 while문과 유사한 반복문을 처리할 수 있다. (JS 코드에서 조건부분의 괄호가 빠진다.)

```sass
%fl
  float: left
// 변수 n을 1로 초기화
$n: 1

@while $n < $count
  // n을 debug 한다.
  @debug $n
  .col-#{$n}
    @extend %fl
    width: column($n)
  // n을 1씩 증가한다.(조건 변화)
  // 조건에 변화가 없으면 '무한 반복'에 빠진다.
  $n: $n + 1
```

####1.4.2. @for (iteration, from ~ [to, through])

- JS의 for문과 유사한 반복문을 처리할 수 있다.

```sass
%fl
  float: left
$i: 1

// while 문과 달리 조건을 변화시켜줄 필요가 없다.
// to: ~까지($count 전까지)
@for $i from 1 to $count
  @debug $i
  .col-#{$i}
    @extend %fl
    width: column($i)

// through: ~끝까지($count(포함)까지)
@for $i from 1 through $count
  @debug $i
  .col-#{$i}
    @extend %fl
    width: column($i)
```

####1.4.3. @each (iteration, in ~ [list, map])

- JS의 for~in문, forEach문과 유사한 반복문을 처리할 수 있다.

```sass
// Sass List Type
$icon-list: play, pause, next, prev, stop
// List($icon-list)에 있는 요소를 하나씩 가져온다.
@each $icon in $icon-list
  .icon-#{$icon}
    background-image: url("images/icons/icon-#{$icon}.png")

// Sass Map Type
$heading-map: (h1: 3rem, h2: 2.2rem, h3: 1.8rem, h4: 1.6rem)
// Map($heading-map)에 있는 요소를 하나씩 가져온다.
// 첫번째 변수($heading): h1 ...
// 두번째 변수($font-size): 3rem ...
@each $heading, $font-size in $heading-map
  #{$heading}
    font-size: $font-size
```


####1.4.4. %IR, #{}, @each

- 이미지 대체기법, 보간법, @each 문을 활용한 아이콘 배치 순환 처리

```scss
// 이미지 대체기법
%ir {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
}

// SASS 리스트(Lists) 데이터 타입 선언
// 소셜 아이콘 이름을 담은 리스트를 담을 변수 $icons
$icons: (twitter, facebook, youtube, rss);

// SASS @each 문을 사용해 $icons 내부를 순환하여
// 클래스 선언 (문자 보간법 및 플레이스홀더 선택자 활용)
@each $icon in $icons {
    .#{$icon} {
        @extend %ir;
        background: url("../images/icons/#{$icons}.png") no-repeat;
    }
}
```

>[yamoo's sass github](https://github.com/yamoo9/yamoo9-Sass-StartKit): Sass 라이브러리, 스타일 모듈(SMACSS 활용)로 구성된 StartKit.


-----

##2. JavaScript

> **복습**
> ```js
> // 자바스크립트 조건문
> // 1. if, else if, else
> // 2. switch case break default
> // 3. ? :
> // 4. &&, ||
> ```

###2.1. 반복문

1. while
2. do ~ while
3. for
4. for ~ in

---

####2.1.1. while

- 조건이 참인 동안(while condition is true) 코드를 반복 실행한다.

```js
var num = 0;

// while 문 실행 흐름
// 1. num이 10보다 작은지 검사한다.
// 2. 조건이 참이라면 num에 1을 더한다.
// 3. 다시 조건을 검사한다.
while(num < 10){
  console.log('num: ', num); // 0, 1, 2, 3, ... , 9
  num = num + 1; // 0, 1, 2, 3, ... , 9, 10
  // num += 1; // num = num + 1; 과 같다.
  // num++; // 1씩 증가
}

console.log('num: ', num); // 10
```

####2.1.2. do ~ while

- while 문과 유사하나, while 문과 달리 조건이 거짓일지라도 1회는 수행한다.

```js
var num = 14;

// do ~ while 문 실행 흐름
// 1. num에서 2를 뺀다.
// 2. num이 10보다 큰지 검사한다.
// 3. 조건이 참이면 num에서 2를 뺀다.
// 4. 다시 조건을 검사한다.
do {
  console.log('num: ', num);
  num = num - 2;
} while(num > 10)

```

####2.1.3. for

- array(배열), like array(유사 배열)에 사용

```js
// for 문 실행 흐름
// 1. 초기값: var i = 0
// 2. 조건: i < 10 확인
// 3. {}문장 수행: for 문 안의 구문 실행
// 4. 변수값 변화: i++

// i = iterator 반복자
for(var i=0 ; i < 10 ; i++) {
  console.log('in: ', i);
}
console.log('out > i: ', i);

// 위 코드와 아래 코드는 동일하게 동작한다.

var k = 20;
for(; k > 10;) {
  console.log('in > k: ', k);
  k--;
}
console.log('out > k: ', k);


// 별 찍기
for ( var i=0, star=''; i<10; i++ ) {
  star += '*';
  console.log(star);
}


// 좋아하는 숫자만 골라내기 프로그래밍
var numbers = [1, 2, 3, 4, 5];
var like_nums = []; // 3, 5

for ( var i=0, l=numbers.length; i<l; i++ ) {
  var num = numbers[i]; // 1, 2, 3, 4, 5
  if ( num % 3 !== 0 || num % 5 !== 0 ) { 
     continue; // 조건이 참일 경우 현재 반복을 건너 뛰고 다음 반복을 실행한다.
  } 
  // if ( num === 3 || num === 5 ) {
  //   like_nums.push(num);
  // }
  like_nums.push(num);
}
```

- 2차원 for 문

```js
// 구구단
for(var i = 1; i < 10; i++) {
  console.log(i + '단');
  for(var m = 1; m < 10; m++) {
    console.log(i * m);
  }
}
```

####2.1.4. for ~ in

- object(객체)에 사용

순차적이지 않고 느리기 때문에 배열에 사용하는 것은 좋지 않다.

```js
var obj = {name: '객체', age: '21년'};

obj.computer = 'Apple Computer';
obj.keyboard = true;
obj.getKey = function() {
  return this.keyboard;
};

// obj 객체 안의 요소들을 하나씩 가져온다.
for ( var prop in obj ) {
  var value = obj[prop];
  // obj['name'], obj['age']의 형태로 가져온다.
  console.log('prop:', prop);
  console.log('value:', value);
}
```

- 추가

> ```js
> // 브라우저에서 flex를 지원하는지 확인
> // body의 style 객체 안에 flex가 있는지 확인
> 'flex' in document.body.style
> ```



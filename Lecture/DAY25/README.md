###### Front-End Develop SCHOOL

# DAY 25

### Sass 지난 시간 내용 정리

#### 1. 변수

- Sass 변수 앞에는 항상 `$`를 붙인다.
- Sass 문법 내에서는 들여쓰기 내부, SCSS 문법 내부에서는 `{}` 내부에 선언된 변수는 지역 변수이다.<br>
지역 변수는 해당 영역(Scope)에서만 사용이 가능하다. (전역 변수와 구분되는 포인트)<br>
단, `!global` 플래그가 지역 변수 뒤에 붙을 경우에는 전역 변수와 같은 역할을 수행하게 된다.
- `!default` 플래그가 변수 뒤에 붙을 경우는 `null`인 데이터 유형을 제외하고는 가장 마자막에 적용되는 기본 값으로 설정된다.

#### 2. 데이터 유형

- 숫자 (`Number`) `ex) 5em, 15px`
- 문자 (`String`) `ex) Times, "Times New Roman"`
- 컬러 (`Color`) `ex) red, #ff0, rgb(255,0,0), hsla(320, 100%, 50%, 0.4)`
- 논리 (`Boolean`) `ex) true, false`
- 리스트 (`List`) `ex) 10px auto 20px, "Spoqa Han Sans", "Nanum Gothic", Dotum, Sans-Serif`
- 맵 (`Map`) `ex) (h1: 22px 1.24, h2: 18px 1.45, h3: 14px 1.51)`
- 비어있다 (`null`)

##### 2-1. 보간법(Interpolation)

`특정 문자열에 #{$변수}를 접합`

- font 속기형 작성 시, 나눗셈 연산(`/`)으로 처리되지 않게 하기 위함
- webfont 사용할 경우, font information을 변수로 처리
- Selector String 조합에 변수를 처리
- Media Queries 구문에 변수를 처리

#### 3. 연산자

- 할당 연산자 ($variable`:` value)
- 사칙 연산자
  - `+` (※ 문자에 사용할 경우, 문자를 접합)
  - `-`
  - `*`
  - `/`
  - `%`
- 비교 연산자
  - `>`
  - `<`
  - `>=`
  - `<=`
  - `==`
  - `!=`

- 기타 연산자
  - `and`
  - `or`
  - `not`

#### 4. 믹스인

- `@mixin` 지시자(Directive)를 사용하여 정의한다. (※ Sass 문법에서는 `=`으로 대체할 수 있다)
- `@include` 지시자를 사용하여 정의된 믹스인을 호출한다. (※ Sass 문법에서는 `+`로 대체할 수 있다)
- 기본적으로 전달인자(Arguments)가 설정되어 있지 않은 믹스인을 정적 믹스인이라 한다. (확장이 안된 상태)
- 어떤 경우에 정적 믹스인 보다 플레이스홀더 선택자가 좋은 선택인가? ex) `common.css`
- 전달인자(Arguments)를 설정한 믹스인을 동적 믹스인이라고 한다. (확장이 가능한 상태)
- 전달인자는 Sass의 변수와 유사하기에 변수 전달인자 앞에 `$`를 붙여야 하며, 각 인자는 콤마(`,`)로 구분된다.
- 전달인자의 기본 값을 설정하는 구문이 있다면 해당 인자는 선택사항이다. ex) `$arg: value`
- 전달인자가 다수일 경우에 이를 줄여 표현할 수 있다. ex) `$args...`
- 줄여서(`...`) 전달하는 인자 표현식에서 `맵(Map) 데이터 유형`을 사용할 경우, `$를 제외한 키(Key)`를 전달하여 처리 가능하다. (반복문 없이)
- 믹스인 내부에 `@content`를 사용하면 믹스인 호출 과정에서 믹스인 내부에서 처리될 콘텐츠(코드 블록)를 전달하여 코드를 섞을 수 있다.

-

###함수

```scss
//color-custom-function.scss

@function remove-unit($unit) {
  // 결과값 반환(return)
  @return $unit / ( $unit*0+1 );
}

@function rem($px, $base-font-size: 16px) {
  @return ( $px/$base-font-size ) * 1rem;
}

@function hsla($hex, $alpha){
  // 디버깅 (@debug)
  // @debug $hue / ($hue * 0 + 1);

  // 내림 함수 floor
  $hue: floor( remove-unit( hue($hex) ) );
  $saturation: floor( saturation($hex) );
  $lightness: floor( lightness($hex) );

  $result: "hsla(#{hue}, #{saturation}, #{lightness}, #{alpha})";
  @return unquote($result);
}

@function shade($hex, $amount) {
  @return mix(#000, $hex, $amount);
}

@function tint($hex, $amount) {
  @return mix(#fff, $hex, $amount);
}
```
```sass
//style.sass
body
  color: hsla(#3d96ff, 0.3)
```
 - Color 함수

```sass
// 각도를 돌려 색을 변형
adjust-hue($color, $degree)

// 많이 사용되는 함수
lighten($color, $amount)
darken($color, $amount)
saturate($color, $amount)
desaturate($color, $amount)
grayscale($color)

complement($color) // 보색
invert($color) // 보색, 명도까지 반전

// Get 함수(Getter)
alpha($color)
opacity($color)

// Set 함수(Setter)
rgba($color, $alpha)

// 불투명하게 변경
opacify($color, $amount) / fade-in($color, $amount)

// 투명하게 변경
transparentize($color, $amount) / fade-out($color, $amount)
```

- Number 함수

```sass
// 퍼센트(%) 반환
percentage($number)

// 반올림
round($number)

// 올림
ceil($number)

// 내림
floor($number)

// 절대값
abs($number)

// 최소값 반환
min($numbers...)

// 최대값 반환
max($number...)

// $limit이하의 랜덤한 숫자(정수) 반환
random([$limit])
```

-

###Condition( @if )

```scss
$value: null;

h1 {
  @if $value == false {
    color: blue;
  } @else if $value == null {
    color: green;
  } @else {
    color: black;
  }
}
```
```css
/* 컴파일 결과 */
h1 {
  color: green; }
```

- 대비색상 믹스인

```scss
@mixin contrast-color($color, $compare-light: 50%, $amount: 20%) {
  // 유효성 검사
  @if type-of($color) != color {
    @error "전달받은 #{$color} 값은 색상 데이터 유형이 아닙니다.";
  }

  $lightness: lightness($color) > $compare-light;
  $bg-color: null;
  @if ($lightness == true) {
    $bg-color: darken($color, $amount);
  } @else {
    $bg-color: lighten($color, $amount);
  }
  color: $color;
  background-color: $bg-color;
}
```

####if() 함수

```scss
$main-bg: #000;

.main {
  // if (조건, 참일 경우, 거짓일 경우)
  color: if($main-bg == black, #fff, #000)
  // 결과: color: #fff
}
```

-

###Loops(@while, @for, @each)

####@while문

```scss
// 1회만 처리
@if 조건 {
  조건이 참인 경우 , 코드 블록문이 처리
}

// 조건이 참일 동안 계속 처리, 조건이 계속 참일 경우.. 무한 루프에 빠질 수 있으므로 사용에 주의해야 한다.
@while 조건 {
  조건이 참인 경우, 코드 블록문이 처리
}
```
```sass
$i: 1
$total: 12
$unit-width: 60px
$gutter: 20px
$gutter-direction: after
$fluid: true
$page-width: $total * $unit-width + $gutter * ($total -1)
// target / context * 100
// @if fluid
// percentage(width/context)

%cf::after
  display: block
  content: ''
  clear: both

%col
  float: left
  margin:
    left: $gutter / 2
    right: $gutter / 2
  @if $gutter-direction == split
    margin:
      left: $gutter / 2
      right: $gutter /2
  @if $gutter-direction == before
    margin-left: $gutter
    &.first
      margin-left: 0
  @if $gutter-direction == after
    margin-right: $gutter
    &.last
      margin-right: 0

  @if $gutter-direction == inside
    padding:
      left: $gutter / 2
      right: $gutter / 2

@function width($n)
  $w: $unit-width * $n + $gutter * ($n -1);
  @if not $fluid
    @return $w
  @else
    @return percentage($w/$page-width)

@while $i <= $total
  .grid
    @extend %cf
    & .col-#{$i}
      @extend %col
      width: width($i);

  // 조건 변화 코드
  $i: $i + 1
```

####for문

```sass
$total: 12

@for $i from 1 through $total
  .grid
    @extend %cf
  .col-#{$i}
    @extend %col
    width: width($i)
```

####@each문 ( in ~ [list, map])

```sass
$buttons: play pause stop prev next forward backward

// list에서 각각의 아이템을 뽑아서 대입한다
@each $button in $buttons
  .button-#{$button}
    background: url("../images/button-#{button}.png")


// map 데이터
$headings: (h1: 3rem 1.2, h2: 2rem 1.45, h3: 1.5rem 1.6)

@each $heading in $headings
  $h: nth($heading, 1)
  $v: nth($heading, 2)
  $fz: nth($v, 1) // 3rem
  $lh: nth($v, 2) // 1.2
  #{$h}
    font-size: $v
    line-height: $lh
// 보다 간단히
@each $heading, $info in $headings
  $fz: nth($info, 1)
  $lh: nth($info, 2)
  #{$heading}
    font-size: $fz
    line-height: $lh
```

-

###그리드 시스템 sass로 응용하기

```sass
$base-font-size: 16px
$base-leading-ratio: $base-font-size * 1.5
$page-width: 1280px
$column-count: 8
$unit-width: 130px
$gutter-width: 30px
$pattern-width: $unit-width + $gutter-width
$gutter-direction: after
$avail-page-width: $page-width - $gutter-width

@function draw-column-pattern($hex, $alpha: 0.3)
  $location: percentage($unit-width/$pattern-width)
  @if $gutter-direction == after
    @return linear-gradient(90deg, rgba($hex, $alpha) $location, transparent $location)
  @else if $gutter-direction == before
    @return linear-gradient(270deg, rgba($hex, $alpha) $location, transparent $location)
  @else if $gutter-direction == split
    @return linear-gradient(90deg, transparent (100-$location)/2, rgba($hex, $alpha) (100-$location)/2, rgba($hex, $alpha) (100+$location)/2, transparent (100+$location)/2)

@function draw-leading-pattern($color, $opacity: 1)
  $location: $base-leading-ratio - 1
  @return linear-gradient(transparent $location, rgba($color, $opacity) $location)

.grid-container
  &::before
    content: '';
    position: absolute
    z-index: 10000
    top: 0
    left: 0
    width: 100%

  &.show-grid::before
    heigth: 500vh
    background: draw-column-pattern(#68c8de, 0.7), draw-leading-pattern(#f00)
    background-size: $pattern-width $base-leading-ratio

%cf::after
  content: ''
  display: block
  clear: both

.grid [class*="unit-"]
  @extend %cf
  float: left
  $half-gutter-width: $gutter-width / 2
  @if $gutter-direction == after
    margin-right: $gutter-width
  @else if $gutter-direction == before
    margin-left: $gutter-width
  @else if $gutter-direction == split
    margin-left: $half-gutter-width
    margin-right: $half-gutter-width
  @else
    @error "before, after, split를 전달해야 한다."
```
###### Front-End Develop SCHOOL

# DAY 24

###Operations

 - 사칙연산의 원리를 따른다(`+`,`-`,`*`,`/`, `%[나머지 연산자]`)
 - 폰트 속기형을 쓸 때 생각처럼 작동하지 않는다
 - 인터폴레이션(Interpolation) 방식으로 해결한다 #{}
 - 컬러 연산이 가능하다(RRGGBB값중 매칭되는 값들을 연산한다)
 - 비교연산( `==`, `!=`, `<`, `>`, `<=`, `>=` )

```sass
10 >= 11 // false
1 + 1 == 2 // true
red == #f00 // true

// node sass 에서 테스팅을 하고 싶을 때 [ @debug 디렉티브(지시자) ]
@debug 100 < 4 // 콘솔에서 false를 확인할 수 있다
```

 - 문자열도 연산할 수 있다

```sass
'foo' + 'bar' // 'foobar'
'foo ' + 'bar' // 'foo bar'
```

 - 불린 연산

```sass
1 + 2 == 4 or 2 != two // true

true and false // false

not false // true
```

 - list 함수
  - length($list)
  - nth($list, 1)
  - set-nth($list, n, $value)
  - append($list, $val, [$separator])
  - 다양한 함수를 지원하므로 Document를 찾아봅시다

-

###보간법(Interpolation)

 - 인터폴레이션 보간법 : 문자를 접합

```sass
$selector: fast-campus
$pseudo-name: after

#area .#{$selector}
  margin:
    left: 20%
    right: 20%
  &::#{$pesudo-name}
    content: 'dynamic content'


// 폰트 속기형 문제 해결법
$base-font-size: 16px
$base-line-height: $base-font-size * 1.5
$spoqa-language: kr

// [ko] "Spoqa Han Sans"
// [ja] "Spoqa Han Sans JP"
$spoqa-font-family: "Spoqa Han Sans"
// $spoqa-font-family: "Spoqa Han Sans JP"

// 웹폰트
@import url("http://spoqa.github.io/spoaq-han-sans/css/SpoqaHanSans-#{$spoqa-language}.css")

//본문 설계
body
  font-size: #{$base-font-size}/#{$base-line-height} $spoqa-font-family
  font-family: "Spoqa Han Sans"
  line-height: $base-line-height


// 미디어 쿼리 사용 예
$media-md: "screen and (min-width: 760px)"
$media-lg: "screen and (min-width: 1220px)"
$media-print: "print and (min-width: 21cm)"

.#{$selector}
  @media #{$media-md}
    display: flex
    flex-flow: row-reverse wrap

  @media #{$media-lg}
    display: block
    padding: 1rem

  // 인쇄 환경을 고려하여 !important 사용
  @media #{$media-print}
  background: #fff !important
  color: #000 !important
```

-

###Mixins

`@mixin`으로 정의, `@include`로 호출

```scss
//@mixin 믹스인이름($매개변수) {
//  섞고자 하는 코드
//  섞고자 하는 코드
//  섞고자 하는 코드
// }

@mixin box-sizing {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

%box-sizing {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

// 믹스인 사용
header {
  @include box-sizing
  // @extend %box-sizing
}

main {
  @include box-sizing
  // @extend %box-sizing
}

footer {
  @include box-sizing
  // @extend %box-sizing
}


// 확장성 비교
@mixin box-sizing ($type: border-box) { // 기본값 설정
  -webkit-box-sizing: $type;
  -moz-box-sizing: $type;
  box-sizing: $type;
}

header {
  @include box-sizing(content-box)
}

main {
  @include box-sizing
}

footer {
  @include box-sizing
}


@mixin size($width: null, $height: null) {
  width: $width;
  height: $height;
}

// 가변 전달 인자: 복수의 인자를 전달하기 용이하다
@mixin transition($props...) {
  -webkit-box-shadow: $props;
  -moz-box-shadow: $props;
  box-shadow: $props;
}

```

| 믹스인 | 플레이스 홀더|
| --- | ---|
| 반복하여 생성(코드량이 많아진다) | 선택자가 올라가 한데 묶인다 |
| 인자를 전달함으로써 확장성이 좋다 | 확장하기 힘들다 |

-

###변수 범위(scope) 콘텐트 블록

```scss
// 전역 변수
$color: #32fa21;

@mixin colors($color: darkred) {
  background-color: $color;
  // 믹스인을 호출할 때 넣어준 { color: $color; }를 삽입한다
  // 호출할 당시 $color는 전역변수 #32fa21 이 들어간다
  @content
  border-color: $color;
}
.bg-border-colort {
  @include colors { color: $color; }
}
```

-

### 믹스인
Mixin, 외부에서 전달받은 인자 또는 콘텐츠를 병합해서 코드 덩어리를 출력한다.

##### 믹스인 정의
직관적으로 정의 가능

##### 정적 믹스인
`@mixin 믹스인이름 {}`

##### 정적 믹스인 호출
`@include 믹스인이름`

##### 동적 믹스인
`@mixin 믹스인이름(매개변수1, 매개변수2) {}`

##### 동적 믹스인 호출
`@include 믹스인이름(전달인자1, 전달인자2)`

##### 매개변수 기본 값 설정
`@mixin 믹스인이름(매개변수1: 기본값1, 매개변수2: 기본값2) {}`

##### 매개변수 확장
`@mixin 믹스인이름(매개변수1, 매개변수2, 매개변수3, 매개변수4) {}`

##### 가변 매개변수
`@mixin 믹스인이름(매개변수...) {}`

##### 매개변수 내부 콘텐츠 블록
```
@mixin 믹스인이름(매개변수...) {
  @content;
}
```

##### 외부 믹스인 호출 시 콘텐츠 블록 코드 전달
```
@include 믹스인이름 {
  믹스인 내부로 전달할 콘텐츠 블록(코드 덩어리)
}
```

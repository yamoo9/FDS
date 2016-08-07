###### Front-End Develop SCHOOL

# DAY 23

###Sass Syntax

> **Document와 친구가 될 시간입니다.**

####Import

 - css 확장자는 필히 명시
 - scss, sass 확장자는 생략 가능
 - 여러개의 파일을 불러들일 때 `,`(콤마)로 불러올 수 있으나, 명시적 표기를 위해 권장하지는 않는다.
 - `import`구문이 파일 중간에 있어도 에러가 나지 않는다
 - 중첩 import: 블럭 내에서 import를 함으로서 네임 스페이스 기능이 가능하다.

####Variables

 - Sass 변수는 변수 이름 앞에 `$`기호를 붙인다.
 - 변수 이름 사이에 공백을 사용하지 않는다.
 - 변수 이름 음절 사이에 `_`,`-` 등을 사용한다.
 - camelCase 방식의 이름을 사용할 수도 있다. 일반적으로 함수이름에 쓰기 때문에 권장하지 않는다.
 - 값 뿐만 아니라 속성에도 변수값을 대입할 수 있다.

```sass
// 가운데로 정렬되는 코드
%center-pos
  display: flex
  justify-content: center
  align-content: center

%align-center-margin
  margin:
    left: auto
    right: auto

$container-width: 1260px
$dark-gray: #3d3c31

.container
  @extend %align-center-marign
  max-width: $container-width
  // round() : Sass 내장 함수
  min-height: round($container-width/2)

.page-footer
  @extend %align-center-margin
  width: 100vh
  background: $dark-gray
  color: lighten($dark-gray, 40%)
  // round() : Sass 내장 함수
  color: rgba(lighten($dark-gray, 40%), 0.45)
```

####RWD, SASS를 이용한 MediaQuery

```sass
$bp-md: 720px

[...]

.page-footer
  @extend %align-center-margin
  width: 100vh
  @media screen and (min-width: $bp-md)
    width: 90%
  background: $dark-gray
  color: lighten($dark-gray, 40%)
  // round() : Sass 내장 함수
  color: rgba(lighten($dark-gray, 40%), 0.45)
```

```scss
$medium-screen: 960px;
$large-screen: 1120px;
$wide-screen: 1600px;

.page-header {
  float: left;
  width: 100%;
  @media (min-width: $medium-screen) {
    width: 1/4 * 100%;
  }
  @media (min-width: $large-screen) {
    width: 1/6 * 100%;
  }
  @media (min-width: $wide-screen) {
    width: 1/10 * 100%;
  }
}
```

####SASS의 데이터 유형

 - `Null`
 - `Number`
 - `String & Color`
 - `Boolean`
 - `list`
 - `map`

-

###@function 맛보기

```scss
%rwd-media-ratio {
  width: 100%;
  height: 0;
  background-size: cover;
  background-position: center center;
}

// 모듈화하기
@function getPercent($target, $context) {
  @return $target/$context*100%
}

@function strip-unit($px)
  @return $px/(1px)

@function em($unit, $base: 16)
  $unit: strip-unit($px)
  @return $unit/16 * 1em


%rwd-media-4-3 {
  @extend %rwd-media-ratio;
  padding-bottom: getPercent(3,4);
}
%rwd-media-16-9 {
  @extend %rwd-media-ratio;
  padding-bottom: getPercent(9,16);
}
%rwd-media-21-9 {
  @extend %rwd-media-ratio;
  padding-bottom: getMediaRatio(9, 21);
}
```
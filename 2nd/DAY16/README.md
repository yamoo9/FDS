###### Front-End Develop SCHOOL

# DAY 16

## 1. Sass
### 1.1 호출 import (@import)
CSS 뿐만 아니라 *.scss, *.sass 파일을 @import 문을 사용하여 호출 할 수 있습니다.

- scss, sass 확장자의 경우는 생략할 수 있습니다.(css 확장자는 필히 명시)

~~~sass
@import "team-works.scss"; @import "team-works";
~~~

~~~sass
@import "team-works", "team-test";
~~~

- 파일명 작성시 띄어쓰기 X
- sass파일은 "" 필요 X
- main.sass 파일 해석 시 병합(Marge, Combine)되어 하나의 main.css로 css 폴더 내부에 생성된다.

>예)sass/modules/grid.scss -> css/modules/grid.css

- 아래와 같은 방식은 불러올 모듈이 많다면 권장하지 않음.
~~~sass
@import "modules/normalize", "modules/grid"
~~~

- 모듈이 많다면 아래와 같이 개별적으로 로드 하는 것이 좋음.
~~~sass
@import config/vars
@import config/mixins
~~~
###1.1.1_호출제어(Partials)
*.scss, *.sass 파일 중 CSS 파일로 변경되지 않게 하는 방법은 파일명 앞에 _를 붙여주면 됩니다.

- 재사용 가능한 모듈 파일 이름 앞에 _ 를 붙이지 않으면 css 폴더에 해당 파일이 생성된다.

###1.1.2 sass @import 불러올 때 
sass, scss파일 내, 어디서나 불러올 수 있지만<br /> CSS는 불가능하기 때문에 오류가 날 수 있다.<br />
상단에서 불러오는 것이 좋다.

###1.1.3 스타일 모듈관리(Manage Style Modules) 
SASS에서는 각각의 역할을 분리하여 필요에 따라 재사용할 수 있도록 모듈을 관리하는 것이 가능합니다.

~~~sass
@import modules/normalize
@import modules/base
@import modules/mixins
@import partials/header
@import partials/footer
@import partials/ie
@import partials/print 
~~~

#####1.1.3.1 적절한 파일 관리 방법
- 모든 파일 공통 파일.
- 부분적 파일.
- sass에 대해 미숙한 사람들을 위한 별도의 파일 생성.

###1.1.4 중첩 @import
선언구문 내부에 사용.<br />
별도로 분리된 파일에서 코드를 불러와 선택자 뒤에 불러온 모듈 선택자가 추가 됩니다.(선택자 상속)

~~~sass
.button {
	font-weight: bold;
	color: white;
}
footer {
@import button;
}
~~~

결과 
~~~sass
footer .buttom{
	font-weight: bold;
	color: white;
}
~~~

---
##1.2 변수(Variables,$)
PHP 변수처럼 $이름 값을 설정한 후, 값을 참조하여 적용할 수 있습니다.

- 대쉬(-), 언더스코어(_) 동일하게 처리.
- 변수를 따로 모아서 새 파일로 관리하여 가져오는 것이 효율적이다.

변수 선언

~~~sass
$set-width: 940px;
$set-color: #ce4dd6;
~~~

변수 값 적용

~~~sass
.designer {
 width: $set-width;
 color: $set-color;
}
~~~

####1.2.1 RWD, SASS 변수 + MQ 활용(SASS 3.2+) 
반응형 웹 디자인에서 SASS 변수와 CSS3 미디어쿼리 조합은 매우 유용합니다.

~~~sass
$break-small: 320px;
$break-large: 1200px;
//브레이크 포인트 추후 수정

.profile-pic {

float: left;
width: 250px;

@media screen and (max-width: $break-small) { //320px 값이 적용
    width: 100px;
    float: none;
 }

@media screen and (min-width: $break-large) { //1200px 값이 적용
    float: right;
 }

} 
~~~

~~~sass
//속성(Property)도 변수 처리 가능
$width-name: max-device-width;
$target-width: 320px;
@media screen and ($width-name : $target-width) {
// $width-name -> max-device-width
// $target-width -> 320px
background: red;
} 

@media screen and ($width-name : $target-width + 1) {
//변수 연산 
//$target-width -> 321px
background: red;
}
~~~

####1.2.2 변수 기본 값 설정($, !default) 
변수를 설정한 후, 초기 값을 지정할 수 있습니다.

~~~sass
$set-width: 940px; 
// 우선 적용
$set-width: 1000px !default;
// 기본값이기 때문에 별도로 값이 설정되지 않을 경우 사용됩니다.
~~~

---
###1.3 데이터 유형 (Data Type)
- Null : 비어있는 값	
- Number(숫자형) : 1.2, 3, 14px	
- String(문자형) : " " , ' ' 	
- Color(문자형) : Verdana, lightblue, #fe4940 	
- Boolean(논리형) : true, false	
- List : 공백,콤마로 구분되는 목록 
	   1.5em 1em 0 2em, 2px solid gray	
- Map : 키:값 으로 구성된 그룹
	   $map: (key1: value1, key2: value2) 

sass type-of($type) = 데이터 유형을 알려주는 함수

---
###1.4 연산 (Operations)
 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%) 등 수학의 연산 결과를 수행할 수 있습니다.

~~~sass
// 변수 설정
$global-padding: 10px;
$page-max-width: 1420px;

// 컨테이너 클래스 설정
.container {
 max-width: $page-max-width - $global-padding * 2;
 //변수 치환 후 연산 과정이 연산 과정이 이루어집니다.
 padding: 0 $global-padding;
}
~~~


####1.4.1 비교연산 (Comparison Operations) 
크다(>), 작다(<), 크거나 같다(>=), 작거나 같다(<=), 같다(==), 다르다(!=) 등 비교 연산 결과를 제공합니다.

~~~sass
1 < 20        // true
10 <= 20      // true
4 < 1         // false
4 >= 1        // true
1 + 1 == 2    // true
small != big // true
~~~

####1.4.2 문자연산 (String Operations)
문자와 문자를 접합하려는 경우 + 연산자를 사용할 수 있습니다.

~~~sass
li {
cursor: n + -resize; // n-resize
}
// " "를 붙이지 않아도 연산이 수행
~~~

####1.4.3 보간법(#{ }, Interpolation)
SASS는 변수를 “ ” 내부에서 처리할 수 있는 보간법을 지원합니다.

~~~sass
$family: "Droid+Sans";
@import url("http://fonts.googleapis.com/css?family=#{$family}");
@mixin do($selector, $message) {
 body #{$selector}::before {
 content: $message;
 }
//웹 폰트 CDN 사용시 보간법이 유용하게 활용
~~~

HTML에서 | 사용시 오류가 생기기 때문에 %7C로 바꿔줘야 함.

~~~html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abhaya+Libre|Open+Sans|Roboto">

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abhaya+Libre%7COpen+Sans%7CRoboto">
~~~

####1.4.4 쿼리문 보간법 활용(#{ }) 
~~~sass
$information-phone: "only screen and (max-width : 320px)";
@media #{$information-phone} {
background: red;
}
~~~

###1.4.5 컬러 연산(Color Operations) 

~~~sass
p {
color: #010203 * 2;
/*  
    01 * 2 = 02
    02 * 2 = 04
    03 * 2 = 06
    ------------
    #020406
*/
} 
~~~

####1.4.6 기타 연산(Etc. Operations) 
불린 데이터 연산을 사용할 수 있습니다.

	불린(Boolean) 연산 지원: and, or, not
리스트(List) 연산 미지원.
<br />배열 객체의 length, join 등 유사 함수 지원.

- lenght($list) : 리스트의 길이를 돌려준다.
- nth() : 리스트에서 순서에 해당한것을 가져온다.
- join ($list1, $list2, [$separator]) : 합친다.
- append($list1, $val) : 리스트 뒤에 집어넣는다. (push와 비슷)

---
###1.5 믹스인 (@mixin)
코드를 섞는다.
 
JS 함수와 흡사한 믹스인은 @mixin으로 모듈을 정의한 후, @include로 호출할 수 있어 재사용이 가능합니다.

- @mixin : 믹스인을 정의.
- @include : 믹스인을 호출.

~~~sass
 @mixin box-sizing {
 	-webkit-box-sizing: border-box;
 		-moz-box-sizing: border-box;
			 box-sizing: border-box; }
 #app {
 	@include box-sizing; }
 #design {
	 @include box-sizing; }
~~~

reset mixin 만들기.

~~~sass
@mixin reset-list {
  margin: {
    top: 0;
    bottom: 0;
  }
  padding-left: 0;
  list-style: none;
}

@mixin reset-table {
  border-collapse: collapse;
  border-spacing: 0;
}

@mixin reset-box-model {
  outline: 0;
  margin: 0;
  border: 0;
  padding: 0;
}

@mixin remove-img-bottom-space {
  vertical-align: top;
}
~~~

~~~sass
 . @mixin nested-reset {
 #{$html-elements} {
     @include reset-box-model;
     @include reset-font;
 } 

$html-elements: "div, span, applet, object,
iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
pre, a, abbr, acronym, address, big, cite,
code, del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, b, u,
i, center, dl, dt, dd, ol, ul, li, fieldset,
form, label, legend, table, caption, tbody,
tfoot, thead, tr, th, td, article, aside,
canvas, details, embed, figure, figcaption,
footer, header, hgroup, menu, nav, output,
ruby, section, summary, time, mark, audio,
video" !default;
~~~


###1.5.1 전달 인자 (Arguments) 
@mixin으로 정의된 모듈에 인자를 전달하여 믹스인을 확장할 수 있다.

($변수) 믹스인 내부에 전달된 값을 받기에 전달 인자라고 부른다.
~~~sass
@mixin border-radius($변수) {
    -webkit-border-radius: $변수;
    -moz-border-radius: $변수;
    border-radius: $변수;
}

@mixin box-sizing($origin) {
  -webkit-box-sizing: $origin;
  -moz-box-sizing: $origin;
  -o-box-sizing: $origin;
  -ms-box-sizing: $origin;
  box-sizing: $origin;
}

@mixin transition($props: all 0.3s) {
  -webkit-transition: $props;
  -moz-transition: $props;
  -o-transition: $props;
  transition: $props;
}
~~~

---
###1.6 가운데 정렬 박스 모듈
~~~sass
.center-box {
  @include box-sizing(content-box)
  position: absolute
  top: 0
  left: 0
  width: $box-width
  height: $box-height
  margin:
    left: $box-width / -2
    top: $box-height / -2
}
~~~

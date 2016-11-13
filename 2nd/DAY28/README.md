###### Front-End Develop SCHOOL

# DAY 28 (월요일 예시코드 보충해서 완성예정)
- __jQuery__: Basic
- __jQuery__: Carousel Component Design
- __jQuery__: Carousel Component Design, OOJS
- __jQuery__: Plugin
- 케이스별 WAI-ARIA 적용가이드 다운로드 [PDF](https://drive.google.com/drive/folders/0B_nI53HQaYcNNWhXektyS1lNTGc?usp=sharing)
<!-- ---
## 1. indicator
인스턴스를 생성해야만 쓸 수 있는 메서드를 의미한다. <-> static메서드, 클래스 메서드
--- -->


<!-- ### 1-1. 요소의 스타일 설정(복습) : jQueryObj.`css()`
- http://api.jquery.com/css/
- 여러 요소를 가져와 속성값을 순회하며 변경하는 예제
```js
코드코드
```
#### CSS속성 하나 가져오기 .css( `'CSS속성제목'` );
  - r -->



---

## 1. HTML요소의 class=""를 이용해 indicator 만들기

---
### 1-1. CLASS제어모듈 작성 (함수형)
`hasClass(a,b)` 함수 안에 주체와 변수를 넣어서 실행. 객체형은 `instance.hasClass(b)`처럼 주체가 앞으로 이동.
#### hasClass( `el, class_name` )
- `el`의 클래스를 받아옴 : "class1 class2 class3" 형식.
- 받은 클래스를 쪼개 배열로 전환하고 `class_name` 이 포함되었나 확인
- return type : **boolean**
```js
코드코드
```
#### addClass( `el, class_name` )
- `class_name`추가, `el`의 기존class는 유지
- `el`에 `class_name`이 이미 있을시 무효
```js
코드코드
```
#### removeClass( `el, class_name` )
- `el`에 `class_name`이 있으면 삭제, 기존class는 유지
- `el`에 `class_name`이 없으면 무효
- `class_name`에 ***** 문자를 주거나 공백일 경우 모든 클래스를 삭제 : **||** 사용해 기본값으로 설정.
```js
코드코드
```
#### toggleClass( `el, class_name` )
- `el`에 `class_name`이  있으면 삭제, 없으면 추가.
- 메뉴의 활성화/비활성화에 사용됨
```js
코드코드
```
#### radioClass( `el, class_name` )
- radioGroup의 모든 요소를 형재로 배치
- radioButton중 하나 클릭시 모든 형제를 가져와 `el`만 `class_name`을 추가하고, 나머지에선 제거
- a를 figure 등으로 감쌌을 경우 .parent()로 가서 형제요소 찾기.
```js
코드코드
```
### 1-2 구형 브라우저 고려
브라우저가 **classList** 를 지원하는 경우/아닌경우를 나눠 조건분기하는 예제.
```js
if( 'classList' in Element.prototype){
  hasClass = function(...){...}
  addClass = function(...){...}
  removeClass = function(...){...}
  toggleClass = function(...){...}
}
else{
  hasClass = function(...){...}
  addClass = function(...){...}
  removeClass = function(...){...}
  toggleClass = function(...){...}  
}
```
### 1-3 객체.prototype 확장형 작성방법 (=플러그인 코드라고도 부름)
- element.prototype 에 추가하면 `dom객체.hasclass(class_name)` 으로 사용
- this 를 이용
- add,remove,toggleClass는 **method chaining** 을 위해 자기 자신을 반환
- 예시이지, 브라우저 기본객체의 prototype 변경/추가는 권장하지 않음
```js
Element.prototype.radioClass = function(class_name){
  radioClass(this, class_name);
  return this;
}
또는 jQuery를 확장한다면?
jQuery.prototype.radioClass = function(class_name){
  this.addClass()
  return this;
};
```
$('nav a').on('click',function(e){
  e.preventDefault();
  $(this).radioClass('active')
});
$(this) 를 여러번 쓰게된다.

바로 함수에 넣어쓰는게 아니고 가져온 $를 each 로 순환하면 $()안써도돼서 괜춘.
var $nav_links = $

## 2. 포토슬라이드(carousel) 작성과 접근성

### 2-1 구현방식
#### 기본구조
```js
```
- 프레임   : article > 탭목록+실제화면+좌우이동
  - 탭목록 버튼   : nav>ul>li*셀갯수 >a
  - 탭 실제화면   : div > figure*셀갯수 >img
  - 좌우이동 버튼 : div > button*2
### 2-2. 접근성을 고려한 Blueprint
처음에는 수작업으로 JS모듈화 하기위해 참고할 최종완성본을 만들어본다.
```js
```
#### 키보드 포커싱 순서
- 목록UI 포커싱이 가장먼저 되어야 하므로 첫 마크업으로.
#### 포토슬라이드 프레임에 제목넣기
- article 요소사용, h로 제목주고, readable-hidden으로 감춤
#### 역할에 따라 요소 role속성 재정의
- nav와 li의 role 을 재정의(aria-label)
#### Non-mouse 탐색방법 구현 (JS사용)
- 화살표탐색가능, 이동시 뷰 함께 바뀜
- 마지막에 처음 순서로 돌아오기
### 2-3 JS모듈화
HTML에는 최소내용만 받고 감싸는 div나 class, aria 등은 JS에서 생성
#### 표준 최소마크업을 협의해 정하고 아래처럼 demo로 제공한다.
```js
```
#### ui_Carousel 객체 구조
- 초기화(요소찾기,객체화) -> 감싸는요소추가 -> class,aria -> 동작구현
-
```js
function ui_Carousel(){}
function ui_Carousel.prototype.init(){}
```
#### 요소와 클래스 추가

#### aria 속성 추가
- active 요소에 aria-active="true" ?

#### next/priv 버튼
- active된 페이지번호에 +1, -1 하는식으로 제어
- 무한스크롤 : index 감지해서 마지막인데 다음버튼 누르면 처음값 넣기
#### 트렌드
- 미리 다 컴포넌트 만들어뒀다가 붙이는 방식. (react 등)
- 지금처럼 DOM제어해서 일일이 만드는 방식은 최신은 아님.

### 2-4 전환효과
#### fade 방식
- pos abs + opacity : fadein, out 애니메이팅 가능
- z-index 나 display:none 은 동작하긴 하나 부드러운 애니메이팅 불가.
- 겹쳐놓고 opacity 조절
#### 밀어주기
- 옆으로 쌓아놓고 밀어주는 방식 : 애니메이팅 가능
- 버튼누를시 다음이미지를 출발위치로 이동시킨후 슬라이드한다.
- 이미지 밀기 방식도 여러방법있고 설계하기 나름.
#### CSS로 애니메이팅
- CSS 애니메이트 함수는 크로스브라우징 이슈 있음.
- 빠름
- JS를 통해 CLASS 주고 빼는 방식으로 사용
#### JS로 애니메이팅
- jQuery 의 animate 사용
- 느리지만 호환성 있음
- Class를 넣고 빼는 방식을 사용하지 않아도 됨.

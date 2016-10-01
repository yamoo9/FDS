###### Front-End Develop SCHOOL

# DAY 05

## Javascript

### 변수 선언 방법

#### 1. 변수 선언
```js
var my_name; // 변수 선언 시, 기본적으로 undefined 값 할당
```

#### 2. 선언된 변수에 값 할당
```js
var current_state;
// 선언된 변수에 값을 할당
current_state = 200;
```

#### 3. 선언과 동시에 값 할당
```js
var current_state = 200;   // 숫자
var is_finished   = false; // 불리언
var container_el  = null;  // 비어 있다.
var my_name;               // 변수 선언만 하게 되면 undefined
```

#### 4. `var` 키워드를 한 번만 사용하는 싱글톤(Singleton) 패턴
```js
var current_state = 200,   // 숫자
    is_finished   = false, // 불리언
    container_el  = null;  // 비어 있다.
```



##데이터 값 '복사'와 '참조'

변수(Variable)에 값이 할당 :  값의 유형(Data Type)에 따라 **복사** 또는 **참조(Reference)**된다.

```js
복사의 예)
var first = 'data';
var second;
second = first;
second === first;  //true ( '==='은  등호. Strict Equal `완벽 일치 비교`)
```

단, 여기서 `first`와 `second`의 데이터는 같으나 메모리 저장소는 다름.<br>
따라서 한 변수에만 다른 값을 할당하면 둘은 다른 값을 가지게 된다.

```js
first = 'another data';
second === first; //false
```



## 초기화
var parent = null;
var child_one = null;
var child_two = null;

## 문서 객체 제어

1.HTML 문서에서 'my-parent'라는 `id` 이름이 'my-parent'와 일치하는 문서 객체를 변수 `my_parent`에 할당한다.<br>
※ 자바스크립트에서는 변수명에 **`-`**을 사용 할 수 없다. **`_`**를 사용하는 것에 주의.

```js
사용법 : document.getElementById('아이디명')

var my_parent = document.getElementById('my-parent');
var child_1 = document.getElementById('child_one');
var child_2 = document.getElementById('child_two');
```
2.console.log를 사용할 때 문자열을 넣어주면 해당 문자열을 출력하고, 변수명을 넣어주면 변수명에 들어가 있는 데이터를 출력한다.
위에서 my_parent 변수에는 my-parent ID로 되어 있는 태그가 들어있기 때문에 해당 태그가 아래와 같이 출력된다.
ex>
my_parent : `<div id="my-parent" style="border: 1px solid rgb(126, 93, 196);">
            <div id="child-one" style="color: rgb(126, 93, 196);">one</div>
            <div id="child-two" style="background: rgb(126, 93, 196); color: rgb(255, 255, 255);">two</div>
            </div>`
```js
사용법 : console.log('문자열',변수명);
console.log('my_parent :', my_parent);
console.log('child_one :', child_1);
console.log('child_two :', child_2);
```

변수에 할당된 값(문서 객체)을 사용해서 자바스크립트에서 __인라인 스타일 제어__할 수 있다.

```js
my_parent.style.border   = '1px solid #7e5dc4';

child_1.style.color      = '#7e5dc4';
child_2.style.background = '#7e5dc4';
child_2.style.color      = '#fff';

```

---


## CSS3

### 가상 클래스와 가상 요소 (Pseudo Class VS Pseudo Element)

CSS2 에서는 가상 클래스나 가상 요소 모두 앞에 `:` 썼으나, CSS3 부터는 가상 요소 앞에는 `::`

##### 가상 클래스 : `상태(Status)`와 관련된 것

```css
:link     {}
:visited  {}
:hover    {}
:focus    {}
:active   {}
:lang(en) {}
```

##### 가상 요소 : 가상으로 `요소`를 추가

```css
::before       {}
::after        {}
::first-line   {}
::first-letter {}
::selection    {}
```



###  width, height 중 하나의 값에 다른 하나를 자동으로 비율 적용하는 방법

```css
img {
  width: auto;
  height: 100vh;
  vertical-align: top; /* 이미지 아래에 존재하는 알 수 없는 공간 제거 */
}
```

또는

```css
img {
  width: 50vw;
  height: auto;
}
```

※ `vertical-align`은 이미지를 화면에 꽉차게 할 때, __이미지 아래에 존재하는 알 수 없는 공간을 없애고 싶을 때 사용__.



### Transform

```css
* {
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: 0 0;
}
```

- `transform-origin`은 회전하는 기준점. 설정하지 않으면 기본값은 요소의 중심이다. `(50% 50%)`
- `rotate`는 회전, `()`는 각도(-는 반시계 방향, 양수는 시계방향으로 돈다)
- `translateX`는 X축(좌우 이동), `translateY`는 Y축(상하 이동)
- 단, 여기서는 90도 회전하였으므로 `translateX(-100%)`은 좌우가 아니라 아래로 이동하게 된다.
- 회전한 요소의 `width`, `height`도 원래 요소 모양으로 적용되므로 회전후 화면에 보이는 폭과 너비로 생각하면 안된다.



### Dropcap 디자인

![](http://www.magazinedesigning.com/wp-content/uploads/2013/06/drop-caps-initials-4.jpg)

```css
p::first-letter {
  float: left;
  margin: ...;
  font-size: ...;
  font-weight: ...;
  line-height: ...;
}
```

### 브라우저 스타일 초기화 모듈

```css
body {
  margin: 0;
  font: 1rem/1.5 "Spoqa Han Sans", Sans-Serif;
}
```

- `font: (font-weight) (font-style) (font-variant) [font-size]/[line-height] [font-family];`
- `()`는 생략가능. `sans-serif`는 적용한 폰트가 지원되지 않는 환경일 경우 `sans-serif` 계열(삐침이 없는 글씨체)로 대체.
- 그 밖에 `padding`이나 기본세팅 원하는 속성 추가

-

### clearfix 모듈

```css
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
```

※ `float` 속성 적용이 많을 때 필요할 경우, HTML 요소에 `clearfix` 클래스 속성을 추가해서 제어할 수 있다.

---

## Photoshop

### 투명 배경 만들기

1. Rectangular Marquee Tool로 원하는 부분 선택 (shift를 누르고 드래그하면 중복 선택가능)<br>
![Rectangula Marquee Tool](http://pe-images.s3.amazonaws.com/basics/cc/new-features/2015/customize-toolbar/rectangular-marquee-tool-group.gif)
2. 복사 - 새창에서 붙여넣기 (복사 후 file-new 하면 clipboard의 이미지가 그대로 붙여넣기 됨)
3. Magic Wand Tool로 버릴 배경 선택.<br>
![magic wand tool](http://pe-images.s3.amazonaws.com/basics/clipping-masks/essentials/magic-wand-tool.gif)
4. 배경 Delete
5. Image - Trim 하면 가장자리 부분이 이미지에 맞게 잘린다.
6. 저장

---

### 강의 피드백

![Feedback](../Assets/D4-feedback.jpg)

#### 의견 1.

**실습이 많아지면서 강의 내용을 전달받는게 어려웠습니다.** 코드를 타이핑하면서 설명을 하고 결과화면을 바로 보여준 후에 결과가 안나온 사람들을 봐주는 방법이었는데요. **코드를 타이핑 하면서 설명을 하면 설명의 메모나 코드 둘중 하나를 포기해야 합니다.** 더구나 **강사님이 자신의 코드가 타이핑이 다 되면 결과화면으로 넘어가기까지 10초도 기다려주지 않습니다.**

짧은 코드를 설명해야 이해가 쉽기 때문에 범위를 조금씩 한 것 같은데 코딩과 설명 - 결과보기 주기는 반대로 많아집니다. 강의 포인트를 메모하고 코딩하다 결과화면 나오면 멈췄다 다음 코딩을 할때 이전 코딩을 따라하고.. 그러다 보면 뒤에는 아예 **설명도 못듣고 코드만 따라치는 상황도 나오는데요. 머리속에 아무것도 남은게 없습니다. 코드를 따라 치려면 책이나 인터넷에도 많으니까요.**

> 코드를 타이핑하면서 설명을 하는 것이 설명을 기록하거나, 코드를 작성하는 것 중 하나를 택해야 한다고 이야기 주셨는데... 동시에 2가지를 수행하지 말고, 1가지에 집중해보시면 좋을 듯 합니다. 수업 시간에 코드를 작성하며 설명을 하면 기록만 해보세요. 코드를 타이핑하려 따라 치려하다 보면 수업 내용을 놓치게 됩니다. 그리고 코드 작성 및 설명이 끝나면 기록된 내용을 검토하며 코딩 실습을 진행해야겠죠.

> 실습이 완료되지 않은 상태에서 강의가 다음 내용으로 진행될 것 같다면 바로 이야기 주시길 바랍니다. 실습 시간을 더 달라고 말씀해주세요. 그리고 코드를 따라치는 것에 허덕이다 보니 머리 속에 남는 것이 없을 것 같다면 과감하게 코드를 따라치는 것을 멈추세요. 그 시간에 배운 내용을 상기하며 메모한 것을 보고 이해를 하는 것이 우선시되어야 합니다. 코드 실습은 수업이 끝난 후 저녁에 진행하며 자신의 것으로 소화해보세요.

#### 의견 2.

**생각하지 못했던 특강들과 오전 자바스크립트 강의로 인해 야무님의 HTML/CSS를 들을 수 있는 시간이 많이 줄어들어 아쉽기도 하고 걱정도 됩니다.** 물론 프론트엔드 개발을 따라가지 못하는것도 문제가 되고 걱정되 이해되지만 HTML/CSS의 고급 기술이나 경험과 노하우는 오히려 인터넷이나 타 강의에서도 접하기 힘들다고 생각해서 수강한 것이었는데 말입니다.

> HTML/CSS 강의는 자바스크립트를 진행할 때도 함께 공부하고 있으니 너무 상심 하지마세요 ^^; HTML/CSS와 관련된 고급 기술이나 경험/노하우 최대한 전해드릴께요~

-

#### 의견 3.

**1주차와 2주차의 선생님의 소통이 완벽하게 이루어져 있지 않아서, 정확히 무엇을 배웠는지 파악을 못하신 것 같다.** CSS의 심화 과정 수업이 남아 있는 만큼 중요 개념을 빠르게 다시 확인하고, 만약 중요 개념을 예를들면 `float`라던지, `position`이라던지 이런 자료를 만들어서 주셨으면 한다.

> 데레사 선생님과 원할하지 못한 소통으로 인해 불편을 끼쳐드려 죄송합니다. 향후 진행되는 과정에서 기초와 활용을 충실하게 복습과 병행하며 진행해보겠습니다. ^^;

-

#### 의견 4.

**필요한 부분을 묶음정리 해주셔서 매우 좋았습니다.** 수업 진도 나가는 중간 중간에 그런 부분이 쌓일 때 한번씩 요약해주시면 도움이 됩니다. 항상 하면 답답할 것 같고, **실습이 몇번 진행되고나서 헷갈리는 부분이 쌓였을 때 모아서 정리요청 - 묶음정리가 좋은것 같습니다.**

> 네. 묶음 정리가 도움이 되었다 하시니 기쁘네요. 그리고 추가적으로 진행되었으면 하는 의견 주셔서 감사합니다. ^ㅡ^

-

#### 의견 5.

과제를 진행하면서 실력이 늘어나면 좋겠는데 점점 배운걸 머리로 생각하는게 멀어지고 이전에 했던 소스를 찾아서 일단 완료하는 걸 목적으로 해나가고 있습니다. **이건 마치 이해하기 위해서 배우기 보다 당장 마감 일을 맞추기 위해 결과부터 만들어내는 외주 업무 같네요.** 만약 배운 것을 이미 이해하고 있고 이를 응용해서 하는 과제나 포트폴리오 작업을 한다면 보람있을 것 같은데 **제대로 이해하고 활용하지 못하는 상태에서 과제의 양 때문에 점점 이해하는 복습을 포기하고 결과물 만들기에 타협하게 되네요.** 물론 실무 위주의 교육으로 많이 만들어보는 과정이 중요하고 꼭 필요하다고 생각하고 포트폴리오로 활용할 수 있는게 많아지니 그 부분에는 좋다고 생각합니다.

하지만 **'오늘도 많이 배웠다' 보다는 '작업한 소스는 남아가는데 머리에서 점점 잊어간다.'라고 생각됩니다.** 처음부터 잘하고 싶은건 욕심이고 만들어가면서 배운 것들 중에 적용도 해보고 문제도 해결해보고 하는 과정을 자꾸 경험해서 훈련하는 건 좋은데 `html`과 `css`에 대해 배운걸 자꾸 잊어가네요. **조금 더 생각하면서 같은 과제를 다양한 방법으로 적용하면서 테스트도 해보고 싶은데 지금 페이스에는 '일단 만들고 보자'가 한계네요.**

> "배운 HTML, CSS를 잊어간다" 라고 말씀 주신 것은 복습이 수반되지 못한 것 때문이고, 복습을 못한 것은 과제의 양이 많아 제대로 이해하지 못한 채 결과부터 만들어내야 하는 상황 때문이라고 이야기 하신 것인가요? 그렇다면 과제의 양이 적다면 충분한 복습을 수행하여 HTML, CSS를 잊어비리지 않을 수 있다는 말로 이해해도 되겠습니까? 과제의 양을 줄이면 충분히 복습을 수행할 것이고 배운 내용을 잊어버리지 않고 기억할 수 있겠죠? 향후 과제는 현 Class의 적절한 수준을 찾아 제공하도록 해보죠.

---

### 코딩 공부 어떻게 할 것인가?

무엇을 배울 것이 아니라, **무엇을 만들가를 고민해보라.**<br>
**이해하는 것보다 중요한 것은 쓰임새를 깨우치는 것**이다.

교육만으로 모든 것을 얻기란 불가능하다. 가르쳐 줄 수 있는 것들에는 분명 한계가 있고<br>
결국 무엇을 __만드는 과정을 통해 직접 배워갈 수 밖에 없다.__

단순히 JavaScript 혹은 HTML/CSS를 배우는 것이 아니라 __프로젝트를 진행해야 한다.__<br>
단순한 웹 서비스라도 __직접 팀을 만들고, 목표를 세우며 그 목표를 달성하는 과정에서 필요한 것들을 배워야 한다.__

모든 사람이 코딩을 해야 한다는 것 당연히 현대 사회에서 점점 더 중요해질 것이라고 생각한다.<br>
하지만 그보다 우리에게 중요한 것은 코딩을 해야하는 이유이고 이것은 __결국 무엇을 만들기 위해서라고 생각한다.__

[코딩교육 어떻게 할 것인가?](http://seokjun.kr/how-to-educate-code/)

-

### 공부의 신 강성태가 말하는 기억을 잘하는 방법

마이리틀텔레비전<br>
__시험을 앞둔 페친들을 위한 자극 짤.mp4__<br>
`#공부의신`, `#강성태`, `#팩트폭행`

[![](../Assets/D5-study-king.jpg)](https://www.facebook.com/MBC/videos/1337187736314270/)

영상 보고 자극 받으세요!!!!!

참고로 여러분의 교과서는 도서가 아니고,<br>
[MDN](https://developer.mozilla.org/ko/docs/Web)입니다.

![](../Assets/D5-MDN.jpg)

###### Front-End Develop SCHOOL

# DAY 09

### 강의 피드백 0629

※ 반성의 계기가 되는 피드백만 추렸습니다. 좋은 말씀 주신 피드백은 응원이 되어 힘이 됩니다. 감사합니다. :)

-

> 슬슬 과제가 부담스러워집니다! 옛날에는 좀 쉬워서 무엇을 공부할지 몰라서 과제를 달라했지만 이제는 복습도 버겁습니다.

> 야무 강사님... 이번에 과제 너무 부담스럽게 많았어요. 배운것들 개념정리하고 이해하는 시간도 필요한데 과제에 쫓겨가며 하루를 보내고 나니 너무 스트레스... 와이어프레임은 다 완성하지도 못했어요. 새로이 시작한단 마음으로  의지를 가지고 열심히 하지만 이번 과제 쓰나미와 테스트는 제 의지를 많이 흔들리게 한... ㅠㅜ 노력한 만큼 결과 안 나오면 좌절도 하자나요. 요번처럼 과제 넘 몰아서 한번에 주지 않으셨으면 좋겠어요. ㅠㅜ

과제 수행이 한꺼번에 몰려 많이 괴로우셨군요.. 죄송합니다. ㅠㅡㅠ 복습을 위한 과제가 되어야 하는데.. 과제가 복습(개념 정리)을 방해했다는 의견을 주셨네요. 앞으로 과제는 주 1~2회 정로도 제공하는 것으로 하고 주어진 복습(개념 정리)에 충실하셨으면 좋겠습니다. 그리고 7/18 이전까지는 월/목 모두 강의가 진행됩니다. 복습을 매일 매일 탄탄하게 해주셔야 할 거에요. 안 그러면 모르는게 쌓여서 지치게 됩니다.

![week4](../Assets/week4.jpg)

-

> 오늘 좀 지루했어요... 실전이랑 이론은 좀 많이 다른거 같다는 생각.... 플렉스 배우고 싶어요 강사님 노가다 많이 해봤거든요

실전이랑 이론(정석)이랑 다르다고 말씀주셨는데, 대화를 나눠보고 싶군요. 실전이랑 이론이 다르다고 말씀주신 이유가 수업에서 배운 것들은 실무에서 사용되지 않아 배우는 의미없다는 말씀이신건가 해서요. 정말로 그런 의미인지.. DM 주세요. 진지하게 토론하고 싶습니다. 그리고 실무자였기에 현재 배우는 내용은 알고 있으니 `FlexBox` 배우고 싶다는 의견은 이해가 가지만.. 지금 수업이 한 사람을 위한 과정은 아닙니다. 그리고 수업에는 진도라는 것이 있고, 배움에는 단계가 있잖아요. `FlexBox`는 새로운 레이아웃 기술이기에 먼저 `Float`, `Position`을 배운 후에 배워야 합니다. 다른 사람과 함께 공부하는 공간 임을 이해해주셨으면 합니다.

> 수업하면서 옛날 방식의 코드들을 자주 알려주시는데, 현재 쓰이는 코드들이랑 개념이 섞여서 헷갈려지는 것 같아요 ㅠㅠ 수업 진도도 빠르고 알려주시는 부분들이 많다보니까 여러모로 정리가 안되고 흘리는 부분들이 많아집니다... 이게 정상인가요??ㅜㅜㅜ 수업 속도에 맞춰서 열심히 하고는 있지만 확실히 제가 부족한 면이 많다보니까 조급해집니다ㅜㅜㅜㅜ

스쿨은 말 그대로 학교죠. 우리들의 학창 시절을 생각해보면 학교에서 하루 종일 공부를 하면 집중력이 떨어지고 몸이 지치게 되기 마련이죠.. 사람은 알파고처럼 잠도 안자고 학습할 수 없으니까요.. 오늘은 금요일이니 수업 종료 후 남아서 이해가 잘 안 가는 부분을 질문주시고 정리해보아요 ^ㅡ^

-

### 진행 내용

- CSS 타이포그래피 속성
- CSS 레이아웃 속성

---

###CSS 타이포그래피 속성

**행간(line-height)**: normal(default)
 - 1.5 ~ 2 사이 값을 권장 (상대값을 사용하여 font-size 변동에 자동으로 반응하도록 입력)

```css
html {
	font-size: 100%;
}

body {
	width: 960px;
	margin-left: auto;
	margin-right: auto;
	font-size: 1rem;
	line-height: 1.5rem;
	background-image: url("../images/guide/leading-24px.png")
}

p {
	margin-bottom: 1.5rem;
}
```

```css
/* font-variant */

.small-caps {
	font-variant: small-caps;
}
.uppercase {
	font-variant: uppercase;
}
.lowercase {
	font-variant: lowercase;
}
.capitalize {
	font-variant: capitalize;
}
```

```css
/* font 속기 작성법 */
p {
	font: [style] [weight] [variant] size[/line-height] familly; /* [] 괄호 속성은 옵션 */
	/* variant, style, weight는 순서가 바뀌어도 상관 없음 */
}
```

```css
/* letter-spacing, word-spacing */
.spoqa {
	letter-spacing: -0.01em;
	word-spacing: 0.01em;
}
```

-

###CSS 배경 속성

####IR 테크닉(Image Replacement 기법)

```html
<h1 class="brand-tweetle"><a href>Web Design</a></h1>
```
```css
.brand-tweetle {
	display: block;
	width: 32px;
	height: 32px;
	background-image: url('...');
	background-repeat: no-repeat;
	text-indent: -9999em;
}

/* 이미지와 겹친 텍스트를 보이지 않게 하지만 스크린리더가 읽을 수 있다. 접근성 이슈가 있다.  */
```

-

###CSS 레이아웃

####display
 - block: 폭은 부모만큼, 높이는 자식만큼 갖는다.
 - inline: 폭, 높이를 자식만큼 갖는다.
 - inline-block: 외부는 inline처럼, 내부는 block 처럼 작동
 - none: 보이지 않는다. 스크린리더에도 읽히지 않음.

####overflow
 - visible: 기본값
 - hidden: 부모보다 넘치는 자식은 보이지 않음
 - auto: 내용이 넘칠경우 스크롤이 생김
 - scroll: 내용이 넘치지 않아도 스크롤이 보임

####float

본래 목적은 이미지 주변으로 텍스트를 둘러싸기 위함이다.

```css
/* 모듈화 */
.align-left {
	float: left;
	margin-right: 1em;
}
.align-right {
	float: right;
	margin-left: 1em;
}
```

 - float 속성을 부여하면 z축(모니터 위쪽)으로 부유하게 된다.
 - 여러 박스의 높낮이를 다르게 설정한 후 float을 주면 float drop 현상이 일어난다.(테트리스 처럼)
 - 실제 레이아웃을 위한 목적이 아니므로 float 속성을 이용할 경우 버라이어티한 경험을 할 수 있다.

> 실제로 코딩을하며 체득합시다!

---

### 기타/참고

- [HTML5 안티 앨리어싱](http://www.html5rocks.com/ko/tutorials/internals/antialiasing-101/)

###### Front-End Develop SCHOOL

# DAY 06

## Javascript

### 변수와 데이터 유형

#### 1. 숫자 데이터 유형

```js
var k = 90;
var m = -101;
var j = 0;
var b = 2.190356246345;
var y = (k + m - j) * b / m; // 산술(사칙)연산
```

#### 2. 문자 데이터 유형
 ```js
 var html_is       = 'HTML은 "문서 구조를 마크업 하는 언어"이다.';
 var css_is        = "CSS는 \"HTML 문서를 스타일링 하는 언어\"이다.";
 var javascript_is = 'JavaScript는 \'HTML문서를 동적으로 변경/제어하는 인터랙티브 언어\'이다.';

 console.log('web_programming_languages_is:', '\n' + web_programming_languages_is);
 ```
- 문자 데이터 간에는 산술(사칙)연산이 이루어지지 않는다.
- 문자 간 접합(용접)은 `+`기호로 가능하다.
- `\"` , `\'`을 이용하여 문자 데이터 안에 따옴표를 표기할 수 있다.
- `\n` 으로 문자 데이터간상의 줄바꿈 표기가 가능하다.

#### 3. 불리언(Boolean) 데이터 유형
 ```js
 var fds_true  = true;
 var fds_false = false;
  ```
  참`(true`:0이외의 모든 수)과 거짓(`false`:0) 만이 존재한다.

#### 4. undefined
변수를 선언만 하고 값을 할당하지 않음(자료형이 결정되지 않은 상태)

#### 5. null
변수를 선언하고, `'null'`이라는 빈 값을 할당함

```js
// 암묵적으로 변수 초기화
var data1; // undefined

// 명시적으로 변수 초기화
var data2 = null;
var data3 = undefined; // 거의 사용되지 않는다.
```

---

# 과제
- 명시적, 암묵적인 `<input>`,`<label>` `for` 속성 사용법,
- 표준 기술적 관점과 접근성 관점에서의 사용법 알아볼 것.

---


#### typeof : 자바스크립트 데이터 유형을 체크
```js
var k = 90;
var m = -101;
var j = 0;
var b = 2.190356246345;
var y = (k + m - j) * b / m;

console.log('typeof k:', typeof k);
console.log('typeof m:', typeof m);
console.log('typeof j:', typeof j);
console.log('typeof b:', typeof b);
console.log('typeof y:', typeof y);
```


#### %c- : 콘솔창에 css 스타일로 표현이 가능하다.
```js
console.log('%c------------------------------------------------', 'color: #55c4e1');
```


#### 형 변환 :숫자값을 Boolean 데이터 값으로 변환
 ```js
console.log('n:',   Boolean(n)   );
console.log('n_1:', Boolean(n_1) );
console.log('n_2:', Boolean(n_2) );
console.log('n_3:', Boolean(n_3) );
```



### DOM Scripting의 기본 패턴
`이벤트 연결` Event Binding이란?<br>
`이벤트 속성`(Event Property)에 `함수` Function (이벤트 핸들러 Event Handler)를 연결시키는 것

```js
document.onclick; // null
// 이벤트 속성에 함수 데이터 값이 연결(Binding)
document.onclick = function() {
  console.log('문서객체 클릭');
  // 이벤트 제거(해제)는 null 초기 값을 대입한다.
  document.onclick = null;
};
```


---

## HTML + CSS


### table

- 복잡한 표의 경우, `headers`와 `id`를 사용해 표의 접근성을 높일 수 있다.
-  `<col>` ,`<colgroup>` 열의 병합 및 속성 지정



### background 속성 정리
[keynote](https://github.com/yamoo9/FDS/blob/master/Keynotes/02%20CSS/CSS%20-%2004%20Backgrounds.pdf) 참조

#### 컨텐츠이미지, 배경이미지 사용 여부 판단
- 의미가 있고 변경이 자주되는 이미지는 컨텐츠 이미지로 사용
- UI요소 같이 추가 변경이 많이 없는 이미지들은 배경이미지로 스프라이트 처리해서 사용하는것이 좋다.<br>
※ 스프라이트 이미지를 사용하는 이유 : 이미지파일이 하나씩 늘어날수록 서버로의 요청횟수와 파일용량이 증가하게 되어 렌더링 성능저하로 이어지기 때문에 하나의 이미지 파일로 묶어 성능저하를 최소한으로 하기 위해서.<br>
- 배경이미지는 최하단에 위치하므로 z-index에 영향을 받지 않는다.

`png(Portable Network Graphics)`:<br>
__아이콘 같은 제한된 색상의 투명이미지는 png-8__, __인물 컷같이 고퀄리티의 투명이미지는 png-24__로 이미지 파일을 생성하는 것이 좋다.


---

# 과제
- 배경이미지를 사용하여 자신의 간단한 이력서 page를 제작할 것

---


#### 배경관련 CSS3의 새로운 기능
```css
border: 20px solid rgba(255, 0, 0, 0.3);
background-color: hsla(120,100%,25%,0.3);
```
`rgba`, `hlsa` 값을 배경 색상으로 사용할 수 있다.

```css
.clip-padding {
  background-clip: padding-box;
}

.clip-content {
  background-clip: content-box;
}
```
- `background-clip` : 박스모델에 배경이 적용되는 영역을 지정할 수 있다. (기본은 border)
- `background-origin` : 기준점을 설정하여 배경이미지 적용 (기본은 padding)

`background-size` : cover | contain | px | % | em | rem 사용 가능
- `cover` 이미지 크기 비율을 그대로 유지한 상태에서 이미지가 들어 있는 영역의 가로 또는 세로에 이미지를 맞춘다.(가로와 세로 중 큰 값에 맞춘다)
- `contain` 이미지 크기 비율을 그대로 유지한 상태에서 원하는 영역에 전체 이미지가 들어가도록 가장 작은 크기로 이미지 스케일을 조정한다.(가로와 세로 중 큰 값에 맞춘다)



#### background 속기형 작성
 ```css
 selector {background: (color) (url) (repeat) (attachment) (position)}
 ```



### CSS 장면전환 (Transition)

Transition 적용시 시작 장면과 끝 장면이 필요하다. 중간 단계는 없어 세부적인 조절은 어렵다.


#### flex-box를 이용한 가로세로 중앙정렬 모듈
 ```css
.align-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### 가상 요소를 이용한 Transition 구현
```css
.box {
	position: relative;
	width: 300px;
	height: 70px;
	margin: 1em;
	background: #ff0;
	text-transform: uppercase;
}

.box::after {
  content: '';
  position: absolute; /* 가상요소는 자식으로 들어오기 때문에 box 클래스에 position: relative;를 적용하면 된다. */
  top: 90%;
  right: 100%;
  bottom: 0;
  left: 0;
  background: #f00;
  transition: all 0.4s; /* 처음 장면에 Transition적용: 모든(all) 속성에 0.4초간 transition을 적용한다. */
}

.box:hover::after {
  right: 0;
}
```

---

![](../Assets/D6-CodeLib.jpg)

### 수업에 임하는 효율적 자세

수업 시간에 주어진 코드를 맹목적으로 따라서 타이핑을 치는 것이 효율적일까?
아니면 강의의 핵심 포인트를 노트에 기록하며 수업을 꼼꼼하게 들은 후, 방과 후 복습하며 코드를 타이핑 하는 것이 효율적일까?

얼마 전 프론트엔드 개발 스쿨 1기 수료생 노지승(대학생)님을 강의 현장에서 다시 만났다. 그녀는 자바스크립트와 jQuery를 보다 심화적으로 공부하기 위해 다시 강의 현장을 찾은 것이다. 그런 그녀가 말했다. "이제 HTML/CSS로 View를 만드는 것은 자신있어요." 불과 반년 전만하더라도 HTML/CSS를 사용하여 View 구현에 자신 없어 하던 모습은 더 이상 찾아보기 힘들었다. 두 눈에는 정말로 자신감에 차있었으니까.

문득 그녀의 노트가 생각났다. 정말 꼼꼼하게 공부하는 습관이 여기저기 묻어나는 그 노트를 본 사람은 잊을래야 잊을 수 없기 때문이겠지. 1기 분들이 그랬으니까. 마침 한웅님이 2기 수업에 들어와서 특강도 한 후였는데 한웅님이 제안했다. 2기 분들에게 지승님의 노트를 보여주면 어떻겠냐고. 좋은 생각이라고 생각되었다. 안그래도 2기 강의 피드백을 보면 코드를 따라치느라 설명도 제대로 못듣는다고 하는 의견이 있었으니까 지승님의 노트는 수업에 임하는 좋은 사례가 될 듯했다.

그래서 지승님에게 부탁해 그녀가 작성한 노트 일부를 제공해달라고 부탁했다. 아래는 그녀의 노트 중 일부를 촬영한 것이다. 그녀의 노트에 담긴 기록을 유심히 살펴보면 필기를 하며 자신과 대화하는 그녀를 볼 수 있다. 노트와 그녀가 혼연일체(渾然一體)가 되어 자신의 능력을 극대화하여 끌어올린 것이다. 2기 분들에게 그녀의 노트가 참고가 되었으면 좋겠다.

덧붙이자면 공부한 내용을 그림으로 그려보는 것은 매우 효과적인 학습법이다. 그리고 가급적 코드는 실습 시간에만 타이핑하되, 시간이 부족하면 부족하다고 이야기 하여 시간을 확보하면 된다. 아니 그러한가?

![](../Assets/1st_note/01.jpg)
![](../Assets/1st_note/02.jpg)
![](../Assets/1st_note/03.jpg)
![](../Assets/1st_note/04.jpg)
![](../Assets/1st_note/05.jpg)

# Day11

## 1. command line Interface 복습

### 1.1 node-sass 명령어 복습

`node-sass -w -r --output-style expanded sass/app.scss css/app.css`

- 변환 옵션(--output-style) 에는 4가지가 있다.

  1. `compact`  : 한 줄로 정리 (촘촘하게)
  2. `compressed` : 압축 (공백없이)
  3. `expanded` : 확장
  4. `nested`   : 중첩

  ​

### 1.2. node-sass 명령어 옵션 정리

- `--help`                       도움말 출력


- `-v, --version  `            Sass 버전 정보 출력
- `--output-style `          CSS 출력 스타일 설정 (nested | expanded | compact | compressed)
- `-w, --watch`  	디렉토리/파일 관찰


- `-o, --output  `             출력 디렉토리 설정
- `-r, --recursive `           하위 디렉토리/파일 포함하여 관찰
- `-q, --quiet     `           컴파일 오류 발생 로그 말고는 로그(기록)를 제한하는 설정
- `--indent-type  `            CSS 변환 파일에 사용될 들여쓰기 유형 설정 (space | tab)
- `--indent-width`             spaces 또는 tabs의 개수 설정 (최댓값: 10)
- `--source-map`               소스맵 설정
- `--precision`                소수점 자리 설정 (기본값: 4)





## 2. Sass 개요

### 2.1 주요 특징

- SCSS 에는 *.sass 및 *.scss 확장자가 있다.
- 중첩기능이 있다. (nested, 중괄호 안에 중괄호)
- 부모 참조 선택자 (& 기호) 가 있다.





### 2.2 sass를 해야 하는 주요이유

**모듈화를 해야 하기 때문에 사용한다**



### 2.3  node-sass 사용밥법 (Command line)

#### 2.3.1 sass를 css로 변환하는 일반적인 명령어

`$ node-sass --watch --recursive sass --output css`

#### 2.3.2 sass를  source-map으로 변환하는 명령어

`$ node-sass -w -r sass -o css --output-style expanded --source-map ./map`
- `node-sass` : node-sass 실행
- `w` : 파일 관찰
- `r` : 하위 디렉토리/파일 포함 관찰
- `sass` : ./sass의 의미로 관찰 장소를 의미
- `o` : 출력 디렉토리 설정
- `css` : ./css의 의미로 출력 장소 의미 (없으면 만듬)
- `output-style` : 출력 스타일
- `source-map` : source-map 파일 생성
- `./map ` :  source-map 파일 생성 위치





### 2.4 Sass를 통하여 module화 하는 순서

1. app.scss(app.sass) 파일 생성 (app.scss가 기준)
2. module.scss (app.sass) 파일 생성 (module.scss는 모듈)
3. app.scss에 module.scss를 import 시킴
   - ``@import "./module";``(sass파일인경우 확장자 생략 가능 ``"./module.scss"``)
4. app.scss를 css로 변환 (app.scss가 기준)
5. css로 변환 하면서 source-map (.css.map)파일 생성  
   - 변환된 각각의 css 파일에 source-map 정보가 기입됨(주석처리로)
6. index.html에 app.css를 link시킴
7. 브라우저로 index.html실행
8. 브라우저 개발자 도구는 map정보를 읽어 들임





## 3. Sass 특징

### 3.1 주석

- `/* */`    멀티라인
  css변환시 보인다.

- `//`  싱글라인

  css변환시 보이지 않는다.





### 3.2 중첩규칙 **(Nested Rules)**

- 부모선택자 안에 자식 선택자를 포함하는 구조  
- 너무 중첨을 많이 하는 것은 좋지 않다.

#### 3.2.1scss

```scss
.parent{
  color: #fff;

   .child-1{
     font-size:10px;

   }
}
```

#### 3.2.2 css

```css
.parent{
  color: #fff;
}
.parent .child {
  font-size: 10px;
}

```



### 3.3 부모, 참조 선택자(&)

- 앰퍼센드(&) 심볼은 부모를 참조하는 선택자 역할을 수행합니다.

```scss
p{
  color: #fff;
  & .child {
    font-size: 10px;
  }
}
```

- 엠퍼센드(&) 뒤에 공간이 있을때와 없을때 잘 봐야 한다.
```
&.p  //직접 지시
& .p  //& 하위의 'p' tag
```



## 4. CSS 및 HTML

### 4.1 사용자 정의 속성 및 가상요소

#### 4.1.1 사용자 정의 속성

- **사용자 정의 속성** 을 만들때는 앞에 `data-`라는 접두사를 붙여야 한다.

#### 4.1.2 가상요소

- 가상요소는 장식용 으로만 써야 한다.(ex `::before`) 스크린리더가 읽지 못한다.





### 4.2 CSS 함수

- attr() : 출력함수


- darken() : dark값 지정

  ​

### 4.3 HTML tag

- abbr: 축약어를 의미하는 tag (title 속성이 자동으로 붙는다.)





### 4.4 Media Quiry  `@media print`

- print 상태에서 보여주는것
- scss **중첩에서 media quiry를 쓸수 있다!!**





### 4.5 선택자

#### 4.5.1  `^=` 및 ``$=``

-  `^=` 는 속성 값의 시작점을 지시한다.  

   ```
   a[href^="http://"]::after
   a[href^="http"]::after
   ```


-  ``$=`` 는 값의 마지막 점을 지시한다.


#### 4.5.2 기타 선택자

1. `>` : 직속으로 있는 자식 선택자
2. `+` : 인접한 형제 선택자 (sibling)
   ex)  `.foo + .foo`
3. `~` : 일반 형제 선택자  (sibling)
   ex)  `모든 형제들`
4. `& .foo` : SASS 부보(Parent) 선택자
5. `&.foo` : 직접 선택자
6. `^` : 상위 부모 선택자





### 4.6 HTML  더미문장 출력 `lorem`

- 더미 문장을 출력한다.

  ```html
  lorem3 //3단어 더미문장
  loremru3 //3단어 러시아어 더미문장
  ```

  ​

## 5. 중첩규칙 **(Nested Rules)**

### 5.1 중첩규칙이 적용될 수 있는 속성

- font, margin, border, padding, bakground, transition, animation, box, __column__, __list__, min, max, outline, text...



### 5.2 scss

```scss
h1{
  font: {
    size: 2rem;
    weight: 700;
    style: italic;
    variant: small-caps;
  }
}
```



### 5.3 sass

```sass

.container
  margin:
    left: auto
    right: auto
```



### 5.4 css

```css
h1 {
  font-size: 2rem;
  font-weight: 700;
  font-style: italic;
  font-variant: small-caps;
}



.container {
  margin-left: auto;
  margin-right: auto;
}
```



## 6.  부모참조 선택자

- Responsible Web Design (RWD)
- Adopted Web Design (AWD) `더 큰개념`





### 6.1 Media Quiry를 이용한 부모참조 선택자 예시

#### 6.1.1 scss

```scss
aside{
  width: 25%;
  float: left;
  @media screen and (max-width: 480px){
    float: none;
    width: 100%;
  }
}
```

#### 6.1.2 css

```css
aside{
  float: left;
  width: 25%
}

@media screen and (max-width: 480px){
  aside{
    float: none;
    width: 100%;
  }
}
```



## 7. @extend, % (selector inheritance  상속)

- @extend를 사용해 선언된 다른 규칙의 내용을 상속할 수 있다.



### 7.1 @extend를 사용한 UI-button 제작 예시-1

#### 7.1.1 sass

```sass

.button
  padding:
    top: 0.86em
    left: 1.57em
  text-align: center
  letter-spacing: -0.034em
  font-size: 14px // normal size
  color: #323232


  &:not(.button-default)
    color: #fff

  &.button-default
    color: #323232
    background: #fff
    // CSS: not() 선택자

  &.button-success
    background: #4b96d0

  &.button-primary
    background: lime

  &.button-info
    background: skyblue

  &.button-warn
    background: aqua

  &.button-danger
    background: pink
```

#### 7.1.2 css

```css
.button {
  padding-top: 0.86em;
  padding-left: 1.57em;
  text-align: center;
  letter-spacing: -0.034em;
  font-size: 14px;
  color: #323232;
}

.button:not(.button-default) {
  color: #fff;
}

.button.button-default {
  color: #323232;
  background: #fff;
}

.button.button-success {
  background: #4b96d0;
}

.button.button-primary {
  background: lime;
}

.button.button-info {
  background: skyblue;
}

.button.button-warn {
  background: aqua;
}

.button.button-danger {
  background: pink;
}

/*# sourceMappingURL=../map/ui-button.css.map */
```

#### 7.1.3 위 예시에 사용된 emmit 명령어 (참조)

- `button.button.botton-default[type=button]{button$@-1}*6`
  - `[]` : 속성 기입
  - `{}` : 내용 기입
  - `$` : 숫자를 순서대로
  - `@1` : 시작 숫자는 1
  - `-` : 숫자를 역순으로
  - `*6` : 6번 반복




### 7.2 @extend를 사용한 UI-button 제작 예시-2

 #### 7.2.1 scss

```scss
.button-big
  font-size: 22px

.button
  @extend.button-big //@extend 와 .을 붙여 쓴다.
  padding:
    top: 0.86em
    left: 1.57em
  text-align: center
  letter-spacing: -0.034em
  font-size: 14px // normal size
  color: #323232

```

#### 7.2.2 css

```css
.button-big, .button {
  font-size: 22px;
}

.button {
  padding-top: 0.86em;
  padding-left: 1.57em;
  text-align: center;
  letter-spacing: -0.034em;
  font-size: 14px;
  color: #323232;
}
```



### 7.3 Micro Clearfix (참고)

```sass
.cf
 &::before,
 &::after
  content: ''
  display: table
 &::after
  clear: both
```

- 기존 Clearfix는 오페라에서 버그가 발생함




## 8. 정리  

### 8.1 @import 및 @extend

- @import 는 파일과 파일과의 모듈화


- @extend는 파일안에서의 모듈화



### 8.2 @extend를 쓸때와 안 쓸때의 차이점

#### 8.2.1 @extend 사용

- 하나의 코드에 각각의 class들이 들어간다.

##### 8.2.1.1 css

```css
.button-big, .button, .button.button-default, .button.button-success, .button.button-primary, .button.button-info, .button.button-warn, .button.button-danger {
  font-size: 22px;
}
```

##### 8.2.1.2 html

```html
<p class="button button-default">
  button 1
</p>

<p class="button button-success">
  button 2
</p>

<p class="button button-primary">
  button 3
</p>

<p class="button button-info">
  button 4
</p>

<p class="button button-warn">
  button 5
</p>

<p class="button button-danger">
  button 6
</p>
```

#### 8.2.2 @extend 미사용

##### 8.2.2.1 css

```css

.button-big, .button{
  font-size: 22px;
}
```

##### 8.2.2.2 html

```html
<p class="button-big button button-default">
  button 1
</p>

<p class="button-big button button-success">
  button 2
</p>

<p class="button-big button button-primary">
  button 3
</p>

<p class="button-big button button-info">
  button 4
</p>

<p class="button-big button button-warn">
  button 5
</p>

<p class="button-big button button-danger">
  button 6
</p>
```

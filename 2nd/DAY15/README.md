

```sh
# 전역 설치 (Global Install)
# $ npm install --global node-sass
$ npm i -g node-sass

# 지역 설치 (Local Install)
$ npm install node-sass

# Sass 폴더 변환 실행 명령
$ node-sass --watch --recursive sass --output css
$ node-sass -w -r sass -o css --output-style expanded --source-map ./map

Wrapper around libsass

Usage:
  node-sass [options] <input.scss>
  cat <input.scss> | node-sass [options] > output.css

Example: Compile foobar.scss to foobar.css
  node-sass --output-style compressed foobar.scss > foobar.css
  cat foobar.scss | node-sass --output-style compressed > foobar.css

Example: Watch the sass directory for changes, compile with sourcemaps to the css directory
  node-sass --watch --recursive --output css
    --source-map true --source-map-contents sass

Options
  -w, --watch                Watch a directory or file
  -r, --recursive            Recursively watch directories or files
  -o, --output               Output directory
  -x, --omit-source-map-url  Omit source map URL comment from output
  -i, --indented-syntax      Treat data from stdin as sass code (versus scss)
  -q, --quiet                Suppress log output except on error
  -v, --version              Prints version info
  --output-style             CSS output style (nested | expanded | compact | compressed)
  --indent-type              Indent type for output CSS (space | tab)
  --indent-width             Indent width; number of spaces or tabs (maximum value: 10)
  --linefeed                 Linefeed style (cr | crlf | lf | lfcr)
  --source-comments          Include debug info in output
  --source-map               Emit source map
  --source-map-contents      Embed include contents in map
  --source-map-embed         Embed sourceMappingUrl as data URI
  --source-map-root          Base path, will be emitted in source-map as is
  --include-path             Path to look for imported files
  --follow                   Follow symlinked directories
  --precision                The amount of precision allowed in decimal numbers
  --error-bell               Output a bell character on errors
  --importer                 Path to .js file containing custom importer
  --functions                Path to .js file containing custom functions
  --help                     Print usage info
```


##1. Javascript 

###1-1. if 논리 연산자 (==)
   * ==, === : 참
   * !== : false
   * A <= B : A는 B보다 작거나 같다.
   * A >= B : A는 B보다 크거나 같다.
   
```javascript
console.log(null==undefined); --true
console.log(null===undefined); --false
```

 * ==은 형 변환을 시키면서 다른 유사값을 같다고 표기
 * ===은 값이 다른 것으로 인식하여 다른 값으로 표기
 
###1-2. if 논리 연산자 (&&)
    두 조건에 모두 적합할 시에 (&&)을 씀 (and)
   
```javascript
var num =4;
if (num>3 && num<6){
  console.log('4 is greater than 3')
  }
 
```

   num 이 if의 두 조건 모두 true일 시에 씀

###1-3. if 논리 연산자 (||)
     두 조건 중 하나만 적합할 시에 씀(or)
     
```javascript
var count =9;
if (count>8 || count<4){
  console.log('number');
}
```

###1-4. 삼항 연산자
    00 (T/F) ?  : T : F; 의 구조
```javascript
!true? console.log('true'): console.log('false');
```
   -여러 항을 쓸 수도 있지만 마지막에는 3항으로 마무리 해줘야 함
```javascript
var condition = 'ramos';

condition === 'hesus'?
console.log('is hesus'):
condition === 'zeus'?
console.log('is zeus'):
condition === 'zeus'?
console.log('is zeus'):
condition === 'ramos'?
console.log('is ramos'):
console.log('.......');
```

###1-5. Function (함수)
   -Return: 함수에 연산된 결과 값을 반환 할 때 씀
```javascript
function getMoney(money){
  if(money !== 0){
    money=money || 100;
  }
  //money와 100이 모두 참이면 money로 출력
  
  if (typeof money !== 'number'){
    console.error('ERROR');
  }

return '너가 원하는 금액은' + money + '구나';
}

var result = getMoney(0);
console.log(result);
```
결과는 ‘너가 원하는 금액은 (‘전달인자 값') 이구나' 로 출력 됨

##2. SASS
###2-1. Output Style

     compact: 한 줄로 정리 (촘촘하게)
     compress: 압축 (공백 없이)
     expanded: 확장 
     nested: 중첩

**Tab과  Space 키를 혼용하면 안됨
**Sass는 indent가 중요 (인덴트 된 요소를 자식 요소로 인식)

###SASS 맵 파일 파일 개발자도구에서 인식하기
  1. 개발자도구 열고
  2. settings 열기 (단축키 f1)
  3. 목록 중에 Enable CSS source maps 체크!

###SASS 주석
* //  —> 한줄 주석. 컴파일된 후에는 보이지 않습니다. 개발자들만 볼수 있습니다.
* /* —> 여러줄 주석. 줄바꿈하고 한번 들여써서 사용합니다. 컴파일 후에도 css 파일에 남아있습니다.

###2-2. Sass 문법

#####1. &: 상위 요소
```sass
  a
    color: #333
    &:hover,
    &:focus
      color: pink
```
```css

 a:hover,  a:focus {
  color: pink;
}
```
& 는 부모를 참조합니다.
또한 .show-grid & 처럼 앞에 부모가 될 요소를 넣어줄 수도 있습니다.


#####2. Combine MediaQuery

SASS에서 미디어 쿼리를 사용했을 때
```sass
nav#gnb
  @media screen and(max-width: 40em)
    display: flex

  @media screen and(min-width: 75em)
    display: none
  .show-grid &
    display: block;
```

이렇게 아래처럼 컴파일 됩니다.
===> 
```css
@media screen and (max-width: 40em) {
  nav#gnb {
    display: flex; } }

@media screen and (min-width: 75em) {
  nav#gnb {
    display: none; } }

.show-grid nav#gnb {
  display: block; }
```
때문에 필요할때마다 미디어 쿼리를 사용하지말고 CSS처럼 영향을 받아야할 요소들을 한꺼번에 모아 사용하도록합니다.



#####3. @extend: 가중 상속 가능
@extend를 사용해 선언된 다른 규칙의 내용을 상속 받을 수 있습니다.
```sass
.box
  display: block
  width: 100px
  height: 100px

.box-black
  @extend .box
  background: #000

.box-yellow
  @extend .box
  background: #ff0
```
-CSS로 변환 시
```css
.box, .box-black, .box-yellow, .box-red {
  display: block;
  width: 100px;
  height: 100px;
}

.box-black {
  background: #000;
}

.box-yellow {
  background: #ff0;
}
```
때문에 이렇게 상속을 이용하면 HTML 문서안에서 클래스의 사용이 현저하게 줄어듭니다.

***!optional
```sass
@extend .box !optional  
```
—> box클래스가 있으면 상속을 받고 없으면 상속받지 않을 수 있도록 조건을 만들어줄 수 있습니다.

#####4.%: Module not shown ( 대체 선택자 )
- %선택자를 이용하여 비공개 모듈화 하면 컴파일 되는 CSS에는 해당 모듈이 나타나지 않습니다.
```sass

%flex-center-middle
  display: flex
  jusrify-content: center
  align-items: center

%box
  @extend %flex-center-middle
  width: 100px
  height: 100px

// 여기까지는 css에 드러나지 않습니다.

.box-black
  @extend %box
  background: black;

.box-red
  @extend %box
  background: red;

.box-green
  @extend %box
  background: green;

.box-blue
  @extend %box
  background: blue;

```
 

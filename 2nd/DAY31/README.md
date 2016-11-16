###### Front-End Develop SCHOOL

# DAY 31

- __AngularJS v1.x__: SPA Framework


## 1. (Webpack__Angular_v1+jQuery+Sass) 설치파일 설명

`.eslintrc.js`
```js
module.exports = {
    "env": {
        "node": true,
        "browser": true, // 브라우저 전역값 
        "es6": true // es6도 호환
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-console": 0,
        "indent": [
            "error",
            2  
        ],
        "linebreak-style": 0,  // 안할사람은 0으로
        // "linebreak-style": [
        //     "error",
        //     "unix" // 윈도우즈 사용자는 "windows" 설정
        // ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "parserOptions": {
      "sourceType": "module" // es6으로 개발할때 모듈 단위가 필요
    }
};
```

`package.json`

```js
 "scripts": {
    "start": "webpack-dev-server --open",  // dev-server가 바로 오픈
    "server": "webpack-dev-server",
    "server-i": "webpack-dev-server --inline",  // 페이지가 아닌 직접 페이지로 확인하고 싶을때 
    "build-server": "webpack-dev-server --config webpack-build.config.js", 
    "build": "webpack --config webpack-build.config.js -p",  // 압축해서 빌딩
    "clear": "rm -rf dist" // distribute폴더 삭제(배포하는 용도의 파일)
  },
```

`webpack.config.js` : 
 - 파일안에 야무샘의 상세하고 친절한 주석 참고
 - 만약 json파일이면 홑따옴표('')와 콤마(,)를 사용할수없다.

```js
// 프로젝트 의존 모듈 로드
// var : 호이스팅, 지역을 만든다, 변수명이 중복될 수 있다.
// let :  호이스팅, 지역을 만드는 현상 없음 ,변수명을 중복할 수 없다.
let webpack           = require('webpack');
let path              = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin'); // 인라인 스타일을 외부로 분리시켜주는 플러그
```


## 2. (Webpack__Angular_v1+jQuery+Sass) 실습


- `webpack` : webpack 실행
    - permission denied 오류가 나면 `webpack.config.js`에서 ` 'warnings': false`주석처리
    ```js
      new webpack.optimize.UglifyJsPlugin({
      'compress': {
         // 'warnings': false
      }
    }),

    ```
- `npm run clear` :  distribute폴더를 삭제
- `npm start` : webpack start!
  - 브라우저 개발도구의 Network에서 `app.css`, `app.js`, `live.bundle.js`가 잘 생성되었는지 확인 (상단의  disable cache 체크! ) 

- `body-Controller.es6`생성해서 jquery 적용
  
  `body-Controller.es6`
  ```js
$('body').addClass('webpack-dev-run').css('background','yellow');
  ```
  `app.es6`
  ```js
  requre('./bodyController');  // 이전버전
  import('./bodyController');  // es6버전에만
  ```

- `npm run server` : 기존에 열려있는 페이지에서 계속 작업 가능
   
 ### 실행이 안될때!
 - `mkdir angular+jquery` : angular+jquery 폴더 생성 
 - css.imgaes,js,lib,sass 폴더와 index.html 생성


## 3. AngularJS 실행

- 이름의 유래 : <(앵글브레이스) 때문에..
- Ajax 프로그램 , single Page Applications
- [야무샘의 키노트 참고](https://github.com/yamoo9/FDS/tree/master/Keynotes/09%20Angular)


### npm 에서 구동
`app.es6`
```js
/** JS 파일 로드 ------------------------------------------------------ */

// Node.js 모듈 로드 방법
const $       = require('jquery');
const angular = require('angular');

// ES2015 모듈 로드 방법
//import $ from 'jquery';
//import angular from 'angular';

console.log($().jquery);
console.log(angular.version.full);
```

-`npm start` : 실행


### 로컬에서 실행
- 방법1: `sudo npm i -S jquery angular` : angular다운
- 방법2: angular사이트에 가서 다운 
[angular site](https://angularjs.org/)

`index.html`
```js
// sublime: package에서 'angularJS'를 설치후 app입력하면 명령어 완성
// 헤더에서 로드
<html lang="ko-KR" data-ng-app>
<head>
  	<script src="node_modules/angular/angular.js"></script>
	<script src="node_modules/jquery/dist/jquery.js"></script>
</head>
```
`package.json`수정
```js
 "script" : {
    "sass" : "node-sass -w -r --source-map ./map sass -o css --output-style compressed"
  },
```
- `npm run sass` : sass 파일 실행

## 4. AngularJS Expression

`index.html`

```js
<!-- ng-init는 잘 안씀 -->
<body data-ng-init="app_name='angularJS v1.5.8'">
<!-- ng-model : 사용자가 입력하는 값을 받아와야할때 -->
<input type="text" data-ng-model="app_name">
<!-- Angular Expression -->
<h1>{{app_name}}</h1>
</body>
```

## 5. AngularJS Directive

- ngbind  : expression보다 속도가 빠르다

`index.html`

```js
<body data-ng-init="app_name='angularJS v1.5.8'">

<input type="text" data-ng-model="app_name">
<!-- Angular Expression -->
<h1>{{app_name}}</h1>
<!-- Angular Directive -->
<!-- model 과 bind가 서로 연결되서 같은 값을 뿌려준다. -->
<p data-ng-bind="app_name"></p> 
</body>
```
- 모델  json + CSS + 템플릿 HTML =  View
- 모듈 / 컨트롤러
   - npApp : 필요한 부분만 angular를 사용가능, 한페이지내 여러개 사용가능
   - npController: $scope를 쓰지않고 controller에 연결해서 쓸수있다.

### index.html 예제

```js
<body data-ng-init="
   app_name='angularJS v1.5.8';
   is_show = true;
   ">
<h1>Angular Version {{is_show}}</h1>

<button type="button" data-ng-click="is_show=!is_show">toggle Show</button>

<input type="text" data-ng-show="is_show" data-ng-model="app_name">
```


## 6. Angular1 vs jQuery

- Two Way Data Binding

`index.html`

```js
<body>
<!-- jQuery Version: Two Way Data Binding -->
<input type="text" id="twb" value="jQuery Version Two Way Data Binding">
<p id="twb-binding"></p>
</body>
```

`app.es6`

```js
//ES2015,  let keyword Variable
let $twb = $('#twb');
let $twb_binding = $('#twb-binding');

// ES2015, Arrow Function
let twoWayDataBinding = (e)=> {
  let data = e.target.value;
  $twb_binding.text(data);
};

$twb.on('keyup', twoWayDataBinding);
$twb.trigger('keyup'); // 키를 땔때마다 이벤트 실행
```


##7. angular.element

- 컴포넌트 만들때 주로 쓴다
- jQuery function의 별칭 
- jQuery만큼 편하지 않다. 지원하지 않는 것이 많다.

`app.es6`

```js
require('jquery');
let $twb = angular.element('#twb');
let $twb_binding = angular.element('#twb-binding');

```

##8. jQuery builder

- [jquery builder](http://projects.jga.me/jquery-builder/)
-`mkdir jquery-builder-result` : jquery builder가 저장될 폴더생성
- `npm list -g jquery-builder` : jquery builder 가 이미 설치가 되어있는지 확인
- `npm update jquery-builder -g` : jquery builder설치
- `jquery-bulider -m -e ajax,deprecated,effects,event-alias > jquery.custom.min.js` : ajax, deprecated, effects, event-alias가 포함된 jquery-custom.min.js 생성

##9. 예제

- 야무샘 예제 파일 참고
- accrodian 
- angularJS-directives-expressions 
- [switch reference](https://docs.angularjs.org/api/ng/directive/ngSwitch) : switch case문 처럼 사용

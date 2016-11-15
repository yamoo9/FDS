###### Front-End Develop SCHOOL

# DAY 30

- __Webpack__: Module Bundler
- __AngularJS v1.x__: SPA Framework

## 1. Webpack복습
- `touch entry.js` : entry.js 생성
- `cat package.json`: package.json 파일을 커맨드라인에서 볼수 있는 명령어
- `npm install` : package.json 에 의존성을 체크해서 없는 node-module을 설치


## 2. JQuery의존 모듈 파일 제작 
#### CommonJS방식의 로드 
- var $ = require('jquery');
  - node-modules 폴더안에 jquery 파일을 불러온다
  - 프론트 환경에서는 쓸수없는 명령어(서버사이드 명령어)
  - Webpack을 이용해서 프론트 환경에서도 쓸수있도록 스크립트 파일 생성
    - webpack entry.js bundle.js (entry.js를 bundle화) 
      -> 프론트에서 사용 가능
    - webpack entry.js bundle.js -p : 압축해서 전달(오래걸리므로 배포할때만 사용하는 것이 좋다)
    - webpack entry.js bundle.js -d : bundle파일을 만들때 디버그를 할수 있는 bundle.js.map 생성
  - webpack -w entry.js bundle.js : 파일을 저장하면 bundling 을 한다.
```js
  var $ = require('jquery');
  // 프론트단에서 잘 되는지 확인 : jquery버전 출력
  console.log('$.fn.jquery:',$.fn.jquery);
``` 

## 3. Ajax using jQuery Library
- 인스턴스를 생성하지 않고 사용하는 메서드(Utility Method,  Static Methods, Class Methods)
- jQuery.getScript() : 비동기적으로 스크립트 파일을 불러오는데 다 불러져 오면 실행하겠다.
  * jqueryapi참고 : [링크(ajax)](http://api.jquery.com/category/ajax/low-level-interface/)
  
###entry.js만 사용
`entry.js`
```js
$.ajax({
  'url': 'http://randomuser.me/api/?results=10&gender=female',
  'dataType' : 'json',
  'success' : function(data){
    // 바로 객체를 반환받는다.
    // jquery3버전은  ie9 부터 지원
    $.each(data.results, function(index, person){
        // 화면에 json파일 받아와서 출력
       // Ex2015 문법
        console.log(`${person.name.first} ${person.name.last}`);
        // ES3
        console.log(`person.name.first+ ' ' +  person.name.last`);
    });
  }
});
```
###entry.js / jquery.ajax.run.js 사용 
`jquery.ajax.run.js`
 ```js
var $ = require('jquery');
var people = {};

$.ajax({
  url: 'http://randomuser.me/api/?results=10&gender=female',
  dataType : 'json'
})
.done(function(data){
  people.results = data.results; //array
});

// 외부 모듈에서 사용 가능하도록 배포 (출력)
exports.people = people;
 ```
`entry.js`
```js
var result = require('./jquery.ajax.run');
// 위 코드에서 받아오는 값 
//var result = {
//  'people': people;
// }

window.result = result;
```

## 4. Webpack CSS 패키징 로더
 - [야무님 Webpack CSS](https://github.com/yamoo9/FDS/blob/master/2nd/DAY30/Webpack/webpack.md#3-webpack--css-로더)
 - 자바스크립트안에있는 css파일을 불러올 수 있다 ->  internal방식으로 생성
 - CSS에 import한 스타일이 먼저불러오고 그 후에 호출 
 
`entry.js`
```js
// css 파일 로드 (번들링: 묶음 용도)
// require('!style-loader!css-loader!./app.css');
require('!style!css!./app.css');
```
`app.css`
 ```js

body{
  margin: 0;
  font-size: 1.6rem;
}

`@import "./grid.css";`
 ```

## 5. Webpack SASS 패키징 로더
- [야무님 Webpack SASS](https://github.com/yamoo9/FDS/blob/master/2nd/DAY30/Webpack/webpack.md#4-webpack--sass)

`entry.js`
```js
// sass 파일 로드 (번들링: 묶음 용도)
//require('!style-loader!css-loader!sass-loader!./style.css');
require('!style!css!sass!./style.sass');
   ```
## 6. Webpack 환경설정(Config)
- [야무님 Webpack 환경설정(Config)](https://github.com/yamoo9/FDS/blob/master/2nd/DAY30/Webpack/webpack.md#4-webpack-환경설정config)

`webpack.config.js`
```js
module.exports ={
  // webpack이 번들링을 수행하고자 하는 진입 파일
  'entry' : './entry.js',
  //번들링된 출력 파일 : 파일의 경로를 지정할 수 있다.
  'output' : {
    'path': __dirname+ '/js/', // __dirname: 현재 디렉토리의 이름, js 폴더로 이동
    'filename' : 'bundle.js'
  } ,

  // 관찰모드: dev서버를 쓴다면 자동으로 watch 가 되기때문에 굳이 필요하지않다.
  //'watch' : true,
  //디버깅 모드
  //'devtool': 'source-map'

  'module':{
    'loaders': [
      // style-loader + css-loader
      {
               'test': /\.css$/,
               'loader': 'style!css' //css로 끝나는 파일
             },
             // sass-loader
             {
              'test': /\.(sass|scss)$/, // sass나 scss로 끝나는 파일
              'exclude': /node_modules/, // 제외시키겠다
              'loader': 'style!css!sass'
             }
          ]
        }
      };
```
`entry.js`
```js
 require('./app.css');
 require('./style.sass');
```

##7. Webpack Dev Server 설치
- [야무님 Webpack Dev Server 설치](https://github.com/yamoo9/FDS/blob/master/2nd/DAY30/Webpack/webpack.md#5-webpack-dev-server-설치)
- webpack-dev-server
   : webpack.config.js를 사용해서 개발환경을 자동세팅해준다. 자동 bundling (새로고침이 필요없음. 편하다)
- webpack-dev-server명령어가 아니라 npm start로 구동하고 싶을때 

`packaga.json파일 수정`
```js
 "scripts": {
    "start": "webpack-dev-server --open --port 9999"
  },
```
- 멀티 entry파일도 사용가능 

`webpack.config.js`
```js
  'entry' : ['./entry.js','./app.js'], 
```

##8. Webpack + Babel (ECMAScript 2015)
-  [야무님 Babel사용](https://github.com/yamoo9/FDS/blob/master/2nd/DAY30/Webpack/webpack.md#7-webpack--babel-ecmascript-2015)
- entry.js에서 es2015,es6를 사용해도 모든 브라우저에서 사용가능하도록 변경되서 bundle.js로 전달

`webpack.config.js`
```js
'module':{
    'loaders': [
      //bable-loader
      {
        'test': /\.js$/,
        'exclude':/node-modules/,
        'loader':'babel-loader',
        'query': {
          'presets': ['es2015']
        }
      },
```
`webpack.config.js`
```js
'module':{
    'loaders': [
    
          // babel-loader
          {
            'test': /\.es6$/,
            'exclude': /node_modules/,
            'loader': 'babel-loader',
            'query': {
              'presets': ['es2015']
            }
          },
    'resolve': {
    'extensions': ['', '.js', '.es6']
  }
  
};
```

`entry.js`
```js
// es2015 사용 예제
let i = 'global `i`';
let $ = require('jquery');

let $all = $('body *');

for ( let i = 0, l = $all.length; i<l; i++ ) {
  console.log('in for statement:', i);
}

console.log(i); // 'global `i`'

class AppButton extends HTMLButtonElement {
  constructor(selector) {
    super();
    selector = selector;
  }
  press() {

  }
}
```

##9. Webpack + ESLint 프리로더(Pre Loader)
- [야무님 ESLint](https://github.com/yamoo9/FDS/blob/master/2nd/DAY30/Webpack/webpack.md#8-webpack--eslint-프리로더pre-loader)

##10. 빌드 전용 환경설정 파일
- 작업용과 빌드용을 나누어서 작업할때 빌드전용 파일을 만듬
- [야무님 빌드 전용 환경설정](https://github.com/yamoo9/FDS/blob/master/2nd/DAY30/Webpack/webpack.md#10-webpack-빌드)

`webpack-build.config.js`
```js
'use strict';

// strip-loader 모듈 로드
var WebpackStrip = require('strip-loader');

// webpack.config.js 파일 로드 (개발할 때 쓰는 config)
var dev_config = require('./webpack.config');

// strip_loader 설정
var strip_loader = {
  'test': [/\.js$/, /\.es6$/],
  'exclude': /node_modules/,
  // 제거(strip)할 명령어 설정
  //  빌드할때만 console.log/ console.error를 제거시켜줘
  'loader': WebpackStrip.loader('console.log', 'console.error')
};

// dev_config 모듈 로더에 strip_loader 설정
dev_config.module.loaders.push(strip_loader);

// dev_config 모듈 출력
module.exports = dev_config;
```
`package.json 수정`
```js
 "scripts": {
    "start": "webpack-dev-server --open --port 9999",
    "build-server" : "webpack-dev-server --config webpack-build.config.js",
    "build": "webpack --config webpack-build.config.js -p" // -p:파일을 압축
  }
  ```
- `npm run build`로 실행
- `npm run build-server`로 실행

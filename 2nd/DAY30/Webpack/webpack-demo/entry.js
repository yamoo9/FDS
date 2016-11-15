'use strict';

// CSS 파일 로드 (번들링: 묶음 용도)
// require('!style-loader!css-loader!./app.css');
// require('!style!css!./app.css');
require('./app.css');

// Sass 파일 로드
// require('!style-loader!css-loader!sass-loader!./styles.sass');
// require('!style!css!sass!./styles.sass');
require('./styles.sass');

// jQuery 의존 모듈 파일 제작
// CommonJS 방식의 모듈 로드(읽기)
// var result = require('./jquery.ajax.run');

// 일부러 낸 오류
// 소스맵을 만들었을 때
// 디버깅 모드에서 잡힘
// var aaa = rrr;

// console.log(rrr);
// window.result = result;

// 소스맵 만들기
// webpack entry.js bundle.js -d

/**
 * --------------------------------
 * webpack-dev-server
 * ----------------------------- */
console.log('start webpack-dev-server :D');
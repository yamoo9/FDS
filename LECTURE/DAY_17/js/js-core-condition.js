/**
 * --------------------------------
 * 조건을 통해서 제어
 * --------------------------------
 * if문
 * if(조건) { 실행문; }
 * if(조건) 실행문; // 실행문이 1줄일 경우
 * if(조건) {} else {}
 * if(조건1) {} else if(조건2) {} else {}
 *
 * switch(대상) { case 값: 실행; break; default; }
 * ----------------------------- */

var state = {
  'visible'   : false,
  'hidden'    : true,
  'expanded'  : true,
  'collapsed' : true
};

// 객체의 속성에 접근하는 2가지 방법
// 1. 객체.속성
// 2. 객체['속성']

// if ( state.visible === true ) {
// if ( (state && state.visible) || (4 - 5) ) {
//   console.log('state.visible is True.');
// } else if( state.visible === null || state.visible === undefined ) {
//   console.log('state.visible is Null.');
// } else if( isObject(state.visible) ) {
//   console.log('state.visible is Object Type.');
// } else {
//   console.log('!True, !Null, !Object');
// }

// var numbers = [4, 8, 12];

// if ( numbers[0] > numbers[1] ) {

// } else if ( numbers[2] < numbers[1] ) {

// } else if ( numbers[2] === (numbers[0] / numbers[1]) ) {

// } else {

// }

/**
 * --------------------------------
 * Switch 구문
 * ----------------------------- */

var members = [];
members.push('히어로');
members.push('히로');
members.push('히');
members.push('로');

switch( members[2] ) {
  default:
    console.log('members[0]는 이도 저도 아니다.');
    break;
  case '히어로':
  case '히로':
  case '히':
  case '로':
    console.log('members[0]는 "히어로|히로|히|로"이다.');
}

// --------------------------
// Modern JavaScript Develop
// Toolset
// Package Manager
//  - npm, yarn
// DOM Manipulation/Animation
//  - jQuery, Greensock
// Bundling
//  - Webpack, Browserify
// Task Runner
//  - Gulp, Grunt, Brocolli, ....
// UI Framework & State Management
//  - Angular v2, React & Redux, VueJS v2 + Vuex
// Transpiler
//  - ES6(Babel), TypeScript, CoffeeScript

// Condition
// if, else, else if
// ? : , &&, ||
// switch case break default

/*! app.js © yamoo9.net, 2016 */
'use strict';

/** Sass 파일 로드 ---------------------------------------------------- */
require('./sass/app.sass');



/** JS 파일 로드 ------------------------------------------------------ */

// Node.js 모듈 로드 방법
// const $       = require('jquery');
// require('jquery');
// const angular = require('angular');

// ES2015 모듈 로드 방법
// import $ from 'jquery';
// import angular from 'angular';

console.log('bundle');

// console.log($().jquery);
// console.log(angular.version.full);

// ES2015, let keyword Variable
// let twb = angular.element('#twb');
// let twb_binding = angular.element('#twb-binding');

// // ES2015, Arrow Function
// let twoWayDataBinding = (e)=> {
//   let data = e.target.value;
//   twb_binding.text(data);
// };

// twb.on('keyup', twoWayDataBinding);
// twb.trigger('keyup');

// angular.element('body').css('background', '#ffb03b');
/*! app.js © yamoo9.net, 2016 */
'use strict';

/** Sass 파일 로드 -------------------------------------------------------------- */
require('./sass/app.sass');


/** JS 파일 로드 ---------------------------------------------------------------- */
// ※ jQuery, Angular를 포함하여 번들하다 보니 Webpack 처리 속도가 5~10초 단위로 걸림
// 개발 과정에서는 별도로 분리하여 jQuery, Angular를 불러오되, 빌드 과정에서 포함시키는 것이 좋을 듯
// -------------------------------------------------------------------------------

// require('jquery');
// var angular = require('angular');

// console.log('Angular Version:', angular.version.full);
// console.log('jQuery Version:', angular.element().jquery);

// -------------------------------------------------------------------------------
// ※ `webpack.config.js` 설정[135 라인]에 'externals' 설정 추가
// jQuery, Angular를 전역에서 불러오도록 설정
// -------------------------------------------------------------------------------
require('jquery');
let angular = require('angular');
require('angular-route');

// console.log(angular.version.full);      // 1.5.8
// console.log(angular.element.fn.jquery); // 3.1.1

// Angular 모듈을 정의할 때는 반드시 두번째 전달인자 값을 배열로 전달
// DI: Dependencies Injection
angular.module('FDS_Utils_Module', []);
angular.module('FDS_App', ['FDS_Utils_Module', 'ngRoute']);

// angular 컨트롤러 모듈 로드
require('./controllers/testController');
// angular 필터 모듈 로드
require('./filters/capitalizeFilter');
require('./filters/camelCaseFilter');

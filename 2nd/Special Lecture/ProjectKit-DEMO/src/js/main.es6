/*! main.js © yamoo9.net, 2016 */

// ------------------------------------
// 빌드 시에 아래 주석을 해제한 후, 빌드
// ------------------------------------
// require('jquery');

// Angular 로드
let angular = require('angular');

// 의존 모듈 로드
require('angular-resource');
require('ng-infinite-scroll');

// App 모듈 정의 (의존 모듈 주입)
let bipan = angular.module('BipanListApp', ['ngResource', 'infinite-scroll']);

// 모듈 환경 설정
bipan.config(['$httpProvider', '$resourceProvider',($httpProvider, $resourceProvider)=> {
  let token = 'Token dab1748ebaceb34ed6796bc3b7dc84741b77af54';
  $httpProvider.defaults.headers.common['Authorization'] = token;
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

// Controllers
require('./controllers/ListController');
require('./controllers/DetailController');
// Services
require('./services/ListDataShareService');
// Filters
require('./filters/readingZeroFilter');

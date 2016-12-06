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
require('spin');
require('angular-spinner');

// App 모듈 정의 (의존 모듈 주입)
let bipan = angular.module('BipanListApp', [
              'ngResource',
              'infinite-scroll',
              'angularSpinner'
            ]);

// 모듈 환경 설정
bipan.config([
  '$httpProvider',
  '$resourceProvider',
  'usSpinnerConfigProvider',
  ($httpProvider, $resourceProvider, usSpinnerConfigProvider)=> {
  let token = 'Token dab1748ebaceb34ed6796bc3b7dc84741b77af54';
  $httpProvider.defaults.headers.common['Authorization'] = token;
  $resourceProvider.defaults.stripTrailingSlashes = false;
  // usSpinnerConfigProvider
  usSpinnerConfigProvider.setTheme('white-spinner', {
    'color'  : '#ffffff',
    'radius' : 25,
    'width'  : 6,
    'length' : 21,
    'lines'  : 17,
    'scale'  : 0.45,
  });
}]);

// Controllers
require('./controllers/ListController');
require('./controllers/DetailController');
// Services
require('./services/ListDataShareService');
// Filters
require('./filters/readingZeroFilter');

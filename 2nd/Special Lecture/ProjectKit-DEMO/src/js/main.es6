/*! main.js © yamoo9.net, 2016 */

// jQuery 로드
require('jquery');
// Angular 로드
let angular = require('angular');

// Angular 의존 모듈 로드
require('angular-resource');
require('ng-infinite-scroll');
require('spin');
require('angular-spinner');
require('angular-auto-validate');
require('ladda');
require('angular-ladda');
require('angular-ui-router');


/**
 * ----------------------------------------------------------
 * App 모듈 정의 (의존 모듈 주입)
 * ---------------------------------------------------------- */

let bipan = angular.module('BipanListApp', [
  'ngResource',
  'infinite-scroll',
  'angularSpinner',
  'jcs-autoValidate',
  'angular-ladda',
  'ui.router',
]);

/**
 * ----------------------------------------------------------
 * App 모듈 환경 설정
 * ---------------------------------------------------------- */
bipan.config([
  '$httpProvider',
  '$resourceProvider',
  'usSpinnerConfigProvider',
  'laddaProvider',
  '$stateProvider',
  '$urlRouterProvider',
  (
    $httpProvider,
    $resourceProvider,
    usSpinnerConfigProvider,
    laddaProvider,
    $stateProvider,
    $urlRouterProvider
  )=> {

    /**
     * ----------------------------------------------------------------
     * 라우트(Route) 설정
     */

    // $stateProvider 설정
    $stateProvider
      .state('list', {
        'url'         : '/',
        'views': {
          'main': {
            'templateUrl' : 'views/list.html',
            'controller'  : 'ListController'
          },
          'search': {
            'templateUrl' : 'views/searchform.html',
            'controller'  : 'ListController'
          }
        }
      })
      .state('edit', {
        'url'         : '/edit/:email',
        'views': {
          'main': {
            'templateUrl' : 'views/edit.html',
            'controller'  : 'DetailController'
          }
        }
      })
      .state('create', {
        'url'         : '/create',
        'views': {
          'main': {
            'templateUrl' : 'views/edit.html',
            'controller'  : 'CreateController'
          }
        }
      });

    // $urlRouterProvider 설정
    $urlRouterProvider.otherwise('/');

    /**
     * ----------------------------------------------------------------
     * 서버 통신(RESTfull API) 설정
     */

    // ngResource 모듈 설정
    let token = 'Token dab1748ebaceb34ed6796bc3b7dc84741b77af54';
    $httpProvider.defaults.headers.common['Authorization'] = token;
    $resourceProvider.defaults.stripTrailingSlashes = false;

    /**
     * ----------------------------------------------------------------
     * 스피너(Spinner), 라다(Ladda) 설정
     */

    // usSpinnerConfigProvider
    usSpinnerConfigProvider.setTheme('white-spinner', {
      'color'  : '#ffffff',
      'radius' : 25,
      'width'  : 6,
      'length' : 21,
      'lines'  : 17,
      'scale'  : 0.45,
    });

    // laddaProvider
    laddaProvider.setOption({
      'style': 'expand-right'
    });

}]);

/**
 * ----------------------------------------------------------------
 * 컨트롤러/서비스/필터 모듈 로드
 * ---------------------------------------------------------------- */

// Directives 모듈
require('./directives/ySpinnerDirective');
require('./directives/yCardDirective');

// Controllers 모듈
require('./controllers/ListController');
require('./controllers/DetailController');
require('./controllers/CreateController');

// Services 모듈
require('./services/ListDataShareService');

// Filters 모듈
require('./filters/readingZeroFilter');
require('./filters/defaultImageFilter');

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

// console.log(angular.version.full);      // 1.5.8
// console.log(angular.element.fn.jquery); // 3.1.1

// Angular 모듈을 정의할 때는 반드시 두번째 전달인자 값을 배열로 전달
angular
  .module('FDS_App', [])
  .controller('testController', ['$scope', testController]);

// $scope를 사용하지 않을 때
// function testController() {
//   this.people       = [
//     {'name': '김한울', 'age': 32, 'job': '백엔드 개발자'},
//     {'name': '이민영', 'age': 19, 'job': '그래픽 디자이너'},
//     {'name': '최상민', 'age': 46, 'job': '소설가'},
//     {'name': '정수진', 'age': 25, 'job': '프론트엔드 개발자'},
//     {'name': '지성', 'age': 39, 'job': '배우'},
//   ];
//   this.order_obj = [
//     {
//       'category': 'name',
//       'reverse': false
//     },
//     {
//       'category': 'age',
//       'reverse': false
//     },
//     {
//       'category': 'job',
//       'reverse': false
//     },
//   ];

//   this.app_name     = 'ng1';
//   this.current_date = '2016-11-18';
//   this.money        = 243500 + 302010;
//   this.filtering      = '';
//   this.order_category = 'name';
//   this.order_reverse  = false;

//   // 컨트롤러 내부에 함수 정의
//   this.changeOrderCategoryAndReverse = function(index) {
//     var order_content = this.order_obj[index];
//     this.order_category = order_content.category;
//     this.order_reverse = order_content.reverse = !order_content.reverse;
//   };

// }

// --------------------------------------------------------------------------------

// $scope를 사용할 때
function testController($scope) {
  $scope.people       = [
    {'name': '김한울', 'age': 32, 'job': '백엔드 개발자'},
    {'name': '이민영', 'age': 19, 'job': '그래픽 디자이너'},
    {'name': '최상민', 'age': 46, 'job': '소설가'},
    {'name': '정수진', 'age': 25, 'job': '프론트엔드 개발자'},
    {'name': '지성', 'age': 39, 'job': '배우'},
  ];
  $scope.order_obj = [
    {
      'category': 'name',
      'reverse': false
    },
    {
      'category': 'age',
      'reverse': false
    },
    {
      'category': 'job',
      'reverse': false
    },
  ];

  $scope.app_name     = 'ng1';
  $scope.current_date = '2016-11-18';
  $scope.money        = 243500 + 302010;
  $scope.filtering      = '';
  $scope.order_category = 'name';
  $scope.order_reverse  = false;

  // 컨트롤러 내부에 함수 정의
  $scope.changeOrderCategoryAndReverse = function(index) {
  // var changeOrderCategoryAndReverse = function(index) {
    var order_content = $scope.order_obj[index];
    $scope.order_category = order_content.category;
    $scope.order_reverse = order_content.reverse = !order_content.reverse;
  };

  // $scope 객체를 통해 View(Template)에 전달(공개)
  // $scope.changeOrderCategoryAndReverse = changeOrderCategoryAndReverse;

}

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

var angular = require('angular');
// 코드 압축(Uglify) 시 문제가 발생하지 않음
// angular.module('FDS_App').controller('testController', ['$scope', testController]);
angular.module('FDS_Utils_Module').controller('testController', ['$scope', testController]);

// 코드 압축(Uglify) 시, 문제가 발생함
// angular.module('FDS_Utils_Module').controller('testController', testController);

// 코드 압축 시, 발생하는 문제를 해결하려면
// 아래와 같이 컨트롤러 함수에 속성 $inject를 추가한 후
// 배열을 통해 보존되어야 할 주입 모듈 이름을 문자열로 추가한다.
// testController.$inject = ['$scope'];

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

  $scope.app_name     = 'angular js application no1';
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
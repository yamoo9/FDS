(function(global, angular, jq){
  'use strict';

  // 압축 과정에서 주입된 $scope 모듈 이름이 변경되는 것을 방지
  // 방법 1.
  // function ngCtrl($scope){
  //   var content_text = 'AngularJS Application is Awesome!!';
  //   $scope.content = '';
  //   $scope.setContent = function() {
  //     this.content = content_text;
  //   };
  //   var ngTHeadline = jq('.ng-template-headline');
  //   content_text = content_text.split(' ').slice(-1).toString().toLowerCase().replace(/!+/g, '');
  //   ngTHeadline.text( content_text );
  // }

  // ngCtrl.$inject = ['$scope'];

  // --------------------------------------------------------------------------------

  // 방법 2.
  function ngCtrl($scope){
    var content_text = 'AngularJS Application is Awesome!!';
    $scope.content = '';
    $scope.setContent = function() {
      this.content = content_text;
    };
    var ngTHeadline = jq('.ng-template-headline');
    content_text = content_text.split(' ').slice(-1).toString().toLowerCase().replace('!!', '');
    ngTHeadline.text( content_text );
  }

  angular.module('ngApp').controller('ngController', ['$scope', ngCtrl]);

})(this, this.angular, this.jQuery);
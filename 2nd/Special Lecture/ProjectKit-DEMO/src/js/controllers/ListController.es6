/*! ListController.js © yamoo9.net, 2016 */
'use strict';

let angular = require('angular');

angular
  .module('BipanListApp')
  .controller('ListController',
    ['$scope', 'ListDataShareService', ($scope, ListDataShareService)=>{

    // bipan 모델 데이터
    $scope.share_data = ListDataShareService;

    // 컨트롤러 $scope 객체의 속성
    // $scope.search = {};
    $scope.search = '';
    $scope.order  = 'name';

    // 컨트롤러 $scope 객체의 메소드
    $scope.selectPerson = (person)=> {
      $scope.share_data.selected_person = person;
    };
    $scope.loadMore = ()=>{
      // 사용자가 브라우저의 하단 끝에서 스크롤 이벤트 발생
      // 다음 페이지의 콘텐츠를 불러와야 합니다.
      $scope.share_data.loadMore();
    };

    // 엄격하게 일치하는 검색 기능
    // $scope.sensitiveSearch = function(person) {
    //   var search = $scope.search;
    //   if ( search ) {
    //     return person.title.indexOf(search) === 0 ||
    //            person.director.indexOf(search) === 0 ||
    //            person.year.indexOf(search) === 0 ||
    //            person.category.indexOf(search) === 0;
    //   }
    //   return true;
    // };

  }]);

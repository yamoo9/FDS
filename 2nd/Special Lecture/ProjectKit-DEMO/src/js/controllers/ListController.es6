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
    $scope.search         = '';
    $scope.order          = 'title';

    // 컨트롤러 $scope 객체의 메소드
    $scope.selectMovie = function(movie) {
      $scope.share_data.selected_movie = movie;
    };

    // 엄격하게 일치하는 검색 기능
    $scope.sensitiveSearch = function(movie) {
      var search = $scope.search;
      if ( search ) {
        return movie.title.indexOf(search) === 0 ||
               movie.director.indexOf(search) === 0 ||
               movie.year.indexOf(search) === 0 ||
               movie.category.indexOf(search) === 0;
      }
      return true;
    };

  }]);

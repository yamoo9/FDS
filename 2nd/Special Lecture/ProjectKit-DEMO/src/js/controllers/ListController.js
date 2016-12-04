/*! ListController.js © yamoo9.net, 2016 */
'use strict';

let angular = require('angular');

angular
  .module('BipanListApp')
  .controller('ListController', ['$scope', function ($scope) {

    // bipan 모델 데이터
    $scope.movies = [
      {
        "category": "opening",
        "title": "캡틴 판타스틱",
        "english_title": "CaptainFantastic",
        "director": "맷 로스",
        "year": "2016",
        "duration": "118",
        "nation": "USA",
        "image": "http://www.bifan.kr/uploads/program/program_32016062010641.jpg"
      },
      {
        "category": "closing",
        "title": "서울역",
        "english_title": "Seoul Station",
        "director": "연상호",
        "year": "2016",
        "duration": "93",
        "nation": "Korea",
        "image": "http://www.bifan.kr/uploads/program/program_32016062110580.jpg"
      },
      {
        "category": "choice",
        "title": "패티와의 스물 하룻밤",
        "english_title": "21 Nights with Pattie",
        "director": "아르노 라리외 / 장 마리 라리외",
        "year": "2015",
        "duration": "110",
        "nation": "France",
        "image": "http://www.bifan.kr/uploads/program/program_320160614152925.jpg"
      },
      {
        "category": "choice",
        "title": "오토헤드",
        "english_title": "Autohead",
        "director": "로힛 미탈",
        "year": "2016",
        "duration": "97",
        "nation": "India",
        "image": "http://www.bifan.kr/uploads/program/program_320160614153423.jpg"
      },
      {
        "category": "choice",
        "title": "훠궈전쟁",
        "english_title": "Chongqing Hot Pot",
        "director": "양 칭",
        "year": "2016",
        "duration": "97",
        "nation": "China",
        "image": "http://www.bifan.kr/uploads/program/program_320160614153615.jpg"
      },
      {
        "category": "choice",
        "title": "장강도",
        "english_title": "Crosscurrent",
        "director": "양 차오",
        "year": "2015",
        "duration": "116",
        "nation": "China",
        "image": "http://www.bifan.kr/uploads/program/program_32016061415383.jpg"
      },
      {
        "category": "choice",
        "title": "세상에서 고양이가 사라진다면",
        "english_title": "If Cats Disappeared from the World",
        "director": "나가이 아키라",
        "year": "2016",
        "duration": "100",
        "nation": "Japan",
        "image": "http://www.bifan.kr/uploads/program/program_320160620101248.JPG"
      },
      {
        "category": "choice",
        "title": "인어와 함께 춤을",
        "english_title": "The Lure",
        "director": "아그네즈카 스모친즈카",
        "year": "2015",
        "duration": "92",
        "nation": "Poland",
        "image": "http://www.bifan.kr/uploads/program/program_320160614153915.jpg"
      },
      {
        "category": "choice",
        "title": "무법자와 천사들",
        "english_title": "Outlaws and Angels",
        "director": "JT 몰너",
        "year": "2016",
        "duration": "120",
        "nation": "USA",
        "image": "http://www.bifan.kr/uploads/program/program_320160614154028.jpg"
      },
        {
          "category": "choice",
          "title": "포인트 제로",
          "english_title": "Point Zero",
          "director": "호세 페드로 굴라르",
          "year": "2015",
          "duration": "84",
          "nation": "Brazil",
          "image": "http://www.bifan.kr/uploads/program/program_320160614154234.jpg"
      },
        {
          "category": "choice",
          "title": "얼굴 없는 밤",
          "english_title": "The Similars",
          "director": "이작 에즈반",
          "year": "2015",
          "duration": "89",
          "nation": "Mexico",
          "image": "http://www.bifan.kr/uploads/program/program_320160614154342.jpg"
      },
        {
          "category": "choice",
          "title": "아래층 사람들",
          "english_title": "The Tenants Downstairs",
          "director": "아담 추웨이",
          "year": "2016",
          "duration": "97",
          "nation": "Taiwan",
          "image": "http://www.bifan.kr/uploads/program/program_320160620101739.jpg"
      },
        {
          "category": "choice",
          "title": "어둠의 여인",
          "english_title": "Under the Shadow",
          "director": "바박 안바리",
          "year": "2015",
          "duration": "110",
          "nation": "France",
          "image": "http://www.bifan.kr/uploads/program/program_320160621223015.jpg"
      },
        {
          "category": "choice",
          "title": "곡성",
          "english_title": "The Wailing",
          "director": "나홍진",
          "year": "2016",
          "duration": "156",
          "nation": "Korea, USA",
          "image": "http://www.bifan.kr/uploads/program/program_32016061716725.jpg"
      },
        {
          "category": "choice",
          "title": "공원 생활",
          "english_title": "Life in the Park",
          "director": "문소현",
          "year": "2016",
          "duration": "14",
          "nation": "Korea",
          "image": "http://www.bifan.kr/uploads/program/program_320160616113031.jpg"
      },
        {
          "category": "choice",
          "title": "밤이면 밤마다",
          "english_title": "Bad Throttle",
          "director": "징두 추아",
          "year": "2015",
          "duration": "13",
          "nation": "Singapore",
          "image": "http://www.bifan.kr/uploads/program/program_320160616135438.jpg"
      },
        {
          "category": "choice",
          "title": "윌리 빙엄의 경우",
          "english_title": "The Disappearance of Willie Bingham",
          "director": "맷 리차드",
          "year": "2015",
          "duration": "13",
          "nation": "Australia",
          "image": "http://www.bifan.kr/uploads/program/program_320160616135827.jpg"
      },
        {
          "category": "choice",
          "title": "목소리",
          "english_title": "Voiceless",
          "director": "데이빗 유로스",
          "year": "2015",
          "duration": "22",
          "nation": "Canada",
          "image": "http://www.bifan.kr/uploads/program/program_32016061614031.jpg"
      }
    ];

    // 컨트롤러 $scope 객체의 속성
    // $scope.search = {};
    $scope.search         = '';
    $scope.order          = 'title';
    $scope.selected_movie = null;

    // 컨트롤러 $scope 객체의 메소드
    $scope.selectMovie = function(movie) {
      $scope.selected_movie = movie;
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

/*! demo-try-4.js © yamoo9.net, 2016 */
(function(global, ng){
  'use strict';

  // console.log(ng.version.full);

  // 함수는 컨트롤러
  // $scope 주입된 객체는 ViewModel 객체
  function tableController( $scope ) {
    // console.log($scope);
    // 모델(Data)
    // [지역변수] 외부에서 접근이 불가능
    // 모델 데이터는 향후 외부로 분리하여 관리 한다.
    // $http 서비스 객체를 사용한다.
    var people = [
      {
        'name'    : 'tomy',
        'age'     : 23,
        'mail'    : 'tomy@study.com',
        'birthday': '2001-09-02',
        'has-money': 5300,
        'picture' : {
          'width': 200,
          'height': 200,
          'src': 'http://placehold.it/220x220/34c0ff/fff/?text=tomy'
        }
      },
      {
        'name'    : 'sunny',
        'age'     : 32,
        'mail'    : 'SUNNY@STUDY.COM',
        'birthday': '1982-02-17',
        'has-money': 10200,
        'picture' : {
          'width': 200,
          'height': 200,
          'src': 'http://placehold.it/220x220/7045cf/fff/?text=sunny'
        }
      },
      {
        'name'    : 'zeus',
        'age'     : 61,
        'mail'    : 'zeus@study.com',
        'birthday': '1109-01-01',
        'has-money': 1000000,
        'picture' : {
          'width': 200,
          'height': 200,
          'src': 'http://placehold.it/220x220/3a0099/fff/?text=zeus'
        }
      },
      {
        'name'    : 'Aron',
        'age'     : 18,
        'mail'    : 'aron@study.com',
        'birthday': '1998-11-21',
        'has-money': 121900,
        'picture' : {
          'width': 200,
          'height': 200,
          'src': 'http://placehold.it/220x220/3a0099/fff/?text=aron'
        }
      }
    ];
    var ordermap = {
      'sort'     : null,
      'name'     : true,
      'age'      : true,
      'mail'     : true,
      'birthday' : true
    };
    function changeOrder(prop) {
      $scope.ordermap[prop] = !$scope.ordermap[prop];
      $scope.ordermap.sort = $scope.ordermap.sort === prop ? '-'+prop : prop;
    }

    // $scope 객체를 통해 해당 속성에 접근이 뷰에서 가능
    // $scope.속성
    $scope.people      = people;
    $scope.ordermap    = ordermap;
    // $scope.메소드
    $scope.changeOrder = changeOrder;
  }

  // 작성한 컨트롤러 공개
  global.tableController = tableController;

})(this, this.angular);
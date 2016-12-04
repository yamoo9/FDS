## 1. 모듈/컨트롤러 설정

```js
// [AngularJS 모듈 정의]
let App = angular.module('ListApp', []);
```

```js
// [AngularJS 컨트롤러(함수) 정의]
App.controller('ListController', ['$scope', function($scope) {

  /**
   * --------------------------------
   * 컨트롤러 스코프 내, 속성(변수) 정의
   * ----------------------------- */

  // [모델 데이터]
  // 랜덤 사용자 API
  // http://randomuser.me/api/?results=40
  // 추후 $http 내장 서비스, $resource 서비스로 Ajax 통신으로 가져 올 데이터
  $scope.response_users = [
    {
      "user": {
        "gender": "female",
        "name": {
          "title": "mrs",
          "first": "taylor",
          "last": "flores"
        },
        "location": {
          "street": "2838 e pecan st",
          "city": "bundaberg",
          "state": "south australia",
          "zip": 21121
        },
        "email": "taylor.flores@example.com",
        "username": "brownladybug329",
        "password": "ib6ub9",
        "salt": "HJgMaoRY",
        "md5": "103a91e31877a85f7c1bba51b91d4da8",
        "sha1": "5939a53b00f81abaf87a4fe387567c912931caa6",
        "sha256": "a68501a97637b5b4c53660be104e342e32115bac4e61f7e1578500b003830581",
        "registered": 1254401046,
        "dob": 335935012,
        "phone": "01-0601-3756",
        "cell": "0402-238-664",
        "TFN": "709314160",
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/36.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
        }
      }
    },
  ];

  // 가져온 모델 데이터를 다시금 읽기 쉽게 수정해서 처리하기 위한 새로운 그릇(공간)
  // 그릇에 angular.forEach() 메소드를 사용해서 다시 담는 일을 수행
  $scope.users = [];

  angular.forEach($scope.response_users, function(item) {
    $scope.users.push( item.user );
  });

  // 사용자가 선택한 사용자 정보를 담을 속성(변수) 설정
  $scope.selected_user = null;

  // 사용자가 검색한 텍스트 초기화 설정
  $scope.search = {};

  // 페이지라 초기 로딩되었을 때 초기 값 설정
  $scope.sort_option = '';

  /**
   * --------------------------------
   * 컨트롤러 스코프 내, 함수(메소드) 정의
   * ----------------------------- */
  $scope.selectedUser = function( user ) {
    $scope.selected_user = user;
  };

  // 민감한 검색(대소문자 구분, 완벽한 일치를 확인하는 검색 함수($scope 객체의 메소드)
  $scope.sensitiveSearch = function(user) {
    // 사용자 입력 검색어 변수(Cache)
    var user_input_search = $scope.search.$;
    // 사용자 입력 검색어 존재할 경우 조건 처리
    if( user_input_search ) {
      // 사용자 입력 검색어 민감한 검수
      // [ username, name.first, email, phone ]
      return user.username.indexOf( user_input_search )   === 0 ||
           user.name.first.indexOf( user_input_search ) === 0 ||
           user.email.indexOf( user_input_search )      === 0 ||
           user.phone.indexOf( user_input_search )      === 0;
    }
    return true;
  };

}]);
```

## 2. 컨트롤러 분리 (List | Detail)

역할에 따라 컨트롤러를 분리하여 관리한다.

- ListController
- DetailsController

## 3. 스코프 상속 (Scope Inheritance)

자식 스코프는 내부에서 속성/메소드를 찾지 못할 경우, 부모 스코프를 탐색하여 상속한다.

```sh
$rootScope
  └ parentScope    - ParentController
  │ └ childScope - ChildController
  └ siblingScope   - SiblingController
```

## 4. $rootScope를 통한 컨트롤러 사이 데이터 공유

스코프 상속을 이용하여 모든 스코프가 참조하는 $rootScope에 속성/메소드를 정의하여
접근하는 방법이지만, $rootScope에 설정하는 것은 그리 좋은 방법은 아니다.

## 5. CommonJS 진영의 모듈 로더 방식으로 파일 분리/관리

애플리케이션이 복잡해질수록 역할에 따른 분리 관리가 요구된다.

- `app/controllers/ListController.js`
- `app/controllers/DetailsController.js`

## 6. 서비스(Service)를 통한 컨트롤러 데이터 공유

$rootScope에 설정하는 방법을 사용하기보다는 컨트롤러 사이 데이터 공유를 위해
팩토리/서비스를 사용한다.

- `app/services/contactFactory.js`
- `app/services/contactService.js`

AngularJS의 [서비스](https://docs.angularjs.org/guide/services)는 응용 프로그램에서 모든 작업을 수행하는 함수로 사용된다.
예를 들어, AngularJS에서 ajax 통신을 위해 $http 통합 서비스를 가지고 있다.
물론 서비스를 직접 정의하여 사용할 수 있다.

AngularJS에서 비즈니스 로직은 서비스로 구현되는 것이 바람직되어 있기 때문에
독자적인 서비스를 만들 수 있는 기회는 많다고 생각한다. AngularJS에서 자체
정의한 서비스를 사용하려면 Module.factory를 사용하거나 직접 모듈 config
함수 내부에서 $provide을 사용하여 서비스를 등록해야 한다. 또한 모든 서비스는
DI(의존모듈 주입) 방식을 사용하여 등록할 수 있다.

AngularJS의 서비스는 모든 싱글 톤 객체이다.
인젝터($injecter)마다 주어지는 서비스 인스턴스는 항상 하나.

## 7. [$http](https://docs.angularjs.org/api/ng/service/$http) 서비스를 사용한 데이터 비동기(Ajax) 통신

```js
// Ajax 호출
$http
  // randomuser.me에서 랜덤 사용자 정보 JSON 요청
  .get('https://randomuser.me/api/?results=30')
  // 사용자 정보를 성공적으로 전달 받은 후 실행
  .then(function(response) {
    // 전달 받은 JSON 데이터에서 필요한 user 속성 내부 값을
    // 전달 받은 후, users 빈 배열에 추가
    angular.forEach(response.data.results, function(item) {
      users.push( item.user );
    });
  });
```

---

## 8. ngResource 모듈 다운로드 및 설정(Config)

- [ngResource](https://docs.angularjs.org/api/ngResource)
- [$resource](https://docs.angularjs.org/api/ngResource/service/$resource)

#### angular-resource 모듈

$http 고급 기능 버전.
리소스 객체를 생성하는 팩토리로 RESTfull 서버 사이트 데이터 소스와 상호작용할 수 있도록 도와준다.
반환된 리소스 객체는 낮은 수준의 $http 서비스와 함께 사용할 필요 없이, 높은 수준의 행동을 제공하는 액션 메소드를 가진다.

```js
// JWT를 사용한 인증 Token 사용
// https://docs.angularjs.org/api/ng/provider/$httpProvider
// dab1748ebaceb34ed6796bc3b7dc84741b77af54
$httpProvider.defaults.headers.common['Authorization'] = 'Token ';
// 서버(백엔드)에서 문제를 제기할 수 있는 연산된 URL에서 '/'를 제거하지 않도록 설정.
// http://stackoverflow.com/questions/14533117/angular-trailing-slash-for-resource
$resourceProvider.defaults.stripTrailingSlashes = false;
```

## 9. 팩토리에서 ngResource ($resource) 모듈 사용

```js
// JWT: JSON Web Token API 주소
// Django REST framework
'https://codecraftpro.com/api/samples/v1/contact/'
```

```js
angular.module('app', ['ngResource'])

  .config(function($httpProvider, $resourceProvider) {
    // JWT를 사용한 인증 Token 사용
    // https://docs.angularjs.org/api/ng/provider/$httpProvider
    $httpProvider.defaults.headers.common['Authorization'] = 'Token dab1748ebaceb34ed6796bc3b7dc84741b77af54';

    // 서버(백엔드)에서 문제를 제기할 수 있는 연산된 URL에서 '/'를 제거하지 않도록 설정.
    // https://docs.angularjs.org/api/ngResource/service/$resource
    // http://stackoverflow.com/questions/14533117/angular-trailing-slash-for-resource
    $resourceProvider.defaults.stripTrailingSlashes = false;
  })

  // https://codecraftpro.com/api/samples/v1/contact/:id/
  .factory('Contact', function() {
    return $resource('http://url.yamoo9.net/jwt/:id/');
  })

  .service('')
```

## 10. 서비스에서 ngResource ($resource) 모듈 사용

- 페이지 로딩 관련 속성 설정
  - page
  - has_more
  - is_loading
- $resource 반환 함수를 생성자로 하여 $resource 객체 생성
- API 데이터 변경에 따른 index.html/ListController 수정

## 11. 사용자 정의 필터(Custom Filter)

- gender 필터
- removeX 필터

## 12. ngInfinateScroll 모듈 사용

AngularJS 외부 개발 모듈은 [ngmodules.org](http://ngmodules.org/)에서 찾아볼 수 있음.

Bower로 [ngInfiniteScroll](https://sroze.github.io/ngInfiniteScroll/) 모듈 설치

```sh
$ bower install ngInfiniteScroll
```

## 13. 클라이언트 사이드 환경에서 검색/정렬 기능 제거

`ng-repeat` 코드 수정

## 14. $watch를 사용하여 스코프 변수 변경 감지 및 처리

[angular.isDefined](https://docs.angularjs.org/api/ng/function/angular.isDefined)

`$scope.$watch()` 코드 추가

## 15. 서버 사이드 환경에서 검색/정렬 기능 처리

```js
// params.search, params.ordering
$resource.get(params, function(response){});
```

---

## 16. 서버 사이드 검색/정렬 코드

`ListController.js`에서 `$watch`를 사용하여 **'정렬' 모델 데이터를 감시**하여 사용자가 입력한 새로운 값을 감시한다.

```js
$scope.$watch('sort_option', function(newValue, oldValue) {
  if( angular.isDefined(newValue) ) {
    $scope.contact.doOrder(newValue);
  }
});
```

`membersService.js`에서 서버에 정렬을 요청하는 `doOrder()` 메소드를 작성한다.

```js
self.ordering = null;

self.doOrder = function(order) {
  self.resetRequest(1);
  self.ordering = order;
  self.loadMembers();
};
```

<!-- ............................................................... -->

## 17. 로딩 스피너 (Loading Spiner) 추가

[angular-spinner](https://github.com/urish/angular-spinner) 모듈 사용.

Bower로 angular-spinner 모듈을 설치할 수 있으나...

```sh
$ bower install angular-spinner
```

Browserify, Browserify-shim을 사용한 방법이 angular-spinner에 정상적으로 작동하지 않아...
부득이하게 NPM으로 angular, spin.js 설치해야 함. (참고: [#L130](https://github.com/urish/angular-spinner/blob/master/angular-spinner.js#L130))

```sh
npm i -D angular spin.js
```

HTML 문서에 스피너 추가 (스피너 모양 설정 속성은 [spin.js](http://fgnass.github.io/spin.js/) 참고)

```html
<!-- HTML -->
<div data-us-spinner="{radius:8, width:5, length: 7, lines: 9}"></div>
```

스피너 포지션 스타일링

```sass
// Sass
.spinner
  position: relative
  width: 50px
  height: 50px
  margin: 0 auto
  padding: 40px 0

  p
    margin-top: 20px
```

<!-- ............................................................... -->

## 18. [ngInclude](https://docs.angularjs.org/api/ng/directive/ngInclude) 활용

디테일 뷰 파트를 `ngInclude` 디렉티브를 사용하여 분리 (`ngInclude` 사용 시, 경로를 '문자열'로 전달해야 한다)

```html
<div data-ng-include="'views/details.html'"></div>
```

※ `ngInclude` 분리된 디테일 뷰에서는 작성한 jQuery 코드가 정상적으로 작동하지 않는다. 이 문제를 해결하기 위해 사용자 정의 디렉티브를 정의해보자.

<!-- ............................................................... -->

## 19. 사용자 정의 디렉티브 (Custom Directive) 작성

키노트를 통해 사용자 정의 디렉티브에 대해 공부한 후 작성해본다.

1. 커스텀 디렉티브 정의
1. 디렉티브 정의 객체(DDO) 반환
1. 템플릿(Template)
1. 대체(replace)
1. 제한(restrict)
1. 스코프(Scope)
1. [Transclusion: 전자 문서의 일부분을 포함](https://en.wikipedia.org/wiki/Wikipedia:Transclusion)
1. 링크 함수(Link)

-

커스텀 디렉티브

```html
<div data-scrolled-panel></div>
```

디렉티브 정의 객체 속성

```js
// 디렉티브 정의 객체
var DDO = {
  // 제한: (E)lement, (A)ttributes, (C)lass, co(M)ment
  'restrict'     : 'EACM',
  // 대체: root 요소가 하나여야만 한다.
  'replace'      : true,
  // 문서 일부분 포함
  'transclude'   : true,
  // 격리된 영역(Scope) 설정
  'scope'        : true, // false, {}
  // 템플릿 코드
  'template'     : '<header> <h1> {{title}} </h1> <h2> {{subtitle}} </h2> </header>',
  // 템플릿 URL: 템플릿 코드가 담긴 HTML 파일 경로
  'templateUrl'  : '',
  // 컨트롤러: 디렉티브를 제어할 컨트롤러 연결
  'controller'   : '',
  // 컨트롤러 별칭: $scope가 아닌, 컨트롤러 별칭을 사용할 경우 설정
  'controllerAs' : '',
  // 링크 함수: jqLite, jQuery를 사용하여 디렉티브 요소를 제어
  'link'         : function(scope, element, attributes, controller) { }
}
```

## 20. AngularJS에서 jqLite 대신 jQuery를 사용

AngularJS 내에서 jqLite 대신 jQuery를 사용할 수 있는 방법은 [벤 나달의 using-jquery-instead-of-jqlite-in-angularjs 아티클](http://www.bennadel.com/blog/2752-using-jquery-instead-of-jqlite-in-angularjs.htm) 참고

```js
angular.module('RandomUserDataApp')
.directive('detailsPanel', ['$window', detailsPanelDirective]);

function detailsPanelDirective($window) {

  return {
    'replace': true,
    'restrict': 'EA',
    'controller': 'DetailsController',
    'templateUrl': './js/app/directives/detailsPanel.html',
    'link': function(scope, element, attributes, controller) {

      // 문서객체 참조 DOM Reference
      // 상태 캐시 Cache of Elements State
      $window = angular.element( $window );
      var scrolled_fixed_offset = element.offset(),
        scrolled_target_pos   = scrolled_fixed_offset.top - 30,
        scrolled_fixed_config = {
          'position': 'fixed',
          'top'     :  30,
          'left'    :  scrolled_fixed_offset.left,
          'width'   :  element.outerWidth(),
          'z-index' : 10000
        };

      // 이벤트 핸들링 Event Handling
      $window.on('scroll', scrolledCheckAction);

      // 이벤트 핸들러 Event Handler
      function scrolledCheckAction () {
        if ( $window.scrollTop() > scrolled_target_pos ) {
          activeScrollFixed();
        } else {
          deactiveScrollFixed();
        }
      }

      // 콜백 함수 Callback Functions
      function activeScrollFixed() {
        element
          .addClass('active-fixed')
          .removeClass('deactive-fixed')
          .css( scrolled_fixed_config );
      }

      function deactiveScrollFixed() {
        element
          .removeClass('active-fixed')
          .addClass('deactive-fixed')
          .removeAttr('style');
      }
    }
  };
}
```

<!-- ............................................................... -->

## 21. 라우트([ngRoute](https://docs.angularjs.org/api/ngRoute)) 설정

키노트를 통해 라우트에 대해 공부한 후 작성해본다. (과제로 수행 요청했던 코드 진행 후 시작)

#### 라우트 모듈 컴포넌트

- **디렉티브** [`ngView`](https://docs.angularjs.org/api/ngRoute/directive/ngView)
- **프로바이더** [`$routeProvider`](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)
- **서비스** [`$route`](https://docs.angularjs.org/api/ngRoute/service/$route), [`$routeParams`](https://docs.angularjs.org/api/ngRoute/service/$routeParams)

#### 라우트 설정

```js
onePieceApp.config(['$routeProvider', '$locationProvider', appConfig]);

function appConfig($routeProvider, $locationProvider) {

  // -----------------------------------------
  // $locationProvider
  // -----------------------------------------
  $locationProvider
    // .hashPrefix('!');
    // .html5Mode(true);

  // -----------------------------------------
  // $routeProvider
  // -----------------------------------------
  $routeProvider
    .when('/list', {
      'templateUrl': 'views/list.html',
      'controller':  'ListController'
    })
    .when('/details/:memberId', {
      'templateUrl': 'views/details.html',
      'controller':  'DetailsController'
    })
    .otherwise({
      'redirectTo': '/list'
    });

}
```

#### index.html에 `ngView` 디렉티브 설정

```html
<div class="one-piece-app" data-ng-view>
```

#### views/details.html 작성 참고

```html
<header class="header">
  <h1 class="headline">
    <a href="index.html"><img src="images/onepiece-logo.png" width="800" height="195" alt="원피스"></a>
  </h1>
  <div class="header-button-set">
    <a role="button" class="prev-button" href="">
      <span>&lt;</span> {{ 이전 멤버 속성(이름, 닉네임 등) }}
    </a>
    <a role="button" class="next-button" href="">
      <span>&gt;</span> {{ 다음 멤버 속성(이름, 닉네임 등) }}
    </a>
  </div>
</header>

<main class="detail-view">
  <img src="#" data-ng-src="images/{{ 멤버 이미지 }}_tm.jpg" alt="{{ 멤버 이름 }}">
  <div class="member-info">
    <span class="member-position">{{ 멤버 직위 }}</span>
    <span class="member-nickname">{{ 멤버 닉네임 }}</span>
    <h3 class="memeber-name">{{ 멤버 이름 }}</h3>
  </div>
  <p class="member-biography">{{ 멤버 설명 }}</p>
</main>
```

<!-- ............................................................... -->

## 22. 애니메이션([ngAnimate](https://docs.angularjs.org/api/ngAnimate)) 설정

CSS 기반의 애니메이션 설정 (상태)

- 진입(Enter) 시작 : `.ng-enter`
- 진입(Enter) 중... :`.ng-enter.ng-enter-active`
- 퇴출(Leave) 시작 : `.ng-leave`
- 퇴출(Leave) 중... : `.ng-leave.ng-leave-active`

```sass
// SLIDE ANIMATION
.slide-animation

  &.ng-enter,
  &.ng-leave
    transition: 0.4s ease-in-out all
    position: relative
    height: 1000px

  &.ng-enter
    z-index: 100
    left: 100px
    opacity: 0

  &.ng-enter.ng-enter-active
    left: 0
    opacity: 1

  &.ng-leave
    z-index: 101
    opacity: 1
    left: 0

  &.ng-leave.ng-leave-active
    left: -100px
    opacity: 0

// REPEAT ANIMATION
.repeat-animation

  &.ng-enter,
  &.ng-leave,
  &.ng-move
    transition: 12s ease-in-out all
    position: relative

  &.ng-enter
    top: 10px
    opacity: 0
  &.ng-enter.ng-enter-active
    top: 0
    opacity: 1

  &.ng-leave
    z-index: -10
    top: 0px
    opacity: 1
  &.ng-leave.ng-leave-active
    top: -10px
    opacity: 0

  &.ng-move
    opacity: 0.4
  &.ng-move.ng-move-active
    opacity: 1
```

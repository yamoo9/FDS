# Angular v1.x

Angular 버전 1 사용법을 다시금 상기 시켜주기 위한 실습.<br>
빠르고 원할한 진행을 위한 개별 예제 파일 준비.

-

### List/Detail View 애플리케이션

#### 0. 랜덤 사용자 정보 생성 API (Random User Generator)

- [randomuser.me](http://randomuser.me)

#### 0-1. 랜덤 사용자 정보 생성 API 데이터 가져오기

1. [cURL](http://ohgyun.com/397)

```sh
# 랜덤 유저 JSON 데이터를 20개 생성하여 출력
$ curl https://randomuser.me/api/?results=20

# 랜덤 유저(여성) JSON 데이터를 10개 생성한 후, random-femle.json 파일 생성
$ curl https://randomuser.me/api/?results=10&gender=female > random-femle.json
```

2. [jQuery](https://randomuser.me/documentation#howto)

```js
// jQuery AJAX 메소드 활용
// http://api.jquery.com/jQuery.ajax/
jQuery.ajax({
  'url'       : 'https://randomuser.me/api/?results=40',
  'dataType'  : 'json', // 'jsonp'
  // 'async'  : true,
  // 'method' : 'POST',
  // 'data'   : {},
}).done(function(data) {
  console.log( data ); // JSON 데이터
});
```

3. [Angular v1](https://docs.angularjs.org/api/ng/service/$http)

```js
// AngularJS $http 모듈 사용
angular
  .module('App', [])
  .controller('AppController', ['$scope', '$http', function($scope, $http){
    // $http 서비스 활용
    $http({
      'method': 'GET',
      'url': 'https://randomuser.me/api/?results=40'
    })
    .then(function(response){
      console.log(response); // JSON 데이터
    });
  }]);
```

#### 0-2. 랜덤 사용자 정보 생성 API 요청 방법

```sh
// 랜덤 사용자 수 설정
'http://api.randomuser.me/?results=20'

// 성별 설정
'http://api.randomuser.me/?gender=female'

// 포멧 설정 JSON(기본 값) [CSV, YAML, XML]
'http://api.randomuser.me/?format=csv'

// 국가 지정 [AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NL, NZ, TR, US]
'http://api.randomuser.me/?nat=us,dk,fr,gb'

// 페이지네이션 설정
'http://api.randomuser.me/?page=3&results=10'
```

<!-- ---------------------------------------------------------------------------------------------------- -->

-

#### 1. 애플리케이션 제작 실습

##### 1.1. Angular v1.x 활용, 데이터 루프(Loop) → 뷰

JSON 모델(Model) 데이터를 HTML 템플릿(Template)에 적용하여 뷰(View) 구현

###### 부트스트랩 프레임워크 활용

- [getbootstrap.com](http://getbootstrap.com/)
- [bootswatch.com](http://bootswatch.com/)

```html
<!-- Bootstrap -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<!-- Bootswatch Theme: [flatly, slate, lumen, sandstone, spacelab] -->
<link rel="stylesheet" href="http://bootswatch.com/flatly/bootstrap.min.css">
```

[Navbar](http://getbootstrap.com/components/#navbar)

```emmet
.container-fluid>.row>nav.navbar>.navbar-header.col-md-12>a.navbar-brand
```

##### 1.2 $http 서비스 활용 (서버와 통신)

JSON 모델(Model) 데이터를 HTML 템플릿(Template)에 적용하여 뷰(View) 구현

##### 1.3 ngResource 모듈 서비스 활용 (서버와 통신, RESTFull API)

- [REST - 위키백과](https://ko.wikipedia.org/wiki/REST)
- [RESTFul이란 무엇인가?](http://blog.remotty.com/blog/2014/01/28/lets-study-rest/)
- [RESTful API 제대로 만들기](http://www.slideshare.net/ssuser7887b3/restful-api)
- [RESTful API를 설계하기 위한 디자인 팁](https://spoqa.github.io/2013/06/11/more-restful-interface.html)

##### 1.4 Angular 스코프(Scope) 이해

##### 1.5 Angular 서비스(Service) 객체를 사용한 컨트롤러(Controller) 사이 통신

##### 1.6 SPA 라우팅(Routing)

##### 1.7 디렉티브(Directive), 재사용 가능한 컴포넌트

##### 1.8 Form 유효성 검사(Validation)

- [Angular Auto Validate](http://jonsamwell.github.io/angular-auto-validate/)
- [Angular Ladda](http://remotty.github.io/angular-ladda/) | [Ladda](http://lab.hakim.se/ladda/)

##### 1.9 정규표현식 참고

- [HTML5 Pattern](http://html5pattern.com/)
- [정규식 - 한글 문자집합/문자 범위 지정하기](https://sites.google.com/site/wankyuchoi/home/computer/tips/1)
- [정규식 한글 체크](http://serpiko.tistory.com/385)


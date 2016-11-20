###### Front-End Develop SCHOOL

# DAY 32

## 1. DAY31의 Webpack 속도 개선
- npm module로 설치된 jquery와 angular를 매번 bundling 하면서 느려짐.
- 3가지 방법 [참고](http://webpack.github.io/docs/library-and-externals.html)
- externals 이용 방법 : webpack.config.js 파일에서 externals 속성을 이용하여 jquery와 angular를 전역변수로부터 받음. script tag에 src를 등록하면 전역변수로 접근이 가능함.
```shell
'externals': {
  'jquery': 'jQuery',
  'angular': 'angular',
},
```

## 2. Angular
### Directives
  - ng-cloak : 로딩 중 {{ }} 를 숨김.
  - ng-repeat : 데이터를 템플릿 요소와 함께 반복 순환함.

### Filter & Pipe | Formatting Data
  - Pipe를 통해 데이터를 Filtering, Formatting, Sorting.
  - Pipe는 메서드 체이닝처럼 연속으로 실행 가능
  - 예문<br>
    `{{ Expression | orderBy:'key':true }}` : 'key'는 기준이 되는 property명, true/false로 reverse 적용.<br>
    `{{ Expression | json:4 }}` : 4는 공백 개수(indent) 값. json 형식으로 값을 확인할 때 사용.<br>
    `{{ Expression | limitTo:3 }}` : 3은 표현하려는 갯수 값.<br>
    `{{ Expression | filter:model }}` : model은 필터시킬 모델. 특정 속성에만 filter를 적용하려면 filter 기준 모델을 model.property와 같이 명시.<br>
  - custom Filter를 만들 수 있음.<br>
```js
  angular.module('FDS_Utils_Module').filter('capitalize', function() {
    return function(input, seperator) {
      seperator = seperator || ' ';
      return input.split(seperator).map(function(s){
        return s.replace(/./, function($1){ return $1.toUpperCase(); });
      }).join(' ');
    };
  });
```

### Scope
  - $root scope 는 app에 종속됨.
  - $scope 는 controller에 종속됨.
  - 로컬 영역에서 찾지 못하면 root까지 스코프 체이닝이 일어남.

### Architecture Patterns
  - Angular는 MVC, MVVM 두가지를 포함한 MV*(M-V-Whatever)
  
### Controller
  - Angular 1.2 에서는 function과 ng-controller로 정의.
  - Angular 1.3 에서는 모듈을 이용.
  - Controller는 다른 Controller와 통신이 가능함.

### Module
  - 모듈은 다른 모듈을 주입 받기 가능.
  - 모듈은 컨테이너로 view에서 연결시 ng-app="moduleNmae" 처럼 이름을 지정
  - 모듈 정의는 [ ] 안에 주입하는 모델을 넣어줌. `angular.module('moduleName', ['모듈명', 'ngRoute'])`
  - 모듈 사용은 [ ]를 넣지 않음. `angular.module('moduleName')`

### Route
  - route를 이용하여 View Template과 Controller를 연결할 수 있음.
  - angular-route 또는 ui-router 사용 가능.
  - angular-route 모듈의 이름은 ngRoute.
  - config와 $routeProvider를 사용함.
  - when 에 template은 상대경로, controller는 이름만 설정.

### View Directive
  - ng-view 디렉티브가 있는 곳에 Template 뷰 페이지가 설정됨. `<div data-ng-view>`

### Configuring Location
  - 해시뱅(Hash Bang, #!)를 사용하지 않으려 할 경우 `$locationProvider.html5Mode(true)`

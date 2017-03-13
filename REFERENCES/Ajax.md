###### Front-End Develop SCHOOL

# Ajax

[Ajax(Asynchronous JavaScript And XML)](https://ko.wikipedia.org/wiki/Ajax)를 활용한 비동기 통신.

> __비동기 통신 非同期 通信__
> 기계가 데이터를 주고받는 통신을 할 때에, 고정된 속도를 갖는 것이 아니고<br>
> 약정된 신호를 기준으로 속도나 시기를 맞추는 통신 방법

- [Ajax: A New Approach to Web Applications](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
- [Ajax, MDN](https://developer.mozilla.org/ko/docs/AJAX)
- [Ajax 시작하기, MDN](https://developer.mozilla.org/ko/docs/AJAX/Getting_Started)

#### HTTP 메서드

- GET
- POST
- PUT
- DELETE
<!-- - PATCH -->
<!-- - OPTIONS -->

#### XMLHttpRequest 생성자 함수

```js
// 크로스 브라우징: IE 환경 고려
// new ActiveXObject('Msxml2.XMLHTTP') // IE5+
// 표준
// new XMLHttpRequest()                // IE 7+
var xhr = new XMLHttpRequest();

// -------------------------------------------------------------------------------------

// 헬퍼 함수
function ajaxRequest() {
  return window.XMLHttpRequest ? (new XMLHttpRequest()) : (new ActiveXObject('Msxml2.XMLHTTP'));
}

var xhr = ajaxRequest();
```

#### 비동기 통신

##### GET 요청

```js
// 비동기 통신 객체 생성
var xhr = ajaxRequest();

// 비동기 통신 이벤트 핸들링
xhr.onreadystatechange = function() {

  // 통신 성공 시, 처리
  //
  // [status code]
  // 참고 URL: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
  //
  // [readyState Code]
  // 0: uninitialized
  // 1: loading
  // 2: loaded
  // 3: interactive
  // 4: complete
  if ( this.readyState === 4 && this.status === 200 ) {
    // window.location.href.indexOf("http") === -1
    // 통신 성공 시, 처리
    console.log('statusText:', this.statusText);
    console.log('responseText:', this.responseText);
    console.log('responseXML:', this.responseXML);
    console.log('getResponseHeader("Content-Type"):', this.getResponseHeader('Content-Type'));
    console.log('getAllResponseHeaders():', this.getAllResponseHeaders());
  } else {
    // 통신 오류 시, 처리
  }
};

// 의도치 않은 요청을 서버쪽으로 보내는 경우를 방지하기 위해서는
// encodeURIComponent를 사용자가 입력해 전달하는 모든 파라미터들에 적용시키는 것이 바람직하다.
// encodeURIComponent( <사용자 입력 데이터 값> )
// 참고 URL: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

// 파라미터 설정 객체
var params = {
  gender  : 'female',
  format  : 'xml',
  results : 10
};

// 전송 파라미터 설정 문자열 생성
var parameter = 'gender=' + params.gender + '&format=' + params.format + '&results=' + params.results;

// 서버에 비동기 통신 요청
xhr.open( 'GET', 'https://randomuser.me/api/?' + parameter );

// 서버에 비동기 통신 요청
xhr.send( null );
```

###### [GET] XML 처리

```js
var xhr = ajaxRequest();

// 참고 URL: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/overrideMimeType
if ( xhr.overrideMimeType ) {
  xhr.overrideMimeType('text/xml');
}

xhr.onreadystatechange = function() {
  var data;
  if ( this.status === 200 && this.readyState === 4 ) {
    data = this.responseXML; // #document
    console.log(data);
  }
}

xhr.open('GET', 'programming.xml');
xhr.send(null);
```

###### [GET] JSON 처리

```js
var xhr = ajaxRequest();

xhr.onreadystatechange = function() {
  var data;
  if ( this.status === 200 && this.readyState === 4 ) {
    data = this.responseText;
    data = JSON.parse(data);
    console.dir(data);
  }
}

xhr.open('GET', 'programming.json');
xhr.send(null);
```

##### POST 요청

```js
var xhr = ajaxRequest();

xhr.onreadystatechange = function() {
  if ( this.readyState === 400 && this.status === 200 ) {
    // 통신 성공 시, 처리
  } else {
    // 통신 오류 시, 처리
  }
};

// 사용자에게 파라미터 값 받아오기
var user = {
  name : document.querySelector('.form input.user_name').value,
  age  : document.querySelector('.form input.user_age').value
};

// 파라미터 문자열 값 설정
var parameters = 'name=' + user.name + '&age=' + user.age;

// POST 방식 설정
xhr.open( 'POST', 'basicForm.php' );

// 헤더 'Content-type' 키 값을 'application/x-www-form-urlencoded' 으로 설정
// setRequestHeader(header, value)
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

// 서버에 파라미터 값을 전송
xhr.send( parameters );
```


-

### JSON

[JSON](http://json.org/json-ko.html) (JavaScript Object Notation)은 경량의 DATA-교환 형식이다. 이 형식은 사람이 읽고 쓰기에 용이하며, 기계가 분석하고 생성함에도 용이하다.

JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999의 일부에 토대를 두고 있다. JSON은 완벽하게 언어로 부터 독립적이지만 C-family 언어 - C, C++, C#, Java, JavaScript, Perl, Python 그외 다수 - 의 프로그래머들에게 친숙한 관습을 사용하는 텍스트 형식이다. 이러한 속성들이 JSON을 이상적인 DATA-교환 언어로 만들고 있다.

__JSON은 2개의 구조를 기본으로 두고 있다__

`name`/`value` 형태의 쌍으로 collection 타입으로 구성되며, 다양한 언어들에서 `object`, record, struct(구조체), dictionary, hash table, 키가 있는 list, 또는 연관 배열로서 실현 되었다. 값들의 순서화 된 리스트. 대부분의 언어들에서 `array`, vector, list, 또는 sequence로서 실현 되었다.

이러한 것들은 보편적인 DATA 구조이다. 사실상 모든 현대의 프로그래밍 언어들은 어떠한 형태로든 이것들을 지원한다. 프로그래밍 언어들을 이용하여 호환성 있는 DATA 형식이 이러한 구조들을 근간에 두고 있는 것은 당연하다.

키/값 모두 쌍따옴표(double quotes)를 사용해야 하며, 값으로 사용 가능한 것은 다음과 같다. 함수, 메서드 등은 값으로 적용할 수 없다.

- string
- number
- boolean (true, false)
- object
- array
- null

__JSON 객체 메서드__

- [JSON, MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [`JSON.stringify(obj, [replacer], [space])`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [`JSON.parse(string, [reviver])`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [`.toJSON()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON()_behavior)

-

### JSON Server

[json-server](https://github.com/typicode/json-server) 모듈

#### 1-1. 전역 설치

```sh
$ npm i -g json-server
```

#### 1-2. 도움말 확인

```sh
$ json-server -h

json-server [options] <source>

옵션:
  --config, -c       Path to config file              [기본: "json-server.json"]
  --port, -p         Set port                                       [기본: 3000]
  --host, -H         Set host                                  [기본: "0.0.0.0"]
  --watch, -w        Watch file(s)                                        [여부]
  --routes, -r       Path to routes file
  --middlewares, -m  Paths to middleware files                            [배열]
  --static, -s       Set static files directory
  --read-only, --ro  Allow only GET requests                              [여부]
  --no-cors, --nc    Disable Cross-Origin Resource Sharing                [여부]
  --no-gzip, --ng    Disable GZIP Content-Encoding                        [여부]
  --snapshots, -S    Set snapshots directory                         [기본: "."]
  --delay, -d        Add delay to responses (ms)
  --id, -i           Set database id property (e.g. _id)            [기본: "id"]
  --quiet, -q        Suppress log messages from output                    [여부]
  --help, -h         도움말을 보여줍니다                                  [여부]
  --version, -v      버전 넘버를 보여줍니다                               [여부]

예시:
  json-server db.json
  json-server file.js
  json-server http://example.com/db.json

https://github.com/typicode/json-server
```

#### 2-1. JSON Server 실행

```sh
$ json-server --watch <json-file>
```

#### 2-2. JSON Server에 요청

웹 브라우저 화면에 결과 값 표시.

```sh
# id 값으로 데이터 결과 반환
http://localhost:3000/music-list/1

# artist 값으로 데이터 결과 반환
http://localhost:3000/music-list?artist=Rihanna

# 질의(query) 값으로 데이터 결과 반환
http://localhost:3000/music-list?q=rihanna
```

-

### POSTMAN

어려운 API 개발을 손쉽게 만들어 주는 서비스 - [포스트맨](https://www.getpostman.com/)

#### 1. Faker 설치

```sh
$ npm i faker
```

#### 2. Faker.js 사용

`employees.js` 생성

```js
const faker = require('faker');

// faker.locale = 'ko';

let count = 10;

function generateEmployees() {
  let employees = [];
  for ( let id=1; id<=count; id++ ) {
    employees.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: {
        city: faker.address.city(),
        country: faker.address.country()
      },
      company: faker.company.companyName(),
      image: faker.image.avatar(),
      phone: faker.phone.phoneNumber()
    });
  }
  return { employees };
}

module.exports = generateEmployees;
```

-

### jQuery 라이브러리 - Ajax 메서드

#### 1. GET - 데이터 가져오기

```js
$.get('url', function(data) {
  console.dir(data);
});
```

#### 2. POST - 데이터 전송하기

```js
$('form').submit(function(e) {
  e.preventDefault();
  var formData = $(this).serialize();
  $.post('url', formData, function(data) {
    console.log(data);
  });
});
```

#### 3. PUT - 데이터 수정하기

```js
$.ajax({
  url: 'url',
  data: data_string,
  type: 'PUT'
}).then(function(data) {
  // debugger;
  console.log(data);
});
```

#### 4. DELETE - 데이터 제거하기

```js
$.ajax({
  url: 'url',
  type: 'DELETE'
}).then(function(data){
  console.log(data);
});
```

-

### Axios 라이브러리

프로미스(Promise) 기반 HTTP 클라이언트 Ajax 라이브러리

- [axios](https://github.com/mzabriskie/axios)
- [axios, Config Defaults](https://github.com/mzabriskie/axios#config-defaults)
- [axios, Request Method Aliases](https://github.com/mzabriskie/axios#request-method-aliases)

#### 설치

```sh
$ npm i axios
```

#### [GET] 데이터 요청

```js
axios.get('https://jsonplaceholder.typicode.com/todos')
     .then(function(response){
        console.log(response);
        // response.status
        // response.statusText
        // response.headers     JSON.stringify(response.headers, null, '\t')
        // response.data        JSON.stringify(response.data, null, '\t')
     })
     .catch(function(error)){
        console.error(error);
     });
```

#### [GET] 매개변수를 전달하여 데이터 요청

```js
var todoId = 2;
axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          id: todoId
        }
      })
      .then(function(response){})
      .catch(function(error){});
```

#### [POST] 데이터에 새로운 아이템 추가 요청

```js
var todoTitle = 'axios 스터디';
axios.post('https://jsonplaceholder.typicode.com/todos', {
        userId: '1',
        title: todoTitle,
        completed: false
      })
      .then(function(response){})
      .catch(function(error){});
```

-

### [JSON vs JSONP](http://json-jsonp-tutorial.craic.com/index.html)

`JSONP`는 [크로스 도메인 보안 정책(Same Origin Policy)](https://en.wikipedia.org/wiki/Same-origin_policy)을 우회하는 방법.

월드 와이드 웹은 동일한 도메인상의 요청만 가능하도록 제한하였지만, 도메인 간 데이터 통신으로부터 다이나믹한 웹 구현을 위한 방법으로 JSONP가 나오게 되었다. 외부 도메인(Open Web API 이용 시)으로 `Ajax` 요청을 할 때는 `json`이 아닌, `jsonp`를 사용해야 한다. 함수 `callback`을 이용하여 서버로부터 받은 JSON 데이터를 감싼다는 점 외에는 동일하다.

```js
// json
{"key1" : "value1",  "key2" : "value2"}

// jsonp
callback( {"key1" : "value1",  "key2" : "value2"} );
```

#### JSONP를 구현하는 방법

요청 URL 뒤에 `?callback=?`를 추가하여 `jsonp` 요청 구현

<!-- http://stackoverflow.com/questions/2887209/what-are-the-differences-between-json-and-jsonp -->

__JavaScript 예__

```js
//JSON
{"name":"yamoo9", "id":9};

//JSONP
jsonCallback( {"name":"yamoo9", "id":9} );

// ------------------------------------------------

function jsonCallback(json){
  alert(json.name);
}

var script = document.createElement('script');
script.getAttribute('src', 'http://example.com/jsonp?jsonCallback');
document.body.appendChild(script);
```

__jQuery 예제__

```js
jsonCallback({
  "sites":
  [
    {
      "siteName": "JQUERY4U",
      "domainName": "http://www.jquery4u.com",
      "description": "#1 jQuery Blog for your Daily News, Plugins, Tuts/Tips &amp; Code Snippets."
    },
    {
      "siteName": "BLOGOOLA",
      "domainName": "http://www.blogoola.com",
      "description": "Expose your blog to millions and increase your audience."
    },
    {
      "siteName": "PHPSCRIPTS4U",
      "domainName": "http://www.phpscripts4u.com",
      "description": "The Blog of Enthusiastic PHP Scripters"
    }
  ]
});

(function($) {

  var url = 'http://www.jquery4u.com/scripts/jquery4u-sites.json?callback=?';

  $.ajax({
    type:          'GET',
    url:           url,
    async:         false,
    contentType:   "application/json",

    dataType:      'jsonp',
    jsonpCallback: 'jsonCallback',

    success: function(json) {
      console.dir(json.sites);
    },
    error: function(e) {
      console.error(e.message);
    }
  });

})(jQuery);
```

-

### 참고 자료

- [jQuery CDN](https://code.jquery.com/)
- [jQuery, $.get()](https://api.jquery.com/jquery.get/)
- [jQuery, $.post()](https://api.jquery.com/jquery.post/)
- [jQuery, $.ajax()](http://api.jquery.com/jquery.ajax/)
- [Express, req.xhr](https://expressjs.com/en/api.html#req.xhr)
- [Express, res.json](https://expressjs.com/en/api.html#res.json)

-

### JSON 테스트

- [myjson.com](http://myjson.com/)
- [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)
- [json-server](https://github.com/typicode/json-server)

-

### API 테스트

- [randomuser.me](http://randomuser.me)
- [designskilz.com/random-users](http://www.designskilz.com/random-users/)
- [mockaroo.com](http://mockaroo.com/)
- [randomapi.com](https://randomapi.com/)
- [Faker.js](https://github.com/marak/Faker.js/)
- [The Open Movie Database](http://omdbapi.com/) | [Demo](http://codepen.io/nax3t/pen/vxNYbz)
- [Public APIs](https://github.com/toddmotto/public-apis)

###### Front-End Develop SCHOOL

# Ajax Library

### 1. 테스트 환경 구성

CLI

개발 모듈 [json-server](https://github.com/typicode/json-server), [faker.js](https://github.com/marak/Faker.js/) 설치

```sh
# package.json 파일 생성
$ echo {} > package.json

# 의존 개발 모듈 설치
$ npm i -D json-server faker
```

DB/generateEmployees.js

```js
const faker = require('faker');

// http://marak.github.io/faker.js/#toc10__anchor
faker.locale = 'en';

let generate_count = 20;

function generateEmployees() {
  let employees = [];
  for ( let i=0; i<generate_count; ) {
    employees.push({
      id: ++i,
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

package.json

```json
{
  "scripts": {
    "dev": "node_modules/.bin/json-server"
  },
  "devDependencies": {
    "json-server": "^0.9.6",
    "faker": "^4.1.0"
  }
}
```

CLI

```sh
# dev 스크립트에 인자 전달할 경우, -- 사용
$ npm run dev -- DB/generateEmployees.js -w
```

<details>
  <summary>[참고] Node.js 서버 사이드 코드: Express.js + MongoDB</summary>
  ```js
  var express          = require("express"),
      app              = express(),
      mongoose         = require("mongoose"),
      bodyParser       = require("body-parser"),
      expressSanitizer = require("express-sanitizer"),
      methodOverride   = require('method-override');

  mongoose.connect("mongodb://localhost/todo_app");

  app.use(express.static('public'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(expressSanitizer());
  app.use(methodOverride('_method'));

  app.set("view engine", "ejs");

  var todoSchema = new mongoose.Schema({
    text: String,
  });

  var Todo = mongoose.model("Todo", todoSchema);

  app.get("/", function (req, res) {
    res.redirect("/todos");
  });

  app.get("/todos", function (req, res) {
    Todo.find({}, function (err, todos) {
      if (err) {
        console.log(err);
      } else {
        // req.xhr : 비동기 통신 감지
        if ( req.xhr ) {
          // 응답을 JSON 데이터 포멧으로 todos 데이터 전달
          res.json(todos);
        } else {
          res.render("index", { todos: todos });
        }
      }
    })
  });

  app.get("/todos/new", function (req, res) {
    res.render("new");
  });

  app.post("/todos", function (req, res) {
    req.body.todo.text = req.sanitize(req.body.todo.text);
    var formData = req.body.todo;
    Todo.create(formData, function (err, newTodo) {
      if (err) {
        res.render("new");
      } else {
        res.redirect("/todos");
      }
    });
  });

  app.get("/todos/:id/edit", function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
      if (err) {
        console.log(err);
        res.redirect("/")
      } else {
        res.render("edit", { todo: todo });
      }
    });
  });

  app.put("/todos/:id", function (req, res) {
    Todo.findByIdAndUpdate(req.params.id, req.body.todo, function (err, todo) {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    });
  });

  app.delete("/todos/:id", function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
      if (err) {
        console.log(err);
      } else {
        todo.remove();
        res.redirect("/todos");
      }
    });
  });

  app.listen(3000, function () {
    console.log('Server running on port 3000');
  });
  ```
</details>

-

### 2. jQuery Library

클라이언트 환경에서 [jQuery](http://jquery.com/), [faker.js](https://github.com/marak/Faker.js/) 호출

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
```

GET - Server에 데이터 요청하기

```js

// jQuery.get() 사용 (jQuery.ajax() 단축 메서드)
// http://api.jquery.com/jQuery.get/

$.ajax({
  url      : '/employees',
  dataType : 'json',
  data     : {},
  success  : function(data) { console.log(data); }
});

// ⬇︎

// 단축 메서드: $.get()
$.get('/employees', function(response) {
  console.log('모든 데이터:', response);
});

// -----------------------------------------------------------------------------------------

// ?속성=값  ➮  조건에 일치하는 데이터 필터링
$.get('/employees', {company: 'Schmidt - Pfeffer'}, function(data) {
  console.log('?속성=값:', data);
});

// ?속성1=값1&속성2=값2  ➮  조건에 모두 일치하는 데이터 필터링
$.get('/employees', {company: 'Schmidt - Pfeffer', name: 'Franco Schuppe'}, function(data) {
  console.log('?속성1=값1&속성2=값2:', data);
});

// ?q=검색어  ➮  검색 매칭되는 데이터 필터링
$.get('/employees', {q: 'uganda'}, function(data) {
  console.log('?q=검색어:', data);
});
```

POST - Server에 새로운 데이터 추가 요청하기

```js
// jQuery.post() 사용 (jQuery.ajax() 단축 메서드)
// http://api.jquery.com/jQuery.post/

$.ajax({
  type: 'POST',
  url: '/employees',
  dataType: 'json',
  data: {},
  success: function(data) { console.log(data); }
});

// ⬇︎

// 새롭게 추가할 데이터 정의
var new_person = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  address: {
    city: faker.address.city(),
    country: faker.address.country()
  },
  company: faker.company.companyName(),
  image: faker.image.avatar(),
  phone: faker.phone.phoneNumber()
};

// POST 메서드를 사용하여 서버에 새롭게 추가할 데이터 전송
// 전송 후, 콜백 함수로 생성된 데이터 확인
$.post('/employees', new_person, function(data, textStatus, jqXHR) {
  console.log(textStatus);
  console.log(jqXHR.status + ' ' + jqXHR.statusText);
  console.log('%c------------------------------', 'color: #3d9a21');
  console.log('생성된 데이터:', data);
  console.log('%c------------------------------', 'color: #3d9a21');
  console.log(jqXHR.getAllResponseHeaders());
});

// $(".test-form") 폼 데이터를 문자화(serialize)하여 서버에 전송
$.post('/employees', $(".test-form").serialize(), function(data) {
  console.log(data);
});
```

PUT - Server에 데이터 수정 요청하기

```js
// jQuery.ajax()
// http://api.jquery.com/jQuery.ajax/

var modified_employee = {
  "name": "yamoo9",
  "email": "yamoo9@naver.com",
  "address": {
    "city": "Seoul",
    "country": "South Korea"
  },
  "company": "Fast Campus",
  "image": "https://goo.gl/mgOnsH",
  "phone": "010-9814-1461"
};

$.ajax({
  type: 'PUT',
  url: '/employees/1',
  data: modified_employee,
  dataType: 'json',
  success: function(data, textStatus, jqXHR) {
    console.log(textStatus);
    console.log('%c------------------------------', 'color: #3d9a21');
    console.log(jqXHR.status + ' ' + jqXHR.statusText + ' ');
    console.log('%c------------------------------', 'color: #3d9a21');
    console.log(jqXHR.getAllResponseHeaders());
    console.log('%c------------------------------', 'color: #3d9a21');
    console.log(data);
  }
});
```

`$.put()` 유틸리티 함수

```js
if (!$.put) {
  $.put = function(url, data, callback) {
    $.ajax({
      url: url,
      type: 'PUT',
      data: data,
      dataType: 'json',
      success: callback
    });
  };
}
```

`$.put()` 유틸리티 함수 사용 방법

```js
$.put('/employees/1', modified_employee, function(){});
```

DELETE - Server에 데이터 삭제 요청하기 Server에 데이터 삭제 요청하기

```js
$.ajax({
  type: 'DELETE',
  url: '/employees/10',
  dataType: 'json',
  success: function(data, textStatus, jqXHR) {
    console.log(textStatus);
    console.log(jqXHR.status + ' ' + jqXHR.statusText);
  }
});
```

`$.delete()` 유틸리티 함수

```js
// $.delete() 유틸리티 함수 작성
if (!$.delete) {
  $.delete = function(url, callback) {
    $.ajax({
      url: url,
      type: 'DELETE',
      dataType: 'json',
      success: callback
    });
  };
}
```

`$.delete()` 유틸리티 함수 사용 방법

```js
$.delete('/employees/10', function(){});
```

`jquery.ajax.extensions.js` 파일 추가

```js
/*! jquery.ajax.extensions.js © yamoo9.net, 2017 */
(function(global, $){
  'use strict';

  if (!$) {
    console.info('jQuery 라이브러리를 로드해야 Ajax 함수를 확장할 수 있습니다.');
    return;
  }

  // $.put() 유틸리티 함수 작성
  if (!$.put) {
    $.put = function(url, data, callback) {
      $.ajax({
        url: url,
        type: 'PUT',
        data: data,
        dataType: 'json',
        success: callback
      });
    };
  }

  // $.delete() 유틸리티 함수 작성
  if (!$.delete) {
    $.delete = function(url, callback) {
      $.ajax({
        url: url,
        type: 'DELETE',
        dataType: 'json',
        success: callback
      });
    };
  }

})(window, window.jQuery);
```

#### [jQuery.ajaxSetup()](http://api.jquery.com/jQuery.ajaxSetup/)

[jQuery Ajax 요청 시, 사용자 정의 헤더 추가하는 방법](http://stackoverflow.com/questions/7686827/how-can-i-add-a-custom-http-header-to-ajax-request-with-js-or-jquery)

```js
// 사용자 정의 헤더(header) 값 설정
$.ajax({
    url: 'foo/bar',
    headers: { 'x-my-custom-header': 'some value' }
});

// 기본 헤더 설정 방법
$.ajaxSetup({
  headers: { 'x-my-custom-header': 'some value' }
});
```

-

### 3. axios Library

[axios](https://github.com/mzabriskie/axios)는 프로미스([Promise API](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise))를 기반으로 하는 Ajax 라이브러리입니다. (Node.js/Browser 환경에서 활용)

#### IE 브라우저 지원

IE 8+ 환경에서 사용할 수 있습니다.

- IE 9, Windows 7
- IE 10, Windows 8
- IE 11, Windows 8.1

#### 설치

Server Side

```sh
$ npm install axios
```

Client Side

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

#### API

[axios-api](https://github.com/mzabriskie/axios#axios-api)

##### [단축 메서드](https://github.com/mzabriskie/axios#request-method-aliases)

- `axios.request(config)`
- `axios.get(url[, config])`
- `axios.delete(url[, config])`
- `axios.head(url[, config])`
- `axios.post(url[, data[, config]])`
- `axios.put(url[, data[, config]])`
- `axios.patch(url[, data[, config]])`

##### [axios 환경 설정](https://github.com/mzabriskie/axios#config-defaults)

```js
axios.defaults.baseURL                         = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// 토큰 입력
// https://api.codecraft.tv/samples/v1/
// https://api.codecraft.tv/samples/v1/:id
axios.defaults.headers.common['Authorization'] = 'Token dab1748ebaceb34ed6796bc3b7dc84741b77af54';
axios.defaults.headers.post['Content-Type']    = 'application/x-www-form-urlencoded';
```

#### 사용 방법

GET - Server에 데이터 요청하기

```js
axios.get('/employees')
     .then(function(response){
        console.log(response);
     })
     .catch(function(error){
        console.log(error);
     });
```

```js
axios.get('/employees')
     // resolve()
     .then(function(response) {
       console.log(response.status + ' ' + response.statusText);
       console.log(response.headers['content-type']);
       console.log('%c------------------------------', 'color: #3d9a21');
       console.log(response.data.length);
       response.data.forEach(function(d) {
         console.log(d.name);
       });
     })
     // reject()
     .catch(function(error) {
       console.error(error.message);
     });
```

```js
// id 매개변수 값으로 데이터 필터링
// '/employees/4' 역시 가능 (json-server에서 허용)
axios.get('http://localhost:3000/employees?id=4')
     .then(function(response) {
       console.log(response.data);
     })
     .catch(function(error) {});

// address.country 매개변수 값으로 데이터 필터링
// params 설정
axios.get('/employees', {
  params: {
    'address.country': 'Botswana'
  }
})
.then(function(response) {
  console.log(response.data);
  console.log('%c------------------------------', 'color: #474cc5');
})
.catch(function(error) {});
```

POST - Server에 새로운 데이터 추가 요청하기

```js
// 새롭게 추가할 데이터 정의
var new_data = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  address: {
    city: faker.address.city(),
    country: faker.address.country()
  },
  company: faker.company.companyName(),
  image: faker.image.avatar(),
  phone: faker.phone.phoneNumber()
};

axios.post('/employees', new_data)
.then(function(response) {
  console.log(response.status + ' ' + response.statusText);
  console.log('POST:', response);
})
.catch(function(error) {});
```

PUT - Server에 데이터 수정 요청하기

```js
// 데이터 수정
var modified_data = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  address: {
    city: faker.address.city(),
    country: faker.address.country()
  },
  company: faker.company.companyName(),
  image: faker.image.avatar(),
  phone: faker.phone.phoneNumber()
};

axios.put('/employees/22', modified_data)
.then(function(response) {
  console.log(response.status + ' ' + response.statusText);
  console.log(response);
  console.log('%c------------------------------', 'color: #fc4a54');
});
```

DELETE - Server에 데이터 삭제 요청하기

```js
axios.delete('/employees/22')
     .then(function(response) {
       console.log(response.status + ' ' + response.statusText);
       console.log(response.data);
       console.log(response.headers);
       console.log(response.config);
     });
```


###### Front-End Develop SCHOOL

# DAY 29

- __Ajax__: Native & jQuery Ajax
- __UI Components__: jQuery Plugin
- __CommonJS vs AMD__: Common JavaScript
- __Webpack__: Module Bundler

## 1. AJAX(에이젝스) 비동기 통신 기술

### 1.1. AJAX란?

AJAX
: Asynchronous  
Javascript  
And  
XML  

새로운 기술이 아닌, 기술 연계를 묶어 사용하는 기술로 Jesse James Garrett에 의해 대중화 되었다.

특징
* 페이지를 새로고침 하지 않고 도 필요한 데이타만 받아와서 내용을 업데이트
* 요청/응답 과정에서 필요한 부분만 부분요청하여 응답 받아 처리 한다.
* XML, TEXT, HTML, JSON 등과 통신해여 처리

장점
* 불필요한 대역푹이 감소하게 되었다.
* 비용을 절감 시켜 주었다.
* 기존 동기 방식 보다 빠르다.
* 사용자 대기 시간이 줄었다.

단점
* 접근성 문제가 있다.
* 검색 최적화 문제도 있다. (비어있다고 나옴)



### 동기 방식
classic web application model(synchronous)

* 요청과 응답 과정에서 지연시간이 있다.
* system processing할때 client 아무것도 하지 못하고 기다려야 한다.
* 매번 전체 데이터를 다 받아와서 느리다.



### 1.2. XHR

XHR 생성자
: XMLHttpRequest  
Ajax 비동기 통신을 위해 XHR 객체를 생성하여 사용

`new XMLHttpRequest`
대소문자 구분 해야함!

-----

#### 실습

로컬호스트를 서버로 사용하는 방법

1. 명령어
`http-server -o -a localhost -p 9090`

2. json파일을 생성
`npm init -y`로 json파일 생성
```
{
  "name": "Ajax",
  "version": "1.0.0",
  "description": "Ajax Study",
  "scripts": {
    "start": "http-server -o -a localhost -p 9090"
  },
  "author": ""
}
```
명령어창에 `npm start`
> 서버로 html파일을 열지 않으면 ajax를 불러올수 없다!


##### 동기 방식
> 사용자 경험이 느려짐으로 사용하지 않기를 권고

```
(function(global, Ajax){
  'use strict';
  var xhr = new XMLHttpRequest;
  xhr.open('GET', 'ajax/data.txt', false);
  xhr.send();
})(this, this.XHLHttpRequest);
```
> .open('전달인자 1', '전달인자2', '전달인자3')
>> 전달인자1. '통신 방법'  
전달인자2. '파일 경로'  
전달인자3. '비동기 설정' 동기: false 비동기: true
> .open에 .send를 함께 써야 실행이 된다.

##### Ajax Chrome의 Console의 기능

* 동기/비동기 방식으로 파일을 성공 적으로 불러오면
  * Network - XHR - Name에서 불러온 파일을 볼수있다.
  * 파일을 누르고 Headers - Status Code가 숫자 200이면 성공적이라는 뜻이다.
  * 파일을 수정하였지만 화면에 변화가 없을 경우: Network - Disable cache를 체크한다.
    * Disable cache로 캐쉬를 저장하지 않게하여 개발중 수정사항을 확인할수 있게 해준다.

##### 리턴 결과 - Status: 200
status
: 100: continue  
101: Switching Protocols
200: OK(성공적으로 불러옴)  
404: Client Error  
5xx: Server Error

```
(function(global, Ajax){
  var xhr = new Ajax();
  xhr.open('GET', './data/data.doc', false);

  // 버튼 클릭 이벤트 핸들링
  var ajax_call_btn         = document.querySelector('.call-ajax-data');
  var ajax_call_data_result = document.querySelector('.ajax-data-result');

  ajax_call_btn.addEventListener('click', callAjaxData);

  function callAjaxData() {
    xhr.send();
    console.log('콜백 Ajax 데이터');
    // 200: success, 404: client error
    console.log('xhr.status:', xhr.status);
    if ( xhr.status === 200 ) {
      console.log('데이터 통신에 성공했습니다. :-)');
    }
  }
})(this, this.XHLHttpRequest);
```

##### 리턴 결과 - ResponseText: "데이터"
받아온 데이터 출력

```
if ( xhr.status === 200 ) {
  console.log('데이터 통신에 성공했습니다. :-)');
  ajax_call_data_result.innerHTML = xhr.responseText;
} else {
  console.error('데이터 통신에 실패했습니다. :-(');
  ajax_call_data_result.innerHTML = '데이터 통신에 실패했습니다. :-(';
  ajax_call_data_result.classList.add('error');
}
```

##### 비동기 방식
false(동기)를 true(비동기)로 바꿔준다.
defalt 값은 비동기 값인 true 이다.
```
(function(global, Ajax){
  var xhr = new Ajax();
  xhr.open('GET', './data/data.txt'); // default value: true

  // 버튼 클릭 이벤트 핸들링
  var ajax_call_btn         = document.querySelector('.call-ajax-data');
  var ajax_call_data_result = document.querySelector('.ajax-data-result');

  xhr.send();

  // 비동기 통신일 경우는 아래 코드가 바로 실행
  console.log('xhr.status:', xhr.status); // 0

  if ( xhr.status === 200 ) {
    console.log('데이터 통신에 성공했습니다. :-)');
    ajax_call_data_result.innerHTML = xhr.responseText;
  } else {
    console.error('데이터 통신에 실패했습니다. :-(');
    ajax_call_data_result.innerHTML = '데이터 통신에 실패했습니다. :-(';
    ajax_call_data_result.classList.add('error');
  }
})(this, this.XHLHttpRequest);
```

##### State
readyState
: 0: Uninitialized  
1: Loading    
2: Loaded 3 : Interactive  
4: Complete  

비동기 통신에서는 상태를 감지하여 콜백 처리하는 이벤트를 실행 방법
* 통신을 받아 Status가 바뀌면 이벤트 1번
* 자료가 로드가 되면서 readsState가 바뀌면서 이벤트 1번
  * 총 두번의 이벤트가 발생
* 마지막에 두개의 상태가 모두 완료되었을 때(200, 4)의 값을 가져옴

```
(function(global, Ajax){
  var xhr = new Ajax();
  xhr.open('GET', './data/data.txt'); // default value: true

  // 버튼 클릭 이벤트 핸들링
  var ajax_call_btn         = document.querySelector('.call-ajax-data');
  var ajax_call_data_result = document.querySelector('.ajax-data-result');

  // 비동기 통신 상태를 감지하여 콜백 처리하는 이벤트 구문
  // 신형 이벤트 모델
  xhr.addEventListener('readystatechange', checkAjaxCommunication);
  // 구형 이벤트 모델
  // xhr.onreadystatechange = checkAjaxCommunication;

  function checkAjaxCommunication() {
    if ( xhr.status === 200 && xhr.readyState === 4 ) {
      console.log('데이터 통신에 성공했습니다. :-)');
      ajax_call_data_result.innerHTML = xhr.responseText;
    } // else 구문은 필요 없다!
  }
})(this, this.XHLHttpRequest);
```

##### Cross Browsing Issue
IE6 이하 버전에서는 XHR 객체를 지원하지 않는다.   
대신 ActiveXObject 객체를 지원한다.


헬퍼 함수를 만들어 크로스 브라우징 이슈를 해결한다.
```
// IE6를 고려한 헬퍼 함수 createXHR
(function(global){
 'use strict';

 var createXHR;

 if ( this.XMLHttpRequest ) {
   // IE 7, Modern Web Browsera
   createXHR = function() {
     return this.XMLHttpRequest();
   };
 }
 else {
   // IE 6
   createXHR = function() {
     return ActiveXObject('Microsoft.XMLHTTP');
   };
 }

 global.createXHR = createXHR;

})(this);
```

### 1.3. 데이터 타입에 따라 불러오는 방법
```
(fucntion(global, Ajax){

'use strict';

  var buttons = document.querySelectorAll('.call-ajax-data');
  var print_el = document.querySelector('.ajax-data-result')

  [].forEach.call(buttons, function(button){
    button.addEventListener('click', AjaxCalling);
  });

  function AjaxCalling() {
    var xhr = new XMLHttpRequest();
    var method = 'GET', url, async = true;
    var data_type = this.classList.item(1);

    switch(data_type) {
      case 'data-txt':
        console.log('data-txt');
        url = './data/data.txt';
      break;
      case 'data-html':
        console.log('data-html');
        url = './data/data.html';
      break;
      case 'data-xml':
        console.log('data-xml');
        url = './data/data.xml';
      break;
      case 'data-json':
        console.log('data-json');
        url = './data/data.json'
      break;
      //default;
    }
    xhr.open(method, url, async);
  xhr.send();
  xhr.addEventListener('readystatechange', printData.bind(xhr, url));
  }

  function printData(url) {
    url = url.split('.');
    var type = url[url.length - 1];
    if(this.status === 200 && this.readyState === 4) {
      switch(type) {
        case 'txt':
          print_el.innerHTML = 'print txt data type';
        break;
        case 'html':
          print_el.innerHTML = 'print html data type';
        break;
        case 'xml':
          print_el.innerHTML = 'print xml data type';
        break;
        case 'json':
          print_el.innerHTML = 'print json data type';
        break;
      }
    }
  }
})(this, this.XLHttpRequest);
```

#### Switch구문 간단히
```
function AjaxCalling() {
  var data_type = this.classList.item(1);
  var xhr = new XMLHttpRequest(),
      method = 'GET',
      url = ('./data/' + data_type).replace(/-/,'.'); // <- 이 한줄로 switch문 대체가능
  xhr.open(method, url);
  // 비동기 통신 요청에 따른 데이터를 받는 상황(이벤트)이 오면 printData() 함수 실행
  xhr.addEventListener('readystatechange', printData.bind(xhr, url));
  xhr.send(); // 서버 데이터 요청
}
```






## 2. Webpack
Webpack
: 모듈 번들러 (module bundler)  
여러개의 모듈에 의존하는 파일들을 번들링을 해준다.  
js, css. less. sass. png. jade 등등 더 많은 종류를 지원해준다.  

### 2.1. Webpack 설치
Webpack 설치  
`(sudo) npm i -D webpack`   
d = 개발용/디렉토리안에 설치  

`(sudo) npm i -g webpack`  
g = 전역 설치  

`webpack 파일 -o 파일 -d`
디버깅(souremap)

`webpack entry.js bundle.js`
번들 파일로 내보내기

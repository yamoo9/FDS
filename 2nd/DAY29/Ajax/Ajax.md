<!-- ###### Ajax -->

<img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Ajax10.jpg" alt="Ajax" width="220" height="143">

-

[Ajax(Asynchronous JavaScript And XML)](https://ko.wikipedia.org/wiki/Ajax)를 활용한 비동기 통신.

> __비동기 통신 非同期 通信__
> 기계가 데이터를 주고받는 통신을 할 때에, 고정된 속도를 갖는 것이 아니고<br>
> 약정된 신호를 기준으로 속도나 시기를 맞추는 통신 방법

-

### Random Data JSON

- [randomuser.me](http://randomuser.me)
- [designskilz.com/random-users](http://www.designskilz.com/random-users/)
- [mockaroo.com](http://mockaroo.com/)
- [randomapi.com](https://randomapi.com/)

<!-- ### Google Maps API -->
<!-- http://maps.googleapis.com/maps/api/geocode/json?address=seoul&sensor=false -->

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
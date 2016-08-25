###### front-end develop school

# day 41

##Ajax

 - 현대 웹에서 비동기 통신은 필수 사항이 되고 있다.
 - 전통적인 웹은 요청사항이 생기면 화면전환(깜빡임)이 생기지만 Ajax 통신을 이용하면 부분 제어가 가능하다
 - 쾌적한 UX를 제공해 줄수 있다.

###XMLHttpRequest

 - Ajax 통신을 위한 실제 JS 객체

```html
<button type="button" class="call-ajax-data-btn">View Update</button>
<div class="ajax-result">
	Loading...
</div>
```
```css
.ajax-result {
	box-sizing: border-box;
	margin-top: 3rem;
	border: 3px solid crrentColor;
	padding: 1rem;
	color: #704bdb;
}
.call-ajax-data-btn:hover{
	background: #868686;
}
.call-ajax-data-btn:active{
	position: relative;
	top: 2px;
}
.call-ajax-data-btn {
	cursor: pointer;
	padding: 1rem;
	border: none;
	color: #1d1d1d;

}
```
```javascript
(function(global, XHR){
	'use strict';

	var result_view = document.querySelector('.ajax-result');
	var call_ajax_btn = document.querySelector('.call-ajax-data-btn');

	function updateViewPlace(){
		result_view.textContent = xhr.response;
	}

	function createXHR(){
		return new XHR();
	}

	// XMLHttpRequest 생성자 함수를 통해 비동기 통신을 수행할 객체 생성
	var xhr = new XHR();

	// 뜯어봅시다
	console.log(xhr);
	console.dir(XHR.prototype); // xhr.__proto__와 동일 (비표준)

	var xhr1 = createXHR();
	var xhr2 = createXHR();

	// Step 2 - OPEN
	xhr.open('GET', 'data/data.txt', false) // false => 동기 통신

	// Step 3 - SEND
	xhr.send()

	// 통신상태 확인
	if (xhr.status >= 200 && xhr.status < 300){
		result_view.textContent = xhr.response
	} else {
		result_view.textContent = '데이터 로드에 실패 했습니다...';
	}

	/*
	이벤트 등록
	 */
	call_ajax_btn.onclick = updateViewPlace;
	xhr.open('GET', 'data/data.txt'); // 세번째 인자를 넣지 않거나 true를 넣으면 비동기 통신

	function updateViewPlace(){
		xhr.send()
		// 동기 통신(세번쨰 인자 false)은 성공하지만 비동기 통신을 실패할 것이다.
		// 비동기 통신을 통해 비동기 데이터가 로드된 시점에 아래 조건문이 실행되어야 하지만
		// 로드되기전에 if문으로 들어간다. 그렇다면 데이터를 받아오는 과정의 이벤트를 감지해야하는데
		// 그 이벤트란 바로 readystatechange 이다
		if (xhr.status === 200 && xhr.readyState === 4){
			result_view.textContent = xhr.response;
		} else {
			result_view.textContent = '데이터 로드에 실패 했습니다...';
		}
	}

	// 비동기 통신 객체에 이벤트 핸들러 바인딩
	xhr.onreadystatechange = function(){
		if (this.status === 200 && this.readyState === 4){
			result_view.textContent = xhr.response;
		} else {
			result_view.textContent = '데이터 로드에 실패 했습니다...';
		}
	}
	function updateViewPlace(){
		xhr.send()
	}
})(this, this.XMLHttpRequest)
```

 - 슬프게도 IE 때문에 크로스 브라우징 이슈가 존재한다

```javascript
var createXHR = (function(){
	XHR = XHR || ActiveXObject('Microsoft.XMLHTTP');
	return function () {
		return new XHR();
	}
})();
```

-

###SPA

```javascript
(function(global, XHR){
	'use strict';

	var xhr = new XHR;

	// 통신 상태 관찰
	xhr.onreadystatechange = function(){
		if (this.status === 200 && this.readystate === 4) {
			view.innerHTML = this.responseText;
		}
	}

	var view = document.querySelector('main');
	var nav_links = document.querySelectorAll('nav a');
	var views = 'home about works contact'.split(' ');

	/*
	 객체.속성 방식
	 */
	for (var link, i = nav_links.length - 1; nav_links[i]; i--) {
		link = nav_links[i];
		link.idx = i;
		link.onclick = viewUpdate;
	}

	function viewUpdate (){
		// 클릭한 a 요소의 인덱스를 통해 데이터를 가져와야 한다
		var index = this.idx
		var page = 'view/' + views[index] + '.html'
		xhr.open('GET', page)
		return false
	}

	/*
	 클로저 방식
	 */
	for (var link, i = nav_links.length - 1; nav_links[i]; i--) {
		link.onclick = (function(index){
			viewUpdate(index);
		})(i);
	}

	function viewUpdate (index){
		// 클릭한 a 요소의 인덱스를 통해 데이터를 가져와야 한다
		var page = 'view/' + view[index] + '.html'
		xhr.open('GET', page)
		xhr.send()

		global.location.hash = page;
		return false
	}

	link.onclick();

})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'))
```

-

###JSON 객체

- JS의 객체 형태, 다루기 용이하다
- `{ key: value, key2: value2 ... key3: [ {key_01: value_01}, {key_02: value_02} ... ]}`
- 데이터의 구조는 서비스마다 다르며, 백엔드 개발자와 협의를 하여 정한다
- `JSON`객체의 `parse()`,`stringify()` 메서드를 이용해 조작한다

```javascript
xhr.open('GET', 'please/input/api/address')

xhr.onreadystatechange = function(){
	if (this.status === 200 && this.readystate === 4) {
		var data = JSON.parse(this.response);
		// 데이터의 구조에 따라 처리 방식이 달라짐
	}
}
```

-

##jQuery Ajax

- jQuery는 ajax 통신에서도 훌륭한 API를 제공해 준다
 - `$.ajax()`
 - `$.get()`
 - `$.post()`
 - `$.getJSON()`
 - `$.getScript()`

```javascript
(function(global, $){
	'use strict';

	var json = $.getJSON('please/input/api/address');

	// JS Promise 개념 사용, ES6 기본 지원
	json.then(function(data, status, XHR){
		console.log(data.result);
	})

	// 위와 동일한 작업
	$.ajax({
		'url': 'please/input/api/address',
		'dataType': 'json',
		'success': function(data){
			console.log(data.result);
		}
	});
})(this, this.jQuery)
```
###### front-end develop school

# DAY 42

##HTML5 Storage

```javascript
(function(global, storage, $){
	'use strict';

	// 루트 요소인 <html>을 참조하는 jQuery 객체 생성
	var $html = $('html');

	// 사용자 브라우저가 localStorage를 지원하는가?
	if (storage) {
		$html.addClass('localStorage');
	} else {
		$html.addClass('no-localStorage');
	}

	// 데이터 가져오기
	var FDS = storage.getItem('FDS');

	if (!FDS){
		storage.setItem('FDS', 'Front-End Develop SCHOOL')
	}

	// 변경 가능
	storage.setItem('FDS', '프론트 엔드 디벨롭 스쿨')

	// 삭제
	storage.removeItem('FDS')

	// 모두 삭제
	storage.clear()

	var hoon = {
		'name': 'jihoon',
		'job': 'developer',
		'age': 23,
		'gender': 'male',
		'email': 'hoon@gmail.com',
		'favorites': ['car', 'travel', 'study']
	}
	// 객체를 문자화
	hoon = JSON.stringify(hoon)

	storage.setItem('hoon', hoon) // [object Object] 라는 문자열로 저장됨

	// 다시 객체화
	JSON.parse( storage.getItem('hoon'));

})(this, this.localStorage, this.jQuery)
```

-

###Custom Storage

> 설계하기 나름입니다.

```javascript
(function(global, $){
	'use strict';

	$.store = {
		'support': (function(){
			var JSON = !!global.JSON;
			var localStorage = !!global.localStorage;
			return function(feature){
				if (!feature){
					return {
						'json': global.JSON,
						'localstorage': global.localStorage
					}
				}
				feature = feature.toLowerCase();
				if (feature === 'json') {return json;}
				if (feature === 'localStorage') {return localStorage;}
			}
		})(),
		'get': function(key){
			if ( !key || $.type(key) !== 'string'){ throw new Error('키값은 문자열을 전달해야 합니다')}
			if (this.support('json') && this.support('localstorage')) {
				return global.JSON.parse(global.localStorage.getItem(key));
			} else {
				console.info('최신 브라우저로 업그레이드 해주세요');
			}
		},
		'set': function(key, value){
			if ( !key || $.type(key) !== 'string'){ throw new Error('키값은 문자열을 전달해야 합니다')}
			if (this.support('json') && this.support('localstorage')) {
				return global.JSON.parse(global.localStorage.setItem(key, global.JSON.stringify(value));
			} else {
				console.info('최신 브라우저로 업그레이드 해주세요');
			}
		},
		'del': function(key){
			global.localStorage.removeItem(key);
		},
		'clear': function(){
			global.localStorage.clear();
		}
	}
})(this, (this.jQuery)
```
-

##Angular JS

```html
<!-- 반드시 html 요소에 걸지 않고, 원하는 요소에만 붙여도 된다 -->
<html data-ng-app>
.
.
.
<body data-ng-init="application_name='First NG'">
<!-- <h1>{{application_name}}</h1> 표현식 아래와 동일-->
<h1 data-ng-bind="application_name"></h1>
<input type="text" data-ng-model="application_name">
```

- 같은 기능을 jQuery로 쓴다면

```html
<input type="text" id="twb">
<p id="twb -binding"></p>
```
```javascript
function init($){
	var $twb = $('#twb'), $twb_binding = $('#twb-binding');

	$twb.on('keyup', function(evt){
		$twb_binding.text( evt.target.value );
	});
}

jQuery.noConflict(true)(init);
// 아래와 동일한 코드
// => jQuery(document).ready(init);
```

> 구조 정의는 공식문서 혹은 키노트 파일 참조!
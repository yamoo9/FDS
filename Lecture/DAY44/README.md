###### Front-End Develop SCHOOL

# DAY 44

##Angular JS

> _ver 1.2.x ( IE 8 호환 )_

```html
<body data-ng-app>
	<div class="ng-template" data-ng-controller="moduleController">
	<!-- <div class="ng-template" data-ng-controller="moduleController as mCtrl"> as 문법 : 근래에는 많이 쓰이지 않는다. 1.2.x 버전 까지만 지원-->
		<h1 class="ng-template-headline">
			{{ this.content }}
		</h1>
		<button
			data-ng-click="this.setContent()"
			type="button"
			class="fire-set-content-btn">FIRE!!</button>
	</div>
</body>
```
```javascript
(function(global, ng, jq){
	'use strict';

	// $scope 객체(중재자 역할, View - Controller 사이의 접착제)
	global.moduleController = function($scope){
		console.log(this);
		console.log($scope);
		console.log(ng.element);

		// 구버전 ng.element에서는 css 선택자를 사용하지 못한다.
		var template_headline = document.querySelector('.template_headline');
		template_headline = ng.element(template_headline);
		// template_headline = jq('.template_headline');

		// 미약하게 나마 jQuery 같은 기능 제공
		template_headline.addClass('test');
		template_headline.text('this is jqLite'); // setter
		var template_headline_text = template_headline.text(); // getter

		// $scope.content = template_headline_text;
		$scope.content = '';
		this.content = '';

		$scope.setContent = function(){
			$scope.content = template_headline_text;
			// this.content = template_headline_text; 동일
		}
	}
})(this, this.angular, this.jQuery);
```

---

> _ver 1.3.x 이상_

```html
<!-- 모듈 이름을 정해야 한다 -->
<body data-ng-app="ngApp">
	<div class="ng-template" data-ng-controller="moduleController">
		<h1 class="ng-template-headline">
			{{ this.content }}
		</h1>
		<button
			data-ng-click="this.setContent()"
			type="button"
			class="fire-set-content-btn">FIRE!!</button>
	</div>
	<div class="demo-temp" data-ng-controller="demoCtrl as dc">
		<h3>{{dc.headline}}</h3>
	</div>
	<section class="other-control" data-ng-controller="otherCtrl">
		<article>
			<h3 title="{{init_value}}">{{init_value}}</h3>
		</article>
	</section>
	<section
		class="control-bit"
		data-ng-controller="tCtrl as tc">
		<article
			data-ng-click="tc.trigger()">
			<h3 title="{{tc.init_value}}">{{tc.init_value ? tc.init_value ? '트리거 작동됨..' : '트리거 미작동..'}}</h3>
		</article>
	</section>
</body>
```
```javascript
(function(global, ng, jq){
	'use strict';

	// 모듈 정의
	var setNgApp = ng.module('ngApp', []);
	// 정의된 모듈  가져올 때
	var app = ng.module('ngApp');

	var content_text = 'Awesome Angular JS'

	// angular 모듈 객체의 controller() 메소드를 사용하여 컨트롤러 정의
	setNgApp.controller('ngController', function($scope){
		$scope.content = '';
		$scope.setContent = function(){
			this.content = content_text
		}

		var ngTHeadline = jq('.ng-template-headline');
		content_text = content_text.split(' ').slice(-1).toString().toLowerCase().replace('/!!/', '')
		ngTHeadline.text( content_text );
	})

	setNgApp.controller('demoCtrl', function($scope){
		var headline = 'this App maked ng';

		$scope.headline = headline;
	})

	ng.module('ngApp').controller('otherCtrl', function($scope){
		$scope.init_value = null;
		// $scope.init_value = '';
		if ( jq.type($scope.init_value) === 'null' ){
			$scope.init_value = 'otherController';
		} else {
			$scope.init_value = 'not Initialization';
		}
	});

	setNgApp.controller('tCtrl', function(){
		var that = this;
		that.init_value = null;
		function trigger() {
			if ( jq.type(that.init_value) === 'null' ){
				that.init_value = 'third Controller';
			} else {
				that.init_value = 'not Initialization';
			}
		}
		that.trigger = trigger
	})
})(this, this.angular, this.jQuery);
```

-

###모듈별 로드하기

```javascript
// app.js
(function(global, ng, jq){
	'use strict';

	ngApp = ng.module('ngApp', []);

})(this, this.angular, this.jQuery);
```
```javascript
// modules/controllers/ngController.js
(function(global, ng, jq){
	'use strict';

	var content_text = 'Awesome Angular JS'

	function ngCtrl($scope){
		$scope.content = '';
		$scope.setContent = function(){
			this.content = content_text
		}

		var ngTHeadline = jq('.ng-template-headline');
		content_text = content_text.split(' ').slice(-1).toString().toLowerCase().replace('/!!/', '')
		ngTHeadline.text( content_text );
	}

	ng.module('ngApp').controller('ngController', ngCtrl );
})(this, this.angular, this.jQuery);
```
```javascript
// modules/controllers/demoController.js
(function(global, ng, jq){
	'use strict';

	function demoCtrl($scope){
		var headline = 'this App maked ng';

		$scope.headline = headline;
	}

	ng.module('ngApp').controller('demoCtrl', demoCtrl );
})(this, this.angular, this.jQuery);
```
```javascript
// modules/controllers/otherController.js

(function(global, ng, jq){
	'use strict';

	function otherCtrl(){
		var that = this;
		that.init_value = null;
		function trigger() {
			if ( jq.type(that.init_value) === 'null' ){
				that.init_value = 'third Controller';
			} else {
				that.init_value = 'not Initialization';
			}
		}
		that.trigger = trigger
	}
	ng.module('ngApp').controller('otherCtrl', otherCtrl);
})(this, this.angular, this.jQuery);
```

-

###코드 압축시 $scope 손실 보호

```javascript
(function(global, ng, jq){
	'use strict';

	function oCtr(){
		var that = this;
		that.init_value = null;
		function trigger() {
			if ( jq.type(that.init_value) === 'null' ){
				that.init_value = 'third Controller';
			} else {
				that.init_value = 'not Initialization';
			}
		}
		that.trigger = trigger
	}

	// 방법.1
	oCtrl.$inject = ['$scope'];
	ng.module('ngApp').controller('otherCtrl', oCtrl );

	// 방법.2
	ng.module('ngApp').controller('otherCtrl', ['$scope', oCtrl]);
})(this, this.angular, this.jQuery);
```

-

###탭 컴포넌트 만들기

```html
<body data-ng-app="ngApp">
	<div role="application" class="tab-menu" data-ng-controller="tabController">
		<div class="tab-control" role="tablist">
			<button
				data-ng-click="selectTab(0)"
				data-ng-class="{active:isSelectedTab(0)}"
				type="button" role="tab" class="tab-handle">shoes</button>
			<button
				data-ng-click="selectTab(1)"
				data-ng-class="{active:isSelectedTab(1)}"
				type="button" role="tab" class="tab-handle">bag</button>
			<button
				data-ng-click="selectTab(2)"
				data-ng-class="{active:isSelectedTab(2)}"
				type="button" role="tab" class="tab-handle">hat</button>
		</div>
		<div
			data-ng-class="{active:isSelectedTab(0)}"
			role="tabpanel" class="tab-content">
			<h2>Shoes</h2>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		<div
			data-ng-class="{active:isSelectedTab(1)}"
			role="tabpanel" class="tab-content">
			<h2>Bag</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
		</div>
		<div
			data-ng-class="{active:isSelectedTab(2)}"
			role="tabpanel" class="tab-content">
			<h2>Hat</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		</div>
	</div>
</body>
```
```javascirpt
var app = angular.module('ngApp');

function getRandomCount(els) {
	if (!els.length || els.length === 0) return;
	return Math.floor(Math.random() * $tabmenu_btns.length)
}
app.controller('tabController', ['$scope', function($scope){
	var $tabmenu = $('.tab-menu');
	var $tabmenu_btns = $tabmenu.find('button');
	var random = getRandomCount($tabmenu_btns)

	// 초기 활성화된 탭
	$scope.selected_tab = getRandomCount($tabmenu_btns);
	$scope.setRandomCount = function(){
		this.selected_tab = getRandomCount($tabmenu_btns);
	};

	$scope.selected_tab_idx = 0;
	$scope.isSelectedTab = function(tab_idx){
		return this.selected_tab_idx === tab_idx;
	}
	// 탭을 사용자가 클릭할 경우, 탭의 인덱스를 사용자가 선택한 탭의 인덱스로 변경
	$scope.selectTab = function(idx){
		this.selected_tab_idx = idx;
	}
}
])
```
```css
.tab-menu .active {
	background: yellow;
}

.tab-menu .tab-content {
	display: none;
}

.tab-menu .tab-content.active {
	display: block;
}
```

-

##Angular JS (1.5.8)

```html
<body data-ng-app="fdsApp">
	<div class="fds-members" data-ng-controller="fdsMemberListController as fdsCtrl">
		<ul class="memeber-list">
			<li data-ng-repeat="{index, member} in fdsCtrl.members">
				{{ index }}
				<li>
					{{ member.name }}
				</li>
				}
			</li>
		</ul>
	</div>
</body>
```
```javascript
(function(global, ng){
	'use strict';

	ng.module('fdsApp', []);

	app.controller('fdsMemberListController', [$http', functions($scope, $http){

	}]);

	var ctrl = this;
	ctrl.members = [];

	function fdsMemberListController($http){
		$http({
			'method': 'GET',
			'url': 'path/to/api/url'
		}).then(successAjax, errorAjax);

		function successAjax(response){
			ctrl.members.push(response.data)
		}
		function errorAjax(response){
			// do something...
		}
	}
	fdsMemberListController.$inject = ['$scope', '$http'];
})(this, this.angular);
```
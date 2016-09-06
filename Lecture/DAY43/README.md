###### Front-End Develop SCHOOL

# DAY 43

##Angular JS

```html
<html data-ng-app>

<!-- ... -->

<style>
	.color-place-view {
		width: 100vw;
		height: 500px;
	}
</style>

<!-- ... -->

<!-- 마치 변수 선언과 같다 -->
<body data-ng-init="
	my_color = '#fc434b';
	show = false;
	colors = {
		'pink': '#f97df1',
		'sky': '#3399ff',
		'emerald': '#b0ffcc',
		'blue': '#000f97',
		'gray': '#ccc'
	};
	view_color = colors.pink;
	my_style = {
		'background': view_color,
		'width': '500px',
		'height': '500px'
	};
">
<h2>{{my_color}}, {{is_hidden}}</h2>

<button
	type="button"
	class="toggle-palette-btn"
	data-ng-click="show = !show">
	<span data-ng-show="show">팔레트 감추기</span>
	<span data-ng-hide="show">팔레트 보이기</span>
</button>
<!-- span이 두개 들어가는게 비효율적으로 보인다 -->
<button
	type="button"
	class="toggle-palette-btn"
	data-ng-click="show = !show">
	팔레트 <span data-ng-bind="show ? '감추기' : '보이기'"></span>
</button>

<!-- 제어에 따른 뷰 -->
<div class="color-palette" data-ng-show="show">
	<label><input type="radio" value="{{ colors.pink }}" data-ng-model="view_color">pink</label>
	<label><input type="radio" value="{{ colors.sky }}" data-ng-model="view_color">sky</label>
	<label><input type="radio" value="{{ colors.emerald }}" data-ng-model="view_color">emerald</label>
	<label><input type="radio" value="{{ colors.blue }}" data-ng-model="view_color">blue</label>
	<label><input type="radio" value="{{ colors.gray }}" data-ng-model="view_color">gray</label>
</div>

<div class="color-place-view" style="background: {{ view_color }}">
	{{view_color}}
</div>
```

-

###ng-repeat / Filter

```html
<body data-ng-init="
	people = [
		{
			'name': 'Simon',
			'age': 21,
			'birth': 1995-01-18,
			'mail': 'simon@fast.com',
			'has-money': 2938000,
			'profile_img': {
				'src': ' ... ',
				'width': '200',
				'height': '200'
			}
		},
		{
			'name': 'Tom',
			'age': 27,
			'birth': 1990-05-05,
			'mail': 'tommy@campus.net',
			'has-money': 10000000,
			'profile_img': {
				'src': ' ... ',
				'width': '200',
				'height': '200'
			}
		},
		{
			'name': 'sunny',
			'age': 25,
			'birth': 1992-08-21,
			'mail': 'sun123@naver.com',
			'has-money': 7490000,
			'profile_img': {
				'src': ' ... ',
				'width': '200',
				'height': '200'
			}
		}
	];
	name_r = false;
	mail_r = false;
	sort = 'name';
	order_reverse= false;
	limit_count = people.length;
">
<button data-ng-click="order_reverse = !order_reverse">나이순 정렬</button>

<p>
<label for="person_name">Name: </label>
<input id="person_name" type="search" data-ng-model="search.name">
</p>
<p>
<label for="person_age">Age: </label>
<input id="person_age" type="search" data-ng-model="search.age">
</p>
<p>
<label for="result_count">Limit: </label>
<input id="result_count" type="search" data-ng-model="limit_count">
</p>

<label><input name="sorting" type="radio" data-ng-click="order_reverse=false">오름차순(나이)</label>
<label><input name="sorting" type="radio" data-ng-click="order_reverse=true">내림차순(나이)</label>


<ul>
	<!-- age로 정렬 -->
	<li data-ng-repeat="person in people | filter: search | limitTo: limit_count | orderBy: 'age': order_reverse">
	<!-- 역순 -->
	<!-- <li data-ng-repeat="person in people | orderBy: 'age':true"> -->
		<div>{{ person.name | uppercase }}</div>
		<div>{{ person.age }}</div>
		<div>{{ person.mail }}</div>
		<!-- <div data-ng-bind="person['has-money'] | currency: '€ '"></div> -->
		<!-- <div data-ng-bind="person['has-money'] | number: 0 + '원'></div> -->
		<!-- 오류 발생!! expression을 사용해야 한다 -->
		<div>{{ person['has-money'] | number: 0 }} 원</div>
		<div data-ng-bind="person.birth | date: 'yyyy년 MM월 dd일'"></div>
		<div>
			<img
				data-ng-src="{{ person.profile_img.src }}"
				alt="{{ person.name }}"
				width="{{ person.profile_img.width }}"
				height="{{ person.profile_img.height }}">
		</div>
	</li>
</ul>
```
```html
<!-- 테이블로 정렬 -->
<table>
	<caption>프로필</caption>
	<tr>
		<th>이름
			<button
				type="button"
				class="toggle-order-by-name-button"
				data-ng-click="name_r = !name_r; sort = sort === 'name' ? '-name' :'name';">
			</button>
		</th>
		<th>
			메일
			<button
				type="button"
				class="toggle-order-by-mail-button"
				data-ng-click="mailj_r = !mailj_r; mail = mail === 'mail' ? '-mail' :'mail';">
			</button>
		</th>
	</tr>
	<tr data-ng-repeat="person in people | orderBy:sort">
		<td>{{ person.name | uppercase }}</td>
		<td>{{ person.mail }}</td>
	</tr>
</table>
```

-

### Controller / Scope

- 1.2 이하 하위버전의 컨트롤러 사용법

```html
<table data-ng-controller="tableController">
	{{ this.people | json }}
</table>
```
```javascript
(function(global, ng){
	'use strict';

	function talbeController( $scope ){
		var people = [
			{
				'name': 'simon',
				'age': 21,
				'birth': '1995-01-18',
				'mail': 'dkfjdlkf@fast.com',
				'money': 2938000
			},
			{
				'name': 'atom',
				'age': 33,
				'birth': '1984-12-12',
				'mail': 'amazon@fast.com',
				'money': 99998000
			},
			{
				'name': 'Tom',
				'age': 27,
				'birth': '1990-05-05',
				'mail': 'tommy@campus.net',
				'money': 10000000
			},
			{
				'name': 'sunny',
				'age': 25,
				'birth': '1992-08-21',
				'mail': 'sun123@naver.com',
				'money': 7490000
			},
			{
				'name': 'baron',
				'age': 45,
				'birth': '1971-10-26',
				'mail': 'zindex@naver.com',
				'money': 1117490000
			}
		];

		var ordermap = {
			'sort'     : null,
			'name'     : true,
			'age'      : true,
			'mail'     : true,
			'birthday' : true
		};

		function changeOrder(prop){
			$scope.ordermap[prop] = !$scope.ordermap[prop];
			$scope.ordermap.sort = $scope.ordermap.sort === prop  '-'+ prop : prop;
		}

		// $scope 객체를 통해 뷰가 해당 속성에 접근 가능
		$scope.people = people;
		$scope.ordermap = ordermap;
		$scope.changeOrder = changeOrder;
	}
	global.tableController = talbeController;
})(this, this.angular);
```
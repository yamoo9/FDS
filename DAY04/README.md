###### Front-End Develop SCHOOL

# DAY 04

### 진행 내용

- [디자이너 관점에서 살펴 본 웹 디자인의 역사](a-brief-history-of-web-design-for-designer.md)
- [웹 환경에 대하여](about-web-environment.md)
- [도전 워드프레스 블로그 만들기 (만화)](http://www.digitallife-lab.com/#!webtoon-wordpress/mkorq)
- HTML 폼 디자인
- HTML 스크립트, 오브젝트
- HTML 기타
- HTML5 표준
- PSD 디자인 시안에서 구조 뽑아내기

-

###HTML 폼 디자인

```html
<form action="/register.php" method="GET" name="register_form" enctype="multipart/form-data">
	<!-- fieldset과 legend로 form field를 구분할 수 있다 -->
	<fieldset>
		<legend>필수 입력사항</legend>
		<div>
			<!-- 암묵적 방식에서 for와 id 맵핑은 필요 없다. -->
			<label>ID: <input type="text" name="register_id"></label>
		</div>
		<div>
			<!-- placeholder 속성으로 안내를 해줄 수 있다 -->
			<label for="register_password" placeholder="Input your ID">PASSWORD</label>
			<input id="register_password" type="password" name="register_password">
		</div>
	</fieldset>
	<div>
		<label for="register_user_gender">gender</label>
		<!-- name값이 같으면 하나의 그룹으로 묶이고, 단일 체크가 가능해진다 -->
		<!-- 아래의 경우, 암묵적 label 방식이 더 유용하다. id할당 문제로부터 자유로워진다 -->
		<label><input type="radio" value="1" name="register_user_gender">Male</label>
		<label><input type="radio" value="2" name="register_user_gender">Female</label>
	</div>
	<div>
		<label for="register_upload">File</label>
		<!-- multipart 속성으로 여러 파일을 전송할 수 있다 -->
		<input multiple type="file" id="register_upload" name="register_upload">
	</div>
	<div>
		<h3>hobby</h3>
		<ul>
			<!-- GET방식으로 요청을 하면 주소창에서 쿼리부분(물음표 뒤)에 {name}={value} 형식으로 쿼리 요청하는 모습을 볼수있다. -->
			<!-- checked를 입력해 놓으면 기본으로 체크되어 있다 -->
			<li><label><input type="checkbox" value="book" name="register_hobby" checked>독서</label></li>
			<!-- disabled를 사용하여 사용하지 못하게 할 수도 있다 -->
			<li><label><input type="checkbox" value="movie" name="register_hobby" disabled>영화관람</label></li>
			<li><label><input type="checkbox" value="sports" name="register_hobby">스포츠</label></li>
		</ul>
	</div>
	<textarea></textarea>
	<!-- 사용자가 수정할 수 있다 -->
	<p contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, blanditiis!</p>
	<div>
		<h3>Your Job</h3>
		<select name="register-job">
			<option value="">Select your job</option>
			<!-- checked 처럼 selected 속성을 사용할 수 있다 -->
			<option value="teacher" selected>Teacher</option>
			<option value="student">Student</option>
			<option value="Doctor">Doctor</option>
			<optgroup label="-WEB-">
				<option value="Doctor">Designer</option>
				<option value="Doctor">Developer</option>
				<option value="Doctor">DevOps</option>
			</optgroup>
		</select>
	</div>
	<!-- value값이 버튼 내부에 표현된다 -->
	<input type="submit" value="제출 버튼">
	<button type="reset">초기화</button>
</form>
```

-

###HTML 스크립트, 오브젝트

`<script>`요소는 문서 내에서 `<head>`,`<body>` 요소 어느곳에서든 사용할 수 있다.
```html
<script>
	document.title = '동적으로 런타임 중에 문서의 제목을 변경';
	// 사용자에게 정보를 요구한다
	window.prompt('네 정체는 무엇이냐?', '사람');
	// 사용자에게 정보를 보여준다
	window.alert('안녕하세요');
	// 문서에 입력한다.
	document.write('<h1>This is JavaScript</h1>');
	// 온오프라인 감지
	document.write('현재 사용자는 온라인 입니까? ', window.navigator.onLine ? '네, 온라인 입니다': '아니오, 오프라인입니다');
</script>
```

> 하지만 HTML파일에 스크립트를 직접 입력하는 것은 좋지 않다. 

```html
<script src="js/jsfile.js"></script>
```
이처럼 JS파일을 분리하여 사용해야 한다.

```html
<!-- 자바스크립트가 지원되지 않는 환경에서는 아래 문구가 보인다 -->
<noscript>
	<p>자바스크립트가 지원되지 않는 환경입니다.</p>
</noscript>
<!-- 오늘날에는 거의 쓰이지 않는다. 이후 Modiernizr 라이브러리를 사용하여 대체한다 -->
```

-

### 참고/기타

- [이메일 클라이언트 CSS 지원 가이드](http://cafe.naver.com/webstandardproject.cafe?iframe_url=/ArticleRead.nhn%3Fclubid=18695505%26page=1%26inCafeSearch=true%26searchBy=1%26query=%C0%CC%B8%DE%C0%CF%26includeAll=%26exclude=%26include=%26exact=%26searchdate=all%26media=0%26sortBy=date%26articleid=451%26referrerAllArticles=true)
- [처음 시작하는 이들을 위한 이메일 디자인 베스트 예제 & 리소스 20](http://cafe.naver.com/webstandardproject.cafe?iframe_url=/ArticleRead.nhn%3Fclubid=18695505%26page=1%26inCafeSearch=true%26searchBy=1%26query=%C0%CC%B8%DE%C0%CF%26includeAll=%26exclude=%26include=%26exact=%26searchdate=all%26media=0%26sortBy=date%26articleid=345%26referrerAllArticles=true)
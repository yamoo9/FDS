###### Front-End Develop SCHOOL

#DAY 40

###jQuery Traversing

```html
<nav class="gnb">
<h2>Global Navigation</h2>
<ul>
	<li class="first"><a href="#">link content 1</a></li>
	<li><a href="#">link content 2</a></li>
	<li><a href="#">link content 3</a></li>
	<li><a href="#">link content 4</a></li>
	<li class="last_2nd"><a href="#">link content 5</a></li>
	<li class="last"><a href="#">link content 6</a></li>
</ul>
<ol>
	<li><a href="#">ol list item</a></li>
	<li><a href="#">ol list item</a></li>
	<li><a href="#">ol list item</a></li>
</ol>
</nav>
```
```css
.have-not-class-attribute {
	text-decoration: overline underline;
	background: #ededed;
}
```
```javascript
(function(global, $){
	'use strict';

	var $gnb = $('.gnb');
	var $gnb_list = $gnb.find('li')

	// .eq( integer ), 음수값으로 역탐색 가능
	var $gnb_list_1st = $gnb_list.eq(0)
	var $gnb_list_2nd = $gnb_list.eq(1)
	var $gnb_list_last = $gnb_list.eq(-1)
	var $gnb_list_last_2nd = $gnb_list.eq(-2)

	// .not( selector | element | function )
	$gnb_list.not('[class]').addClass('have-not-class-attribute')

	$gnb_list.not(function(index, element){
		// 홀수를 제외한 짝수 <li> 필터링
		return index % 2 === 0
	}).addClass('odd');

	// 위 기능과 동일
	$gnb_list.not(':even').addClass('odd')
	$gnb_list.not(':last').addClass('last_list_item')

	// eq(), not() 내부적으로 filter() 사용
	$gnb_list
		.add('nav, a')
		.addClass('navigation-component')
		.filter(function(index, element){
			var node_name = element.nodeName.toLowerCase()
			return node_name === 'a' || node_name === 'nav'
		}).
		css({
			'display': 'inline-block',
			'padding': '1em'
		});

	// is()
	if($('p').is(':has(span)')){
		$(this).addClass('ellipsis');
	}

	// each()
	$('li').each(function(idx){
		//$(this).html(idx + ':' + $(this).html());
		this.innerHTML = idx + ':' + this.innerHTML
	});

	// slice(), jQuery 객체를 돌려줌
	$('li').slice(2) // 세 번째 부터 끝까지
	$('li').slice(2,5) // 세 번째 부터 다섯 번째 까지 [ 4개가 아닌 3개 수집 ]

	// Filter() VS Find()
	$('li').filter(':last') // 마지막 li
	$('li').find(':last') // li 내부의 마지막 요소

	// next()
	var $gnb_first = $gnb.first();
	$gnb_first.next(); // ul
	$gnb_first.next().children(':last').prevAll('.first');
	// $gnb_first.next().children(':last').prev('.first'); // 찾지 못함
	$gnb_first.next().children(':last').prevAll('.first').parents('.gnb');

	// content()
	$('.gnb').contents(); // 모든 노드 수집
	$('.gnb').contents().filter(function(idx, node){
			return node.nodeType === 3;
	});  // [ #text, #text, #text ... ]

	// closest(), 인자로 절달된 값을 통해 일치하는 요소중 가까운 요소를 반환
	$(this).closet('li').toggleClass('hilight');

	// add()
	$gnb.find('p').addClass('this-is-paragraph').add('li', '.ol')
	// 새로운 요소 생성
	$gnb
		.find('li:first-child a').clone()
		.add('<span>after link element</span>')
		.appendTo('li:first-child', $gnb);

	// andBack()
	$('li:gt(3)', '.gnb').add('li:eq(1)').find('a').addBack();
	// 하나만 선택할 수도 있다
	$('li:gt(3)', '.gnb').add('li:eq(1)').find('a').addBack('.last_2nd');

	// end()
	$('ol li').find('a').css('color', 'red').addBack().addClass('me');
	// -> a를 제외한 li만 me 클래스를 추가
	$('ol li').find('a').css('color', 'red').end().addClass('me');
})(this, this.jQuery)
```

-

###jQuery Manipulation

```javascript
(function(global, $){
	'use strict';

	// jQuery 팩토리 함수를 통해 문서 객체를 생성할 수 있다.
	$('<blockquote>'); // 요소를 동적으로 생성
	$('<blockquote>').text('this is block quotation').prependTo('body');
	var $ol = $('ol');
	$('body').prepend($ol);

	$('<div>', {
		'id': 'hi-seoul',
		'class': 'custom-division',
		'attr': { 'title': 'hey jude' },
		'text': 'Hey Jude~',
		'on': {
			'click': function(){
				console.log(thi);
			}
		}
	}).appendTo('body');

	// text(), 인자가 없다면 Getter, 있다면 Setter
	// html(), 인자가 없다면 Getter, 있다면 Setter
	$('.gnb').html();
	$('.gnb').html('<div>changed html</div>');
	$('.gnb').html(function(idx, oldHTML){
		return '<article>' + oldHTML + '</article>'
	});

	// attr() // 마찬가지로 getter와 setter로 작동한다
	$('h2').attr('class'); // ally-hidden
	$('h2').attr('id', 'only-one');
	$('h2').attr('class', function(index, old_attr){
		// ES6 string template
		return `:) hello ${old_attr} / ${old_attr}`
	});
	// 인자가 반드시 필요함
	$('h2').removeAttr('class');

	// 인풋 창에 아무것도 없을 때
	$('form').find('input').prop('value') // undefined
	// 인풋 창에 사용자가 무언가 입력한 후
	$('form').find('input').prop('value') // '사용자가 입력한 텍트스'

	// 폼에서는 prop을 써서 조작하거나 val() 메서드를 사용한다

	//A.before(B) - A 앞에 B를 삽입
	$('.gnb').before('<h1>hi<h1>')
	//A.after(B) - A 뒤에 B를 삽입
	$('.gnb').after('<h3>bye<h3>')

	var $h2 = $('<h2 id="demo-test-h2">demo heading 2</h2>');
	var h3 = document.createElement('h3');
	var gnb = document.querySelector('.gnb');
	var h3_text = document.createTextNode('new content - heading 3');
	h3.appendChild(h3_text);
	var $ol = $('ol');
	$ol.prependTo('body');

	window.setTimeout(function(){
		$('ol').before([$h2, h3, gnb]);
	}, 3000);

	// wrap()
	$('li').wrap('<section>'); // 개별적 래핑
	$('li').wrapAll('<section>'); // 통함 래핑
	// unwrap() 해당요소를 감싼 것을 없앰

	/*
	 이벤트 바인딩 시, 이벤트 객체에 사용자가 정의한 객체를 합성
	 외부에 변수를 만들지 않고, 이벤트 객체를 통해 조건 처리하는 토글 구문
	 */
	$('p:eq(2)').on('click', {'clicked': false}, function(evt){
		var clicked = evt.data.clicked;
		if (!clicked){
			console.log('toggle 1');
		} else {
			console.log('toggle 2');
		}
		evt.data.clicked = !evt.data.clicked;
	});

})(this, this.jQuery)
```


-


##jQuery Plugin UI-Component

###radio

```javascript
(function(global, $){
	'use strict';

	// $.fn === jQuery.prototype
	if(!$.fn.radioClass) {
		$.fn.radioClass = function(class_name){
			if ($.type(class_name) !== 'string') {
				throw new Error('전달인자는 문자열이어야 합니다')
			}

			// this는 jQuery 객체 : 유저가 클릭한 a의 부모 li
			var $activated = this.siblings('.' + class_name);
			$activated.removeClass('.' + class_name);
			if ($activated.length === 0) {
				console.info('전달된' + class_name + '에 해당되는 형제요소가 없습니다')
			}
			this.addClass('.' + class_name);

			// 메서드 체이닝을 위해 리턴
			reutrn this
		};
	}
})(this, this.jQuery)
```

- **Usage**

```html
<nav class="test">
	<ul>
		<li class="active"><a href="/temp1">test suite 1</a></li>
		<li><a href="/temp2">test suite 2</a></li>
		<li><a href="/temp3">test suite 3</a></li>
		<li><a href="/temp4">test suite 4</a></li>
	</ul>
</nav>
```
```css
.active {
	background: #cc0;
}
```
```javascript
(function(global, $){
	'use strict';

	var $test = $('.test');

	// 이벤트 위임
	$test.on('click', 'a', function(evt){
		// 브라우저의 기본 동작 차단
		evt.preventDefault();

		var $this = $(evt.target); // 클릭된 a
		var $parent = $this.parent() // li

		$parent.radioClass('on');
	})

})(this, this.jQuery)
```

###memory

```javascript
(function(global, $){
	'use strict';

	$.fn['method'] // 인스턴스 메서드
	$.['method'] // 스태틱 메서드

	if (!$.memory){
		$.memory = function(dom_el){
			if (dom.el !== 1){
				throw new Error('DOM 객체를 전달해야 합니다')
			}

			// dom_el은 $this라고 하는 데이터가 메모리 되어 있는가?
			if(!$.data(dom_el, '$this')){
				// '$this'라는 이름으로 jQuery화된 dom_el을 데이터로 저장
				$.data(dom.el, '$this', $(dom_el))
			}
			return $.data(dom_el, '$this');
		}

		$.$ = $.memory
	}

	})

})(this, this.jQuery)
```

- **Usage**

```javascript
(function(global, $){
	'use strict';

	var $test = $('.test');

	// 이벤트 위임
	$test.on('click', 'a', function(evt){
		// 브라우저의 기본 동작 차단
		evt.preventDefault();

		// var href = $(this).attr('href'); 팩토리 함수를 더이상 쓰지 않아도 된다
		var href = $.$(this).attr('href');
	})

})(this, this.jQuery)
```
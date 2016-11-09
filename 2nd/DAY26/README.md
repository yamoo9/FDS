###### Front-End Develop SCHOOL

# DAY 26

- __jQuery__: Basic
- __jQuery__: Advanced

---

### 수업 시작 전에 준비!
**json파일**

    "clear": "rm -rf lib",
    "copy-jquery": "mkdir lib && cp node_modules/jquery/dist/jquery.min.js lib/jquery.min.js",

json파일에 코드 추가

>clear로 lib폴더를 삭제 copy-jquery로 lib폴더 생성 및 jquery.min 파일 복제

---

## 1. jQuery 호출 방법
`<head>` 내에서 호출할 경우 사용하는 패턴
```
jQuery(function($) {
  'use strict';
  // $ === jQuery
});
```

`</body>` 끝 위치에서 호출할 경우 사용하는 패턴
```
(function(global, $){
  'use strict';
  // $ === jQuery
})(this, jQuery);
```

>body 끝에서 불러오는 방법이 head 내에서 불러오는 방법 보다 조금 더 빠르다.

호출 빠르기 순위

1. </body> 끝에서 호출
2. DOM content loaded
3. <head> 내에서 호출
4. onload 방법



### 2. noConflict
jQuery core 참고 사이트:
<http://api.jquery.com/category/core/>

제이쿼리와 다른 라이브러리를 혼용해서 $ 충돌이 생길경우:

    jQuery.noConflict();
$ 소유권을 포기하여 충돌을 방지할 수 있다.
함수객체를 반환한다.

---

()안에 true/false 기본값은 flase:

    jQuery.noConflict(true);
true 값을 넣으면 $, jQuery 전역 변수를 모두 포기!

---

$ 전역 변수를 포기하는 대신 다른 별칭(Alias) 변수에 jQuery를 참조:

    var $j = jQuery.noConflict();

---

**캡슐**로 감싸서 안전하게 사용하자!
```
(function(global, $){
  'use strict';
  // $ === jQuery

})(this, this.jQuery);

// 외부에 공개될 네임스페이스 객체
var fds = (function(){
  'use strict';
  // 반환 객체
  return {
    $: jQuery
  }
})(this, this.jquery.noConglict(true));

// fds 받아 쓰기
(function(fds) {
  'use strict';
  var jQuery_version = fds.$().jquery;
})(this, fds);
```

### 3. jQuery 선택자
jQuery는 CSS 선택자를 포함한 강력한 선택자가 있다.

#### 3.1. CSS 선택자

```
var $ = jQuery;
var target;
```

1. 요소(타입) 선택자
    '요소'
    `$target = $('article');`

2. 그룹핑 grouping
  '요소, 요소, 요소'
    `$target = $('img, h2, li');`

3. 자손(하위) 선택자
  '요소 자손요소'
    `$target = $('[class^="post-"] ul');`

4. 자식 선택자
  '요소 > 요소'
    `$target = $('ol > li');`

5. class 선택자
  '.클래스'
    `$target = $('.reset-list');`

6. multi class 선택자
  '.클래스.클래스'
     `$target = $('.reset-list.clearfix');`

7. id 선택자
  '#아이디'
    `$target = $('#page');`

8. 유니버셜(전체) 선택자
  ' *'
    `$target = $('article *');`

9. 인접 형제 선택자
  인접한 1개의 형제만 선택
' + '
    `$target = $('img + *');`

10. 일반 형제 선택자
  다음에 나오는 모든 형제들 선택
' ~ '
    `$target = $('.clearfix ~ p');`

11. 속성(Attribute) 선택자
  ' [속성] '
    `$target = $('[title]');`
    `$target = $('[src]');`

12. 속성 선택자 일치
 '[속성=" "]'
    `$target = $('[alt="one"]');`

13. 속성 선택자 시작
  '[속성^=" "]'
    `$target = $('[title^="article"]');`

14. 속성 선택자 끝
  '[속성$=" "]'
    `$target = $('[class$="hidden"]');`

15. 속성 선택자 공백 구분 (~=)
  위치에 상관없이 공백으로 구분
'[속성~=" "]'
   ` $target = $('[title~="article"]');`

16. 속성 선택자 (|=)
  찾는것, 찾는것- 로 시작해야 함
'[속성|=" "]'
   ` $target = $('[lang|="en"]');`

17. 속성 선택자 (*=)
  '[속성*=" "]'
    `$target = $('[src*="?"]');`

18. 멀티 속성 선택자 [][]
  '[속성][속성]'
    `$target = $('[id*="N"][class="brand"]');`

19. 가상클래스 선택
- :link
- :visited
- :hover
- :active
- :focus
- :before
- :lang(en)
- :root - HTML5에서는 <html>, XML에서는 매번 바뀜
- :target - 주소창에 #이 생기는 경우
- :enabled - 활성화된
- :disabled - 비활성화된
- :checked - 체크된
- :empty - 요소 안이 비어 있는 상태
- :not(span) - span이 아닌 (span은 바꿀수 있다)
- :only-child
- :first-child
- :last-child
- :nth-child(2n+1) - 부모로부터 홀수 자식들
- :nth-last-child(2) - 자식들 중에서 끝에서 2번째
- :only-of-type - 그중에 하나 (모든 값이 같고 한개만 값이 다를 때)
- :first-of-type - 그중에 첫번째
- :last-of-type - 그중에 마지막
- :nth-of-type(3n+2) - ()안을 계산한 값의 아이들
- :nth-last-of-type(4) (그들중에서 마지막에서 4번째)


#### 3.2. jQuery 필터 선택자
참고 사이트
<http://www.w3schools.com/jquery/jquery_ref_selectors.asp>
<http://api.jquery.com/category/selectors/>


1. 제이쿼리 필터 !=
속성이 선택자와 다르다

2. :frist
수집을 한 대상중 첫번째
frist-child와는 다르다

3. :last
수집 한 대상 중 마지막

4. :odd
자바스크립트는 0부터 세기 때문에
jQuery에서는 even이 홀수, odd가 짝수
css에서는 even이 짝수, odd가 홀수


5. :eq() (=equal)
index 순서의 같은 것을 찾아 준다.
-1 음수도 가능 마지막이 선택된다.
-2 끝에서 두번째

6. :lt() less than
값보다 작은 애들이 선택된다.

7. :gt() greater than
가져온 값보다 큰 값들을 찾아준다.

8. :header 선택자 필터
제목들을 찾는 방법

9. :contains()
내부에 텍스트 값을 포함한것
안에 텍스트 값이 있나 없나

10. :not()
:not(checked);
enable disable 처럼 checked는 서로 반대되는게 없어 체크 되어 있지 않은 선택자를 찾아야 한다.

11. :has()
소유를 묻는다
내부에 포함 하는 것을 찾을 때

12. :parent
자기가 부모인가를 찾을 수 있다. (부모를 찾는것이 아니다!!)
자신 안에 자식요소가 포함하고 있는지를 알수 있다. (empty와 반대된다)

#### 3.3. jQuery 시각 필터

1. :hidden
hidden, width, height =none 일때도 포함
display =  none
type =hidden
부모가 hidden
span 인라인은 기본으로 비어있어 찾아 올 수 있다.
문서에 존재하지 않는 것들을 찾을 때 사용한다.
visibility: hidden, opacity: 0 은 미포함
 참고 <http://api.jquery.com/hidden-selector/>

2. :visible
화면에 보이는 요소를 찾아온다.

3. :animated
애니메이션 중인 상태를 수집
애니메이션 중에는 동작이 실행되지 않게 할 때 사용될 수 있다.

#### 3.4. jQuery 폼 선택자 필터

연습 <http://codylindley.com/jqueryselectors/>

- :input
- :text
- :password
- :radio
- :checkbox
- :button 버튼 element 수집 (input type button 포함 모든 버튼)
- :file
- :image (input type이 image)
- :reset (input type이 reset 찾음)
- :submit
- :selected


### 4. jQuery Styling

#### 4.1. css를 활용하여 꾸미기

.css() 함수
> http://api.jquery.com/css/

.css(속성명, 값) 넣어주면 native코드와 마찬가지로 인라인으로 style이 생성된다.

```
//native
var brand = document.querySelector('brand');
brand.style.color = #6500ea;

//jquery
// 문서 객체 대상 참조
var $brand = $('.brand');

// set
$brand.css('color', '#6500ea'

// get
console.log( $brand.css('font-size') );
```

한번에 여러 코드를 작성할 때
```
// Method Chaning
$brand
  .css('color', '#6500ea')
  .css('letter-spacing', '0.03em')
  .css('font-weight', '700')
  .css('font-family', '"Spoqa Han Sans"')
  .css('color', '#fe4940')
  .css('padding', '1em 1.2em')
  .css('border', '3px solid currentColor')
  .css('margin', '1em')
  .css('border-radius', '0.3125rem');
```
마지막에서만 ';'을 넣어준다

```
// 복합 선언
  $brand.css({
    'letter-spacing': '0.03em',
    'font-weight': '700',
    'font-family': '"Spoqa Han Sans"',
    'color': '#fe4940',
    'padding': '1em 1.2em',
    'border': '3px solid currentColor',
    'margin': '1em',
    'border-radius': '0.3125rem'
  });
```
객체.css안에 {속성명:값, 명:값, 명:값}으로 넣어준다.


---

[바벨로](http://babeljs.io/)

###### Front-End Develop SCHOOL

# DAY 27
- __jQuery__: Basic

---

## 1. jQuery instance method
인스턴스를 생성해야만 쓸 수 있는 메서드를 의미한다. <-> static메서드, 클래스 메서드

---
### 1-1. 요소의 스타일 설정(복습) : jQueryObj.`css()`
- http://api.jquery.com/css/
- 여러 요소를 가져와 속성값을 순회하며 변경하는 예제
```js
  $('img', $album).css({
    'display': function(idx, prop){
      if ( idx === 2 && !container_props.display ) {
        container_props.display = prop;
      } else {
        prop = 'inline-block';
        return prop;
      }
    }
  });
  ```

#### CSS속성 하나 가져오기 .css( `'CSS속성제목'` );
  - return : 텍스트
  - ex) 15px
  - 숫자연산을 위해서 parseInt , parseFloat 필요

#### CSS속성 여럿 가져오기 .css( `['CSS속성제목' , 'CSS속성제목' , ... ]` );
  - return : 객체
  - ex) {'font-size' : '15px', ...}
  - 값을 뽑아내기위해 NativeJS의 for-in 구문이나 jQuery의 Each()순회 필요

#### CSS속성 하나 설정하기 .css( `'CSS속성제목' , '설정값'` );

#### CSS속성 여럿 설정하기 .css( `{'속성제목' : '값' , '속성제목' : '값' , ...}` );
  - 여러속성 가져오기에서 리턴된 객체를 넣으면 속성복사처럼 사용가능

#### 현재값을 함수로 받아와 설정하기 .css( `{'속성제목',function(index,value){} }` );
  - 객체스타일로 .css에 전달
  - 함수에 인자를 두개받도록 하면 속성제목의 **현재속성값** 이 두번째 인자에 들어간다.
  - 단위가 필요할경우 함수내에서 텍스트 처리해 10px 등으로 리턴해야 한다.

---
### 1-2. 요소에 클래스 추가/제거 : jQueryObj.`addClass()` .`removeClass()`
- http://api.jquery.com/category/manipulation/class-attribute/
- jQuery기능을 이용해 애니메이션 클래스를 요소에 설정/해제 하는 예제

  ```CSS
  CSS 애니메이션, 클래스 정의부

  body {...}
  .demo-container {...}
  .album {...}
  .album * {...}
  .album-cover {...}
  .album-vinyl {...}
  .album-disk {...}
  .album-disk.move {...}
  .album-disk.stop {
    opacity: 1;
    animation: stopDisk 0.45s ease-out forwards; }
  .album-disk.play {
    opacity: 1;
    left: 80px;
    animation: playDisk 2.2s linear infinite; }

  @keyframes moveVinyl {...}
  @keyframes moveDisk {...}
  @keyframes stopDisk {...}
  @keyframes playDisk {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  ```
  ```js
  JS 이벤트 설정부

    // 일반적인 방법
    // $album.on('click', moveDisk);
    // $album.on('mouseenter', playDisk);
    // $album.on('mouseleave', stopDisk);

    // 메소드 체이닝
    // $album
    //   .on('click', moveDisk)
    //   .on('mouseenter', playDisk)
    //   .on('mouseleave', stopDisk);

    // 객체 리터럴 활용
    $album.on({
      'mouseenter': moveDisk,
      'click'     : playDisk,
      'dblclick'  : stopDisk
    });
    var is_click = false;

  ```
```js
JS 클래스추가 함수부

  function moveDisk() {...}
  function playDisk() {...}
  function stopDisk() {
    if (is_click === true) {
      $(this).find('.album-disk').removeClass('play').addClass('stop');
      emp.pause();
    }
  }
```
#### 실습에 이용된 애니메이션 작성과정
  1. keyframe 으로 rotate / left 등의 동작을 만든다 `@ CSS`
  - 위에서 만든 animaion 을 가지는 Class를 정의한다 `@ CSS`
  - Class를 요소에 넣는 함수를 작성한다 (예제에서는 jQuery 사용) `@ JS`

#### class를 지정해 제거하기 .removeClass( `'지울클래스명'` );
  - 값을 넣지 않으면 모든 클래스를 제거한다.
  - .removeAttribute( `'속성이름'` ) 은 속성자체를 제거한다 ex)href, target 등

#### add,remove class의 속도이슈 vs. native
  - native : classList.addClass  / classList.removeClass
  - native 가 2~6배 더 빠르다.

#### 객체의 현재클래스를 함수로 받아 처리 .removeClass( `function(index,class){}` );
  - 함수의 두번째 변수에 현재 클래스가 대입되어 사용할 수 있다.
  - 함수에서 리턴되는 클래스를 지우게된다

#### 이벤트 할당함수 jQueryObj.on( `'어떤이벤트?' , 실행할함수` );
  - 실행결과가 jQueryObj(자기자신)을 반환하기 때문에 메소드 체이닝 가능
  - 객체리터럴 가능 {'이벤트속성':함수이름, '이벤트속성':함수이름, ...}
  
---
### 1-3. 요소가 클래스를 가졌나? : jQueryObj.`hasClass()`
- http://api.jquery.com/hasClass/
- album-vinyl클래스 존재유무를 확인하고, 있다면 -stream 클래스를 추가하는 예제

  ```js
  $('.demo-container *').addClass(function(index, current_class) {
    if ( $(this).hasClass('album-vinyl') ) {
      return 'source-vinyl-stream';
    }
  });
  ```
  #### 특징
  - return : boolean
  - 주 사용처는 조건문
  - Native : .classList.contains('클래스명')
  
---
### 1-4. 스위치로 사용하는 클래스를 편하게 추가/제거 :   - jQueryObj.`toggle()`
- http://api.jquery.com/toggleClass/
- 클릭시 album-vinyl 클래스를 토글하는 예제

  ```js
  $('.album').on('click', function() {
    var $vinyl = $(this).find('.album-vinyl');
    $vinyl.toggleClass('toggle');
    // ---------------------------------------------
    // if ( $vinyl.hasClass('toggle') ) {
    //   $vinyl.removeClass('toggle');
    // } else {
    //   $vinyl.addClass('toggle');
    // }
  });
  ```
  #### $로 찾아온 복수객체 자동반복
  - 찾아온 jquery객체가 여럿이라도 내부에서 반복문이 동작해 개별요소를 순환하며 각각 걸어준다.

#### 특징
  - if + remove + add 함수를 합친 기능
  - 변수로 넣어준 클래스가 있으면 빼주고, 없으면 넣어준다
  - Native : .classList.toggle('클래스명')
  
---
### 1-5. 박스사이즈 content-box only : jQueryObj.`width()` .`height()`
- http://api.jquery.com/width/ , http://api.jquery.com/height/
- 박스 사이즈를 함수로 설정해보는 예제. 현재값을 v 변수로 받는다.

  ```js
  $('.box').on('click', function(e){
    e.stopPropagation();
    $(this)
      .width(function(i, v) {
        return v += (v + v)/10;
      })
      .height(function(i, v) {
        return v += (v + v)/10;
      })
      .offset(function(i, v) {
        var c_half_h = $(this).height()/40;
        return {
          'top': v.top - c_half_h,
          'left': v.left + 10
        }
      });
  });
  ```
#### Native도 있는데 jQuery의 width/height 메소드를 사용할 필요성?
  - Native의 크로스 브라우징 이슈를 간편히 해결할 방법이기 때문
  - 성능이 떨어지는것을 감안해야 한다.

#### .css("height/width")와 차이점?
  - heigh/width()는 padding/border/margin `제외하고` content 만의 사이즈를 얻는다.
    - 포함해서 받으려면 `.css()` 를 사용하거나.
    - jQuery의 또다른 함수 `innerHeight / outerHeight` 등을 사용한다.
  - .css("height") 는 `10px` 처럼 단위를 포함반환하나 , .height() .width()는 숫자만 반환한다.

#### 값 가져오기
  - jQueryObj.`width()` .`height()` : 객체의 너비/높이 단위없는 숫자로 얻는다

#### 값 설정하기
  - jQueryObj.`width(사이즈)` .`height(사이즈)`: 사이즈에는 10, 10%, 10px, 10em 등 숫자와 문자열 모두 사용가능하다.
  - 자신의 객체를 리턴하므로 체인이 가능하다.

#### 현재사이즈를 함수로 받아 처리
  - jQueryObj.width( `function(index,size)` )
  - 두번째 변수로 현재 사이즈를 숫자로 받을 수 있다.
  
---
### 1-6. 박스사이즈 content+padding  : jQueryObj.`innerWidth()` .`innerHeight()`
  - http://api.jquery.com/innerHeight/ , http://api.jquery.com/innerWidth/

#### 값 가져오기
    - () 안에 변수 안넣으면 get으로 동작

#### 값 설정하기
    - 숫자,문자,함수를 넣으면 set으로 동작
    - 값 설정시 padding은 유지되고 content의 길이를 줄여 지정값으로 크기맞춤.
    - 함수는 두번째 변수가 현재값을 받음
    
---
### 1-7. 박스사이즈 content+padding+border+(margin) : jQueryObj.`outerWidth()` .`outerHeight()`
  - http://api.jquery.com/outerHeight/ , http://api.jquery.com/outerWidth/

#### 값 가져오기
    - outerWidth(), outerWidth(boolean 형): GET으로 동작

#### margin 포함/비포함 지정해 가져오기
    - outerWidth(true) : margin 포함한 크기
    - outerWidth() : margin 제외한 크기
      - (f.yunjee.heo feedback ㄳ)

#### 값 설정하기
    - 숫자,문자,함수를 넣으면 set으로 동작
    - 함수는 두번째 변수가 현재값을 받음
    
---
### 1-8. 객체의 document 기준 offset : jQueryObj.`offset()`
  - http://api.jquery.com/offset/
#### 측정기준
    - offset parent 기준이 아니라 document 객체의 좌상단 점이 기준
    - offset parent 기준으로 위치를 가져오는것은 .position()
    - offset parent : static 이 아닌 첫 부모요소

#### 값 가져오기
    - return : `{top:값, left:값}` 형태이므로 변수명.top 등으로 접근해야 함.

#### 값 설정하기
    - () 안에 {'top':값, 'left':값} 형식으로 객채를 넣어줘야만 설정됨
    - 값에 숫자,문자,함수를 넣으면 set으로 동작

#### 함수로 값 설정하기
    - 두번째 변수가 객체형으로 `{top:값, left:값}` 현재값을 받으므로 함수내에서도 `변수명.top` 등으로 접근해야 함.
    
---
### 1-9. 객체의 offset-parent 기준 offset : jQueryObj.`position()`
  - http://api.jquery.com/position/
#### 측정기준
    - offset parent의 좌상단 점이 기준.
    - offset parent : static 이 아닌 첫 부모요소
    - hidden element 는 가져오지 못한다

#### 값 가져오기
    - return : `{top:값, left:값}` 형태이므로 변수명.top 등으로 접근해야 함.

#### 값 설정하는 기능이 없다
    - 따라서 chaining 도 불가능하다.
    
---
### 1-10. 객체의 offset parent 찾기 : jQueryObj.`offsetParent()`
  - http://api.jquery.com/offsetParent/
#### return : parent jQuery객체

---
### 1-11. 스크롤바의 현재위치  : jQueryObj.`scrollTop()` .`scrollLeft()`
  - http://api.jquery.com/scrollLeft/ , http://api.jquery.com/scrollTop/

#### 측정기준
    - 자신에게 스크롤바가 없다면 현재 스크롤은 0이고 설정해봤자 변화가 없다.
    - 세로스크롤은 화면의 가장 상단에서, 가로스크롤은 화면 가장 왼쪽에서 측정을 시작한다.

#### 값 가져오기
    - ()안에 아무 변수를 넣지 않으면 GET으로 동작한다.
    - 단위는 픽셀이지만 숫자로 값을 가져온다. 30px 이 아니라 30 이 리턴된다.

#### 값위치로 스크롤 이동하기
    - ()안에 숫자를 넣으면 pixel 단위 위치로 이동한다
    - 요소위치로 바로보내려면
      - 요소에 ID달고 `a href="#hash"` 로 이동시키기
      - 감싼박스를 relative하고 요소.position() 값을 scroll함수에 넘겨주기 : 부모의 margin/padding 이슈 있음.
      - 스크롤이 페이지 첫부분부터 시작이면 offset() : 부모의 margin/padding 이슈 있음.
        - f.jonghoon  

#### 즉시이동이 아니라 애니메이션처럼 이동하기
    - jQuery의 animate 함수 안에서 스크롤 위치를 지정한다. (1-12 에서 더 설명.)
    - 또는 CSS활용 animate를 직접 작성.
    
---
### 1-12. 쉬운 애니메이션 : jQueryObj.`animate()`
  - http://api.jquery.com/animate/

#### 사용방법 : animate( `{'속성명':값}, 실행시간ms, '시간흐름패턴'` )
    - 현재 속성값에서 입력값으로 실행시간동안 애니메이팅된다.
    - 속성값에는 모든 CSS속성명을 쓸수있고
    - jQuery에서 별도제공하는 속성조작을 사용할 경우, 전용 속성명을 찾아서 대입한다.
      ```js
      //scrollTop()메서드는 scrollTop 이라는 새로운 속성을 사용함

      $doc.animate({
        'scrollTop': $target.offset().top - scroll_menu_ul_height
      }, 1500, 'easeOutElastic');
      ```

#### 추가 시간흐름패턴
    - 추가 움직임패턴 갤러리(.js 추가 로드 필요) : http://easings.net/ko
    - 필요한 확장 easing js라이브러리 : http://gsgd.co.uk/sandbox/jquery/easing/
      - npm i jquery-easing 으로 설치가능.
---

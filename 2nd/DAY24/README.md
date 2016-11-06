###### Front-End Develop SCHOOL

# DAY 24

### JavaScript Object(객체)

```js
/**
 * ----------------------------------------------------------------
 * 자바스크립트에서 객체가 아닌 것들
 * ---------------------------------------------------------------- */

// 배열이란? '값'의 집합
// 객체란? '속성'의 집합 { '속성(key, property)': '값(value)' }

///////////////////////////////
// 자바스크립트에서 객체가 아닌 것들 //
///////////////////////////////

// 원시데이터 유형은 객체가 아니다.
// 속성을 가지지 못한다.

// 원시데이터 유형의 종류
// null
// undefined

// ※ 자바스크립트에서는 마치 객체인 것 마냥 속성을 가져다 쓸 수 있다.
// 숫자 9 값(Literal)
// 문자 'javascript' 값
// 불리언 false 값

/////////////////////
// 객체가 생성되는 과정 //
/////////////////////

// 객체를 생성해서 사용한다.
// 객체를 생성하는 생성자(Constructor)가 객체를 생성(생성된 객체: Instance)한다.

// 숫자 객체를 생성하는 생성자(함수)로부터 숫자 객체를 생성하는 과정
// 생성자 함수와 일반 함수를 구분하기 위한 자바스크립트 이름 관례는
// 생성자 함수 이름의 첫글자를 대문자로 작성한다.

// 생성자 함수
// Number()
// String()
// Boolean()

/////////////////////////
// 본래의 목적과 다른 사용법 //
/////////////////////////

// 위 생성자 함수는 생성자로 사용되기도 하지만, 자바스크립트에서는
// 데이터 유형을 변경하는데 사용되기도 한다.
// String(109203) -> '109203'
// Number(null) -> 1

/////////////////////////////////
// 생성자 함수를 사용한 객체 생성 과정 //
// new 생성자 함수() -> 객체 생성 ///
///////////////////////////////

var maked_number_object = new Number(838372);

// console.dir(maked_number_object);


/////////////////////////////////
// 객체는 속성을 포함하는 컨테이너이다. //
/////////////////////////////////

// 속성들의 집합이 객체이다.
// 속성은 변수, 함수 유형을 모두 말한다.
// 단, 함수 유형은 특별히 메소드(Method)라고도 부른다.
// 메소드 이름 작성 관례는 camelCase 표기법을 따른다.
// 메소드(방법) -> 동사 형태 e.g) getName(), setName(), lookHim(), showMeTheMoney()

// 함수객체() : 실행됨
// 함수객체   : 실행안됨

//////////////
// HTML/CSS //
//////////////

// 《어떤 표기법이 맞냐가 아니라, 우리 팀이 어떤 이름 규칙을 쓰느냐이다》

// 하이픈(-)
// 언더스코어(_)
// 카멜케이스()


///////////////////////////
// 네이티브 객체 리터럴 표기법 //
///////////////////////////

var num = 9,
    str = 'nine',
    boo = false,
    fnc = function(){},
    arr = [],
    obj = {};


////////////////////////
// 사용자 정의 생성자 함수 //
////////////////////////

function Atom(name, n){
  // 엄격 모드를 사용하면 함수를 실행한 this가 더 이상 window가 아니게 된다.
  // 명시적으로 실행하지 않고 암묵적으로 실행했을 경우 e.g) window.Atom()이 아닌 경우
  'use strict';

  // new를 강제화하는 패턴
  // if ( this.constructor !== Atom ) {
  //   return new Atom(name, n);
  // }

  this.name = name;
  this.power = 100 * n;
}

// 사용자 정의 객체를 생성 (new 생성자 함수)
// var atom_one = Atom('제롬', 10);
var zero     = new Atom('제로', 100);

// 객체 생성 방법 (리터럴)
var omega = { 'name': '플레인 오브젝트' }; // new Object()


/**
 * --------------------------------
 * 자바스크립트 네이티브(내장, 빌트인) 객체
 * Number
 * String ★★★
 * Boolean
 * Function ★★★
 * Array ★★★★
 * Object
 * ----------------------------- */

console.dir(Number);
console.log('%c------------------------------', 'color: #3d9a21');
console.dir(String);
console.log('%c------------------------------', 'color: #3d9a21');
console.dir(Boolean);
console.log('%c------------------------------', 'color: #3d9a21');
console.dir(Function);
console.log('%c------------------------------', 'color: #3d9a21');
console.dir(Array);
console.log('%c------------------------------', 'color: #3d9a21');
console.dir(Object);


// Number 또한 별 거 좀 있어요.
// Boolean 별 거 없어요.
// String, Array 별 거 아주 많아요!!!

// .substring(start, end-1) VS .substr(start, count)

// [뒤에 삽입] .push() VS [앞에 삽입] .unshift()
// [뒤에서 빼냄] .pop() VS [앞에서 빼냄] .shift()

// Function 3가지만 유의하자!!


/** @function clineArray()
전달 받은 배열을 복제한 후, 복제된 배열을 반환하는 함수 */
function cloneArray(arr) {
  // 전달인자 유효성 검증
  if ( !(arr instanceof Array) ) {
    throw new Error('배열을 전달받아야 합니다.');
  }
  // 배열 복제
  var _clone_arr = [];
  for (var i=0, l=arr.length; i<l; i++) {
    _clone_arr.push(arr[i]);
  }
  return _clone_arr;
}

// ----------------------------------------------------

function cloneArraySimple(arr) {
  // 전달인자 유효성 검증
  if ( !(arr instanceof Array) ) {
    throw new Error('배열을 전달받아야 합니다.');
  }
  return arr.slice(0);
}

// ----------------------------------------------------

function makeArray(data) {
  // return Array.prototype.slice.call(data, 0);
  return [].slice.call(data, 0);
}
```

-

### 객체 지향 자바스크립트

```js
///////////////////////////
// 객체 지향 자바스크립트 패턴 //
//////////////////////////

function Tab(){} // 생성자 함수

// Tab.prototype; // 프로토타입 객체

var my_tab = new Tab(); // 객체 인스턴스 생성

my_tab.activeTab; // undefined

Tab.prototype.activeTab = function() {}; // 프로토타입 객체 능력 추가

my_tab.activeTab; // function(){} // 인스턴스 객체는 그 능력을 사용할 수 있다.


// 절대 따라하지 마세요!!!!!
// Array 생성자 함수의 프로토타입 객체를 임의로 확장!!!!
// 위험!!!! Danger!!!
Array.prototype.asendingSort = function() {
  return this.sort(function(a, b){
    return a > b;
  });
};

// Instance Methods
Array.prototype.descendingSort = function() {
  return this.sort(function(a, b){
    return a < b;
  });
}

// Static Methods
// 생성자 함수 객체의 속성 makeArray 추가
Array.makeArray = function(like_arr) {
  return Array.prototype.slice.call(like_arr, 0);
};


// Tab 객체 생성자를 통해
// 객체 지향 자바스크립트 프로그래밍 해보자

// 생성자 함수
function Tab(selector) {
  this.el = document.querySelector(selector);
}

// 프로토타입
// Tab.prototype; // {}
// 프로토타입 객체의 능력을 확장
// 탭 컴포넌트 만들어 지면서 어떤 일들이 일어날까?
Tab.prototype.init = function() {};
Tab.prototype.activeTab = function(index) {};
Tab.prototype.deactiveTab = function() {};
Tab.prototype.playTab = function(duration) {};
Tab.prototype.stopTab = function() {};

// 인스턴스 객체 생성
var header_tab, main_tab, footer_tab;

header_tab = new Tab('.header .tab');
main_tab   = new Tab('.main .tab');
footer_tab = new Tab('.footer .tab');
```

-

### Tab UI Component (OOJS)

```js
// tab.js
this.FDS = (function(){

  var forEach = Array.prototype.forEach;

  // 외부에서 접근이 불가능한 생성자 함수
  function Tab(el) {
    this.el           = document.querySelector(el);
    this.tabs         = null;
    this.panels       = null;
    this.panelWrapper = null;
    this.active_index = 0;
    this.init();
  }

  Tab.prototype = {
    'init': function(){
      // console.log('애플리케이션 초기화');
      // this.el <- .tab-container

      // <div class="tab-container">
      this.el.classList.add('tab-container');

      // <ul class="tab-list">
      this.el.querySelector('ul').classList.add('tab-list');

      // <a class="tab">
      this.tabs = this.el.querySelectorAll('a');
      forEach.call(this.tabs, function(tab){
        tab.classList.add('tab');
      });

      // <div class="tab-panel-wrapper">
      var wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'tab-panel-wrapper');

      // <div class="tab-panel">
      this.panels = this.el.querySelectorAll('div');
      forEach.call(this.panels, function(panel){
        panel.classList.add('tab-panel');
        wrapper.appendChild(panel);
      });

      // 나중에 붙이는 이유
      this.el.appendChild(wrapper);

      //
      this.activeTab(this.active_index);

    },
    'removeTabs': function() {
      forEach.call(this.tabs, function(tab){
        tab.classList.remove('active');
      });
    },
    'activeTab': function(active_index) {
      this.active_index = active_index;
      this.removeTabs();
      this.tabs.item(this.active_index).classList.add('active');
    }
  };

  return {
    'Tab': Tab
  };

})(this);


// app.js
(function(global, $){
  'use strict';

  var c_tab = new $.Tab( '#component-tab' );

  global.c_tab = c_tab;

})(this, this.FDS);
```
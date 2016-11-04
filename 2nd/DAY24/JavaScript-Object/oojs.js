//////////////////////////////
// 객체 지향 자바스크립트 패턴 1  //
////////////////////////////

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
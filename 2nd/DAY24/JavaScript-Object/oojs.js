//////////////////////////////
// 객체 지향 자바스크립트 패턴 1  //
////////////////////////////

function Tab(){} // 생성자 함수

// Tab.prototype; // 프로토타입 객체

var my_tab = new Tab(); // 객체 인스턴스 생성

my_tab.activeTab; // undefined

Tab.prototype.activeTab = function() {}; // 프로토타입 객체 능력 추가

my_tab.activeTab; // function(){} // 인스턴스 객체는 그 능력을 사용할 수 있다.
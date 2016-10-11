/*! function.js © yamoo9.net, 2016 */

/////////////
// 문서객체 선택
/////////////

// 문서에서 각 컨트롤(button, a)을 선택
var button, link, eventHandler;

all_els = document.querySelectorAll('a, button'); // 2개 이상 (복수)

// all_els.item(0).onclick = function() {
//   console.log('all_els');
// };

button = document.querySelector('button'); // 1개 (단수)
link = document.querySelector('a');

/////////////
// 함수 값 참조
/////////////

// 변수 이름 공간에 함수 값(표현식, 무명함수) 참조
eventHandler = function() {
  console.log('call Me');
};

// 선언을 통해 정의된 함수. 기명 함수, 이름이 있는 함수
function evHandle() {
  console.log('ev Handler.');
}

button.onclick = eventHandler; // 변수에 참조된 함수 값을 실행
button.onkeyup = evHandle;     // 함수 이름을 통해 참조된 함수 실행
link.onmouseover = eventHandler;


//////////////
// 함수 작성 방법
//////////////

// 함수 객체 생성 (권장 X)
var fnObj = new Function('console.log("fnObj");');

// 함수 표현식: 변수에 값으로 할당 (권장)
// 아무 곳에나 정의하면 오류 발생
var fnObjExp = function() { console.log('fnObjExp'); };

// 함수 선언식 (권장)
// ※ 아무 곳에서나 정의하지 말 것!
// 영역의 상단에 정의하는 것을 권장.
function fnObjDec () {
  console.log('fnObjDec');
}

/**
 * --------------------------------
 * 배열(Array)
 * ----------------------------- */
// var arr = new Array(); // 배열 객체 생성

// 배열이 왜 필요한가?
// 변수는 하나의 데이터 값을 복사/참조
var member1 = '기중';
var member2 = '근희';
var member3 = '세진';
// 배열 데이터 유형은 여러 개 데이터 값을 집합 형태로 담을 수 있다.
// 그런 배열 데이터를 변수에 참조하게 되면 유용하게 자료들을
// 집합 형태로 관리할 수 있다.
// var members = new Array('기중', '근희', '세진');
// var members = new Array(); // []
var members = []; // 권장

members[0] = '기중';
members[1] = '근희';
members[2] = '세진';
// members[200] = '지훈'; // 숫자 유형으로 배열 원소를 추가하는 경우 발생하는 문제!!!!!
members.push('지훈');
members.push('현주');

console.log('members:', members); // [ '기중', '근희', '세진' ]
console.log('members[0]:', members[0]); // '기중'
console.log('members[1]:', members[1]); // '근희'
console.log('members[2]:', members[2]); // '세진'

// 자바스크립트 객체
var navigation = {
  'makedId': 13202,
  'class': 'Global Navigaiton Bar',
  'position': 'top',
  'items': [
    'Home',
    'About',
    'Works',
    'Contact'
  ],
  'created': false,
  'makeSubMenu': function() {
    console.log('서브 메뉴를 생성');
  }
}
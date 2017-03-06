/*! js-core.js © yamoo9.net, 2017 */

/**
 *  --------------------------------------------------------
 *  함수(Function)
 *  --------------------------------------------------------
 *  - 정의(선언)
 *  - 표현식
 *  - 확장
 *  - 호출
 *  - 반환/종료
 *  - 객체.메소드() -> 다른 객체가 빌려쓸 수 있다. [메소드 빌려쓰기 패턴]
 *  - 로컬 영역(Scope) -> 스코프 체이닝
 *  - 호이스팅(Hoisting)
 *  - 클로저(Closure)
 */

// 함수 선언문
function showMeTheMoney() {
  console.log('showMeTheMoney');
}

// 함수 표현식
// 변수에 함수 값을 참조하는 구문에서는 문장의 마지막에 세미콜론을 반드시 넣어주세요.
var getSomeMoney = function showAnyMoney(arg) {
  console.log('getSomeMoney? showAnyMoney?');
  // showAnyMoney('inner execution getSomeMoney()');
};

// 선언/참조(변수에)된 함수 호출
// showMeTheMoney();
// getSomeMoney();
// showAnyMoney(); // ??? 어떤 일이 발생하는가?



// 영역(Scope)
// 블록문({}): 별도의 영역을 가져아 하나, JavaScript 에서는 가지지 않는다.
// if, while, for 등등
{
  var anyone = '애니원'; // 블록({})문 안에 있으나, 전역 변수로 처리
}

console.log('anyone:', anyone); // '애니원'

// if문
var some_people; // undefined  <--- 호이스팅(Hoisting: 끌어올려지다)

if (some_people) {
  // var some_people = '행복한 사람들';
  some_people = '행복한 사람들';
} else {
  some_people = '행복하지 않은 사람들';
}

console.log('some_people:', some_people); // ??

// for문
// 호이스팅 처리된 구문으로 변경해보시오.
for (var i = document.querySelectorAll('a').length - 1; i >= 0; i--) {
  document.querySelectorAll('a')[i];
}

// ⬇︎

var links = document.querySelectorAll('a'),
    link,
    i     = links.length - 1

for (; i >= 0;) {
  link = links[i];
  console.log('link:', link);
  i--;
}

// ⬇︎

var links = document.querySelectorAll('a'),
    i     = links.length - 1,
    link  = null;

for ( ; (link = links[i]); ) {
  console.log('link:', link);
  i--;
}

/*! function.js © yamoo9.net, 2016 */

// JavaScript 함수를 작성하는 3가지 방법

// 0. 사용하지 말아야 할 방법
// var fn0 = new Function('console.log("%c 쓰지 말자!", \'font-weight: 900; color: hsl(171, 61%, 37%)\'); return "쓰지 말자!";');
// console.log('fn0():', fn0()); // 함수 실행

// 자바스크립트 호이스팅(Hoist: 끌어 올려진다) 현상 발생

// 1. 함수 선언문
console.log('fn1():', fn1());
function fn1() {
  console.log('%c 선언된 함수가 실행되었다.', 'font-weight: 900; color: hsl(171, 61%, 37%)');
  return '선언된 함수가 실행되었다.';
}

// 2. 함수 표현식
console.log('fn2():', fn2());
var fn2 = function() {
  console.log('%c 표현식(함수 리터럴)이 참조된 변수를 통해 함수가 실행되었다.', 'font-weight: 900; color: hsl(171, 61%, 37%)');
  return '표현식(함수 리터럴)이 참조된 변수를 통해 함수가 실행되었다.';
};

// 호이스팅 질문

var boo = true; // 전역 변수

var inScope = function () {
  if (boo) {
    if (boo) {
      console.log(boo); // true
      let boo = false;
    }
    console.log(boo); // true
  }
}

inScope();

console.log(boo); // ㅅ
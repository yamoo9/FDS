/*! bom.js © yamoo9.net, 2016 */

// 자바스크립트 변수는 변수 이름 앞에 var 키워드를 붙인다.

// [카멜케이스(camelCase) 표기식]
// 음절+음절 맡 다을 때 뒷 음절의 첫글자가 대문자가 되는 것을 말한다.

// Sass의 변수
// $dp: value;

// var device_pixel_density;
var dp = window.devicePixelRatio;

// 웹 브라우저의 콘솔(Console) 패널에 기록(Log)을 남긴다.
console.log('기기의 픽셀 농도:', dp);

// Sass 조건문
// @if dp > 1 {
//   @debug "고해상도 디스플레이의 픽셀 농도를 가집니다.";
// } @else {
//   @debug '일반 디스플레이의 픽셀 농도를 가집니다.';
// }

// JavaScript 조건문
if (dp > 1) {
  console.log("고해상도 디스플레이의 픽셀 농도를 가집니다.");
} else {
  console.log('일반 디스플레이의 픽셀 농도를 가집니다.');
}


/**
 * ------------------------------------
 * 웹 브라우저 창(window)의 화면 가로(세로) 폭
 * --------------------------------- */
var window_w = window.innerWidth;
var window_h = window.innerHeight;

console.log('window_w:', window_w);
console.log('window_h:', window_h);

/**
 * --------------------------------
 * window.scrollX
 * window.pageXOffset
 * window.scrollY
 * window.pageYOffset
 * ----------------------------- */
var window_scrollX = window.scrollX;
var window_scrollY = window.scrollY;

console.log('window_scrollX:', window_scrollX);
console.log('window_scrollY:', window_scrollY);

// 자바스크립트 변수 선언만 하는 경우. 즉, 값이 대입(할당)되지 않은 경우
// undefined 값이 기본으로 할당되어 있다.
var scrollY; // undefined

// window 전역 객체의 속성 중에 scrollTop이 있는가 확인?
if (window.scrollTop) {
  // = 연산자는 "할당(대입) 연산자"이다.
  // scrollTop 속성이 window 전역 객체에 존재한다면 (조건이 참(True))
  // scrollY 변수에 window.scrollTop이 가리키는 값을 할당한다.
  scrollY = window.scrollTop;
}
// 그렇지 않다면... (위 조건이 거짓(False)인 경우)
else {
  // scrollY 변수에 window.scrollY이 가리키는 값을 할당한다.
  scrollY = window.scrollY;
}
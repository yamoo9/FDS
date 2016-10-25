/*! this - context © yamoo9.net, 2016 */

// 웹 브라우저 환경에서 전역에서 this 참조는 어떤 객체를 가리키나?
// window {}

// 웹 브라우저 환경에서 전역에 선언된 함수(전역 함수)를 실행할 경우 this 참조는 어떤 객체를 가리키나?
// window {}

// 함수는 `누가 실행시켰나?, 어디 영역에서 실행되었나?`에 따라서 this 참조자가 바뀐다.


// 제가 설정했습니다. ^^;
window.name = '창';

// 전역에 정의된 전역 함수
// 전역 함수 getName은 결과적으로 window 객체의 getName 속성이다.
// 속성인데 값의 유형이 함수 객체이므로 이를 특별하게 메소드라 부른다.
function getName() {
  return this.name;
}

// console.log(getName === window.getName);

// 전역 함수 실행
console.log( getName() ); // this === window {}
console.log( window.getName() ); // this === window {}

// 사용자 정의 객체
var iPhone = {
  'name': '아이폰 7',
  'nickname': '제트 블랙',
  'maker': 'Apple Computer',
  'getName': getName
};

console.log('%c------------------------------', 'color: #3d9a21');

console.log( iPhone.getName() ); // this === iPhone {}
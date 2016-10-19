/*! core.js © yamoo9.net, 2016 */

// 느슨한 동등 비교와 엄격한 동등 비교

console.log("'' == '0':", '' == '0');
console.log("0 == '':", 0 == '');
console.log("0 == '0':", 0 == '0');
console.log("false == 'false':", false == 'false');
console.log("false == '0':", false == '0');
console.log("false == undefined:", false == undefined);
console.log("false == null:", false == null);
console.log("undefined == null:", undefined == null);

console.log('%c------------------------------', 'color: #3d9a21');

console.log("'' === '0':", '' === '0');
console.log("0 === '':", 0 === '');
console.log("0 === '0':", 0 === '0');
console.log("false === 'false':", false === 'false');
console.log("false === '0':", false === '0');
console.log("false === undefined:", false === undefined);
console.log("false === null:", false === null);
console.log("undefined === null:", undefined === null);

console.log('%c------------------------------', 'color: #3d9a21');

// 3항 연산자( ? : )를 사용한 조건문

// if ~ else 문
// if (true) { console.log('this is 참!'); }
// else { console.log('this is 거짓!'); }

// 3항 연산자 형태의 조건문으로 변경
// 조건 ? 참일 경우 실행되는 구문 : 거짓일 경우 실행되는 구문
// true ? console.log('this is 참!') : console.log('this is 거짓!');

true ?
  console.log('this is 참!') :
  console.log('this is 거짓!');

console.log('%c------------------------------', 'color: #3d9a21');

// 복잡한 형태의 3항 조건 연산문
var condition = 'ramos';

condition === 'hesus' ?
  console.log('He is Hesus.') :
  condition === 'Jeus' ?
    console.log('He is Jeus.') :
    condition === 'ramos' ?
      console.log('He is ramos.') :
      condition === 'juu' ?
        console.log('He is juu.') :
        condition === 'joeun' ?
          console.log('He is joeun.') :
          console.error('........');

// ※ 한 줄로 작성할 경우, 사람이 읽고 이해하기 쉽지 않다.
// 하지만 웹 서비스로 배포할 때는 코드를 압축하여 성능을 향상 시켜야 한다.
// condition === 'hesus' ? console.log('He is Hesus.') : condition === 'Jeus' ? console.log('He is Jeus.') : condition === 'ramos' ? console.log('He is ramos.') : condition === 'juu' ? console.log('He is juu.') : condition === 'joeun' ? console.log('He is joeun.') : console.error('........');



// 빈번하게 자주, 엄청 사용되는 논리 연산자를 활용한 조건문

// 일반적인 if() 조건 구문 내부에서의 논리 연산자
var count = 9;
if ( (count > 8 && count < 12) || !count ) {
  console.log('count 값은 8보다 크고, 12보다 작다.');
}

// if() 조건 구문 밖에서의 논리 연산자
// 함수 객체의 초기 매개변수 값을 설정할 때 빈번하게 사용
function getSomeMoney( money ) {

  if (money !== 0) {
    money = money || 100;
  }

  // if (money) {
  //   money = money;
  // } else {
  //   money = 100;
  // }

  // if (!money) {
  //   money = 100;
  // }

  // 조건에 사용될 값을 정확하게 전달 받았는지 검증
  // 유효성 검사(Validate Value)
  // if ( typeof money !== 'number' ) { console.error('숫자 값을 전달해줘!! Please'); }
  // if ( typeof money !== 'number' ) { throw new Error('숫자 값을 전달해줘!! Please'); }
  // 연산된 결과 값을 반환(Return)
  return '네가 원하는 돈의 양은 ' + money +'구나! 내가 줄거 같아?';
}

var result_message = getSomeMoney(0); // money = 100000000

console.log('result_message:', result_message);

console.log('%c------------------------------', 'color: #3d9a21');

// 정리!!!
// 논리 연산자 &&, ||
// 이들을 if() 조건 구문 내에서 사용하지 않을 경우,
// 다음과 같이 처리된다.
var condition = true;
var excuteFn = function() { console.log('condition is true.') };

condition && excuteFn();
// 위,아래 코드는 동일하게 처리된다.
if(condition) {
  excuteFn();
}

condition || excuteFn();
// 위,아래 코드는 동일하게 처리된다.
if(!condition) {
  excuteFn();
}

console.log('%c------------------------------', 'color: #3d9a21');

// 논리 연산자를 사용한 조건문이 자주 사용되는 경우는
// 변수에 값을 할당할 때 바로 조건 처리된 결과를 할당(복사 또는 참조) 받기 위해서이다.
var viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// 위, 아래 구문은 동일한 결과를 가져온다.

var viewport_width;

if ( window.innerWidth ) {
  viewport_width = window.innerWidth;
}
else if ( document.documentElement.clientWidth ) {
  viewport_width = document.documentElement.clientWidth;
}
else {
  viewport_width = document.body.clientWidth;
}

console.log('viewport_width:', viewport_width);

/**
 * --------------------------------
 * Switch Case Break Deafult 문
 */

var members = ['헐크', '아이언맨', '캡틴아메리카', '토르'];

switch( members[4] ) {
  case '헐크':
    console.log('헐크');
  break;
  case '아이언맨':
    console.log('아이언맨');
  break;
  case '캡틴아메리카':
    console.log('캡틴아메리카');
  break;
  case '토르':
    console.log('토르');
  break;
  default:
    console.log('슈퍼맨');
}


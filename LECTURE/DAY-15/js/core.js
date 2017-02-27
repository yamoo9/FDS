/*! core.js @ yamoo9.net | 2017 */

// 경우 1. 변수 = 값(복사)
// 복사되는 데이터 유형: 원시 데이터 유형(Primitive Data Type) - Number, String, Boolean, null, undefined

// 변수 선언 (이름 설정)
var pass_by_value, another_value;

// 변수에 값 할당
pass_by_value = 2017;              // 값 복사
another_value = pass_by_value; // 값 복사

// 변수 값 확인
//console.log('pass_by_value:', pass_by_value); // 2017
//console.log('another_value:', another_value); // 2017

// 둘 중 하나의 값을 다른 값으로 대체
pass_by_value = '오늘 하루도 행복하길'; // 기존에 담겨있던 숫자 값을 버리고, 새로운 문자 값을 복사
//console.log('pass_by_value:', pass_by_value); // '오늘 하루도 행복하길'
//console.log('another_value:', another_value); // 2017



// 경우 2. 변수 = 값(참조)
// 참조되는 데이터 유형: Function, Array, Object
var pass_by_reference, another_reference;

pass_by_reference = ['토르', '아이언맨', '캡틴 아메리카', '헐크']; // 배열 객체 참조
another_reference = pass_by_reference; // ['토르', '아이언맨', '캡틴 아메리카', '헐크'] 참조

//console.log('pass_by_reference:', pass_by_reference); // ['토르', '아이언맨', '캡틴 아메리카', '헐크']
//console.log('another_reference:', another_reference); // ['토르', '아이언맨', '캡틴 아메리카', '헐크']

// Avengers, Justice League

var avengers, justice_league;

avengers       = ['아이언맨', '토르', '헐크', '캡틴 아메리카'];
justice_league = avengers;

//console.log('avengers:', avengers);
//console.log('justice_league:', justice_league);

justice_league = ['슈퍼맨', '배트맨', '플래시', '원더우먼'];

//console.log('avengers:', avengers);
//console.log('justice_league:', justice_league);




// 변수(Variable) vs 상수(Constant)
var pen = '펜';
const FAST_CAMPUS = 'Academy';


// undefined VS null


// undefined의 경우

// 변수를 정의만 하고 값을 할당하지 않으면
// 변수의 초기 설정 값은 undefined 이다.
var special_one; // undefined
var normal_one;  // undefined

// 함수를 실행했을 때 return 값이 명시적이지 않다면
// 함수는 실행된 이후 undefined 를 반환한다.
function getSomeCoffee() {}
getSomeCoffee(); // undefined


// null의 경우
// 문서 객체의 이벤트 속성의 초기 설정 값은 null 이다.
var body = document.querySelector('body');
// 사용자에 의해 이벤트가 설정되지 않았다면 이벤트 속성 초기 값은 null
console.log(body.onclick); // null

// 문서에서 대상 객체를 찾으려 했으나, 존재하지 않는다면
// DOM API 메서드는 null을 반환한다.
var happy = document.querySelector('.happy'); // null

















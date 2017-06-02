// ——————————————————————————————————————
// JavaScript 문법과 데이터 유형
// ——————————————————————————————————————


// ——————————————————————————————————————
// 주석
// ——————————————————————————————————————
// single line comment

/*
  multi
  line
  comment
*/


// ——————————————————————————————————————
// 변수
// ——————————————————————————————————————
// JavaScript 변수(Variable) 선언, 값을 할당
// 무엇을 변수에 설정하고자 하는가?
// 오늘 점심은 뭘 먹지?

// 변수 선언
// 초기 값은 할당되지 않았다
var runch; // undefined

// 선언된 변수에 값을 할당
// 할당하는 역할을 수행하는 연산자 -> 할당(대입) 연산자

// runch = 김밥;   // 김밥 이라는 이름의 변수를 찾아요
// 선언된 변수가 없으면 참조 오류(Reference Error) 발생!
// Uncaught ReferenceError: 김밥 is not defined

runch = "김밥"; // 김밥 이라는 문자열 데이터를 찾아요
runch = '김밥'; // 상동

// 아래 영문의 경우도 마찬가지!
// runch = kimbab;
// runch = 'kimbab';


// 변수를 선언함과 동시에 값을 할당하는 구문
// var 변수_이름 = 값;
// var 변수_이름 = 다른_변수_이름; // 다른 변수에 할당된 값을 선언하는 변수에도 할당

// var dinner = '치맥'; // 점심에 먹은 것을 저녁에도 먹고 싶지 않아!
// var dinner = runch; // 점심에 먹은 것을 저녁에도 먹자!


// ——————————————————————————————————————
// 변수 이름 작성 규칙
// ——————————————————————————————————————
// 이름은 알아보기 쉽게, 이해하기 쉽게 명시적으로 지어야 한다.
// 이름은 직관적으로 그것이 무엇을 말하며, 무엇을 행할 수 있는지 알게 지어야 한다.

// 이름 지을 때 하지 말아야 할 것

// 1. 공백으로 이름이 구분되게 지어서는 안된다.
// var my name = 'yamoo9'; [X]

// 2. 이름을 지을 때 첫 글자가 숫자여서는 안된다.
// var 101Team = 'IoI'; [X]
// var 10px = 'Tem Pixel'; [X]

// 3. 이름 지을 때 사용할 수 있는 특수문자는 정해져 있다.
// _, $ 을 제외한 다른 특수문자는 사용할 수 없다.
// var Team-101 = 'IoI'; [X]
// var @design-people = '디자인 피플'; [X]

// 4. 대소문자를 구분하는 JavaScript에서는 이름을 지을 때 관례가 있다.
// 어긴다고 해서 문법에 오류가 발생하지는 않지만, 오래 전부터 내려오는 관습이 있다.

// 변수 이름은 _을 사용하여 이름을 구분한다.
// 패턴(Pattern): 사용 빈도가 높다.
// Single var pattern : var 변수 선언 키워드를 한 번만 사용하여 변수를 정의하는 패턴
var my_name, is_visible, has_children, remote_control;

// 함수 이름은 카멜 케이스(camelCase) 표기법을 사용한다.
// getName(), setAge(), showMeTheMoney(), blackSheepWall()

// 함수 이름의 첫글자가 대문자인 경우는 특별한 함수일 가능성이 높다.
// Navigation(), Tabs(), Carousel(), Component(), ..
// Vue() 도 마찬가지!


// ——————————————————————————————————————
// 변수 범위
// ——————————————————————————————————————

// JavaScript의 변수 범위(Scope)

// 전역 변수(Global Variable)
// 클라이언트 환경(Front-End)
// 전역 객체(Global Object): Window 객체
// 전역 변수란? 전역 객체의 속성이다.
// 모든 구역(Block)에서 접근(Access)이 가능한 변수
var type_of_my_phone = 'iPhone';
console.log('전역 변수:', type_of_my_phone); // 'iphone'

// 지역 변수(Local Variable)
// 특정한 구역(Block)에서만 접근이 가능한 변수
// Block 문
{
  var type_of_my_phone = 'Apple Device';
  console.log('블록 내부 변수:', type_of_my_phone); // 'Apple Device'
}

console.log('전역 변수는 블록 내부의 변수에 영향을 받았나?:', type_of_my_phone); // 'Apple Device' ?


// ——————————————————————————————————————
// 호이스팅(Hoisting)
// ——————————————————————————————————————
// 끌어올리다 (끌어올려지는 현상)
// 뭐가? 끌어올려지나?
// 변수가 끌어올려진다.

// ?????????
// var somthing; // undefined

console.log('is exist variable `somthing`?:', somthing);

var somthing = '썸씽~';


// ——————————————————————————————————————
// 상수(Constant)
// ——————————————————————————————————————
// 상수는 변수와 유사하나, 읽기 전용(Read Only)이다.
// 한 번 선언된 상수는 재 선언될 수 없다.
// 뿐만 아니라 다른 값을 할당하는 것도 불가능하다.
// 관례적으로 대문자로만 구성된 이름을 사용하여
// 변수와 구분 짓는다. (강제성 없음)

const IS_ROTATION_EARTH = true; // 대문자로 구성된 상수
const is_rotation_earth = true; // 소문자로 구성된 상수

console.log('IS_ROTATION_EARTH:', IS_ROTATION_EARTH);
console.log('is_rotation_earth:', is_rotation_earth);


// ——————————————————————————————————————
// 데이터 유형 (Data Types)
// ——————————————————————————————————————
// ES5 기준
// 원시 데이터 유형(Primitive Data Types)
// - undefined
// - null
// - Number       (정수, 실수, 소수)               0
// - String       홑따옴표, 쌍따옴표로 묶인 텍스트    ''
// - Boolean      true, false

// 참조 데이터 유형(Reference Data Types)
// - Function     수행을 위한 절차
// - Array        값의 집합
// - Object       속성의 집합


// String 문자 유형의 데이터
// 따옴표(큰,작은)로 묶인 텍스트
// 사용할 때 유의점
// 따옴표의 시작과 끝이 같은 유형이어야 한다.
// 문자 데이터 유형을 구분짓기 위한 따옴표가 아닌,
// 문자로서의 따옴표의 경우는 이스케이스(Escape) 처리해야 한다.

// 다음과 같은 HTML 코드를 문자 데이터 유형으로 처리하려면?
// <p class="message" title="달리기 기록">나의 하프 마라톤 기록은 50" 23'이다.</p>

// 큰 따옴표 사용 시
var message_html = "<p class=\"message\" title=\"달리기 기록\">나의 하프 마라톤 기록은 50\" 23'이다.</p>";

// 작은 따옴표 사용 시
var message_html = '<p class="message" title="달리기 기록">나의 하프 마라톤 기록은 50" 23\'이다.</p>';


// ——————————————————————————————————————
// 데이터 유형 변경(자동)
// (유)형 변환
// ——————————————————————————————————————

// JavaScript는 동적 데이터 유형 처리 언어이기 때문
// 변수를 사용하여 런타임(실시간, 웹 브라우저에서 실행 중인 상황) 중에 값의 유형을 변경할 수 있다.

// 변수 선언 시에 문자 유형의 데이터 값을 변수에 할당했지만,
var process_my_work = '논리에 기반한 선별적 디자인 프로세스';

// 웹 브라우저에서 실행 중인 상황에 사용자의 코드에 따라 값의 유형이 바뀔 수 있다. (너무나 쉽게)
// process_my_work = false;          // 문자 -> 불리언 으로 변경
// process_my_work = function() {};  // 불리언 -> 함수 로 변경


// 동적 할당 언어인 JavaScript에서 유의할 점!
var a, b, c;

a = 10;
b = 7;
c = a + b; // 17

a = 10;
b = '칠'; // 사용자가 잘못된 유형을 입력한 경우!!!
c = a + b; // '10칠' 의도치 않는 결과를 가져온다.

// Single var pattern
// var x, y, z;

// x = 'X';
// y = 'Y';
// z = 'Z';

var x = 'X',
    y = 'Y',
    z = 'Z';


// 미리 살펴보는 DOM Script!
// DOM Script 에서 Single var pattern을 사용한 예시
var html = window.document.documentElement,
    head = window.document.head,
    body = window.document.body;

console.log('html:', html);
console.log('head:', head);
console.log('body:', body);


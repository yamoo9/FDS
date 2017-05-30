// ——————————————————————————————————————
// JavaScript 데이터 유형
// JavaScript 데이터 형 변환
// JavaScript 데이터 유형 검증(Check)
// JavaScript 데이터 유형 검증의 문제점
// JavaScript 데이터 유형 검증의 해결책
// ——————————————————————————————————————

// 변수 선언, 값 할당
// 상수 변수와 유사하지만, 한 번만 선언, 값 할당 가능 (런타임 중에 수정 불가능)

// ——————————————————————————————————————
// JavaScript 데이터 유형
// ——————————————————————————————————————
// 원시 유형의 데이터
// Number
var num = 291029304;
// String
var str = 'morning food';
// Boolean
var boo = false;
// null
const NULL = null;
// undefined
const UNDEFINED = undefined;

// 참조 유형의 데이터
// Object
var glass = {}; // new Object()
// Function
var watchGlass = function(){}; // new Function()
// Array
var glasses = []; // new Array()


// ——————————————————————————————————————
// JavaScript 데이터 형 변환
// ——————————————————————————————————————
console.groupCollapsed('숫자 데이터 ➡︎ 문자 데이터로 변경되는 사례');
// 숫자 데이터 - 문자 데이터로 변경되는 사례
console.log('num:', num);
// String(숫자데이터)    => "문자데이터"
var convert_num_to_str_case1 = String(num);
console.log('String(num):', convert_num_to_str_case1);
console.log('타입:: String(num):', typeof convert_num_to_str_case1);
// 숫자데이터 + ''       => "문자데이터"
var convert_num_to_str_case2 = num + '';
console.log('num + \'\':', convert_num_to_str_case2);
console.log('타입:: num + \'\':', typeof convert_num_to_str_case2);
// 숫자데이터.toString() => "문자데이터"
var convert_num_to_str_case3 = num.toString();
console.log('num.toString():', convert_num_to_str_case3);
console.log('타입:: num.toString():', typeof convert_num_to_str_case3);
console.groupEnd('숫자 데이터 ➡︎ 문자 데이터로 변경되는 사례');


// ——————————————————————————————————————
// 문자 데이터 ➡︎ 숫자 데이터로 변경되는 사례
// 1. Number(문자데이터(숫자형)) 함수  e.g) "23412"
console.groupCollapsed('문자 데이터(숫자만 포함한 문자) ➡︎ 숫자 데이터로 변경되는 사례');
console.log('Number(convert_num_to_str_case3):', Number(convert_num_to_str_case3));
console.log('typeof Number(convert_num_to_str_case3):', typeof Number(convert_num_to_str_case3));
// 2. -, *, / => '12343124' - 0 = 12343124
console.log('convert_num_to_str_case3 - 0:', convert_num_to_str_case3 - 0);
console.log('convert_num_to_str_case3 * 1:', convert_num_to_str_case3 * 1);
console.log('convert_num_to_str_case3 / 1:', convert_num_to_str_case3 / 1);
// 3. +문자데이터(숫자형) => 숫자데이터  e.g) +"23412"
console.log('+convert_num_to_str_case3:', +convert_num_to_str_case3);
console.groupEnd('문자 데이터(숫자만 포함한 문자) ➡︎ 숫자 데이터로 변경되는 사례');


// ———————————————————————————————————————————————————————————
// 문자 데이터(숫자 + 문자를 포함하는 문자) ➡︎ 숫자 데이터로 변경되는 사례
console.groupCollapsed('문자 데이터(숫자 + 문자를 포함하는 문자) ➡︎ 숫자 데이터로 변경되는 사례');

var news_font_size = '16.6345px';

// JavaScript 내장 함수 parseInt(), parseFloat()
// window.parseInt(단위를포함하는문자, 진수)   <= 단위를 제거하고 정수 값 반환
var convert_news_font_size_to_int = window.parseInt(news_font_size, 10); // 16
console.log('convert_news_font_size_to_int:', convert_news_font_size_to_int);
// window.parseFloat(단위를포함하는문자, 진수) <= 단위를 제거하고 실수 값 반환
var convert_news_font_size_to_float = window.parseFloat(news_font_size, 10); // 16
console.log('convert_news_font_size_to_float:', convert_news_font_size_to_float);
console.groupEnd('문자 데이터(숫자 + 문자를 포함하는 문자) ➡︎ 숫자 데이터로 변경되는 사례');


// ———————————————————————————————————————————————————————————
// 데이터 ➡︎ 불리언 데이터로 변경되는 사례
console.groupCollapsed('데이터 ➡︎ 불리언 데이터로 변경되는 사례');
// 1. Boolean(데이터) 함수 => 불리언 데이터로 변경
console.log('Boolean(num):', Boolean(num));
console.log('Boolean(0):', Boolean(0));     // 0 은 false 로 변경
console.log('Boolean(str):', Boolean(str)); // 공백문자 "" 은 false 로 변경
console.log('Boolean(""):', Boolean(""));
console.log('Boolean(" "):', Boolean(" ")); // " " 은 true 로 변경
console.log('Boolean(glass):', Boolean(glass));
console.log('Boolean(glasses):', Boolean(glasses));
console.log('Boolean(watchGlass):', Boolean(watchGlass));
console.log('%c--------------------------------', 'color: #2367fc'); // 구분자
// 2. !! (부정의 부정 === 긍정) => 불리언 데이터로 변경
console.log('!!num:', !!num);
console.log('!!0:', !!0);     // 0 은 false 로 변경
console.log('!!str:', !!str); // 공백문자 "" 은 false 로 변경
console.log('!!"":', !!"");
console.log('!!" ":', !!" "); // " " 은 true 로 변경
console.log('!!glass:', !!glass);
console.log('!!glasses:', !!glasses);
console.log('!!watchGlass:', !!watchGlass);
console.groupEnd('데이터 ➡︎ 불리언 데이터로 변경되는 사례');


// ——————————————————————————————————————
// null, undefined 형 변환 체크
// ——————————————————————————————————————

console.groupCollapsed('null, undefined 형 변환 체크');
// !!
console.log('!!null:', !!null);
console.log('!!undefined:', !!undefined);
// !
console.log('!null:', !null);
console.log('!undefined:', !undefined);
// + ''
console.log('null + \'\':', null + '');
console.log('typeof (null + \'\'):', typeof (null + ''));
console.log('undefined + \'\':', undefined + '');
console.log('typeof (undefined + \'\'):', typeof (undefined + ''));
// String()
console.log('String(null):', String(null));
console.log('typeof String(null):', typeof String(null));
console.log('String(undefined):', String(undefined));
console.log('typeof String(undefined):', typeof String(undefined));
// null + 숫자
console.log('null + 10:', null + 10);
console.log('undefined + 10:', undefined + 10);
// Number()
console.log('Number(null):', Number(null));
console.log('Number(undefined):', Number(undefined));

console.groupEnd('null, undefined 형 변환 체크');


// —————————————————————————————————————————————————————————————
// 배열 객체 <- 생성자를 통해 객체를 생성
//
// 생성자란? (일반적으로 JavaScript 에서 앞 글자가 대문자인 함수)
// Number(), String(), Boolean(), Function(), Array(), Object()
//
// 객체 생성을 위한 문법
// var 생성된_객체를_참조할_변수 = new 생성자()
// `생성된_객체를_참조할_변수` 에는 `생성된 객체`가 참조됨.
//
// 추상적인 (설계) -> 실존하는 실체(객체)
// 와플빵 틀(붕어빵 틀) -> 와플빵(붕어빵)
// Carousel        -> Carousel {}
// —————————————————————————————————————————————————————————————

console.groupCollapsed('Array 리터럴');

// JavaScript 에서 객체를 생성하는 정식 구문
// 숫자 생성자 함수를 통해 숫자 객체를 생성하는 방법
var minimum = new Number(10); // Number {}
// console.log(minimum);
minimum = 10; // 숫자 리터럴 (마치 숫자 객체인 것처럼 처리)
// 문자 생성자 함수를 통해 문자 객체를 생성하는 방법
var school_msg = new String('오늘 인터넷은 잘 터지나?'); // String {}
console.log('school_msg.valueOf():', school_msg.valueOf());
// 불리언 생성자 함수를 통해 불리언 객체를 생성하는 방법
var is_hungry = new Boolean(true); // Boolean {}
console.log('is_hungry.valueOf():', is_hungry.valueOf());
// 함수 생성자 함수를 통해 함수 객체를 생성하는 방법
var eatRunch = new Function('console.log("와구 와구 먹는다.")'); // Function {}
// function(){}
// 배열 생성자 함수를 통해 배열 객체를 생성하는 방법
var favorite_collection = new Array('국자', '밥숟가락'); // Array {}
// ['국자', '밥숟가락'] 배열 리터럴
// 객체 생성자 함수를 통해 객체 객체를 생성하는 방법
var audi = new Object(); // Object {}
// {}


// 변수는 하나의 데이터만 담을 수 있다.
// 그렇기 때문에 다른 데이터가 담기면 이전 데이터는 메모리에서 소멸된다.
// 자바스크립트 메모리 관리???? [          ]이 한다.
// "가비지 콜렉터"

// 배열을 활용하는 예시
// 데이터 중, 배열은 다수의 데이터를 담을 수 있다.
// 변수 하나에 다수의 데이터를 담을 수 있는 배열을 담으면
// 데이터 관리에 용이하다.

// convert_num_to_str_case1 === String(909)
// convert_num_to_str_case2 === 808 + ''
// convert_num_to_str_case3 === (707).toString()

// var convert_string_from_number = new Array();
var convert_string_from_number = [];

convert_string_from_number[0] = String(909);
convert_string_from_number[1] = 808 + '';
convert_string_from_number[2] = (707).toString();

console.log('convert_string_from_number.length:', convert_string_from_number.length);

// 위와 같은 방법 (인덱스 숫자를 사용하는) 말고, 아래와 같이 배열 객체의 메서드(능력)를 사용하길!
console.group('Array 객체의 push() 메서드 사용');
convert_string_from_number.push('1001');
console.log("convert_string_from_number.push('1001');");
convert_string_from_number.push('9003');
console.log("convert_string_from_number.push('9003');");
console.groupEnd('Array 객체의 push() 메서드 사용');

console.log('convert_string_from_number.length:', convert_string_from_number.length);

console.groupEnd('Array 리터럴');

// ——————————————————————————————————————
// 배열 객체
// 연관형 배열 표기법
// Array['key'] = value;
// ——————————————————————————————————————

console.groupCollapsed('연관형 배열과 length');

// 배열 리터럴을 사용하여 변수 music_list에 배열 객체를 참조
var music_list = [];

// 인덱스를 사용하여 원소을 추가(Add Item)
music_list[0] = '데칼코마니';
music_list[1] = '러시안 룰렛';
music_list[2] = '나야 나';

console.log('music_list.length:', music_list.length); // 3

// 문자 key 값을 사용하여 새로운 원소를 추가
music_list['author']   = 'yamoo9';
music_list['maker']    = 'YG';
music_list['location'] = 'Seoul';

console.log('%c--------------------------------', 'color: #cfcfcf');

console.log("music_list['author']   = 'yamoo9'");
console.log("music_list['maker']    = 'YG'");
console.log("music_list['location'] = 'Seoul'");

console.log('%c--------------------------------', 'color: #cfcfcf');

console.log('music_list.length:', music_list.length); // 6 ?

console.dir(music_list);

console.groupEnd('연관형 배열과 length');


// ——————————————————————————————————————
// 값 복사(pass by value)
// 값 참조(pass by reference)
// ——————————————————————————————————————

// 값 복사(pass by value)가 이루어지는 데이터 유형은?
// 원시 데이터 유형
// number, string, boolean, null, undefined
console.groupCollapsed('값 복사(pass by value)');
// 변수 n1을 선언한 후, 값으로 숫자 리터럴(값) 99를 할당한다.
// 변수 n1을 선언한 후, 숫자 값 99를 변수 n1에 복사한다.
var n1 = 99;
// 변수 k2를 선언한 후, n1 변수에 복사된 숫자 값 99를 복사한다.
var k2 = n1;
console.log('n1:', n1);
console.log('k2:', k2);

console.log('n1 값을 수정한 후 ------------------------');

// 가설: n1, k2에 복사된 숫자 데이터는 같은 값으로 보이나, 서로 다른 값이다.
// 증명: n1의 데이터 값을 변경했을 때, k2는 변화가 없어야 한다.
n1 = n1 * n1;
console.log('n1:', n1);
console.log('k2:', k2);
console.groupEnd('값 복사(pass by value)');


// 값 참조(pass by reference)가 이루어지는 데이터 유형은?
// 참조형 데이터 유형
// 함수, 배열, 객체
console.groupCollapsed('값 참조(pass by reference)');

var playlist = music_list;
console.log('music_list:', music_list);
console.log('playlist:', playlist);

console.log('playlist를 변경하면? music_list는 어떻게 될까?');

// 가설: music_list, playlist에 참조된 데이터는 같은 값이다.
// 증명: music_list 또는 playlist의 데이터 값을 변경했을 때, 값을 동시에 변경된다. (동일한 값이기에)

playlist.push('루키'); // length: 4
music_list.author = 'mike';

console.log('music_list:', music_list);
console.log('playlist:', playlist);

console.groupEnd('값 참조(pass by reference)');


// ——————————————————————————————————————
// 함수 객체 (Function Object)
// ——————————————————————————————————————

// 함수 선언문과 함수 표현식. 그리고 호이스팅(Hoisting)

// 함수 호이스트 현상
// 함수 선언문은 영역의 최상위로 몸체가 모두 이동한다.
// 함수 표현식은 `var 함수이름;` 만 영역의 최상위로 이동한다.

// 아래 함수를 실행했을 때,
// 호이스트 현상이 발생하여 doIt()의 경우는 실행되나,
// sendMail() 함수의 경우는 오류가 발생한다.

// doIt();
// sendMail();

// 0. 함수 생성자를 통해 함수 객체를 생성
// 아래와 같은 방법은 사용하지 않는 것이 좋다.
var myFn = new Function('console.log("create function object from function constructor.")');

// 1. 함수 선언문: 함수 이름 선언
// function doIt(){} 몸체가 모두 영역 최상위로 끌어올려진다.
function doIt(){
  console.log('do it!');
}

// 2. 함수 표현식: 변수에 함수 표현식(함수 리터럴)을 할당
// var sendMail; 구문만 영역 최상위로 끌어올려진다.
var sendMail = function() {
  console.log('Send Mail to you');
};


// ————————————————————————————————————————————————————————
// 기본 객체 (Plain Object)
// `속성(key): 값(value)` 쌍(Pair)으로 구성된 집합체(데이터 덩어리)
// ————————————————————————————————————————————————————————

var init_style_of_body = {
  // 속성(key): 값(value)
  'margin'      : 0,
  'font-size'   : '14px',
  lineHeight    : 1.5,
  letterSpacing : 0.04 + 'em',
  color         : '#313233'
};

// 변수
var legs = 4;

// 객체의 속성(객체가 소유한 변수)
var animal = {};

// animal 객체의 legs 속성에 숫자 값 4를 복사
animal.legs = 4;

// legs 변수에 복사된 숫자 값 4를 animal 객체의 legs 속성에 복사
animal.legs = legs;


// ——————————————————————————————————————
// 객체의 리터럴 속성을 출력하는 방법
// 값 복사/참조
// ——————————————————————————————————————
var circle = 8;
var brand_makers = ['KIA', 'Hyundai', 'Samsung', 'Google'];
var getMaker = function(brand_index) {
  return brand_makers[brand_index];
};

var loreo = {
  engine: 'V8',
  wheels: circle,
  showMaker: getMaker
};


// ——————————————————————————————————————
// 객체의 속성을 제거할 수 있나?
// ——————————————————————————————————————
// delete 객체.속성; // true
delete loreo.wheels; // true

// 전역객체인 window 객체의 속성은 제거할 수 없다.
// 전역을 오염시키는 행위는 안티 패턴이다.
// 전역에 변수를 선언하는 행위를 최소화 하세요.


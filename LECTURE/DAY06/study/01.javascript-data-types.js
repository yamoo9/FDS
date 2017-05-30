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

console.group('null, undefined 형 변환 체크');
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
// 배열 객체 <- 생성자를 통해객체를 생성
// 생성자란? (일반적으로 JavaScript 에서 앞 글자가 대문자인 함수)
// Number(), String(), Boolean(), Function(), Array(), Object()
//
// 객체 생성을 위한 문법
// var 생성된_객체를_참조할_변수 = new 생성자()
// `생성된_객체를_참조할_변수` 에는 `생성된 객체`가 참조됨.
// —————————————————————————————————————————————————————————————
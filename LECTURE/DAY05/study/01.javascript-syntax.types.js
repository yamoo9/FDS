// ——————————————————————————————————————
// JavaScript 문법과 데이터 유형
// ——————————————————————————————————————

// single line comment

/*
  multi
  line
  comment
*/



// JavaScript 변수(Variable) 선언, 값을 할당
// 무엇을 변수에 설정하고자 하는가?
// 오늘 점심은 뭘 먹지?

// 변수 선언
// 초기 값은 할당되지 않았다
var runch; // undefined

// 선언된 변수에 값을 할당
// 할당하는 역할을 수행하는 연산자 -> 할당(대입) 연산자

runch = 김밥;   // 김밥 이라는 이름의 변수를 찾아요
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


// 변수 이름 작성 규칙
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
// Vue()
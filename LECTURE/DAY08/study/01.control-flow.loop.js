/*! 01.control-flow.loop.js @ 2017, yamoo9.net */

// ——————————————————————————————————————
// 흐름 제어와 오류 처리
// ——————————————————————————————————————

// ---------------------------------------
// if...else, else if

console.groupCollapsed('if 문');

// 상태(Data State)
var is_opened = true;

// 정석적인 if ... else 문
// {} 블록문 내에 var 변수 선언이 있을 경우 주의! (호이스트 현상)
if ( is_opened ) {
  var is_closed = false;
}
console.log(is_closed); // ??

if ( is_opened ) {
  // 열려져 있는 상태 -> 닫힌 상태
  // 상태 변경
  is_opened = false;
  // is_opened = !is_opened;
} else {
  // 닫힌 상태 -> 열린 상태
  is_opened = true;
  // is_opened = !is_opened;
}

// if ... else 구문을 한 줄로 줄여 사용한 형태
is_opened = !is_opened; // open <- toggle -> close

/**
 * 문자 값을 사용하여 비교한 조건문
 */

// 동작 상태 2개 이상: 'play', 'pause', 'stop', ...
var music_player_state = 'navigation previous song';

// 뮤직 플레이어의 현재 상태를 조건으로 물어본 후,
// 해당 상태를 뮤직 플레이어 LCD에 디스플레이 한다.
// if ... else if ... else 를 사용하여 조건문을 완성하시오.

// 조건 1 확인
if ( music_player_state === 'play' ) {
  console.log('music player state is: PLAY');
}
// 조건 1이 거짓이면, 조건 2를 확인
else if ( music_player_state === 'pause' ) {
  console.log('music player state is: PAUSE');
}
// 조건 2가 거짓이면, 조건 3를 확인
else if ( music_player_state === 'stop' ) {
  console.log('music player state is: STOP');
} else { // 조건 1, 2, 3 모두 거짓이면 실행
  console.log('music player state is: UNKNOWN');
}


/**
 * 배열, 객체를 사용한 비교문
 */
var state_manager = [
  {
    'state': 'play',
    'message': 'video state is: PLAY'
  },
  {
    'state': 'pause',
    'message': 'video state is: PAUSE'
  },
  {
    'state': 'stop',
    'message': 'video state is: STOP'
  },
  {
    'state': 'unknown',
    'message': 'video state is: UNKNOWN'
  }
];

// 4: 0 ~ 3
var video_obj = state_manager[randomNumber( state_manager.length )];

if ( isType(video_obj, 'object') ) {

  if ( video_obj.state === 'play' ) {
    console.log( video_obj.message );
  }
  else if ( video_obj.state === 'pause' ) {
    console.log( video_obj.message );
  }
  else if ( video_obj.state === 'stop' ) {
    console.log( video_obj.message );
  } else {
    console.log( video_obj.message );
  }

}

console.groupEnd('if 문');


// ---------------------------------------
// switch...case, default, break

if ( isType(video_obj, 'object') ) {
  console.groupCollapsed('switch문');

  // CASE 1
  switch(video_obj.state) {
    case 'play':
      console.log('play', video_obj.message );
    break;
    case 'pause':
      console.log('pause', video_obj.message );
    break;
    case 'stop':
      console.log('stop',  video_obj.message );
    break;
    default:
      console.log( video_obj.message );
  }
  // CASE 2
  switch(video_obj.state) {
    case 'play':
    case 'pause':
    case 'stop':
    default:
      console.log( video_obj.message );
  }

  console.groupEnd('switch문');

}


console.groupCollapsed('고전 예제: 요일 출력');

var weekdays = ["일", "월", "화", "수", "목", "금", "토"];
var today    = new Date();
var weekday  = today.getDay();
var printDay = function(day) {
  validateError(day, '!string','전달인자 유형은 문자열이어야 합니다.');
  return '오늘은 ' + day + '요일입니다';
};

console.log('// if문');
if ( weekday === 0 ) { console.log(printDay(weekdays[0])); }
else if ( weekday === 1 ) { console.log(printDay(weekdays[1])); }
else if ( weekday === 2 ) { console.log(printDay(weekdays[2])); }
else if ( weekday === 3 ) { console.log(printDay(weekdays[3])); }
else if ( weekday === 4 ) { console.log(printDay(weekdays[4])); }
else if ( weekday === 5 ) { console.log(printDay(weekdays[5])); }
else if ( weekday === 6 ) { console.log(printDay(weekdays[6])); }
else { console.warn('존재하지 않는 요일입니다'); }

console.log('// switch문');
switch(weekday) {
  case 0: console.log(printDay(weekdays[0])); break;
  case 1: console.log(printDay(weekdays[1])); break;
  case 2: console.log(printDay(weekdays[2])); break;
  case 3: console.log(printDay(weekdays[3])); break;
  case 4: console.log(printDay(weekdays[4])); break;
  case 5: console.log(printDay(weekdays[5])); break;
  case 6: console.log(printDay(weekdays[6])); break;
  default: console.warn('존재하지 않는 요일입니다');
}

console.groupEnd('고전 예제: 요일 출력');


console.groupCollapsed('예제 응용: 월/수/금은 시간이 됩니다.');

console.log('// if문');
weekday = 6;
if (
  weekday === 1 ||
  weekday === 3 ||
  weekday === 5
) {
  console.log('월/수/금은 시간이 됩니다.');
}
else {
  console.warn('월/수/금 외에는 시간이 안됩니다.');
}

console.log('// switch문');
switch(weekday) {
  case 1:
  case 3:
  case 5:
    console.log('월/수/금은 시간이 됩니다.');
  break;
  default:
    console.warn('월/수/금 외에는 시간이 안됩니다.');
}

console.groupEnd('예제 응용: 월/수/금은 시간이 됩니다.');

// ---------------------------------------
// 3항 연산식
// ? :
console.groupCollapsed('3항 연산자 식 VS if 문');

// 식(Expression)
var result_message = isType(weekday, 'string') ? 'weekday is String.' : 'weekday isn\'t String.';
console.log('연산 결과:', result_message);

// 문(Statement)
var today_is = null;
if ( isType(today, 'date') ) {
  today_is = 'Date Object';
} else {
  today_is = 'Not Date Object';
}
console.log(today_is);

console.groupEnd('3항 연산자 식 VS if 문');


console.groupCollapsed('3항 연산자 식 VS switch 문');

var current_year    = today.getFullYear();
var current_year_is = null;
console.log('// switch 문');
switch( type(current_year) ) {
  case 'number':
    current_year_is = 'This is Number Type.';
  break;
  case 'string':
    current_year_is = 'This is String Type.';
  break;
  case 'boolean':
    current_year_is = 'This is Boolean Type.';
  break;
  case 'function':
    current_year_is = 'This is Function Type.';
  break;
  case 'array':
    current_year_is = 'This is Array Type.';
  break;
  case 'object':
    current_year_is = 'This is Object Type.';
  break;
  default:
    current_year_is = 'This is not Number, String, Boolean, Function, Array, Object Type.';
}

console.log('switch 문 결과:', current_year_is);

console.log('// 3항 연산자 식');
var _type = type(new Date()); // type(current_year);
var current_year_is =
  (_type === 'number') ?
    'This is Number Type.' :
    (_type === 'string') ?
    'This is String Type.' :
      (_type === 'boolean') ?
        'This is Boolean Type.' :
        (_type === 'function') ?
          'This is Function Type.' :
          (_type === 'array') ?
            'This is Array Type.' :
            (_type === 'object') ?
              'This is Object Type.' :
              'This is not Number, String, Boolean, Function, Array, Object Type.';

console.log('3항 연산식 결과:', current_year_is);

console.groupEnd('3항 연산자 식 VS switch 문');


// ---------------------------------------
// try/catch/finally, throw
console.groupCollapsed('try/catch/finally, throw');

// try {
//   // 명령이 실행되었을 때
//   // 오류가 발생하지 않았거나
//   // 오류가 발생했거나
//   var last_weekday = weekday.pop(); // 오타 발생!
//   console.log('last_weekday:', last_weekday);
// } catch(error) {
//   // throw  VS  console.error()
//   // console.error()와 달리 throw는 뒤 구문을 중단한다.
//   // console.error(error.message); // 오류 잡아서 오류 메시지 출력
//   throw error.message;
//   last_weekday = weekdays.pop();
//   console.log(last_weekday);
// }

console.groupEnd('try/catch/finally, throw');



// ——————————————————————————————————————
// 반복문
// ——————————————————————————————————————

// ---------------------------------------
// while

// ---------------------------------------
// break/continue

// break 는 멈춘다.
// continue 현재 실행되는 부분만 점핑해서 넘어간다.
// 문 내부의 명령 순서에 따라 결과가 달라질 수 있다.

console.groupCollapsed('while 문');

// 초기 값
var k = 9;

// 조건 확인
// 조건 값이 참이면 {} 실행
while ( k > 0 ) {
  // break 또는 continue를 설정할 조건
  // 9, 7, 5, 3, 1
  // if ( k < 6 ) {
  //   break;
  // }
  // 값 변경
  // 조건이 거짓이 되는 순간이 와서
  // 논리 오류에 빠져 무한 반복되지 않는다.
  k = k - 2;
  if ( k === 5 ) {
    continue;
  }
  console.log('k:', k);
}

console.log('--------------------');

var math = Math;
var count = 0;

while( isType(math, 'math') ) {
  console.log('count:', count);
  console.log('Math is 수학 객체');
  // 0, 1, 2, 3, 4
  if ( count++ >= 4 ) {
    // math = new Error(); // Error {} 생성
    break;
  }
  // count = count + 1;
  // count += 1;
  // count++;
  // ++count;
}

console.groupEnd('while 문');


// ---------------------------------------
// do...while

console.groupCollapsed('do...while문');

var data_collection = [ null, {}, 9, '집합', false, [], function(){} ];
var n = data_collection.length;

// data_collection 아이템을 역방향 순환하되,
// 아이템 유형이 함수이면 반복을 중지한다.
// 단, 아이템 유형이 함수일지라도 1회는 아이템 유형 값을 반드시 출력하라.
do {
  console.log( type(data_collection[--n]) );
} while( !isType(data_collection[n], 'function') );

console.groupEnd('do...while문');


console.groupCollapsed('while문: data.js 데이터 순환 필터링');

// classUsingArray
  // school을 다닌 적이 없는 사람을 제외한 사람들을 필터링하라.

var len = classUsingArray.length;      // 10
var classmate, filteredClassmate = []; // undefined

// while ( --len > -1 ) {
while ( len-- ) {
  classmate = classUsingArray[len];
  if ( !isType( classmate.school, 'null' ) ) {
    filteredClassmate.push(classmate);
  }
}

console.log('filteredClassmate:', filteredClassmate);

console.groupEnd('while문: data.js 데이터 순환 필터링');



// ---------------------------------------
// for

console.groupCollapsed('for문');

// for(초기선언; 값비교검증; 값변화) {
// 검증 결과가 참일 때, 반복 수행
// }

for ( var k=9; k>0; --k ) {
  if ( k === 5 ) {
    continue;
  }
  console.log('k:', k);
}

console.groupEnd('for문');

console.groupCollapsed('for문: data.js classUsingArray 순환처리 필터링');

console.time('for문(정상적인 방법)');
for ( var classmate, i=0, l=classUsingArray.length, filteredClassmate = []; i<l; ++i ) {
  classmate = classUsingArray[i];
  if ( !isType(classmate.school, 'null') ) {
    filteredClassmate.push(classmate);
  }
}
console.log('filteredClassmate:', filteredClassmate);
console.timeEnd('for문(정상적인 방법)');

console.time('for문(변칙적인 방법)');
var len = classUsingArray.length,
    filteredClassmate = [],
    classmate;

for ( ; (classmate = classUsingArray[--len]); ) {
  if ( !isType( classmate.school, 'null' ) ) {
    filteredClassmate.push(classmate);
  }
}
console.log('filteredClassmate:', filteredClassmate);
console.timeEnd('for문(변칙적인 방법)');

console.groupEnd('for문: data.js classUsingArray 순환처리 필터링');



// ---------------------------------------
// for...in

console.group('for...in문');

var han = classUsingObject.한진아;
// console.log('han:', han);

// '속성' in 객체
// console.log('"age" in han:', "age" in han);
// console.log('"grooming" in han:', "grooming" in han);

// 객체의 속성을 순환하여 처리해보자.
// 객체는 배열과 달리 length 속성이 존재하지 않는다.
// 하여 객체를 순환하려면 for...in 문을 사용한다.
// 배열 또한 for...in문을 사용할 수 있으나,
// 속도가 느려 for문을 사용하는 것이 좋다.

console.groupCollapsed('han 객체 순환 처리');

for ( var prop in han ) {
  // 객체 자신이 소유한 속성인지를 판단하여
  // 자신의 속성일 경우만 출력하라.
  if ( han.hasOwnProperty(prop) ) {
    // han 객체의 속성 prop을 순환하여 처리한다.
    console.log('han 객체의 속성:', prop);
    // han.age === han['age']
    // 순환 과정에서 속성 이름을 알 수 없기에,
    // 변수를 사용한 객체 속성 접근법을 사용해야 한다.
    // han[prop]
    console.log('han 객체의 값:', han[prop]);
  }
}

console.groupEnd('han 객체 순환 처리');

console.groupCollapsed('classUsingObject 객체 순환 처리');

// console.log('type(classUsingObject):', type(classUsingObject));

for ( var member in classUsingObject ) {
  if ( classUsingObject.hasOwnProperty(member) ) {
    var value = classUsingObject[member];
    console.log('member:', member);
    // console.log('value:', value);
  }
}

console.groupEnd('classUsingObject 객체 순환 처리');


console.group('객체 상속과 for...in, 객체.hasOwnProperty()');

// 객체(부모)
var parent = {
  name: '김훈남',
  age: 67,
  job: '농부',
  drive: function(mobil) {
    mobil = mobil || '경운기';
    return this.job + '인 ' + this.name + '씨가 ' + mobil + '을(를) 타고 드라이브 합니다.';
  }
};

// 객체(자식) <- 부모객체의 능력을 상속(Inheritance)
var child = Object.create(parent);
// 자식 객체에 속성을 추가 (부모 객체에는 없는 속성)
child.game_console = 'Sony Playstation 4';
child.friends = ['토니', '미키', '와사비'];

console.group('hasOwnProperty()를 사용하지 않았을 경우');

for ( var prop in child ) {
  console.log(prop);
}

console.groupEnd('hasOwnProperty()를 사용하지 않았을 경우');

console.group('hasOwnProperty()를 사용한 경우');

for ( var prop in child ) {
  if ( child.hasOwnProperty(prop) ) {
    console.log(prop);
  }
}

console.groupEnd('hasOwnProperty()를 사용한 경우');



console.groupEnd('객체 상속과 for...in, 객체.hasOwnProperty()');

console.groupEnd('for...in문');
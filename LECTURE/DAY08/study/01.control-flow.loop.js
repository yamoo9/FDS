/*! 01.control-flow.loop.js @ 2017, yamoo9.net */

// ——————————————————————————————————————
// 흐름 제어와 오류 처리
// ——————————————————————————————————————

// ---------------------------------------
// if...else, else if


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


// ---------------------------------------
// switch...case, default, break

// ---------------------------------------
// try/catch/throw


// ——————————————————————————————————————
// 반복문
// ——————————————————————————————————————

// ---------------------------------------
// for

// ---------------------------------------
// while

// ---------------------------------------
// do...while

// ---------------------------------------
// break/continue

// ---------------------------------------
// for...in
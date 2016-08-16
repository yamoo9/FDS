// JavaScript Loop Statement

// -------------------------------------------
// while문

// var boo = true, m = 10;

// while(boo) {
//   console.log(boo ? '참참참!' : '짝짝짝!');
//   // if (--m < 0) { // 9,8,7,6,5,4,3,2,1
//   if (m-- < 0) { // 10,9,8,7,6,5,4,3,2,1
//     boo = !boo;
//   }
// }

// -------------------------------------------
// do ~ while 문

var boo = !true, m = 10;

do {
  // console.log(boo ? '참참참!' : '짝짝짝!');
  // if (--m > 0) { // 9,8,7,6,5,4,3,2,1
  if (m-- < 0) { // 10,9,8,7,6,5,4,3,2,1
    boo = !boo;
  }
} while(boo);


// -------------------------------------------
// for 문
// 실행 흐름 순서를 기억하라.
for( var i=0, boo=false; i < 10; i++ ) {
  // if ( i === 9 ) {
  //   boo = !boo;
  // }
  // ↓ 위 코드는 아래처럼 변경 가능하다.
  // boo = i === 9 ? !boo : boo;

  // console.log( boo ? '참참참!' : '짝짝짝!' );
  // ↕ 코드를 병합하면 .... 아래처럼 코드를 변경할 수 있다.
  console.log( (i === 9 ? !boo : boo) ? '참참참!' : '짝짝짝!' );
}


// var demo_container = query(".demo-container");

// // console.log(demo_container.firstChild);

// var demo_container_first_el = firstEl(demo_container);

// console.log(demo_container_first_el);
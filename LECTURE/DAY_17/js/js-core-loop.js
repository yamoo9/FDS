/**
 * --------------------------------
 * 순환(Loop) 처리 제어
 * --------------------------------
 * while() {}
 * do {} ~ while()
 * for() {}     // Array, Like Array Object
 * for( in ) {} // length???, Object
 * forEach()
 * ----------------------------- */

// 1. if () {}   VS   while() {}

var arr = ['one', 'two', 'three'];

// 조건이 참일 동안 계속 반복해서 실행
while (arr.length) {
  // 조건(상태) 변경
  // 조건을 확인할 변수 생성
  // 미션. 'two'를 제외한 나머지를 콘솔에 기록하시오.
  var item = arr.shift();
  if (item !== 'two') {
    console.log('this is ' + item);
  }
}

// 전달된 요소노드의 부모를 찾는다.
// 기본적으로 한단계 위의 부모노드를 찾아 반환
// 하지만, 2번째인자(옵션)를 전달하면
// 해당 깊이(Depth)의 부모를 찾아 반환
// parent(el_node, depth)
// parent( query('li') );    // <ul>, <ol>
// parent( query('li'), 2 ); // <body>

// --------------------------
// while() {} --> do {} while();

// do {
//   var item = arr.shift();
//   if ( item !== 'two' ) {
//     console.log('this is ' + item);
//   }
// } while ( arr.length );


//  조건이 거짓일 경우 코드 블록이 수행되지 않음
while (false) {
  console.log('this is thisis.');
}

//  조건이 거짓일지라도, 1회는 반드시 실행
do {
  console.log('this is thisis. :-)');
} while (false);

// --------------------------
// for(변수선언;조건확인;변수값변화) {}

var i = 0; // 반복자
while (i < 10) {
  console.log('i:', i);
  i++;
}

for (var i = 0; i < 10; i++) {
  console.log('i:', i);
}

var lis = queryAll('ul li');

for (var m = 0; m < lis.length; m++) {
  var li = lis.item(m);
  console.log(li);
}

var m = 0;

for (; m < lis.length;) {
  var li = lis.item(m);
  console.log(li);
  m++;
}

for (var m = 0, l = lis.length; m < l; m++) {
  var li = lis.item(m);
  console.log(li);
}

for (var m = lis.length - 1; m >= 0; m--) {
  var li = lis.item(m);
  console.log(li);
}

var obj = {
  a: 1,
  b: true,
  c: []
};

for (var prop in obj) {
  console.log(prop);
}

// if ( !kkey ) {
function kkeys(obj) {
  var props = [];
  for (var prop in obj) {
    props.push(prop);
  }
  return props;
}
// }

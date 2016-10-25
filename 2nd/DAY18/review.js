/*! review.js © yamoo9.net, 2016 */

////////////////////
// 자바스크립트 반복문 //
////////////////////

// ES 3
// while( condition ) { ... }
var condition = true, count = 0;
while (condition) {
  // 코드 블록 반복 수행
  // if ( count++ > 3 ) { // 0, 1, 2, 3, 4
  if ( ++count > 3 ) { // 1, 2, 3, 4
    condition = !condition;
  }
  console.log('count:', count);
}

// do { ... } while( condition );
do {
  if ( ++count > 3 ) {
    condition = !condition;
  }
} while (condition);
console.log('count:', count); // ??

// for ( ; ; ) { ... }
// 1부터 100까지 숫자를 합한 값을 for문으로 구하시오.
for ( var i=0; i<10; i++ ) {
  console.log('i:', i);
}
console.log('i:', i); // 10

for ( var count = 0, condition = true; condition; ) {
  // 코드 블록 반복 수행
  // if ( count++ > 3 ) { // 0, 1, 2, 3, 4
  if ( ++count > 3 ) { // 1, 2, 3, 4
    condition = !condition;
  }
  console.log('count:', count); // 1, 2, 3, 4
}

// for ( var property in object ) { ... }

var fds = {}; // 객체 리터럴(값)
fds.name = 'Front-End Develop SCHOOL';
// fds['name'] = fds.name;

// 위 두 표기법은 객체의 속성에 접근하는 방법으로 역할 상의 차이는 없다.
// 다만 각괄호([]) 표기법에서는 내부의 속성 이름을 변수로 설정할 수 있다.
// 그런 이유로 for ~ in 문 내부에서는 각괄호 표기법을 사용한다.

// '속성' in 객체(`{}`)
console.log( fds['name'], 'name' in fds );

for ( var prop in fds ) {
  console.log('prop:', prop); // name
  console.log('fds[prop]:', fds[prop]); // 'Front-End Develop SCHOOL'
  console.log('fds[prop] === fds.name:', fds.name); // 'Front-End Develop SCHOOL'
}

var kijoong = {
  'name': '기중',
  'role': '학생',
  'age': 20,
  'height': '2m 30cm',
  'weight': '32kg'
};

for (var p in kijoong) {
  console.log('속성: ' + p + ', 값: ' + kijoong[p]);
}

// ES 5 (2009)
// [].forEach(function(item, index){ ... });
// [].map(function(item, index){ ... });

// ES 6 (ECMA Script 2015)
// for ( var [key, value] of [Array, Object, Map] ) { ... }
/*! 자바스크립트 반복문 © yamoo9.net, 2016 */

// 자바스크립트 조건문
// 1. if, else if, else
// 2. switch case break default
// 3. ? :
// 4. &&, ||

// 자바스크립트 반복문
// 1. while
// 조건이 참인 동안(while condition is true) 코드 반복 실행
var num = 14;
while ( num < 10 ) {
  console.log('num:', num); // 0, 1, 2, ..., 9
  // num = num + 1; // 1, ..., 10
  // num += 1;
  num++; // +1
}

console.log('num:', num); // 10

// 2. do ~ while
// while문과 유사하나, while문과 달리 조건이 거짓일지라도 1회는 반드시 수행
var num2 = 14;
do {
  console.log('num2:', num2);
  num2 = num2 - 2;
} while ( num2 > 10 );

// 3. for
// i = iterator 반복자 https://goo.gl/3T6ctt
// for문의 실행 흐름
for (var i=20; i > 10; i--) {
  console.log('in > i:', i); // 0, 1, 2, ..., 9
}

console.log('out > i:', i);

// 위 코드와 아래 코드는 동일하게 동작한다.

var k=20;
for (; k > 10;) {
  console.log('in > k:', k); // 0, 1, 2, ..., 9
  k--;
}
console.log('out > k:', k);

// 2차원 for문
// 구구단 출력하기
for (var i=2; i<10; i+=1) {
  console.log(i+'단 -----------------------'); // 2,3,4단
  for (var m=1; m < 10; m++ ) {
    console.log(i + ' × ' + m + ' = ' + i * m); // 값
  }
}

// 별 찍기
for ( var i=0, star=''; i<10; i++ ) {
  star += '*';
  console.log(star);
}

// 좋아하는 숫자만 골라내기 프로그래밍
var numbers = [1, 2, 3, 4, 5];
var like_nums = []; // 3, 5

for ( var i=0, l=numbers.length; i<l; i++ ) {
  var num = numbers[i]; // 1, 2, 3, 4, 5
  if ( num % 3 !== 0 || num % 5 !== 0 ) { continue; }
  // if ( num === 3 || num === 5 ) {
  //   like_nums.push(num);
  // }
  like_nums.push(num);
}

// 4. for ~ in

// for문 : array, like array
var arr = [1, 2, 7, 9, 10];
console.log('arr.length:', arr.length);

// console.log('obj.length:', obj.length);

// for ~ in문: object
var obj = {name: '객체', age: '21년'}
obj.computer = 'Apple Computer';
obj.keyboard = true;
obj.getKey = function() {
  return this.keyboard;
};

for ( var prop in obj ) {
  var value = obj[prop];
  console.log('prop:', prop);
  console.log('value:', value);
}

// 5. forEach
// 6. map
// 7. for ~ of


/*! loop-function.js © yamoo9.net, 2016 */

// ------------------------------------------
// 자바스크립트 반복문
// ------------------------------------------
// 1.1. while
// 1.2. do ~ while
// 2.1. for
// 2.2. for ~ in [Object]
// 2.3. forEach  [Array] ECMASCript 5 Edition
// 2.4. for ~ of [Array] ECMAScript 2015

// DEMO:
// forEach 구문
var movielist = [];

movielist.push('터널');
movielist.push('덕혜옹주');
movielist.push('부산행');
movielist.push('서울역');

// console.log(movielist);

// for문
for( var i=0, l=movielist.length; i<l; i+=1 ) {
  // console.log('for 문의 결과: ', movielist[i]);
}

// for - in문
for ( var index in movielist ) {
  if( movielist.hasOwnProperty(index) ) {
    // console.log('for - in 문의 결과: ', movielist[index]);
  }
}

// for - of문
for ( var movie of movielist ) {
  // console.log('for - of 문의 결과: ', movie);
}

// 배열 객체(Array)의 메소드: .forEach(원소, 순서, 배열)
// .forEach() 문은 반환 값이 없다. (undefined)
// 참고 URL: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
movielist.forEach(function(item, idx) {
  // console.log('item '+ idx +': ', item);
  return 'item '+ idx +': ' + item;
});

console.log('movielist.forEach() 결과: ', movielist);

// 배열 객체(Array)의 메소드: .map(원소, 순서, 배열)
// .map()의 반환 값은 수정된 배열을 반환한다.
// 참고 URL: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
var new_movielist = movielist.map(function(item, index, arr) {
  // console.log(item + '은 ' + index + '번째 원소입니다.');
  return item + '은 ' + index + '번째 원소입니다.';
  // console.log('item' + index + ':', item);
  // if ( index === movielist.length - 1 ) {
  //   console.log('arr:', arr);
  // }
});

console.log('movielist.map() 결과: ', new_movielist);


// ------------------------------------------
// 자바스크립트 함수
// ------------------------------------------
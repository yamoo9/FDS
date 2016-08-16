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
  // console.log( (i === 9 ? !boo : boo) ? '참참참!' : '짝짝짝!' );
}

// for문 continue를 사용해보는 예제
var fruits = ['바나나', true,'딸기', false, '포도', null, '수박'];
fruits.push(function(){});
fruits.push({ 'name': 'object'});



// 미션! fruits 변수에 참조된 데이터 (배열)에는 과일이 아닌 것들이 포함되어 있습니다.
// 이를 for문을 사용하여 불필요한 데이터를 뺀 실제 과일만 담은 배열을 반환하시오.
var real_fruits = [],
    fruit,
    k = 0,
    o = fruits.length;

for ( ; k<o; k=k+1 ) {
  fruit = fruits[k];
  if( isType(fruit) !== 'string' ) {
    // console.log(fruit);
    continue;
  }
  real_fruits.push(fruit);
}

// console.log(real_fruits);

// continue 실전 예제
// <body> 요소의 자식노드 중, <script>, #text 노드가 아닌 요소노드를 찾아
// el_collection 배열에 수집하라.

var collection = document.body.childNodes;

for ( var el_collection=[], i = collection.length - 1; collection[i]; i-- ) {
   let node = collection[i];
   if( isTextNode(node) || isElName(node,'script') ) { // #text, <script> (ㅇ)
       // continue;
       break;
   }
   el_collection.push(node); // #text, <script> (x)
}

// console.log( el_collection );


// break 예제
var units = 'px em rem % vw vh vmin vmax'.split(' ');
var unit;
var i = 0;
var l = units.length;

var demo_container = query('.demo-container');
var get_value = getStyle(demo_container, 'margin-bottom');

// getUnit( getStyle(demo_container, 'margin-bottom') );

// function hasUnit(){}
function getUnit(value){
  var i=0,l=getUnit.units.length,unit;
  var reg;
  for ( ; i<l; i++ ) {
    unit = getUnit.units[i];
    if ( value.indexOf(unit) > -1) {
      break;
    }
  }
  return unit;
}
// 함수 또한 객체이기 때문에 속성을 가질 수 있다.
getUnit.units = 'px rem em % vw vh vmin vmax'.split(' ');

for( ; i<l; i++ ) {
  unit = units[i];
  // console.log( get_value.indexOf(unit) > -1 );
  if ( get_value.indexOf(unit) > -1 ) {
    // 특정 단위가 존재한다.

  }
  // console.log(unit);
}

// ECMAScript 2015 <for ~ of>
// for ( let unit of units ) {
//   console.log(unit);
// }
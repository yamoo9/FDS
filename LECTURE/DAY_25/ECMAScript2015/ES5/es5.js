'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _a;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*! ECMAScript2015(ES6).js © yamoo9.net, 2017 */

// - [Babel](http://babeljs.io/)
// - [ES6 호환성 테이블](http://kangax.github.io/compat-table/es6/)
// - [ECMAScript 2015 (ES6)](https://github.com/yamoo9/FDS/blob/3rd_FDS/REFERENCES/ECMAScript2015.md)
// - [Airbnb JavaScript 스타일 가이드](https://github.com/tipjs/javascript-style-guide)
// - [ESDoc: 문서화 도구](https://esdoc.org/)


////////////////
// let, const //
////////////////

// let, const 키워드로 선언된 변수,상수는 블록 스코프(Block Scope)를 가진다.
// let, const 키워드로 선언된 변수,상수는 스코프 최상단으로 호이스팅(끌어올림)되지 않는다.
// IIFE 패턴을 사용하여 함수 스코프를 사용하지 않아도, 지역 변수를 생성할 수 있다.

// 기존 ES5 코드 환경에서는 var 키워드를 남겨두는 것이 좋다.
// ECMAScript2015+ 환경에서는 var 보다는 let, const 키워드 사용을 권장한다.
// https://github.com/tipjs/javascript-style-guide#2.1

// 강제적으로 변하지 않게(Force Immutability) 하고자 할 경우, Object.freeze()를 사용한다.


/////////////////////////
// String Additions    //
/////////////////////////
// string.includes()   //
// string.startsWith() //
// string.endsWith()   //
// string.repeat()     //
/////////////////////////

// < e.g) 1: AudioCtrl.hasSign() >


// < e.g) 2: Comment(-=-= . =-=-, =>=>=> . <=<=<=) >


//////////////////////
// Array Additions  //
//////////////////////
// array.find()     //
// array.includes() //
// array.fill()     //
// array.keys()     //
// array.values()   //
// array.entries()  //
//////////////////////


//////////////////////
// Template Strings //
//////////////////////

// 이스케이프(Escape) 문자열 처리 해결
// < e.g) audio_control_demo.js >

// 보간법(Interpolation, ${}) 활용 가능 (Like Sass)
// HTML 템플릿(Template) 작성에 탁월!
// Vue JS 프레임워크에서 유용하게 활용하게 됨.


////////////////////
// Arrow Function //
////////////////////

// JavaScript 함수 내부에서 this 참조는 실행 시에 동적으로 변경된다.
// 이로 인해 의도치 않은 실수가 발생할 수 있는데 화살표 함수를 사용하면 this 참조가
// 문맥으로 유지되기 때문에 실수를 미연에 방지할 수 있다.

(function () {
  'use strict';
  // this === undefined

  console.log(this);
})();

// VS

(function () {
  'use strict';
  // this === 상위 영역의 this 참조

  console.log(undefined);
})();

////////////////////////
// Default Parameters //
////////////////////////

// 함수 매개변수 초기 값을 설정할 수 있다. (Like Sass)
// 함수 매개변수 값을 외부의 함수 결과 값으로 처리할 수도 있다.
// < e.g) defaultDiscount() >


///////////////////////////////
// Rest or Spread Parameters //
///////////////////////////////

// 나머지(rest) ------------------------------------------------------------------
// 함수 정의 시, 매개변수 값 앞에 ...을 붙이는 경우

// < e.g) sum() >

// Array.prototype.reduce
// [].reduce(function(이전값,현재값){},초기값);
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


// 펼치다(spread) ----------------------------------------------------------------
// 함수 실행 시, 전달인자 앞에 ...을 붙이는 경우

// 배열 ➤ 개별 값 변경 처리
// []  ➤ ...numbers

var a1 = void 0,
    a2 = void 0,
    a3 = void 0;

a1 = [3, 5, 8];
a2 = [55, 88];
// 기존 방식
// a1.splice(2, 0, a2[0], a2[1]);
// spread 방식으로 인자 전달하면 배열 데이터의 원소를 각각 풀어서 제공한다.
(_a = a1).splice.apply(_a, [2, 0].concat(_toConsumableArray(a2)));

/////////////////////////
// Object Enhancements //
/////////////////////////

// < e.g) 1 >
function getPerson() {
  var name = 'Hoon';
  var job = 'Instructor';
  return {
    name: name,
    job: job,
    greeting: function greeting(you) {
      var message = 'Hello, ' + you + '.';
      message += ' My Name is ' + this.name + ' and My Job is ' + this.job;
      return message;
    }
  };
}

// ES6

// let getPerson = ()=> {
//   let name='Hoon', job='Instructor';
//   return {
//     name, job,
//     greeting(you){
//       let message = `Hello, ${you}.`;
//       message += `My Name is ${this.name} and My Job is ${this.job}.`;
//       return message;
//     }
//   };
// };

// console.log( getPerson().name );
// console.log( getPerson().greeting('Hey Min') );


var age = 10,
    name = "열",
    job = "열열";

var json_data = {
  name: name, age: age, job: job,
  getName: function getName() {},
  setAge: function setAge() {},
  jobChange: function jobChange() {}
};

///////////////////////////
// Classes & Inheritance //
///////////////////////////

// < e.g) 1: 생성자 함수 ➤ 클래스 문법 활용 >
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/class
// class 본문(body)은 엄격 모드에서 실행됩니다.
// 함수 선언과 달리, class 선언은 호이스팅되지 않습니다.
// ⏣ 다시 말해, ES6에 추가된 let, const, class 등은 호이스팅 되지 않습니다.

// class       //
// constructor //
// static      //
// get         //
// set         //
// extends     //
// super       //

// 생성자 함수
function User(name, email) {
  this.name = name;
  this.email = email;
}
// 스태틱 메서드
User.register = function (name, email) {
  return new User(name, email);
};
// 프로토타입 메서드(인스턴스 메서드)
User.prototype.changeEmail = function (new_mail) {
  this.email = new_mail;
};

// User
// users = [ new User, new User, new User ]
// users.find(user=>user.isAdmin).name


// < e.g) 2: AudioCtrl 생성자 함수 ➤ 클래스 문법 활용 >

// < e.g) 3: Custom Element API >
// 사용자설정 요소 v1: 재사용 가능한 웹 구성 요소 | https://goo.gl/DBLw9t
// https://blog.risingstack.com/writing-a-javascript-framework-the-benefits-of-custom-elements/


////////////////////////////
// ECMAScript2015 Modules //
////////////////////////////

// CommonJS ----------------------------------------------------------------------
// http://www.commonjs.org/
// module.exports = {};
// let module = require('module');

// AMD ---------------------------------------------------------------------------
// http://requirejs.org/docs/whyamd.html#amd
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modularjavascript
// define('module',[],function(){});
// require(['module1', 'module2'], function(module1, module2){});

// UMD ---------------------------------------------------------------------------
// https://github.com/umdjs/umd
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    // Node/CommonJS
  } else {
      // Browser globals
    }
})(function () {});

// ES2015
// include ~ from
// export
// default

// export let module_prop = '';
// export fn = function() {};
// export class ClassName {};
// export default ClassName;


///////////////////
// Destructuring //
///////////////////

// < e.g) 1: 블록 스코프 내에서 디스트럭쳐링 활용 >
var product = {
  name: 'TV',
  maker: 'LG',
  features: ['Time Recoding', 'Sharing Screen', 'Speech Recognition'],
  productionYear: 2017
};

{
  var _name = product.name;
  var maker = product.maker;
  var features = product.features;
  var productionYear = product.productionYear;
}

// < e.g) 2: 함수 매개변수에 디스트럭쳐링 활용 >
function greet(person) {
  var name = person.name;
  var message = person.message;
  return 'Hi! I\'m ' + name + '. Today is ' + message;
}

greet({
  name: 'Jin Ho',
  age: 22,
  results: ['phone', 'notebook'],
  count: 31,
  message: 'Good Day! :-)'
});

// < e.g) 3: 모듈 로드 시, 필요한 모듈 속성만 디스트럭쳐링 활용 >
// import { 속성1, 속성2 } from '모듈'


//////////////////////////////////
// Module Bundling with Webpack //
//////////////////////////////////

// webpack.md 참고


/////////////
// Promise //
/////////////

// let timer = new Promise(function(resolve, reject) {
//   console.log('프로미스 초기화(Promise Initialization)');
//   window.setTimeout(function() {
//     console.log('타임아웃 실행(Timeout Done).');
//     resolve();
//   }, 3000);
// });

// timer.then(function() {
//   console.log('타이머 종료(Finish Timer)');
// });

// --------------------------------------------------------------

// var setTimer = (length)=> {
//   return new Promise((resolve, reject)=> {
//     console.log('프로미스 초기화');
//     window.setTimeout(()=> {
//       console.log('타임아웃');
//       resolve();
//     });
//   }, length);
// };

// setTimer(2000).then(()=> console.log('모두 실행'));

// --------------------------------------------------------------

// axios는 프로미스 기반 Ajax 라이브러리
// let promise = axios.get('/employees');
// promise.then(function(data) {});
// promise.catch(function(error) {});


//////////
// Sets //
//////////

// new Set()
// .add
// .has
// .delete
// .clear
// .size
// .values
// .forEach
// [...(new Set('css', 'javascript', 'vue'))].filter(item=>item.length===3);


////////////////
// Generators //
////////////////

// function* numbers() {

//   console.log('Begin');

//   yield 1; // Paused
//   yield 2; // Paused
//   yield 3; // Paused

// }

// let iterator = numbers();

// console.log(iterator.next());
// Object {
//   done: false,
//   value: 1
// }
// console.log(iterator.next());
// Object {
//   done: false,
//   value: 2
// }
// console.log(iterator.next());
// Object {
//   done: false,
//   value: 3
// }
// console.log(iterator.next());
// Object {
//   done: true,
//   value: undefined
// }

// -------------------------------------------------------------------------------


// function *range(start, end) {
//   while(start < end) {
//     yield start; // paused
//   }
//   start++;
// }

// let range_iterator = range(1, 5);

// console.log(range_iterator.next()); // { done: false, value: 1 }
// console.log(range_iterator.next()); // { done: false, value: 2 }
// console.log(range_iterator.next()); // { done: false, value: 3 }
// console.log(range_iterator.next()); // { done: false, value: 4 }
// console.log(range_iterator.next()); // { done: true, value: undefined }

// for ( let value of range_iterator ) {
//  console.log(value); // 1, 2, 3, 4, 5
// }

// [...range(10, 100)];

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

// (function(){
//     'use strict';
//     // this === undefined
//     console.log(this);
// })();

// VS

// (()=>{
//     'use strict';
//     // this === 상위 영역의 this 참조
//     console.log(this);
// })();


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

let a1, a2, a3;

a1 = [3, 5, 8];
a2 = [55, 88];
// 기존 방식
// a1.splice(2, 0, a2[0], a2[1]);
// spread 방식으로 인자 전달하면 배열 데이터의 원소를 각각 풀어서 제공한다.
a1.splice(2, 0, ...a2);


/////////////////////////
// Object Enhancements //
/////////////////////////

// < e.g) 1 >
function getPerson() {
  let name = 'Hoon';
  let job  = 'Instructor';
  return {
    // name: name,
    // job: job,
    get name() {},
    set name(new_name) {},
    get job() {},
    set job(new_job) {},
    greeting: function(you) {
      let message = 'Hello, ' + you + '.';
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


let age = 10, name = "열", job = "열열";

let json_data = {
   name, age, job,
   getName() {},
   setAge() {},
   jobChange() {}
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

// ES5
// 생성자 함수
// Constructor Function
// function User(name, email) {
//   this.name = name;
//   this.email = email;
// }
// 스태틱 메서드
// Static Methods
// User.register = function(name, email) {
//   return new User(name, email);
// };
// 프로토타입 메서드(인스턴스 메서드)
// Instance Methods
// User.prototype.changeEmail = function(new_mail) {
//   this.email = new_mail;
// };

// ES6
class User {
  constructor(name, email, isAdmin) {
    this.name    = name;
    this.email   = email;
    this.isAdmin = isAdmin;
  }
  static register(...params) {
    return new User(...params);
  }
  changeEmail(new_mail) {
    this.email = new_mail;
  }
}

// user 관리 배열 데이터 생성
let user_list = [];
// 배열에 멤버 추가
user_list.push(User.register('a', 'a@acon.com', false));
user_list.push(User.register('v', 'v@fds.net', true));
user_list.push(User.register('j', 'j@jjcamp.com', false));

// ES5
// user_list.find(function(user){
//   return user.email === 'dondong@a.mail';
// });

// ⬇︎

// ES6, Step 1
// user_list.find((user)=>{
//   return user.email === 'dondong@a.mail';
// });
// ES6, Step 2
// user_list.find(user=>{
//   return user.email === 'dondong@a.mail';
// });
// ES6, Step 3
user_list.find(user=>user.isAdmin); // return value
user_list.findIndex(user=>user.isAdmin); // return index

// filter
let user_not_admin = user_list.filter(user=>!user.isAdmin);




// User
// users = [ new User, new User, new User ]
// users.find(user=>user.isAdmin).name


// < e.g) 2: AudioCtrl 생성자 함수 ➤ 클래스 문법 활용 >

// 상속(Inheritance)

class Animal {
  constructor(legs = 4, wings = 0) {
    this.legs = legs;
    this.wings = wings;
  }
  eat() {}
  sleep() {}
  run() {}
}

// class Duck extends Animal {
//   constructor(type) {
//     super(2, 2);
//     this.type = type;
//   }
//   fly() {}
// }
// class Dog extends Animal {}
// class Elephant extends Animal {}


// < e.g) 3: Custom Element API >
// 사용자설정 요소 v1: 재사용 가능한 웹 구성 요소 | https://goo.gl/DBLw9t
// https://blog.risingstack.com/writing-a-javascript-framework-the-benefits-of-custom-elements/

let _nickname = new WeakMap();

// < e.g) 4: getter, setter >
class Duck extends Animal {
  constructor(type, nickname) {
    super(2, 2);
    // Public
    this.type = type;
    // WeakMap 사용하여 비공개 멤버 등록
    _nickname.set(this, nickname);
  }
  // getter
  get nickname() {
    return _nickname.get(this) || undefined;
  }
  // setter
  set nickname(new_name) {
    if ( new_name === _nickname.get(this) ) {
      console.info('이미 별명이 같습니다.');
    } else if (new_name) {
      _nickname.set(this, new_name);
    }
  }
  fly() {}
}

let gold_duck = new Duck('황금 알을 낳는 오리');

gold_duck.nickname; // undefined
gold_duck.nickname = '황금 둥이';
// gold_duck.nickname = '황금 둥이';

// REST API Service
// Ajax <-> json
// HTTP Request Methods
// GET, POST, PUT, DELETE
// Front-End <-> json-server <json or js>
// json-server : API
// myjson.com, firebase


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
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
    } else {
        // Browser globals
    }
}(function(){}));

// ES2015
// import {show, call, moment} from 'module'
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
let product = {
  productName    : 'TV',
  maker          : 'LG',
  features       : [ 'Time Recoding', 'Sharing Screen', 'Speech Recognition' ],
  productionYear : 2017
};

let { productName, maker, features } = product;

// {
//   let name           = product.name;
//   let maker          = product.maker;
//   let features       = product.features;
//   let productionYear = product.productionYear;
// }

// < e.g) 2: 함수 매개변수에 디스트럭쳐링 활용 >
function greet(person) {
  let name    = person.name;
  let message = person.message;
  return 'Hi! I\'m ' + name + '. Today is ' + message;
}

greet({
  name: 'Jin Ho',
  age: 22,
  results: [ 'phone', 'notebook' ],
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

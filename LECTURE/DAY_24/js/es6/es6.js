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
// {
//   let is_block_var = true;
//   console.log('block scope:', is_block_var);
// }
// console.log('global scope:', is_block_var);
// let, const 키워드로 선언된 변수,상수는 스코프 최상단으로 호이스팅(끌어올림)되지 않는다.
// {
  // if (typeof version === 'undefined') {
  //   let version = 'es6';
  // }
  // console.log(version);
// }

// {
//     if (!version) {
//         console.log('version hoisting!');
//     }

//     let version = 'es6';
// }
// console.log(version);

// IIFE 패턴을 사용하여 함수 스코프를 사용하지 않아도, 지역 변수를 생성할 수 있다.

// {
//   let fn = function() {}
//   var o = {
//     f: fn
//   };
// }

// console.log(o.f);

// 기존 ES5 코드 환경에서는 var 키워드를 남겨두는 것이 좋다.
// 하위 호환 유지
// ECMAScript2015+ 환경에서는 var 보다는 let, const 키워드 사용을 권장한다.
// https://github.com/tipjs/javascript-style-guide#2.1

// 강제적으로 변하지 않게(Force Immutability) 하고자 할 경우, Object.freeze()를 사용한다.

const shy = ['부끄 부끄'];


////////////////////////
// String Additions   //
////////////////////////
// string.includes()   //
// string.startsWith() //
// string.endsWith()   //
// string.repeat()     //
////////////////////////

// if (!String.prototype.includes) {
//   String.prototype.includes = (value)=> {
//     return this.indexOf(value) > -1;
//   };
// }

// String { includes, startsWith, endsWith, repeat }

'hi, there. coffee is smell good'.startsWith('hi, there');  // true
'hi, there. coffee is smell good'.startsWith('coffee');     // false
'hi, there. coffee is smell good'.startsWith('coffee', 11); // true

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
let unknown = `${unknown}t`;

let o = {
  'cover'  : `003.Zayn&TaylorSwift-${unknown}tWannaLiveForever(FiftyShadesDarker).jpg`,
  'source' : `003.Zayn&TaylorSwift-${unknown}tWannaLiveForever(FiftyShadesDarker).mp3`,
  'alt'    : `I Don't Wanna Live Forever (Fifty Shades Darker)`
};

// 보간법(Interpolation) 활용 가능 (Like Sass)

let ooo = {
  'cover'  : `003.Zayn&TaylorSwift-${unknown}WannaLiveForever(FiftyShadesDarker).jpg`,
  'source' : `003.Zayn&TaylorSwift-${unknown}tWannaLiveForever(FiftyShadesDarker).mp3`,
  'alt'    : `I Don't Wanna Live Forever (Fifty Shades Darker)`
};
// HTML 템플릿(Template) 작성에 탁월!
// Vue JS 프레임워크에서 유용하게 활용하게 됨.
// new Vue({
//   'el': '.element',
//   'template': `
//     <ul class="js-libraries">
//       <li class="active"><a href="#!jquery">jQuery</a></li>
//       <li><a href="#!dojo">Dojo</a></li>
//       <li><a href="#!mootools">Mootools</a></li>
//       <li><a href="#!yui">YUI</a></li>
//       <li><a href="#!axios">axios</a></li>
//     </ul>
//   `
// })




////////////////////
// Arrow Function //
////////////////////

// JavaScript 함수 내부에서 this 참조는 실행 시에 동적으로 변경된다.
// 이로 인해 의도치 않은 실수가 발생할 수 있는데 화살표 함수를 사용하면 this 참조가
// 문맥으로 유지되기 때문에 실수를 미연에 방지할 수 있다.

// AudioCtrl.prototype.create = function() {
//   var audio = document.createElement('audio');
//   var options = this.options;
//   var source = options.src;
//   AudioCtrl.validate(typeof source !== 'string' || !source.trim(), '전달된 음원 경로는 문자열이 아니거나, 공백 문자입니다.');
//   audio.setAttribute('src', source);
//   audio.oncanplay = ()=> {
//     if( typeof options.created === 'function' ) {
//       options.created.call(this, audio);
//     }
//   }
//   return audio;
// };


////////////////////////
// Default Parameters //
////////////////////////

// 함수 매개변수 초기 값을 설정할 수 있다. (Like Sass)
function assigDiscount(cost, discount=0.4) {
  return cost - (cost * discount);
}

assigDiscount(1000);    // 19
assigDiscount(10, 0.3); // 12

// 함수 매개변수 값을 외부의 함수 결과 값으로 처리할 수도 있다.
// < e.g) defaultDiscount() >
function defaultDiscount() {
  return 0.45;
}
function assigDiscount2(cost, discount=defaultDiscount()) {
  return cost - (cost * discount);
}



///////////////////////////////
// Rest or Spread Parameters //
///////////////////////////////

// 나머지(rest) ------------------------------------------------------------------
// 함수 정의 시, 매개변수 값 앞에 ...을 붙이는 경우

// < e.g) sum() >

// function sum() {
//   var result = 0;
//   for ( var i=0, l=arguments.length; i<l; i++ ) {
//     result += arguments[i];
//   }
//   return result;
// }

function sum(...numbers) {
  return numbers.reduce((pv,cv)=>pv+cv);
}

sum(2, 3); // 5
sum(2, 3, 2, 3, 2, 3); // 5

// Array.prototype.reduce
// [].reduce(function(이전값,현재값){},초기값);
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


// 펼치다(spread) ----------------------------------------------------------------
// 함수 실행 시, 전달인자 앞에 ...을 붙이는 경우

// 배열 ➤ 개별 값 변경 처리
// []  ➤ ...numbers

function process(...steps) { // steps -> REST PARAMETER
  console.log(steps[0]);
  console.log(steps[1]);
}

var lectures = ['study css', 'study es6'];

// process( lectures[0], lectures[1] );
process(...lectures);  // lectures -> SPREAD PARAMETER



/////////////////////////
// Object Enhancements //
/////////////////////////

// < e.g) 1 >
let getPerson = ()=> {
  let name = 'Hoon';
  let job  = 'Instructor';
  return {
    name,
    job,
    greeting(you) {
      let message = `Hello, ${you}.`;
      message += `My Name is ${this.name} and My Job is ${this.job}`;
      return message;
    }
  };
}

console.log( getPerson().name );
console.log( getPerson().greeting('Hey Min') );


///////////////////////////
// Class & Inheritance //
///////////////////////////

// < e.g) 1: 생성자 함수 ➤ 클래스 문법 활용 >

// class
// constructor
// static
// get (getter)
// set (setter)
// extends
// super

// new WeakMap()

// 생성자 함수(class)
// function User(name, email) {
//   this.name = name;
//   this.email = email;
// }

// // static methods (class methods)
// User.register = function(name, email) {
//   return new User(name, email);
// };

// // instance methods
// User.prototype.changeEmail = function(new_mail) {
//   this.email = new_mail;
// };

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  static register(...params) {
    return new User(...params);
  }
  changeEmail(new_mail) {
    this.email = new_mail;
  }
}
















// < e.g) 2: AudioCtrl 생성자 함수 ➤ 클래스 문법 활용 >


// User
// users = [ new User, new User, new User ]
// users.find(user=>user.isAdmin).name




////////////////////////////
// ECMAScript2015 Modules //
////////////////////////////

// CommonJS ----------------------------------------------------------------------
// http://www.commonjs.org/
// module.exports = {};

// AMD ---------------------------------------------------------------------------
// http://requirejs.org/docs/whyamd.html#amd
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modularjavascript
// define('module',[],function(){});

// UMD ---------------------------------------------------------------------------
// https://github.com/umdjs/umd
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
    } else {
        // Browser globals
    }
}(function(){}));

// ES2015
// include ~ from
// export
// defaults

// export let module_prop = '';
// export fn = function() {};
// export class ClassName {};
// export default ClassName;




///////////////////
// Destructuring //
///////////////////

// < e.g) 1: 블록 스코프 내에서 디스트럭쳐링 활용 >
let product = {
  name           : 'TV',
  maker          : 'LG',
  features       : [ 'Time Recoding', 'Sharing Screen', 'Speech Recognition' ],
  productionYear : 2017
};

{
  let name           = product.name;
  let maker          = product.maker;
  let features       = product.features;
  let productionYear = product.productionYear;
}

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



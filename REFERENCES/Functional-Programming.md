## JavaScript 함수형 프로그래밍(Functional Programming) 키노트

- [발표 키노트](https://slidr.io/vakila/learning-functional-programming-with-javascript)
- [키노트 강연 영상](https://www.youtube.com/watch?v=e-5obm1G_FY) 

JSUconf 2016, Anjana Vakil 발표 내용을 살펴보면...

-

### 함수형 프로그래밍이란 무엇인가?

- 프로그래밍 패러다임
- 코딩 스타일
- 사고 방식
- 많은 사람들이 논하는 트렌드

-

### 왜? 함수형 JavaScript 프로그래밍을 사용해야 하나?

- 객체 지향 JavaScript는 까다롭다. (Prototype?! This?)
- 안전하며, 디버깅/유지보수 하기 좋다.
- 함수형 방식을 연구한 많은 커뮤니티가 있다.

-

### 어떻게 사용하는데?

#### 모든 것에 함수를 사용하면 된다. (input -> output)

아래 예제는 **비 함수형 프로그래밍**이다.

```js
var name = "Anjana";
var greeting = "Hi, I'm ";
console.log(greeting + name);

// "Hi, I'm Anjana"
```

위 예제를 **함수형 프로그래밍**으로 바꾸면 아래와 같다.

```js
function greet(name) {
   return "Hi, I'm " + name;
}

greet("Anjana");

// "Hi, I'm Anjana"
```

#### 함수 확장을 사용하라.

그리고 아래 예시 처럼 함수 밖 영역에 변수를 두어 제어하지 말고,

```js
var name = "Anjana";

function greet() {
   console.log("Hi, I'm " + name);
}
```

함수에 인자를 전달하는 형태로 제작 하라.

```js
function greet(name) {
   return "Hi, I'm " + name;
}
```

#### 클로저를 함수 활용하라.

아래 예제처럼 클로저 함수를 활용하라.<br>
(JavaScript는 함수를 전달 받거나, 반환할 수 있다)

```js
function makeAdjectifier(adjective) {
   return function (string) { 
       return adjective + " " + string;   
   };
}

var coolifier = makeAdjectifier("cool");

coolifier("conference");  

// "cool conference"
```

#### 반복되는 일을 하지 마라.

`map`, `reduce`, `filter`를 사용하라.

#### 데이터를 변형시키는 것을 피하라.

데이터를 변형 시키지 말아라.

```js
var rooms = ["H1", "H2", "H3"];

rooms[2] = "H4";

rooms; // ["H1", "H2", "H4"]
```

데이터 원형을 변형시키지 말고, 변형된 값을 사용하라.

```js
var rooms = ["H1", "H2", "H3"];

var newRooms = rooms.map(function (rm) {  
   if (rm == "H3") { 
      return "H4"; 
   }  else { 
      return rm; 
   }
});

newRooms; // ["H1", "H2", "H4"]
rooms;    // ["H1", "H2", "H3"]
```

-

### JavaScript Library

- [lodash](https://lodash.com/)
- [underscoreJS](http://underscorejs.org/)
- [ramdaJS](http://ramdajs.com/)

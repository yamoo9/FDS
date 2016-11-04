console.log(this === window); // true

function fn() {
  console.log(this);
}

// fn(); // this ????
window.fn(); // this === window

function Person(name) {
  console.log(this);
  this.name = name;
}

var jieun = new Person('지은'); // Person { name: '지은' }

jieun.name; // '지은'
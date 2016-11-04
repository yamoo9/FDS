// TypeScript

class Tab {
  name: string;
  constructor(name:string){
    this.name = name;
  }
}

var t = new Tab('my-tab');

console.log(t.name);
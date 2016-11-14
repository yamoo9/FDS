// CommonJS, Node.js Module Load
var mA = require('./module-a.js');

// console.log(module_name);

console.log('mA:', mA.name);

console.log('this file is entry javascript file. require(' + mA.name + ') file loaded.');
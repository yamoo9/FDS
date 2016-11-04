var a = 'this is private a';

function A() {
  console.log('A', a);
}

module.exports = A;

// function piramid() {
//   var treasure = '왕궁의 보물';
//   var uniqueAccessor = function() {
//     console.log('A', treasure);
//   };
//   return uniqueAccessor;
// }
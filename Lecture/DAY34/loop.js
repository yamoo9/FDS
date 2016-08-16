// JavaScript Loop Statement
// while문

var boo = true, m = 10;

while(boo) {
  console.log(boo ? '참참참!' : '짝짝짝!');
  // if (--m > 0) { // 9,8,7,6,5,4,3,2,1
  if (m-- > 0) { // 10,9,8,7,6,5,4,3,2,1
    boo = !boo;
  }
}

// ECMAScript 2015 Syntax
var cleanWhiteSpace = ( el=document ) => {
    var current_node = el.firstChild;
    while( current_node ) {
      if ( current_node.nodeType === 3 && /\s/.test(current_node.nodeValue) ) {
          remove(current_node);
      } else if ( current_node.nodeType === 1 ) {
          cleanWhiteSpace(current_node);
      }
      current_node = current_node.nextSibling;
    }
};


// do ~ while 문

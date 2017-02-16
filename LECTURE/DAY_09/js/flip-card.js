/*! flip-card.js © yamoo9.net, 2017 */

// ----------------------------------------------------------------
// [x] .flip-card 클릭할 것인가?
var flip_card       = document.getElementsByClassName('flip-card');
var first_flip_card = flip_card[0]; // flip_card.item(0);

// first_flip_card 요소 객체를 클릭하면
// first_flip_card.onclick = function() {
  // 핸들링(함수): 아래 스타일 적용
  // transform: rotateY(180deg) translateX(100%)
  // this.style.transform = 'rotateY(180deg) translateX(100%)';
  // this.parentNode.style.cssText = 'transform: rotateY(180deg) translateX(100%)';
// };

// --------------------------------------------------------------
// [x] .flip-card__front, .flip-card__back 각각 클릭할 것인가?
// var flip_front, flip_back;

// flip_front = first_flip_card.children[0];
// flip_back  = first_flip_card.children[ first_flip_card.children.length - 1 ];

// flip_front.onclick = function() {
//   var parent = this.parentNode;
//   parent.style.cssText = 'transform: rotateY(180deg) translateX(100%)';
// };
// flip_back.onclick = function() {
//   var parent = this.parentNode;
//   parent.style.cssText = '';
// };

// --------------------------------------------------------------
// [x] 반복문을 사용해야 하는 이유!
for (var i=0; i < flip_card.length; i=i+1) {
  var card       = flip_card[i];
  var card_front = card.children[0];
  var card_back  = card.children[card.children.length - 1];
  card_front.onclick = function(e) {
    // this.parentNode.style.cssText = 'transform: rotateY(180deg) translateX(100%)';
    this.parentNode.style.cssText = 'transform: rotateY(180deg)';
  };
  card_back.onclick = function(e) {
    this.parentNode.style.cssText = '';
  };
}

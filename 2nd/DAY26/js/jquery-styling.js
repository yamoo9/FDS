(function(global, $){
'use strict';

// Native
// var getStyle = (function(){
//   var _getStyle;
//   // W3C
//   if (window.getComputedStyle) {
//     _getStyle = function (el, property, pseudo) {
//       pseudo = pseudo || null;
//       return window.getComputedStyle(el,pseudo)[property];
//     };
//   }
//   // MS
//   else {
//     _getStyle = function (el, property) {
//       return el.currentStyle[property];
//     };
//   }
//   return _getStyle;
// })();

// // SET
// var brand = document.querySelector('.brand');
// brand.style.color = '#6500ea';

// // GET
// var n_bfs = brand.style.fontSize; // only inline style
// n_bfs = getStyle(brand, 'font-size');
// console.log('n_bfs:', n_bfs);

// jQuery
// 문서 객체 대상 참조
var $brand = $('.brand');

// SET
// Method Chaning
// $brand
//   .css('color', '#6500ea')
//   .css('letter-spacing', '0.03em')
//   .css('font-weight', '700')
//   .css('font-family', '"Spoqa Han Sans"')
//   .css('color', '#fe4940')
//   .css('padding', '1em 1.2em')
//   .css('border', '3px solid currentColor')
//   .css('margin', '1em')
//   .css('border-radius', '0.3125rem');

  // var brand_cssmap = {
  //   'letter-spacing': '0.03em',
  //   'font-weight':    '700',
  //   'font-family':    '"Spoqa Han Sans"',
  //   'color':          '#fe4940',
  //   'padding':        '1em 1.2em',
  //   'border':         '3px solid currentColor',
  //   'margin':         '1em',
  //   'border-radius':  '0.3125rem'
  // };
  // $brand.css(brand_cssmap);

  $brand.css({
    'letter-spacing': '0.03em',
    'font-weight':    '700',
    'font-family':    '"Spoqa Han Sans"',
    'color':          '#fe4940',
    'padding':        '1em 1.2em',
    'border':         '3px solid currentColor',
    'margin':         '1em',
    'border-radius':  '0.3125rem'
  });

// GET
// console.log( $brand.css('font-size') );
// var brand_font_size = $brand.css('font-size');
// console.log('brand_font_size:', brand_font_size);

//////////////////////////////////////////////////////////////////
// jQuery를 사용하여 1초 마다 글자 크기가 3단계까지 변신하는 제목을 구현하시오. //
//////////////////////////////////////////////////////////////////

var count        = 0;
var delay        = 1000;
var max_count    = 5;
var change_value = 20;

// 초기 변수 값을 조건에 맞게 변화
// 총 max_count에 맞도록 설정
while( count++ < max_count ) {
  window.setTimeout(function() {
    var current_font_size = parseInt($brand.css('font-size'),10);
    current_font_size += change_value;
    $brand.css('font-size', current_font_size + 'px');
  }, delay * count);
}


})(this, this.jQuery);
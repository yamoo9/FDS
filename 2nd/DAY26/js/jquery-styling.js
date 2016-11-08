(function($){
'use strict';

// Native
function getStyle(el, property) {
  // W3C
  if (window.getComputedStyle) {
    return window.getComputedStyle(el,null)[property];
  }
  // MS
  else {
    n_bfs = el.currentStyle[property];
  }
}

// SET
var brand = document.querySelector('.brand');
brand.style.color = '#6500ea';

// GET
var n_bfs = brand.style.fontSize; // only inline style
n_bfs = getStyle(brand, 'font-size');
console.log('n_bfs:', n_bfs);

// jQuery
// 문서 객체 대상 참조
var $brand = $('.brand');

// SET
$brand.css('color', '#6500ea');

// GET
console.log( $brand.css('font-size') );
// var brand_font_size = $brand.css('font-size');
// console.log('brand_font_size:', brand_font_size);

})(this.jQuery);
/*! jquery.selector.js © yamoo9.net, 2016 */

// CSS 1-3 Selector 모두 지원
// e.g) $('html a:not(:first-child)')
// E      (타입 선택자)
// E E    (하위(자손) 선택자)
// E > E  (자식 선택자)
// #id    (아이디 선택자)
// .class (클래스 선택자)
// :nth-child(fomular)
// :nth-of-type(fomular)
// :only-child

// ----------------------------------------------------------------
// jQuery.fn.css() 사용법
// ----------------------------------------------------------------
// [GETTER] $().css('font-size')
// [SETTER] $().css('font-size', '20px')
// [CSS_MAP] $().css({'font-size': '+=10px', 'margin-left': '1em'})
// [CALLBACK] $().css({'key': function(){ return value; }})
// ----------------------------------------------------------------

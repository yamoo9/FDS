/*! jquery.last.js © yamoo9.net, 2016 */
(function(global, $){
  'use strict';

  // 문서에서 .gnb 요소를 선택한 후에 내부에서 li 요소를 찾습니다.
  var $gnb = $('.gnb');
  var $gnb_list = $gnb.find('li');

  // ------------------------------------------------------------------
  // .eq( index | last_index )
  // ------------------------------------------------------------------
  var $gnb_list_1st      = $gnb_list.eq(0);
  var $gnb_list_2nd      = $gnb_list.eq(1);
  var $gnb_list_last     = $gnb_list.eq(-1);
  var $gnb_list_last_2nd = $gnb_list.eq(-2);

  // console.log('$gnb_list_1st:', $gnb_list_1st);
  // console.log('$gnb_list_2nd:', $gnb_list_2nd);
  // console.log('$gnb_list_last:', $gnb_list_last);
  // console.log('$gnb_list_last_2nd:', $gnb_list_last_2nd);

  // ------------------------------------------------------------------
  // .not( selector | element | function )
  // ------------------------------------------------------------------
  // selector
  // $gnb_list.not('[class]').addClass('have-not-class-attribute');

  // function
  // $gnb_list.not(function(index, element){
  //   // 홀수를 제외한 짝수 <li> 필터링
  //   return index % 2 === 0;
  //   // if ( index % 2 === 1 ) {
  //   //   console.log(index);
  //   // }
  // }).addClass('even');

  // $gnb_list.not(':even').addClass('even');

  // ------------------------------------------------------------------
  // .filter( selector | function | element | Selection(jQuery Object) )
  // ------------------------------------------------------------------
  // 1. selector
  // $gnb_list.filter('.first').remove();
  // 2. function
  $gnb_list
    .add('nav, a')
    .addClass('navigation-component')
    .filter(function(index, element) {
      var node_name = element.nodeName.toLowerCase();
      return node_name === 'a' || node_name === 'nav';
    })
    .css({
      'display': 'inline-block',
      'padding': '1em'
    });


})(this, this.jQuery);
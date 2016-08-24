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
    // .add('nav, a')
    // .addClass('navigation-component')
    // .filter(function(index, element) {
    //   var node_name = element.nodeName.toLowerCase();
    //   return node_name === 'a' || node_name === 'nav';
    // })
    // .eq(-1).css('width', '4rem');
    // .last().css('width', '4rem');
    // .css({
    //   'width': function(index, current_value) {
    //     var $current_list = $gnb_list.eq(index);
    //     if( $current_list.is('.last') ) {
    //       // console.log($current_list[0]);
    //       return '4rem';
    //     }
    //   }
    // });

    // ------------------------------------------------------------------
    // .each( callback )
    // .each( function(index, element){} )
    // ------------------------------------------------------------------
    $gnb_list.each(function(idx, el) {
      // jQuery
      // $(el).html( $(el).html() + $('<span>').text(idx * idx + 1) );
      // DOM Script
      // el.innerHTML += '<span>' + (idx * idx + 1) + '</span>';
    });

    // FILTER
    // .first()
    // .last()
    // .eq()
    // .filter()
    // .not()
    // .slice()

    // FIND
    // .find()
    // .next()
    // .prev()
    // .parent()
    // .parents()
    // .children()
    // .prevAll()
    // .prevUntil()
    // .nextAll()
    // .nextUntil()

    var $gnb_first = $gnb.find(':first');
    console.log( $gnb_first.next().children(':last').prevAll('.first').parents('.gnb') );

})(this, this.jQuery);

(function($){
  'use strict';

  var $gnb = $('.gnb');

  var $selected_el = $gnb.find('p').addClass('this-is-parapgrah').add('li', $gnb);

  $selected_el.each(function() {
    var item = arguments[1];
    console.log(item);
  });



  // $gnb
  //   .find('li:first-child a').clone()
  //     .add('<p>링크 뒤에 나오는 단락</p>')
  //   .appendTo('li:first-child', $gnb);

  // jQuery 팩토리 함수를 통해 문서 객체를 생성할 수 있다.
  $('<div>')
    .addClass('custom-division')
    .attr({
      'id': 'hi-seoul',
      'title': 'hey jude'
    })
    .text('Hey Division Element')
    .on('click', function() {
      console.log(this);
    })
    .appendTo('.gnb');

})(this.jQuery);
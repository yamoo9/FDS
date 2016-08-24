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

// ------------------------------------------------------------------

(function($){
  'use strict';

  // ------------------------------------------------------------------

  var $gnb = $('.gnb');

  var $selected_el = $gnb.find('p').addClass('this-is-parapgrah').add('li', $gnb);

  $selected_el.each(function() {
    var item = arguments[1];
    console.log(item);
  });

  // ------------------------------------------------------------------

  // $gnb
  //   .find('li:first-child a').clone()
  //     .add('<p>링크 뒤에 나오는 단락</p>')
  //   .appendTo('li:first-child', $gnb);

  // ------------------------------------------------------------------

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

  // ------------------------------------------------------------------

  var $new_div = $('<div>', {
    'attr': {
      'id': 'hi-seoul',
      'class': 'custom-division',
      'title': 'hey jude'
    },
    'text': 'Hey Division Element!!!!',
    'on': {
      'click': function() {
        console.log(this);
      }
    }
  }).appendTo('body');

  // console.log($new_div);

  // ------------------------------------------------------------------

  $('p').first().attr('class', function(index, old_class){
    return ':( ' + old_class + '/' + old_class + ' :-)';
  });

  $('p').first().attr('class', function(index, old_class){
    // ECMAScript 2015 - String Template
    return `:( ${old_class}/${old_class} :-)`;
  });

  // var form_action = '#';
  // var form_method = 'GET';

  // var template = [
  //   '<form action="'+ form_action +'" method="'+ form_method +'">',
  //     '<label for="demo">demo</label>',
  //     '<input id="demo" type="text" maxlength="10">',
  //   '</form>'
  // ].join('');

  // var template = `
  // <form action="${form_action}" method="${form_method}">
  //   <label for="demo">demo</label>
  //   <input id="demo" type="text" maxlength="10">
  // </form>
  // `;

  // $(template);

  // -------------------------------------------------------

  var $h2 = $('<h2 id="demo-test-h2">demo heading 2</h2>');
  var h3 = document.createElement('h3');
  var h3_text = document.createTextNode('new content - heading 3');
  h3.appendChild(h3_text);
  var gnb = document.querySelector('.gnb');

  var $ol = $('ol');

  $ol.prependTo('body');

  window.setTimeout(function() {
    $ol.before( [gnb, h3, $h2] );
  }, 3000);

  // 보이는 모양대로 암기하기
  // A.insertBefore(B)
  // A -> B
  // A.after(B)
  // A -> B

  // A.before(B)
  // A.after(B)

  // A.insertBefore(B)
  // A.insertAfter(B)

  // ---------------------------------------------------------
  // 이벤트 바인딩 시에 이벤트 객체에 사용자가 정의한 객체를 합성 [객체 합성]
  // 외부에 변수를 만들지 않고, 이벤트 객체를 통해 조건 처리하는 토글 구문
  // ---------------------------------------------------------
  // 2회 토글되는 경우
  $('p:eq(0)').on('click', {'clicked': false}, function(ev){
      if (!ev.data.clicked) { console.log('toggle 1'); }
      else { console.log('toggle 2'); }
      ev.data.clicked = !ev.data.clicked;
  });

  // 5회 토글되는 경우
  $('p:eq(1)').on('click', {'click_count': 0}, function(ev){
      var data = ev.data;
      switch( data.click_count++ % 5 ) {
        case 0:
          console.log('toggle' + 0);
        break;
        case 1:
          console.log('toggle' + 1);
        break;
        case 2:
          console.log('toggle' + 2);
        break;
        case 3:
          console.log('toggle' + 3);
        break;
        case 4:
          console.log('toggle' + 4);
        break;
      }
  });

})(this.jQuery);
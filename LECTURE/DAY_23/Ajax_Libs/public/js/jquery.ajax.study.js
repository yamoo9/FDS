/*! jquery.ajax.study.js © yamoo9.net, 2017 */

(function(global, $){
  'use strict';

  // jQuery Version 출력
  // console.log('jQuery.prototype.jquery:', $.fn.jquery);

  ///////////////////
  // jQuery.ajax() //
  ///////////////////

  /////////
  // GET //
  /////////

  // 단축 ajax 메서드: $.get()
  // $.get('/employees/19', function(data, textStatus, jqXHR){
  // $.get('/employees', {id: 7}, function(data, textStatus, jqXHR){
  //   console.log( jqXHR.status + ' ' + jqXHR.statusText );
  //   console.log(data);
  // }, 'json');

  // row-level .ajax() 메서드
  // $.ajax({
  //   // type: 'DELETE',
  //   url: '/employees',
  //   data: {id: 9},
  //   success: function(data, textStatus, jqXHR) {
  //     console.log(data);
  //   },
  //   dataType: 'json'
  // });

  //////////
  // POST //
  //////////
  // var new_employee = {
  //   name: faker.internet.userName(),
  //   email: faker.internet.email(),
  //   company: faker.company.companyName()
  // };

  // $.post('/employees', new_employee, function(data, textStatus, jqXHR) {
  //   console.log( jqXHR.status + ' ' + jqXHR.statusText );
  //   console.log( data );
  // });

  // Deffered Object (Like Promise)
  // $.post('/employees', new_employee)
  //  .done(function(data, textStatus, jqXHR) {
  //   console.log( jqXHR.status + ' ' + jqXHR.statusText );
  //   console.log( data );
  //  })
  //  .fail()
  //  .always();

  // $.ajax({
  //   type: 'POST',
  //   url: '/employees',
  //   data: new_employee,
  //   success: function(data, textStatus, jqXHR) {},
  //   dataType: 'json'
  // });

  /////////
  // PUT //
  /////////
  // var modified_employee = {
  //   "name": "Hong Min, Son",
  //   "email": "sony@tottenham.com",
  //   "company": "Tottenham Hotspur"
  // };

  // $.ajax({
  //   type: 'PUT',
  //   url: '/employees/21',
  //   dataType: 'json',
  //   data: modified_employee
  // })
  // .done(function(data, status, xhr) {
  //   console.log(xhr.status + ' ' + xhr.statusText);
  //   console.log(data);
  // })
  // .fail(function(error) {
  //   console.error(error.message);
  // })
  // .always(function() {
  //   console.info('PUT 통신 종료');
  // });

  ////////////
  // DELETE //
  ////////////
  $.ajax({
    type: 'DELETE',
    url: '/employees/21',
    dataType: 'json'
  }).done(function(data, textStatus, jqXHR) {
    console.log(textStatus);
    console.log(data); // {}
  });

})(window, window.jQuery);

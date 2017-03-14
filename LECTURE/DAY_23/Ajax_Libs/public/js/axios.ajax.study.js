/*! axios.ajax.study.js © yamoo9.net, 2017 */

(function(global, $, axios){
  'use strict';

  // var employees = document.querySelector('.employees');
  // for(var prop in employees_style) {
  //   var value = employees_style[prop];
  //   employees.style[prop] = value;
  // }

  var employees_style = {
    padding: '1em',
    margin : '2em',
    border : '8px solid #eaeaea'
  };

  var $employees = $('.employees');
  $employees.css(employees_style);

  /////////
  // GET //
  /////////

  axios.get('http://www.omdbapi.com/?s=smile')
       .then(function(response) {
          console.log(response.status + ' ' + response.statusText);
          // console.log(response.data.Search);
          response.data.Search.forEach(function(item) {
            var poster = item.Poster;

            $('<li>', {
              html: '<img src="'+poster+'" alt="temp poster name">'
            }).appendTo($employees);

          });
       })
       .catch(function(error) {
          console.error(error.message);
       });

})(window, window.jQuery, window.axios);

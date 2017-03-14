/*! axios.ajax.study.js © yamoo9.net, 2017 */

(function(global, $, axios){
  'use strict';

  // var employees = document.querySelector('.employees');
  // for(var prop in employees_style) {
  //   var value = employees_style[prop];
  //   employees.style[prop] = value;
  // }

  // var employees_style = {
  //   padding: '1em',
  //   margin : '2em',
  //   border : '8px solid #eaeaea'
  // };

  // var $employees = $('.employees');
  // $employees.css(employees_style);

  /////////
  // GET //
  /////////

  // axios.get('http://www.omdbapi.com/?s=smile')
  //      .then(function(response) {
  //         console.log(response.status + ' ' + response.statusText);
  //         // console.log(response.data.Search);
  //         response.data.Search.forEach(function(item) {

  //           var poster = item.Poster;
  //           var alt = item.Title;

  //           $('<li>', {
  //             html: '<img src="'+ poster +'" alt="'+ alt +'" title="'+ alt +'">'
  //           }).appendTo($employees);

  //         });
  //      })
  //      .catch(function(error) {
  //         console.error(error.message);
  //      });

  axios.defaults.baseURL                         = 'https://api.example.com';
  axios.defaults.headers.common['Authorization'] = 'Token dab1748ebaceb34ed6796bc3b7dc84741b77af54';
  axios.defaults.headers.post['Content-Type']    = 'application/x-www-form-urlencoded';

  axios.get('https://api.codecraft.tv/samples/v1/')
       .then(function(response) {
        console.log(response);
       })
       .catch(function(error) {
        console.error(error.message);
       });


})(window, window.jQuery, window.axios);

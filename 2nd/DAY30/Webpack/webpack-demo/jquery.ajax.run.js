/*! jquery.ajax.run.js © yamoo9.net, 2016 */
'use strict';

var $      = require('jquery');
var people = {};

// Ajax using jQuery Library
// Utility Methods
// Static Methods
// Class Methods
$.ajax({
  url      : 'https://randomuser.me/api/?results=10&gender=female',
  dataType : 'json'
})
.done(function(data) {
  people.results = data.results; // array
});

// 외부 모듈에서 사용 가능하도록 배포(출력)
module.exports = people;
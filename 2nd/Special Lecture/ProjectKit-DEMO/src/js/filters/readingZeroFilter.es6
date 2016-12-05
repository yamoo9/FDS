/*! readingZeroFilter.js © yamoo9.net, 2016 */
'use strict';

let angular = require('angular');

angular
  .module('BipanListApp')
  .filter('readingZero', ()=> {
    return (input)=> {
      return input < 10 ? ('0' + input) : input;
    };
  });

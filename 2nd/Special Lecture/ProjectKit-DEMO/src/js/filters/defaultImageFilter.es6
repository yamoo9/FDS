/*! defaultImageFilter.js © yamoo9.net, 2016 */
'use strict';

let angular = require('angular');

angular
  .module('BipanListApp')
  .filter('defaultImage', ()=> {
    return (input, param='http://mealib.nic.in/photogalleryphp/p3293.jpg')=> {
      return input || param;
    };
  });

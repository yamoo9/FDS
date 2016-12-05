/*! ListDataShareService.js © yamoo9.net, 2016 */
'use strict';

let angular = require('angular');

angular
  .module('BipanListApp')
  .service('ListDataShareService', ['$http', ($http)=>{

    $http({
      'method': 'GET',
      'url': 'data/bipan/bipan-list.json'
    }).then(function(response) {
      _service.movies = response.data;
    });

    var _service = {
      'selected_movie': null,
      'movies': []
    };

    return _service;

  }]);

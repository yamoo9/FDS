/*! ListDataShareService.js © yamoo9.net, 2016 */
'use strict';

let angular = require('angular');

angular
  .module('BipanListApp')
  .factory('Contact', ['$resource', function($resource){
    let url = 'https://codecraftpro.com/api/samples/v1/contact/:id/';
    return $resource(url);
  }])
  .service('ListDataShareService', ['Contact', (Contact)=>{

    var _service = {
      'selected_person': null,
      'people': [],
      'page': 1,
      'has_more': true,
      'is_loading': false,
      'loadContacts': ()=> {
        Contact.get((data)=>{
          angular.forEach(data.results, (person)=>{
            _service.people.push( new Contact(person) );
          });
        });
      }
    };

    _service.loadContacts();

    return _service;

  }]);

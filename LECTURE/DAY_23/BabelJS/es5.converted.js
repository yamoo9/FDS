'use strict';

/*! jquery.ajax.study.js © yamoo9.net, 2017 */

var employees = document.querySelector('.employees');
var btn = document.querySelector('.add-employee');

$.get('/employees').done(function (data, textStatus, jqXHR) {
  data.forEach(function (item) {
    return employees.insertAdjacentHTML('beforeend', '<li>' + item.name + '</li>');
  });
});

btn.onclick = function () {
  var new_employee = {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    company: faker.company.companyName()
  };
  $.post('/employees', new_employee).done(function (data, textStatus, jqXHR) {
    $.get('/employees').done(function (data, textStatus, jqXHR) {
      employees.innerHTML = '';
      data.forEach(function (item) {
        return employees.insertAdjacentHTML('beforeend', '<li>' + item.name + '</li>');
      });
    });
  });
};

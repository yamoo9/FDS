/*! jquery.ajax.study.js © yamoo9.net, 2017 */

let employees = document.querySelector('.employees');
let btn       = document.querySelector('.add-employee');


$.get('/employees')
 .done((data, textStatus, jqXHR)=>{
   data.forEach(item=>employees.insertAdjacentHTML('beforeend', `<li>${item.name}</li>`));
 });

btn.onclick = ()=> {
  let new_employee = {
    name    : faker.internet.userName(),
    email   : faker.internet.email(),
    company : faker.company.companyName()
  };
  $.post('/employees', new_employee)
   .done((data, textStatus, jqXHR)=> {
     $.get('/employees')
      .done((data, textStatus, jqXHR)=> {
        employees.innerHTML = '';
        data.forEach(item => employees.insertAdjacentHTML('beforeend', `<li>${item.name}</li>`));
      });
   });
};

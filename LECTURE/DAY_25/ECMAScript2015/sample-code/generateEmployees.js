/*! generateEmployees.js © yamoo9.net, 2017 */

var faker     = require('faker');
var total     = 10;
var employees = [];

// 모듈 정의
function generateEmployees() {
  for ( var i=1; i<=total; ++i ) {
    employees.push({
      id: i,
      name: faker.internet.userName(),
      email: faker.internet.email(),
      company: faker.company.companyName()
    });
  }
  return {
    'info': {
      'version': '0.0.1',
      'author': 'yamoo9@naver.com'
    },
    'employees': employees
  };
}

// 모듈 출력
module.exports = generateEmployees;

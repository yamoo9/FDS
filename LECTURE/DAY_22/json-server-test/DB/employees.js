const faker = require('faker');

// faker.locale = 'ko';

let count = 10;

function generateEmployees() {
  let employees = [];
  for ( let id=1; id<=count; id++ ) {
    employees.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: {
        city: faker.address.city(),
        country: faker.address.country()
      },
      company: faker.company.companyName(),
      image: faker.image.avatar(),
      phone: faker.phone.phoneNumber()
    });
  }
  return { employees };
}

module.exports = generateEmployees;

'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Posts', [
        {
          title: faker.lorem.word(),
          content: faker.lorem.text(),
          userId: 2,
          type: 'text'
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.text(),
          userId: 2,
          type: 'text'
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.text(),
          userId: 3,
          type: 'text'
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.text(),
          userId: 1,
          type: 'text'
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.text(),
          userId: 3,
          type: 'text'
        },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Posts', {
    }, {});
  }
};

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
        {
          title: faker.lorem.word(),
          content: faker.image.imageUrl(),
          userId: 2,
          type: 'image'
        },
        {
          title: faker.lorem.word(),
          content: faker.image.imageUrl(),
          userId: 2,
          type: 'image'
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.text(),
          userId: 2,
          type: 'text'
        },
        {
          title: faker.lorem.word(),
          content: faker.image.animals(),
          userId: 2,
          type: 'image'
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.text(),
          userId: 2,
          type: 'text'
        },
        {
          title: faker.lorem.word(),
          content: faker.image.abstract(),
          userId: 2,
          type: 'image'
        },
        {
          title: faker.lorem.word(),
          content: faker.lorem.text(),
          userId: 2,
          type: 'text'
        },
        {
          title: faker.lorem.word(),
          content: faker.image.business(),
          userId: 2,
          type: 'image'
        },
        {
          title: faker.lorem.word(),
          content: faker.image.fashion(),
          userId: 2,
          type: 'image'
        },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Posts', {
    }, {});
  }
};

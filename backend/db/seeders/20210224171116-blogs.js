'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Blogs', [
        {
          name: 'Demo Blog',
          userId: 1
        },
        {
          name: 'Fake BLog 1',
          userId: 2
        },
        {
          name: 'Multi-Blog Test',
          userId: 2
        },
        {
          name: 'Fake Blog 2',
          userId: 3
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Blogs', {
    }, {});
  }
};

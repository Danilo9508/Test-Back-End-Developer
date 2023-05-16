'use strict';

const { RIDER_TABLE } = require('../models/rider.model')
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(RIDER_TABLE, [
      { fullName: 'Juan' },
      { fullName: 'Angie' },
      { fullName: 'Dario' },
      { fullName: 'Sara' },
      { fullName: 'Miguel' },
      { fullName: 'Yuli' },
      { fullName: 'Marx' },
      { fullName: 'Manuel' },
      { fullName: 'Jairo' },
    ])
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(RIDER_TABLE, null, {});
  }
};

'use strict';

const { RIDER_TABLE } = require('../models/rider.model')
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(RIDER_TABLE, [
      { fullName: 'Juan' },
      { fullName: 'Daniel' },
      { fullName: 'Andrea' },
    ])
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(RIDER_TABLE, null, {});
  }
};

'use strict';

const { DRIVER_TABLE } = require('../models/driver.model')
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(DRIVER_TABLE, [
      { fullName: 'Holmman', document: '1078946545' },
      { fullName: 'Alys', document: '12345' },
      { fullName: 'Ana', document: '2546588' },
    ])
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(DRIVER_TABLE, null, {});
  }
};

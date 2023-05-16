'use strict';

const { DRIVER_TABLE } = require('../models/driver.model')
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(DRIVER_TABLE, [
      { fullName: 'Ana', document: '2546588' },
      { fullName: 'Alys', document: '12345' },
      { fullName: 'Holmman', document: '1078946545' },
      { fullName: 'Karen', document: '1111111' },
      { fullName: 'Diomedes', document: '222222' },
      { fullName: 'Karina', document: '333333' },
      { fullName: 'Omar', document: '444444' },
      { fullName: 'Yara', document: '555555' },
      { fullName: 'Over', document: '6666666' },
      { fullName: 'Eufracino', document: '7777777' },
    ])
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(DRIVER_TABLE, null, {});
  }
};

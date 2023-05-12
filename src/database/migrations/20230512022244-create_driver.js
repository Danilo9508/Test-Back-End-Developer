'use strict';
const { DRIVER_TABLE, driverSchema } = require('../models/driver.model');
const { RIDER_TABLE, riderSchema } = require('../models/rider.model');
const { TRAVEL_TABLE, travelSchema } = require('../models/travel.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(DRIVER_TABLE, driverSchema);
    await queryInterface.createTable(RIDER_TABLE, riderSchema);
    await queryInterface.createTable(TRAVEL_TABLE, travelSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TRAVEL_TABLE);
    await queryInterface.dropTable(RIDER_TABLE);
    await queryInterface.dropTable(DRIVER_TABLE);
  }
};

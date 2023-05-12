
const { Driver, driverSchema } = require('./driver.model');
function setupModels(sequelize) {
    Driver.init(driverSchema, Driver.config(sequelize));
}

module.exports = setupModels;

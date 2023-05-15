
const { Driver, driverSchema } = require('./driver.model');
const { Rider, riderSchema } = require('./rider.model');
const { Travel, travelSchema } = require('./travel.model');
function setupModels(sequelize) {
    Driver.init(driverSchema, Driver.config(sequelize));
    Rider.init(riderSchema, Rider.config(sequelize));
    Travel.init(travelSchema, Travel.config(sequelize));
}

module.exports = setupModels;

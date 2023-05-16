"use strict";
const service = require('./service')
const domain = require('../driver/domain')
const { buildOutput } = require('../../utils/utilities')
const { statusCode,statusDriver } = require('../../utils/const')

const requestRider = async (body) => {
    try {
        const riderExits = await service.findIfExistsRider(body.idRider);
        if (riderExits) {
            const driver = await domain.findOneRandomDriver();
            console.log('drivers ', driver);
            const travel = {
                idRiderFK: body.idRider,
                idDriverFK: driver.idDriver,
                latitudeInit: body.latitude,
                longitudeInit: body.longitude
            }
            const response = await service.createTravel(travel)
            if (response) {
                domain.updateDriverState(driver.idDriver, statusDriver.OCUPED);
                return `Your ride was successfully created, the driver has been assigned to you: ${driver.fullName} `
            } else {
                throw buildOutput(statusCode.NOT_MODIFIED, `Travel could not be created`)

            }
        } else {
            throw buildOutput(statusCode.DATA_NOT_FOUND, `No information found for idRider: ${body.idRider}`)
        }
    } catch (error) {
        if (error.typeOutput) {
            throw error;
        } else {
            throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, '', { function: 'requestRider-Domain', error });
        }

    }
}
module.exports = {
    requestRider
}
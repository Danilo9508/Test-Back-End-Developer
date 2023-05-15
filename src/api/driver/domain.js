"use strict";
const service = require('./service')
const { buildOutput } = require('../../utils/utilities')
const { statusCode } = require('../../utils/const');
/**
 * find a random driver
 * @returns 
 */
const findOneRandomDriver = async () => {
    try {
        let drivers = await service.findDriverAll();
        drivers = drivers.sample();
        if (drivers.dataValues) {
            return drivers.dataValues;
        } else {
            throw buildOutput(statusCode.DATA_NOT_FOUND, `No information found Drivers`)
        }
    } catch (error) {
        if (error.typeOutput) {
            throw error;
        } else {
            throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, '', { function: 'findOneRandomDriver-Domain', error });
        }
    }
}
module.exports = {
    findOneRandomDriver
}
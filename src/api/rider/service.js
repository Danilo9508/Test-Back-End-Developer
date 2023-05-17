'use strict';
const { models } = require('../../libs/sequalize');
const { buildOutput } = require('../../utils/utilities')
const { statusCode } = require('../../utils/const')
/**
 * validates if the rider exists
 * @param {Number} idRider 
 * @returns bool true or false
 */
const findIfExistsRider = async (idRider) => {
    try {
        const rider = await models.Rider.findByPk(idRider);
        if (!!rider) return true;
    } catch (error) {
        throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, '', { function: 'findIfExistsRider-Service', error });
    }
    return false;
}
/**
 * save the Travel information
 * @param {Object} dataTravel 
 * @returns transaction response
 */
const createTravel = async (dataTravel) => {
    try {
        return await models.Travel.create(dataTravel);
    } catch (error) {
        throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, '', { function: 'createTravel-Service', error });

    }
}
module.exports = {
    findIfExistsRider,
    createTravel
};

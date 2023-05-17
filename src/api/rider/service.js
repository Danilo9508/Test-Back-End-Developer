'use strict';
const { models } = require('../../libs/sequalize');
const { buildOutput } = require('../../utils/utilities')
const { statusCode } = require('../../utils/const')

const findIfExistsRider = async (idRider) => {
    try {
        const rider = await models.Rider.findByPk(idRider);
        if (!!rider) return true;
    } catch (error) {
        throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, '', { function: 'findIfExistsRider-Service', error });
    }
    return false;
}
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

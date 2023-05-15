'use strict';
const { models } = require('../../libs/sequalize');

const findIfExistsRider = async (idRider) => {
    try {
        const rider = await models.Rider.findByPk(idRider);
        if (rider) return true;
    } catch (error) {
        throw error;
    }
    return false;
}
const createTravel = async (dataTravel) => {
    try {
      return  await models.Travel.create(dataTravel);
    } catch (error) {
        throw error;
    }
}
module.exports = {
    findIfExistsRider,
    createTravel
};

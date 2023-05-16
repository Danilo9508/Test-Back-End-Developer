'use strict';
const { models } = require('../../libs/sequalize');
const { buildOutput } = require('../../utils/utilities')
const { statusCode } = require('../../utils/const')
const findDriverAll = async () => {
    try {
        return await models.Driver.findAll({ where: { state: 'ACTIVE' } });
    } catch (error) {
        throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, '', { function: 'findDriverAll-Service', error });

    }
}
const updateDriverState = async (idDriver, state) => {
    try {
        const driver = await findOneDriver(idDriver);
        return driver.update({ state: state })
    } catch (error) {
        throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, '', { function: 'updateDriverState-Service', error });
    }
}
const findOneDriver = async (idDriver) => {
    try {
        return await models.Driver.findByPk(idDriver);
    } catch (error) {
        throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, '', { function: 'findOneDriver-Service', error });
    }
}
const findOneTravel = async (idDriver) => {
    try {
        const response = await models.Travel.findAll({ where: { idDriverFK: idDriver, latitudeEnd: null } });
        return response
    } catch (error) {
        throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, '', { function: 'findOneTravel-Service', error });
    }
}
const travelFinish = async (idDriver, travelData) => {
    try {
        const travel = await findOneTravel(idDriver);
        return await travel[0].update({ ...travelData });
    } catch (error) {
        if (error.typeOutput) {
            throw error;
        } else {
            throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, '', { function: 'travelFinish-Service', error });

        }

    }
}

module.exports = {
    findDriverAll,
    updateDriverState,
    travelFinish,
    findOneTravel
};

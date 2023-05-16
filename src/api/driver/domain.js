"use strict";
const service = require('./service')
const { buildOutput, calculeteTotalAmount, calculateDistanceInKM, calculateHours } = require('../../utils/utilities')
const { statusCode, statusDriver } = require('../../utils/const');
const { postPayment } = require('../../utils/externalService');
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
const updateDriverState = async (idDriver, status) => {
    try {
        await service.updateDriverState(idDriver, status);
    } catch (error) {
        if (error.typeOutput) {
            throw error;
        } else {
            throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, '', { function: 'updateDriverState-Domain', error });
        }
    }
}
const travelFinish = async (body) => {

    try {
        const dateEnd = new Date();
        let travel = await service.findOneTravel(body.idDriver);
        if (!!travel) {

            travel = travel[0].dataValues;
            const km = calculateDistanceInKM(travel.latitudeInit, travel.longitudeInit, body.latitude, body.longitude);
            const minute = calculateHours(travel.dateStart, dateEnd)
            const travelData = {
                totalAmount: calculeteTotalAmount(km, minute),
                latitudeEnd: body.latitude,
                longitudeEnd: body.longitude,
                dateEnd: dateEnd
            }
            const response = await service.travelFinish(body.idDriver, travelData);
            if (!!response) {
                await service.updateDriverState(body.idDriver, statusDriver.ACTIVE)
                let payment = await postPayment(travelData.totalAmount);
                return { distance_traveled: `${km} KM`, minutes: minute, payment_reference: payment.data.reference, payment_status: payment.data.status, totalAmount: travelData.totalAmount };
            } else {
                throw buildOutput(statusCode.NOT_MODIFIED, `Error at the end of the Travel`)
            }
        } else {
            throw buildOutput(statusCode.DATA_NOT_FOUND, `No drivers available, please try again later`)
        }
    } catch (error) {
        if (error.typeOutput) {
            throw error;
        } else {
            throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, '', { function: 'travelFinish-Domain', error });
        }
    }
}
module.exports = {
    findOneRandomDriver,
    updateDriverState,
    travelFinish
}
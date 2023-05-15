"use strict";
const { validationRider } = require('../../utils/validation');
const { responseStatus, responseStatusMessageCode, responseStatusData } = require('../../utils/responseAPI/message');
const { statusCode } = require('../../utils/const');
const domain = require('./domain');

const requestTravel = async (req, res) => {
    try {
        console.log(req.body);
        if (validationRider(req.body)) {
            const response = await domain.requestRider(req.body);
            responseStatusData(res, statusCode.SUCCESS, response);
        } else {
            responseStatus(res, statusCode.BAD_PARAMETERS)
        }
    } catch (error) {
        console.log(error)
        if (error.typeOutput) {
            responseStatusMessageCode(res, error.typeOutput, error)
        } else {
            responseStatus(res, statusCode.INTERNAL_SERVER_ERROR)
        }
    }
}

module.exports = {
    requestTravel
}
"use strict";
const { validationDriver } = require('../../utils/validation');
const { responseStatus, responseStatusMessageCode, responseStatusData } = require('../../utils/responseAPI/message');
const { statusCode } = require('../../utils/const');
const domain = require('./domain');
const travelFinish = async (req, res) => {
    try {
        console.log(req.body);
        
        if (validationDriver(req.body)) {
            const response = await domain.travelFinish(req.body);
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
    travelFinish
}
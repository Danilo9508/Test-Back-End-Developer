"use strict";
const json = require("./message.json");
/**
 * dynamic response function
 * @param {any} res allows you to use the methods provided by the response
 * @param {Number} code code response 
 */
const responseStatus = (res, code) => {
    json.information.forEach((item) => {
        if (item.statusCode === code) {
            res.status(item.statusCode).send({
                statusCode: item.statusCode,
                message: item.message,
                description: item.description,
            });
        }
    });
};
/**
 * dynamic response function with error
 * @param {any} res  allows you to use the methods provided by the response
 * @param {Number} code code response
 * @param {any} error error generate
 */
const responseStatusMessageCode = (res, code, error) => {
    json.information.forEach((item) => {
        if (item.statusCode === code) {
            res.status(item.statusCode).send({
                statusCode: item.statusCode,
                message: item.message,
                description: error.output? error.output:item.description,
            });
        }
    });

};
/**
 * dynamic response function with status 200
 * @param {any} res  allows you to use the methods provided by the response
 * @param {Number} code code response
 * @param {any} desc response description 
 */
const responseStatus200 = (res, code, desc) => {
    json.information.forEach((item) => {
        if (item.statusCode === code) {
            res.status(200).send({
                statusCode: item.statusCode,
                message: item.message,
                description: desc ?? item.description,
            });
        }
    });
};
/**
 * dynamic response function with data
 * @param {any} res  allows you to use the methods provided by the response
 * @param {Number} code code response
 * @param {any} data response data 
 */
const responseStatusData = (res, code, data) => {
    json.information.forEach((item) => {
        if (item.statusCode === code) {
            res.status(item.statusCode).send({
                statusCode: item.statusCode,
                message: item.message,
                description: item.description,
                response: data,
            });
        }
    });
};

module.exports = { responseStatus, responseStatusData, responseStatus200, responseStatusMessageCode };

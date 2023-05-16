"use strict";
const json = require("./message.json");
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

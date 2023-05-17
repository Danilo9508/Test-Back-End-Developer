'use strict';
const moment = require('moment');
const { statusCode } = require('../utils/const')
const { VALUE_FOR_KM, VALUE_FOR_MINUTE, VALUE_BASE } = require('../utils/config');
/**
 * calculates the distance in KM between two points with latitude and longitude
 * @param {*} lat1 starting latitude
 * @param {*} lon1 starting logitude
 * @param {*} lat2 final latitude
 * @param {*} lon2 final logitude
 * @returns distance in KM
 */
const calculateDistanceInKM = (lat1, lon1, lat2, lon2) => {
    try {
        if (!!lat1 && !!lon1 && !!lat2 && !!lon2) {
            lat1 = degreesToRadians(lat1);
            lon1 = degreesToRadians(lon1);
            lat2 = degreesToRadians(lat2);
            lon2 = degreesToRadians(lon2);
            const RADIUS_EARTH_IN_KILOMETERS = 6371;
            let differenceBetweenLongitude = (lon2 - lon1);
            let differenceBetweenLatitudes = (lat2 - lat1);
            let a = Math.pow(Math.sin(differenceBetweenLatitudes / 2.0), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(differenceBetweenLongitude / 2.0), 2);
            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return parseInt(RADIUS_EARTH_IN_KILOMETERS * c);
        } else {
            throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, 'Bad Parameters', { fnName: 'calculateDistanceInKM', err: 'Bad Parameters' })
        }
    } catch (error) {
        throw error
    }
}

const degreesToRadians = (degrees) => {
    return degrees * Math.PI / 180;
};
/**
 * 
 * @param {*} dateInit 
 * @param {*} dateFinish 
 * @returns 
 */
const calculateMinutes = (dateInit, dateFinish) => {
    if (!!dateInit && !!dateFinish) {
        const format = "YYYY-MM-DD HH:mm:ss";
        const date1 = moment(dateInit, format), date2 = moment(dateFinish, format);
        return date2.diff(date1, 'm');
    } else {
        throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, 'Bad Parameters', { fnName: 'calculateMinutes', err: 'Bad Parameters' })
    }
}
/**
 * 
 * @param {*} km 
 * @param {*} minute 
 * @returns 
 */
const calculeteTotalAmount = (km, minute) => {
    if (!!km && !!minute) {
        return (parseInt(VALUE_FOR_KM) * km) + (parseInt(VALUE_FOR_MINUTE) * minute) + parseInt(VALUE_BASE);
    } else {
        throw buildOutput(statusCode.INTERNAL_SERVER_ERROR, 'Bad Parameters', { fnName: 'calculeteTotalAmount', err: 'Bad Parameters' });
    }
}

/**
 * @function
 * @param {String} type type output object (statusCode)
 * @param {any} opt message or object for output
 * @param {Object} objDetail @Optional 
 * @example {type:statusCode.DATA_NOT_FOUND, otp: 'no information found for user', objDetail:{fnName='nameFunction',err:error}}
 * @returns Object Ouput
 */
const buildOutput = (type, opt, objDetail = {}) => {
    return { typeOutput: type, output: opt, details: objDetail }
}
/**
 * allows you to generate random values ​​in an array
 * @returns 
 */
Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}
module.exports = {
    calculateDistanceInKM,
    buildOutput,
    calculateMinutes,
    calculeteTotalAmount

}
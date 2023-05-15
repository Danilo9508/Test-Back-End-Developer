/**
 * calculates the distance in KM between two points with latitude and longitude
 * @param {*} lat1 starting latitude
 * @param {*} lon1 starting logitude
 * @param {*} lat2 final latitude
 * @param {*} lon2 final logitude
 * @returns distance in KM
 */
function calculateDistanceInKM(lat1, lon1, lat2, lon2) {
    const radioEart = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = radioEart * c;
    return distance;
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
    buildOutput
}
'use strict';
const { models } = require('../../libs/sequalize');
const findDriverAll = async () => {
    try {
        return await models.Driver.findAll();
    } catch (error) {
        throw error;
    }

}

module.exports = {
    findDriverAll
};

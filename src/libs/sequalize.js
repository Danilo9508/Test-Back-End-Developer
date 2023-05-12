const { Sequelize } = require('sequelize');
const setupModels = require('./../database/models');

require("dotenv").config();
const { USERDB, PASSDB, NAMEDB, HOSTDB,PORTDB } = process.env

const USER = encodeURIComponent(USERDB);
const PASSWORD = encodeURIComponent(PASSDB);
const URI = `postgres://${USER}:${PASSWORD}@${HOSTDB}:${PORTDB}/${NAMEDB}`;

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: console.log,
});

setupModels(sequelize);

module.exports = sequelize;
'use strict'
const express = require('express');
const genericRoutes = express.Router();

const rider = require('./rider');
const driver = require('./driver');

//routes

genericRoutes.use('/rider', rider);
genericRoutes.use('/driver', driver);

module.exports = genericRoutes;
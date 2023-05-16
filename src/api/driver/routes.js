'use strict';
const router = require('express').Router();
const controller = require('./controller');
router.post('/travelFinish', controller.travelFinish)
module.exports = router;
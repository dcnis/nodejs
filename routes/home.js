const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const homeController = require('../controller/home');

// create router
const router = express.Router();

router.post('sendTemperature', homeController.sendTemperature);
router.get('/', homeController.home);

module.exports = router;

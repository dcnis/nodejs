const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const homeController = require('../controller/home');

// create router
const router = express.Router();

router.post('/sendReport', homeController.sendReport);
router.get('/login', homeController.login);
router.get('/logout', homeController.logout);
router.get('/', homeController.home);

module.exports = router;

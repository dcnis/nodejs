const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const userprofileController = require('../controller/userprofile');


const router = express.Router();


router.get('/userprofile/login', userprofileController.login);
router.get('/userprofile/logout', userprofileController.logout);


module.exports = router;

const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const errorController = require('../controller/error');


// create router
const router = express.Router();


router.use(errorController.error404);
const express = require('express');

const errorController = require('../controller/errorController');


// create router
const router = express.Router();


router.use(errorController.error404);


module.exports = router;
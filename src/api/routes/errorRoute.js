import express from 'express';

import errorController from '../controller/errorController.js';


// create router
const router = express.Router();

router.use(errorController.error404);

export default router;

import express from 'express';

import homeController from '../controller/homeController.js';

// create router
const router = express.Router();

router.post('/sendReport', homeController.sendReport);
router.get('/login', homeController.login);
router.get('/logout', homeController.logout);
router.get('/', homeController.home);

export default router;

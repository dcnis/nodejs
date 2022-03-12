import express from 'express';

import userController from './controller/userController.js';
import reportController from './controller/reportController.js';
import homeController from './controller/homeController.js';
import errorController from './controller/errorController.js';


const router = express.Router();

router.post('/user/add', userController.addUser);
router.get('/user/getAll', userController.getAll);
router.delete('/user/delete/:userId', userController.deleteUserById);
router.post('/user/deleteByEmail', userController.deleteUserByEmail);
router.post('/user/getByEmail', userController.getUserByEmail);
router.get('/user/:userId', userController.getUserByUserId);

router.post('/report/add', reportController.addReport);
router.get('/report/getAll', reportController.getAll);

router.post('/sendReport', homeController.sendReport);
router.get('/login', homeController.login);
router.get('/logout', homeController.logout);
router.get('/signup', homeController.signup);
router.get('/', homeController.home);

router.use(errorController.error404);


export default router;
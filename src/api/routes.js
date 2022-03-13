import express from 'express';

import userController from './controller/userController.js';
import reportController from './controller/reportController.js';
import homeController from './controller/homeController.js';
import errorController from './controller/errorController.js';
import loginController from './controller/loginController.js';
import signupController from './controller/signupController.js';
import logoutController from './controller/logoutController.js';
import isAuth from '../middleware/isAuth.js';
import validateSignup from '../middleware/validation/validateSignup.js';
import validateLogin from '../middleware/validation/validateLogin.js';
import validateHome from '../middleware/validation/validateHome.js';
import exceptionHandler from '../middleware/exceptionHandler.js';


const router = express.Router();

/* userController */
router.post('/user/add', userController.addUser);
router.get('/user/getAll', userController.getAll);
router.delete('/user/delete/:userId', userController.deleteUserById);
router.post('/user/deleteByEmail', userController.deleteUserByEmail);
router.post('/user/getByEmail', userController.getUserByEmail);
router.get('/user/:userId', userController.getUserByUserId);

/* reportController */
router.post('/report/add', reportController.addReport);
router.get('/report/getAll', reportController.getAll);
router.get('/report/myreports', isAuth, reportController.myReportsPage);

/* loginController */
router.get('/login', loginController.loginPage);
router.post('/login', validateLogin, loginController.login);

/* signupController */
router.get('/signup', signupController.signupPage);
router.post('/signup', validateSignup, signupController.signup);
router.get('/signupVerification/:token', signupController.signupVerification);

/* homeController */
router.post('/sendReport', validateHome, homeController.sendReport);
router.get('/logout', logoutController.logout);
router.get('/', homeController.home);

/* errorController */
router.get('/error500', errorController.error500);
router.use(errorController.error404);

/* exceptionHandler */
router.use(exceptionHandler.handleException);


export default router;
const express = require('express');

const userController = require('./controller/userController');
const reportController = require('./controller/reportController');

const router = express.Router();

router.post('/user/add', userController.addUser);
router.get('/user/getAll', userController.getAll);
router.delete('/user/delete/:userId', userController.deleteUserById);
router.post('/user/deleteByEmail', userController.deleteUserByEmail);
router.post('/user/getByEmail', userController.getUserByEmail);
router.get('/user/:userId', userController.getUserByUserId);

router.post('/report/add', reportController.addReport);
router.get('/report/getAll', reportController.getAll);

module.exports = router;
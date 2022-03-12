import logoutService from '../../services/logoutService.js';

const logoutController = {};

logoutController.logout = (req, res) => {
    logoutService.logout(req, res);
};

export default logoutController;
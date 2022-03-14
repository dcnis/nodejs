import loginService from '../../services/loginService.js';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../config/env.js';
import log from '../../config/winston.js';

const loginController = {};

loginController.loginPage = (req, res) => {
    const errorMessage = null;
    return res.render('login', { errorMessage });
};

loginController.login = (req, res, next) => {
    loginService.login(req.body)
        .then((user) => {


            // Create JWT Token
            const token = jwt.sign({
                email: user.email,
                id: user.id
            }, JWT_SECRET, {expiresIn: '1h'})

            req.session.isAuthenticated = true;
            req.session.app_name = user.full_name;
            req.session.app_roomnr = user.roomnumber;
            req.session.save((err) => {
                if(err){
                    log.error(err);
                } else {
                    res.status(200).json({token: token, userId: user.id});
                }
            })
        })

        .catch((err) => {
            log.error(err);
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
};

export default loginController;
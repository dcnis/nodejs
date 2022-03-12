import db from '../../config/mysql/database.js';
import signupService from '../../services/signupService.js';

const homeController = {};

homeController.home = (req, res) => {

    db.execute('SELECT * FROM Reports')
        .then((ans) => {
            // console.log(ans[0]);
        })
        .catch((err) => {
            // console.log(err);
        })


    const sessionStorage = {};
    if(req.session.app_name){
        sessionStorage.name = req.session.app_name;
    }
    if(req.session.app_roomnr){
        sessionStorage.roomnr = req.session.app_roomnr;
    }
    res.render('home', {sessionStorage});
};

homeController.sendReport = (req, res, next) => {

    req.session.app_name =  req.body.name;
    req.session.app_roomnr = req.body.roomnumber;
    
    req.session.save((err) => {
        if (err) {
            console.log('FEHLER ' + error);
        }
        res.render('success');
    });
};

homeController.loginPage = (req, res) => {
    return res.render('login');
};

homeController.logoutPage = (req, res) => {
    return res.render('logout');
};

homeController.signupPage = (req, res) => {
    return res.render('signup');
};

homeController.signup = (req, res) => {
    signupService.signup(req.body)
        .then((response) => {
            console.log(response);
            res.redirect('/login');
        })
        .catch((error) => console.log(error));
};

export default homeController;
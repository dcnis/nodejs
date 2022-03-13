import db from '../../config/mysql/database.js';

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
    if(req.session.isAuthenticated){
        sessionStorage.isAuthenticated = true;
    }

    const errorMessage = null;
    const oldInput = {
        name: '',
        roomnumber: '',
        temperature: ''
    }
    res.render('home', {sessionStorage, errorMessage, oldInput});
};

homeController.sendReport = (req, res, next) => {

    req.session.app_name =  req.body.name;
    req.session.app_roomnr = req.body.roomnumber;
    
    req.session.save((err) => {
        if (err) {
            console.log('FEHLER ' + error);
        }

        const isAuth = req.session.isAuthenticated;
        res.render('success', {isAuth });
    });
};

homeController.logoutPage = (req, res) => {
    return res.render('logout');
};

export default homeController;
import loginService from '../../services/loginService.js';

const loginController = {};

loginController.loginPage = (req, res) => {

    let errorMessage = req.flash('loginError');
    if(errorMessage.length > 0){
        errorMessage = errorMessage[0];
    } else {
        errorMessage = null;
    }
    return res.render('login', { errorMessage });
};

loginController.login = (req, res, next) => {
    loginService.login(req.body)
        .then((user) => {

            req.session.isAuthenticated = true;
            req.session.app_name = user.full_name;
            req.session.app_roomnr = user.roomnumber;

            req.session.save((err) => {
                if(err){
                    console.log(err);
                } else {
                    res.redirect('/');
                }
            })
        })

        .catch((error) => {
            console.log(error);
            req.flash('loginError', 'Wrong username or password');
            res.redirect('/login');
        });
};

export default loginController;
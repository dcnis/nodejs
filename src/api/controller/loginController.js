import loginService from '../../services/loginService.js';

const loginController = {};

loginController.loginPage = (req, res) => {
    return res.render('login');
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
            res.redirect('/login');
        });
};

export default loginController;
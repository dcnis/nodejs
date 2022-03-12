import signupService from '../../services/signupService.js';

const signupController = {};

signupController.signupPage = (req, res) => {
    return res.render('signup');
};

signupController.signup = (req, res) => {
    signupService.signup(req.body)
        .then((response) => {
            console.log(response);
            res.redirect('/login');
        })
        .catch((error) => console.log(error));
};

export default signupController;
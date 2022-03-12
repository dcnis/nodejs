import signupService from '../../services/signupService.js';
import redisClient from '../../services/redisService.js';

const signupController = {};

signupController.signupPage = (req, res) => {
    return res.render('signup');
};

signupController.signup = (req, res) => {
    signupService.signup(req.body, res);
};

signupController.signupVerification = (req, res) => {
    const token = req.params['token'];

    // get User from REDIS via token
    if(!redisClient){
        console.error('redisClient not ready');
        return;
    }


        redisClient.get('signup:' + token, (err, redisUser) => {
            if(err){
                console.err(err);
                return;
            }

            const userdata = JSON.parse(redisUser);

            if(userdata){
                signupService.createUser(userdata)
                .then(() => {
                    res.render('signupSuccessful');
                })
                .catch((err) => {
                    console.error(err);
                })
            }
        });
};

export default signupController;
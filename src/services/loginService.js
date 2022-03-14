import db from '../config/mysql/database.js';
import bcrypt from 'bcryptjs';

const loginService = {};

loginService.login = (loginData, req) => {
    return db.execute('SELECT * FROM Users WHERE email=?', [loginData.email])
        .then((users) => {
            if(!users || !users[0] || users[0].length < 1){
                return Promise.reject('User does not exist');
            }
            
            const user = users[0][0];

            // check password
            return bcrypt.compare(loginData.password, user.user_password)
                .then((result) => {

                    if(!result){
                        return Promise.reject('Wrong password!');                        
                    }
                    return Promise.resolve(user);
            })
        })
        .catch((error) => {
            console.log(error);
            return Promise.reject(error);
        });
    
};


export default loginService;
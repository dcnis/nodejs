import db from '../config/mysql/database.js';

const signupService = {};

signupService.signup = (signupData) => {
    return db.execute('INSERT INTO Users (full_name, email, roomnumber, user_password) VALUES (?, ?, ?, ?)',
            [signupData.full_name, signupData.email, signupData.roomnumber, signupData.password])
        .then((response) => {
            return Promise.resolve(response);
        })
        .catch((error) => {
            const errorMsg = 'Error while inserting new user: ' + error;
            return errorMsg;
        });
};


export default signupService;
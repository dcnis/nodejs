import db from '../config/mysql/database.js';
import bcrypt from 'bcryptjs';

const signupService = {};

signupService.signup = (signupData) => {
    return bcrypt.hash(signupData.password, 12)
        .then((encryptedPassword) => {
            return db.execute('INSERT INTO Users (full_name, email, roomnumber, user_password) VALUES (?, ?, ?, ?)',
                [signupData.full_name, signupData.email, signupData.roomnumber, encryptedPassword])
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((error) => {
            const errorMsg = 'Error while inserting new user: ' + error;
            return errorMsg;
        });
        })
};


export default signupService;
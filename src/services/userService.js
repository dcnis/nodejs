const db = require('../config/mysql/database');

exports.addUser = (user) => {
    return db.execute('INSERT INTO Users (first_name, last_name, email, roomnumber) VALUES (?, ?, ?, ?)',
            [user.first_name, user.last_name, user.email, user.roomnumber])
        .then((response) => {
            return response;
        })
        .catch((error) => {
            const errorMsg = 'Error while inserting new user: ' + error;
            return errorMsg;
        });
};

exports.getAll = () => {
    return db.execute('SELECT * FROM Users')
        .then((data) => {
            return data[0];
        })
        .catch((err) => {
            console.log(err);
            return Promise.resolve([]);
        });
};
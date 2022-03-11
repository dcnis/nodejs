const db = require('../config/mysql/database');

exports.addUser = (user) => {
    console.log('add following user');
    console.log(user);
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

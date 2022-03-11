const env = require('../../config/env');
const db = require('../../config/database');

exports.home = (req, res) => {

    db.execute('SELECT * FROM reports')
        .then((ans) => {
            console.log(ans);
        })
        .catch((err) => {
            console.log(err);
        })


    res.render('home');
};

exports.sendReport = (req, res) => {
    console.log(req.body)
    res.render('success');
};

exports.login = (req, res) => {
    return res.render('login');
};

exports.logout = (req, res) => {
    return res.render('logout');
};


const env = require('../../config/env');
const db = require('../../config/mysql/database');

exports.home = (req, res) => {

    db.execute('SELECT * FROM Reports')
        .then((ans) => {
            // console.log(ans[0]);
        })
        .catch((err) => {
            // console.log(err);
        })


    const cookie = {};
    if(req.cookies.app_name){
        cookie.name = req.cookies.app_name;
    }
    if(req.cookies.app_roomnr){
        cookie.roomnr = req.cookies.app_roomnr;
    }
    res.render('home', {cookie});
};

exports.sendReport = (req, res) => {

    res.cookie('app_name', req.body.name);
    res.cookie('app_roomnr', req.body.roomnumber);
    
    res.render('success');
};

exports.login = (req, res) => {
    return res.render('login');
};

exports.logout = (req, res) => {
    return res.render('logout');
};


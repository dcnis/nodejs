exports.home = (req, res) => {
    res.render('home');
};

exports.sendReport = (req, res) => {
    res.render('success');
};

exports.login = (req, res) => {
    return res.render('login');
};

exports.logout = (req, res) => {
    return res.render('logout');
};


const userservice = require('../../services/userService');

exports.getAll = (req, res) => {
    userservice.getAll()
        .then((allUser) => {
            res.json(allUser);
    });
};

exports.addUser = (req, res) => {
    userservice.addUser(req.body)
        .then((response) => {
            return res.json(response);
        })
        .catch((error) => {
            console.log(error);
            return res.json(error);
        });
};

exports.getUserByUserId = (req, res) => {

};

exports.getUserByEmail = (req, res) => {
    
};


exports.deleteUserById = (req, res) => {
    
};

exports.deleteUserByEmail = (req, res) => {
    
};



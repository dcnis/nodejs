const userservice = require('../../services/userService');

exports.getAll = (req, res) => {
    const allUser = userservice.getAll()
        .then((allUser) => {
            res.json(allUser);
        });
};

exports.addUser = (req, res) => {
    const userCreationResponse = userservice.addUser(req.body);
    res.json(userCreationResponse);
};

exports.getUserByUserId = (req, res) => {

};

exports.getUserByEmail = (req, res) => {
    
};


exports.deleteUserById = (req, res) => {
    
};

exports.deleteUserByEmail = (req, res) => {
    
};



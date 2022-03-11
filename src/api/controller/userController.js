const userservice = require('../../services/userService');

exports.getAll = (req, res) => {
    const allUser = userservice.getAll()
        .then((allUser) => {
            res.json(allUser);
        });
};

exports.addUser = (req, res) => {
    return userservice.addUser(req.body)
        .then((response) => {
            return res.json(response);
        })
        .catch((error) => {
            console.log(error);
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



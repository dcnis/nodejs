import userservice from '../../services/userService.js';

const userController = {};

userController.getAll = (req, res) => {
    userservice.getAll()
        .then((allUser) => {
            res.json(allUser);
    });
};

userController.addUser = (req, res) => {
    userservice.addUser(req.body)
        .then((response) => {
            return res.json(response);
        })
        .catch((error) => {
            console.log(error);
            return res.json(error);
        });
};

userController.getUserByUserId = (req, res) => {

};

userController.getUserByEmail = (req, res) => {
    
};


userController.deleteUserById = (req, res) => {
    
};

userController.deleteUserByEmail = (req, res) => {
    
};

export default userController;


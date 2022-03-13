

const adminController = {};

adminController.topsecretInfo = (req, res) => {
    res.status(200).json({secret: 'This is my top secret message!'});
};

export default adminController;
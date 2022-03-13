const errorController = {};

errorController.error404 = (req, res) => {
    res.status(404).render('error404');
};

errorController.error500 = (req, res) => {
    res.status(500).render('error500');
};

export default errorController;

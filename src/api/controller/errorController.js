const errorController = {};

errorController.error404 = (req, res) => {
    res.status(404).render('error404');
};

export default errorController;

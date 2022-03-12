import reportservice from '../../services/reportService.js';

const reportController = {};

reportController.getAll = (req, res) => {
    reportservice.getAll()
        .then((allReports) => {
            res.json(allReports);
    });
};

reportController.addReport = (req, res) => {
    return reportservice.addReport(req.body)
        .then((response) => {
            return res.json(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

reportController.getReportById = (req, res) => {

};

reportController.getReportsByUserId = (req, res) => {
    
};


reportController.getReportsByUserEmail = (req, res) => {
    res.render('myReports');
};

reportController.deleteReportById = (req, res) => {
    
};

reportController.myReportsPage = (req, res) => {
    res.render('myReports');
}

export default reportController;
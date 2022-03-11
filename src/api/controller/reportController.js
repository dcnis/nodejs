const reportservice = require('../../services/reportService');

exports.getAll = (req, res) => {
    reportservice.getAll()
        .then((allReports) => {
            res.json(allReports);
    });
};

exports.addReport = (req, res) => {
    return reportservice.addReport(req.body)
        .then((response) => {
            return res.json(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.getReportById = (req, res) => {

};

exports.getReportsByUserId = (req, res) => {
    
};


exports.getReportsByUserEmail = (req, res) => {
    
};

exports.deleteReportById = (req, res) => {
    
};



const db = require('../config/mysql/database');

exports.addReport = (report) => {
    return db.execute('INSERT INTO Reports (userId, day, temperature, symptom) VALUES (?, ?, ?, ?)',
            [report.userId, report.day, report.temperature, report.symptom])
        .then((response) => {
            return response;
        })
        .catch((error) => {
            const errorMsg = 'Error while inserting new report: ' + error;
            return errorMsg;
        });
};

exports.getAll = () => {
    return db.execute(`SELECT r.userId, r.day, r.temperature, s.description FROM Reports r
            INNER JOIN Symptoms s ON r.symptom=s.id`)
        .then((data) => {
            return data[0];
        })
        .catch((err) => {
            console.log(err);
            return Promise.resolve([]);
        });
};

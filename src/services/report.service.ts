import db from '../config/database.js';
import Report from '../models/report.model.js';
import log from '../config/winston.js';

export default class ReportService {
  public static addReport(report: Report) {
    return db
      .getPool()
      .execute(
        'INSERT INTO Reports (userId, day, temperature, symptom) VALUES (?, ?, ?, ?)',
        [report.userId, report.day, report.temperature, report.symptom]
      )
      .then((response: any) => {
        return response;
      })
      .catch((error: Error) => {
        const errorMsg = 'Error while inserting new report: ' + error;
        log.error(errorMsg);
        return errorMsg;
      });
  }

  public static getAll() {
    return db
      .getPool()
      .execute(
        `SELECT r.userId, r.day, r.temperature, s.description FROM Reports r
            INNER JOIN Symptoms s ON r.symptom=s.id`
      )
      .then((data: any) => {
        return data[0];
      })
      .catch((err: Error) => {
        log.error(err);
        return Promise.resolve([]);
      });
  }
}

import { Request, Response } from 'express';

import Report from '../../models/report.model.js';
import reportservice from '../../services/report.service.js';
import log from '../../config/winston.js';

export default class ReportController {
  public static getAll(req: Request, res: Response) {
    reportservice.getAll().then((allReports: any) => {
      res.json(allReports);
    });
  }

  public static addReport(req: Request, res: Response) {
    const body: Report = req.body as Report;
    return reportservice
      .addReport(body)
      .then((response: any) => {
        return res.json(response);
      })
      .catch((error: Error) => {
        log.error(error);
      });
  }

  public static getReportById(req: Request, res: Response) {}

  public static getReportsByUserId(req: Request, res: Response) {}

  public static getReportsByUserEmail(req: Request, res: Response) {
    res.render('myReports');
  }

  public static deleteReportById(req: Request, res: Response) {}

  public static myReportsPage(req: Request, res: Response) {
    res.render('myReports');
  }
}

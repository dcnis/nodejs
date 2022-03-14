import winston from 'winston';
import { LOG_LEVEL, TIMEZONE } from './env.js';
import path from 'path';
import rootDir from '../util/path.js';
import moment from 'moment-timezone';

const now = moment();
const timezoneFormatted = now.tz(TIMEZONE).format('YYYY-MM-DD HH:mm:ss.SSS');
const timezone = now.tz(TIMEZONE).format();

const log = winston.createLogger({
    transports: [

      /* Console logger */
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp({
            format: timezoneFormatted,
          }),
          winston.format.colorize(),
          winston.format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
          ),
          level: LOG_LEVEL}),


        /* file info logger */
      new winston.transports.File({ 
        format: winston.format.combine(
          winston.format.timestamp({
            format: timezoneFormatted,
          }),
          winston.format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
        ), 
        filename: path.join(rootDir, '..', 'logs', 'services.log'), level: LOG_LEVEL
      }),


      /* file error logger */
      new winston.transports.File({ 
        format: winston.format.combine(
          winston.format.timestamp({
            format: timezoneFormatted,
          }),
          winston.format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
          ), 
        filename: path.join(rootDir, '..', 'logs', 'error.log'), level: 'error' 
      }),


      /* json info logger */
      new winston.transports.File({ 
        format: winston.format.combine(
          winston.format.timestamp({
            format: timezone
          }),
          winston.format.json()
        ), 
        filename: path.join(rootDir, '..', 'logs', 'services-json.log'), level: LOG_LEVEL
      }),


      /* json error logger */
      new winston.transports.File({ 
        format: winston.format.combine(
          winston.format.timestamp({
            format: timezone
          }),
          winston.format.cli()
          )
        , 
        filename: path.join(rootDir, '..', 'logs', 'error-json.log'), level: 'error' 
      }),

    ],
  });

  export default log;
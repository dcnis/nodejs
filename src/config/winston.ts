import winston from 'winston';
import path from 'path';
import moment from 'moment-timezone';

import env from './env.js';
import rootDir from '../util/path.js';

const now = moment();
const timezoneFormatted = now
  .tz(env.TIMEZONE as string)
  .format('YYYY-MM-DD HH:mm:ss.SSS');
const timezone = now.tz(env.TIMEZONE as string).format();

const log = winston.createLogger({
  transports: [
    /* Console logger */
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({
          format: timezoneFormatted,
        }),
        winston.format.colorize(),
        winston.format.printf(
          (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
        )
      ),
      level: env.LOG_LEVEL,
    }),

    /* file info logger */
    new winston.transports.File({
      format: winston.format.combine(
        winston.format.timestamp({
          format: timezoneFormatted,
        }),
        winston.format.printf(
          (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
        )
      ),
      filename: path.join(rootDir, '..', 'logs', 'services.log'),
      level: env.LOG_LEVEL,
    }),

    /* file error logger */
    new winston.transports.File({
      format: winston.format.combine(
        winston.format.timestamp({
          format: timezoneFormatted,
        }),
        winston.format.printf(
          (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
        )
      ),
      filename: path.join(rootDir, '..', 'logs', 'error.log'),
      level: 'error',
    }),

    /* json info logger */
    new winston.transports.File({
      format: winston.format.combine(
        winston.format.timestamp({
          format: timezone,
        }),
        winston.format.json()
      ),
      filename: path.join(rootDir, '..', 'logs', 'services-json.log'),
      level: env.LOG_LEVEL,
    }),

    /* json error logger */
    new winston.transports.File({
      format: winston.format.combine(
        winston.format.timestamp({
          format: timezone,
        }),
        winston.format.cli()
      ),
      filename: path.join(rootDir, '..', 'logs', 'error-json.log'),
      level: 'error',
    }),
  ],
});

export default log;

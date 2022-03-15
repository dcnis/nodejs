import morgan from 'morgan';
import path from 'path';
import winston from 'winston';
import moment from 'moment-timezone';

import rootDir from '../util/path.js';
import env from './env.js';

const now = moment();
const timezoneFormatted = now
  .tz(env.TIMEZONE)
  .format('YYYY-MM-DD HH:mm:ss.SSS');

const morganLogger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: path.join(rootDir, '..', 'logs', 'accessw.log'),
      level: 'http',
      format: winston.format.combine(
        winston.format.timestamp({
          format: timezoneFormatted,
        }),
        winston.format.printf(
          (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
        )
      ),
    }),
  ],
});

const init = morgan('combined', {
  stream: {
    write: (message) => morganLogger.http(message.trim()),
  },
});

export default init;

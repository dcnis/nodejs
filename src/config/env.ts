import dotenv from 'dotenv';
import path from 'path';
import { Secret } from 'jsonwebtoken';

import rootDir from '../util/path.js';

dotenv.config({ path: path.join(rootDir, '..', '.env') });

interface ENV {
  PORT: number | undefined;
  MYSQL_URL: string | undefined;
  MYSQL_USER: string | undefined;
  MYSQL_ROOT_PASSWORD: string | undefined;
  MYSQL_DB: string | undefined;
  REDIS_PASSWORD: string | undefined;
  JWT_SECRET: Secret | undefined;
  LOG_LEVEL: string | undefined;
  TIMEZONE: string | undefined;
}

const getConfig = (): ENV => {
  return {
    PORT: Number(process.env.PORT),
    MYSQL_URL: process.env.MYSQL_URL,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
    MYSQL_DB: process.env.MYSQL_DB,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET as Secret,
    LOG_LEVEL: process.env.LOG_LEVEL,
    TIMEZONE: process.env.TIMEZONE,
  };
};

export default getConfig();

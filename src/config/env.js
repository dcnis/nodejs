import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;
export const MYSQL_URL = process.env.MYSQL_URL;
export const MYSQL_USER = process.env.MYSQL_USER;
export const MYSQL_ROOT_PASSWORD = process.env.MYSQL_ROOT_PASSWORD;
export const MYSQL_DB = process.env.MYSQL_DB;
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD;

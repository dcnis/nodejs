import mysql from 'mysql2';
import { MYSQL_URL, MYSQL_USER, MYSQL_ROOT_PASSWORD, MYSQL_DB } from '../env.js';

const pool = mysql.createPool({
    host: MYSQL_URL,
    user: MYSQL_USER,
    database: MYSQL_DB,
    password: MYSQL_ROOT_PASSWORD
});

export default pool.promise();
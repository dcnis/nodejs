const mysql = require('mysql2');
const { MYSQL_URL, MYSQL_USER, MYSQL_ROOT_PASSWORD, MYSQL_DB } = require('../config/env');

const pool = mysql.createPool({
    host: MYSQL_URL,
    user: MYSQL_USER,
    database: MYSQL_DB,
    password: MYSQL_ROOT_PASSWORD
});

module.exports = pool.promise();
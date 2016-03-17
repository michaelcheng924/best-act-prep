import mysql from 'mysql';
const connection = mysql.createConnection({
    host: process.env.SQL_URL,
    user: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    port: '3306',
    database: 'bestactp'
});

connection.connect();

export default connection;

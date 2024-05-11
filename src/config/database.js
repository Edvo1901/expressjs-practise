const mysql = require("mysql2/promise");
require("dotenv").config();

const connection = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER, //Default: empty
	database: process.env.DB_NAME,
	port: process.env.DB_PORT, //Default: 3306
	password: process.env.DB_PASSWORD,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

module.exports = connection;

const mongoose = require("mongoose");
require("dotenv").config();

// const connection = mysql.createPool({
// 	host: process.env.DB_HOST,
// 	user: process.env.DB_USER, //Default: empty
// 	database: process.env.DB_NAME,
// 	port: process.env.DB_PORT, //Default: 3306
// 	password: process.env.DB_PASSWORD,
// 	waitForConnections: true,
// 	connectionLimit: 10,
// 	queueLimit: 0,
// });

var dbState = [
	{
		value: 0,
		label: "disconnected",
	},
	{
		value: 1,
		label: "connected",
	},
	{
		value: 2,
		label: "connecting",
	},
	{
		value: 3,
		label: "disconnecting",
	},
];

const connection = async () => {
	try {
		await mongoose.connect("mongodb://root:123456@localhost:27018");
		const state = Number(mongoose.connection.readyState);
		console.log(dbState.find((f) => f.value == state).label, "to db");
	} catch (error) {
		console.log("Error connection db: ", error);
	}
};

module.exports = connection;

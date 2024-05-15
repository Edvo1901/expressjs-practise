const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const webRoutesAPI = require("./routes/api");
const fileUpload = require("express-fileupload");
const { MongoClient } = require("mongodb");
const connection = require("./config/database");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

// Config file upload
app.use(fileUpload());

// Config request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);

// Initializing routes
app.use("/", webRoutes);
app.use("/v1/api/", webRoutesAPI);

// Test db connection
(async () => {
	try {
		await connection();
		// const url = process.env.DB_HOST_WITH_DRIVER;
		// const client = new MongoClient(url);
		// const dbName = process.env.DB_NAME;

		// await client.connect();
		// console.log("Connected to server");
		// const db = client.db(dbName);
		// const collection = db.collection("customers");

		app.listen(port, hostname, () => {
			console.log(`Example app listening on port ${port}`);
		});
	} catch (err) {
		console.log(err);
	}
})();

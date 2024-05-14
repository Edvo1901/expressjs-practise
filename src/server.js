const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const webRoutesAPI = require("./routes/api");
const connection = require("./config/database");
const fileUpload = require("express-fileupload");

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
	await connection();
	app.listen(port, hostname, () => {
		console.log(`Example app listening on port ${port}`);
	});
})();

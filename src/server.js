const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

// Config request body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

configViewEngine(app);

// Initializing routes
app.use("/", webRoutes);

connection.query("SELECT * FROM Users u", function (err, results, fields) {
	if (err) {
		console.error("Query Error:", err);
		return;
	}
	// console.log("> Result", results);
});

app.listen(port, hostname, () => {
	console.log(`Example app listening on port ${port}`);
});

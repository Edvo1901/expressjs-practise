const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

// Config request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);

// Initializing routes
app.use("/", webRoutes);

const kittySchema = new mongoose.Schema({
	name: String,
});

const Kitten = mongoose.model("Kitten", kittySchema);
const cat = new Kitten({ name: "Maybe" });
cat.save();

// Test db connection
(async () => {
	await connection();
	app.listen(port, hostname, () => {
		console.log(`Example app listening on port ${port}`);
	});
})();

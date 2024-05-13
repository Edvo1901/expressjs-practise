const express = require("express");
const routerAPI = express.Router();
const { getUsersAPI } = require("../controllers/apiController");

routerAPI.get("/", (req, res) => {
	res.send("Hello world!");
});

routerAPI.get("/test", (req, res) => {
	res.status(200).json({
		data: "Hello world with test",
	});
});

routerAPI.get("/users", getUsersAPI);

module.exports = routerAPI;

const express = require("express");
const routerAPI = express.Router();
const {
	getUsersAPI,
	postCreateUserAPI,
	putUpdateUserAPI,
	deleteUserAPI,
	postUploadSingleFileAPI,
	postUploadMultipleFilesAPI,
} = require("../controllers/apiController");

const {
	postCreateCustomerAPI,
	postCreateMultipleCustomersAPI,
	getAllCustomersAPI,
	putUpdateCustomerAPI,
	deleteCustomerAPI,
	deleteMultipleCustomersAPI,
} = require("../controllers/customerController");

const {
	postCreateProjectAPI,
	getAllProjectAPI,
	putUpdateProjectAPI,
	deleteProjectAPI,
} = require("../controllers/projectController");

const {
	postCreateTaskAPI,
	getAllTaskAPI,
	putUpdateTaskAPI,
	deleteTaskAPI
} = require("../controllers/taskController");

// User router
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

// File router
routerAPI.post("/file", postUploadSingleFileAPI);
routerAPI.post("/files", postUploadMultipleFilesAPI);

// Customer router
routerAPI.get("/customers", getAllCustomersAPI);
routerAPI.post("/customers", postCreateCustomerAPI);
routerAPI.put("/customers", putUpdateCustomerAPI);
routerAPI.delete("/customers", deleteCustomerAPI);

// Multiple customer router
routerAPI.post("/customers-many", postCreateMultipleCustomersAPI);
routerAPI.delete("/customers-many", deleteMultipleCustomersAPI);

// Project router
routerAPI.get("/projects", getAllProjectAPI);
routerAPI.post("/projects", postCreateProjectAPI);
routerAPI.put("/projects", putUpdateProjectAPI);
routerAPI.delete("/projects", deleteProjectAPI);

// Task router
routerAPI.get("/tasks", getAllTaskAPI);
routerAPI.post("/tasks", postCreateTaskAPI);
routerAPI.put("/tasks", putUpdateTaskAPI);
routerAPI.delete("/tasks", deleteTaskAPI);

routerAPI.get("/info", (req, res) => {
	return res.status(200).json({
		data: req.query,
	});
});

routerAPI.get("/info/:name/:city", (req, res) => {
	return res.status(200).json({
		data: req.params,
	});
});

module.exports = routerAPI;

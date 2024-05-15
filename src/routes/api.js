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

const { postCreateProjectAPI } = require("../controllers/projectController");

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

routerAPI.post("/customers-many", postCreateMultipleCustomersAPI);
routerAPI.delete("/customers-many", deleteMultipleCustomersAPI);

routerAPI.post("/projects", postCreateProjectAPI);

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

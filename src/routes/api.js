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
	getAllCustomersAPI
} = require("../controllers/customerController");

// User router
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

// File router
routerAPI.post("/file", postUploadSingleFileAPI);
routerAPI.post("/files", postUploadMultipleFilesAPI);

// Customer router
routerAPI.get("/customers", getAllCustomersAPI)
routerAPI.post("/customers", postCreateCustomerAPI);
routerAPI.post("/customers-many", postCreateMultipleCustomersAPI);

module.exports = routerAPI;

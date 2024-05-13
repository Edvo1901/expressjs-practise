const express = require("express");
const routerAPI = express.Router();
const { getUsersAPI, postCreateUserAPI } = require("../controllers/apiController");
const router = require("./web");

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);

module.exports = routerAPI;

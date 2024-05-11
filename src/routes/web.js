const express = require("express");
const {
	getHomePage,
	getTestPage,
	postCreateUser,
	getCreateUserPage,
	getUpdateUserPage,
	postUpdateUser
} = require("../controllers/homeController");

const router = express.Router();

// General route
router.get("/", getHomePage);
router.get("/test", getTestPage);

// Create user route
router.post("/create-user", postCreateUser);
router.get("/create", getCreateUserPage);

// Update user route
router.get("/update/:userId", getUpdateUserPage);
router.post("/update-user", postUpdateUser);

module.exports = router;

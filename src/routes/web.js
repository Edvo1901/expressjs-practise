const express = require("express");
const {
	getHomePage,
	getTestPage,
	postCreateUser,
	getCreateUserPage,
	getUpdateUserPage,
	postUpdateUser,
	postDeleteUser,
	postRemoveUser,
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

// Delete user route
router.post("/delete-user/:userId", postDeleteUser);
router.post("/delete-user", postRemoveUser);

module.exports = router;

const express = require("express");
const {
	getHomePage,
	getTestPage,
	postCreateUser,
	getCreateUserPage,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/test", getTestPage);
router.post("/create-user", postCreateUser);
router.get("/create", getCreateUserPage);

module.exports = router;

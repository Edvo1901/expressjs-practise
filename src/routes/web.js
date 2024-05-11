const express = require("express");
const { getHomePage, getTestPage, postCreateUser } = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/test", getTestPage);
router.post("/create-user", postCreateUser);

module.exports = router;

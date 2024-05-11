const express = require("express");
const { getHomePage, getTestPage } = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/test", getTestPage);

module.exports = router;

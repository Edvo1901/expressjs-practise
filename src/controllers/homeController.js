const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
	const results = await getAllUsers();
	return res.render("home.ejs", { listUsers: results });
};

const getTestPage = (req, res) => {
	res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
	let { email, userName, city } = req.body;
	let [results, fields] = await connection.query(
		"INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
		[email, userName, city]
	);
	res.send("Create user succeed");
};

const getCreateUserPage = (req, res) => {
	res.render("createUser.ejs");
};

module.exports = {
	getHomePage,
	getTestPage,
	postCreateUser,
	getCreateUserPage,
};

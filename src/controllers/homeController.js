const connection = require("../config/database");
const {
	getAllUsers,
	getUserById,
	updateUserById,
} = require("../services/CRUDService");

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

const getUpdateUserPage = async (req, res) => {
	const userId = req.params.userId;
	const user = await getUserById(userId);

	res.render("updateUser.ejs", { dataUser: user });
};

const postUpdateUser = async (req, res) => {
	await updateUserById(req.body);
	res.redirect("/");
};

module.exports = {
	getHomePage,
	getTestPage,
	postCreateUser,
	getCreateUserPage,
	getUpdateUserPage,
	postUpdateUser,
};

const connection = require("../config/database");
const {
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById,
} = require("../services/CRUDService");
const User = require("../models/user");

const getHomePage = async (req, res) => {
	//const results = await getAllUsers();
	const results = [];
	return res.render("home.ejs", { listUsers: results });
};

const getTestPage = (req, res) => {
	res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
	let { email, userName, city } = req.body;
	// let [results, fields] = await connection.query(
	// 	"INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
	// 	[email, userName, city]
	// );
	await User.create({
		email: email,
		name: userName,
		city: city
	})
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

const postDeleteUser = async (req, res) => {
	const userId = req.params.userId;
	const user = await getUserById(userId);
	res.render("deleteUser.ejs", { dataUser: user });
};

const postRemoveUser = async (req, res) => {
	await deleteUserById(req.body);
	res.redirect("/");
};

module.exports = {
	getHomePage,
	getTestPage,
	postCreateUser,
	getCreateUserPage,
	getUpdateUserPage,
	postUpdateUser,
	postDeleteUser,
	postRemoveUser,
};

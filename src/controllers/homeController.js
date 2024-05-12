const connection = require("../config/database");
const {
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById,
} = require("../services/CRUDService");
const User = require("../models/user");

const getHomePage = async (req, res) => {
	const results = await User.find({});
	return res.render("home.ejs", { listUsers: results });
};

const getTestPage = (req, res) => {
	res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
	let { email, userName, city } = req.body;

	await User.create({
		email: email,
		name: userName,
		city: city,
	});

	res.redirect("/");
};

const getCreateUserPage = (req, res) => {
	res.render("createUser.ejs");
};

const getUpdateUserPage = async (req, res) => {
	const userId = req.params.userId;
	const user = await User.findById(userId).exec();

	res.render("updateUser.ejs", { dataUser: user });
};

const postUpdateUser = async (req, res) => {
	const { userId, email, name, city } = req.body;
	await User.updateOne(
		{ _id: userId },
		{ email: email, name: name, city: city }
	);
	res.redirect("/");
};

const postDeleteUser = async (req, res) => {
	const userId = req.params.userId;
	const user = await User.findById(userId).exec();
	res.render("deleteUser.ejs", { dataUser: user });
};

const postRemoveUser = async (req, res) => {
	const { userId } = req.body;
	await User.deleteOne({_id: userId});
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

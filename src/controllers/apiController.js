const User = require("../models/user");

const getUsersAPI = async (req, res) => {
	const results = await User.find({});
	return res.status(200).json({
		EC: 0,
		data: results,
	});
};

const postCreateUserAPI = async (req, res) => {
	let { email, userName, city } = req.body;

	const user = await User.create({
		email: email,
		name: userName,
		city: city,
	});

	return res.status(200).json({
		EC: 0,
		data: user,
	});
};

const putUpdateUserAPI = async (req, res) => {
	const { userId, email, name, city } = req.body;
	const user = await User.updateOne(
		{ _id: userId },
		{ email: email, name: name, city: city }
	);

	return res.status(200).json({
		EC: 0,
		data: user,
	});
};

const deleteUserAPI = async (req, res) => {
	const { userId } = req.body;
	let user = await User.deleteOne({ _id: userId });

	return res.status(200).json({
		EC: 0,
		data: user,
	});
};

module.exports = {
	getUsersAPI,
	postCreateUserAPI,
	putUpdateUserAPI,
	deleteUserAPI,
};

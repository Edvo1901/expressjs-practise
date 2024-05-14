const User = require("../models/user");
const { uploadSingleFile, uploadMultipleFiles } = require("../services/fileService");

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

const postUploadSingleFileAPI = async (req, res) => {
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).send("No files were uploaded.");
	}

	const result = await uploadSingleFile(req.files.image);

	return res.status(200).json({
		EC: 0,
		data: result
	});
};

const postUploadMultipleFilesAPI = async (req, res) => {
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).send("No files were uploaded.");
	}

	if (Array.isArray(req.files.image)) {
		const result = await uploadMultipleFiles(req.files.image);
		return res.status(200).json({
			EC: 0,
			data: result
		});
	} else {
		return await uploadSingleFile(req.files.image);
	}
};


module.exports = {
	getUsersAPI,
	postCreateUserAPI,
	putUpdateUserAPI,
	deleteUserAPI,
	postUploadSingleFileAPI,
	postUploadMultipleFilesAPI
};

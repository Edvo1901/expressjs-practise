const {
	postCreateProjectService,
	getAllProjectService,
	putUpdateProjectService,
	deleteProjectService
} = require("../services/projectService");

const postCreateProjectAPI = async (req, res) => {
	const result = await postCreateProjectService(req.body);

	return res.status(200).json({
		EC: 0,
		data: result,
	});
};

const getAllProjectAPI = async (req, res) => {
	const result = await getAllProjectService(req.query);
	return res.status(200).json({
		EC: 0,
		data: result,
	});
};

const putUpdateProjectAPI = async (req, res) => {
	const result = await putUpdateProjectService(req.body);
	return res.status(200).json({
		EC: 0,
		data: result,
	});
};

const deleteProjectAPI = async (req, res) => {
	const result = await deleteProjectService(req.body);
	return res.status(200).json({
		EC: 0,
		data: result,
	});
};

module.exports = {
	postCreateProjectAPI,
	getAllProjectAPI,
	putUpdateProjectAPI,
	deleteProjectAPI,
};

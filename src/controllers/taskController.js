const {
	postCreateTaskService,
	getAllTaskService,
	putUpdateTaskService,
    deleteTaskService
} = require("../services/taskService");

const postCreateTaskAPI = async (req, res) => {
	const result = await postCreateTaskService(req.body);
	return res.status(200).json({
		EC: 0,
		data: result,
	});
};

const getAllTaskAPI = async (req, res) => {
	const result = await getAllTaskService(req.query);
	return res.status(200).json({
		EC: 0,
		data: result,
	});
};

const putUpdateTaskAPI = async (req, res) => {
	const result = await putUpdateTaskService(req.body);
	return res.status(200).json({
		EC: 0,
		data: result,
	});
};

const deleteTaskAPI = async (req, res) => {
	const result = await deleteTaskService(req.body);
	return res.status(200).json({
		EC: 0,
		data: result,
	});
};

module.exports = {
	postCreateTaskAPI,
	getAllTaskAPI,
	putUpdateTaskAPI,
	deleteTaskAPI,
};

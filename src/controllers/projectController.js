const { postCreateProjectService } = require("../services/projectService");

const postCreateProjectAPI = async (req, res) => {
	const result = await postCreateProjectService(req.body);

	return res.status(200).json({
		EC: 0,
		data: result,
	});
};

module.exports = {
	postCreateProjectAPI,
};

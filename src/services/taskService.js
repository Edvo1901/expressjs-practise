const mongoose = require("mongoose");
const aqp = require("api-query-params");
const Task = require("../models/task");

const postCreateTaskService = async (data) => {
	try {
		if (data.type === "EMPTY-TASK") {
			const result = await Task.create(data);
			return result;
		}
	} catch (err) {
		console.log(err);
		return null;
	}
};

const getAllTaskService = async (queryData) => {
	try {
		let result = null;
		const { limit, page } = queryData;
		if (limit && page) {
			const offset = (page - 1) * limit;
			result = await Task.find({}).skip(offset).limit(limit).exec();
		} else {
			result = await Task.find({});
		}
		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
};

const putUpdateTaskService = async (data) => {
	try {
		const { _id, name, endDate, description, status } = data;
		const result = await Task.updateOne(
			{ _id },
			{ name, endDate, description, status }
		);
		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
};

const deleteTaskService = async (data) => {
	try {
		const result = await Task.deleteById(data._id);
		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
};

module.exports = {
	postCreateTaskService,
	getAllTaskService,
	putUpdateTaskService,
	deleteTaskService,
};

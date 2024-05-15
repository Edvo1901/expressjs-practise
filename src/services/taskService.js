const mongoose = require("mongoose");
const aqp = require("api-query-params");
const Task = require("../models/task");
const Project = require("../models/project");

const postCreateTaskService = async (data) => {
	try {
		if (data.type === "EMPTY-TASK") {
			const result = await Task.create(data);
			return result;
		} else if (data.type === "ADD-TASKS") {
			let myProject = await Project.findById(data.projectId).exec();

			for (let i = 0; i < data.tasksArr.length; i++) {
                const taskItem = data.tasksArr[i]

                if (mongoose.Types.ObjectId.isValid(taskItem)) {
					myProject.tasks.push(mongoose.Types.ObjectId(taskItem));
				} else {
					throw new Error(`Invalid ObjectId: ${taskItem}`);
				}
			}
            
            const result = await myProject.save();

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
		const result = await Task.updateOne({ _id }, { ...data });
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

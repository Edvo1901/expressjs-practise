const Project = require("../models/project");
const mongoose = require("mongoose");
const aqp = require("api-query-params");

const postCreateProjectService = async (data) => {
	try {
		if (data.type === "EMPTY-PROJECT") {
			const result = await Project.create(data);
			return result;
		} else if (data.type === "ADD-USERS") {
			let myProject = await Project.findById(data.projectId).exec();

			for (let i = 0; i < data.usersArr.length; i++) {
				let userId = data.usersArr[i];
				if (mongoose.Types.ObjectId.isValid(userId)) {
					myProject.usersInfor.push(mongoose.Types.ObjectId(userId));
				} else {
					throw new Error(`Invalid ObjectId: ${userId}`);
				}
			}

			const result = await myProject.save();

			return result;
		} else if (data.type === "REMOVE-USERS") {
			let myProject = await Project.findById(data.projectId).exec();

			for (let i = 0; i < data.usersArr.length; i++) {
				let userId = data.usersArr[i];
				if (mongoose.Types.ObjectId.isValid(userId)) {
					myProject.usersInfor.pull(mongoose.Types.ObjectId(userId));
				} else {
					throw new Error(`Invalid ObjectId: ${userId}`);
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

const getAllProjectService = async (queryData) => {
	try {
		let result = null;
		const { limit, page } = queryData;
		console.log(limit, page)
		if (limit && page) {
			const offset = (page - 1) * limit;
			const { filter, population } = aqp(queryData);

			delete filter.page;
			result = await Project.find(filter)
				.populate(population)
				.skip(offset)
				.limit(limit)
				.exec();
		} else {
			result = await Project.find({});
		}
		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
};

const putUpdateProjectService = async (data) => {
	try {
		const { _id, name, endDate, description } = data;
		const result = await Project.updateOne(
			{ _id },
			{ name, endDate, description }
		);
		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
};

const deleteProjectService = async (data) => {
	try {
		const { _id } = data;
		const result = await Project.deleteById(_id);
		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
};

module.exports = {
	postCreateProjectService,
	getAllProjectService,
	putUpdateProjectService,
	deleteProjectService,
};

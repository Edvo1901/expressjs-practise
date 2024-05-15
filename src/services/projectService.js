const Project = require("../models/project");
const mongoose = require("mongoose");

const postCreateProjectService = async (data) => {
	try {
		console.log(data)
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
		}
	} catch (err) {
		console.log(err);
		return null;
	}
};

module.exports = {
	postCreateProjectService,
};

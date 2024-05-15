const path = require("path");

const uploadSingleFile = async (fileObject) => {
	const uploadPath = path.resolve(__dirname, "../public/images/upload");

	// Get file extension
	const extName = path.extname(fileObject.name);
	// Get file name with extension
	const baseName = path.basename(fileObject.name, extName);
	const finalFileName = `${baseName}-${Date.now()}${extName}`;
	const finalFilePath = `${uploadPath}/${finalFileName}`;

	try {
		await fileObject.mv(finalFilePath);
		return {
			status: "success",
			path: finalFileName,
			error: null,
		};
	} catch (err) {
		return {
			status: "fail",
			path: null,
			error: JSON.stringify(err),
		};
	}
};

const uploadMultipleFiles = async (filesArr) => {
	try {
		const uploadPath = path.resolve(__dirname, "../public/images/upload");
		const resultArr = [];
		let countSuccess = 0;
		for (let i = 0; i < filesArr.length; i++) {
			// Get file extension
			const extName = path.extname(filesArr[i].name);
			// Get file name with extension
			const baseName = path.basename(filesArr[i].name, extName);
			const finalFileName = `${baseName}-${Date.now()}${extName}`;
			const finalFilePath = `${uploadPath}/${finalFileName}`;

			try {
				await filesArr[i].mv(finalFilePath);
				resultArr.push({
					status: "success",
					path: finalFileName,
					fileName: filesArr[i].name,
					error: null,
				});
				countSuccess++;
			} catch (err) {
				resultArr.push({
					status: "fail",
					path: null,
					fileName: filesArr[i].name,
					error: JSON.stringify(err),
				});
			}
		}

		return {
			countSuccess: countSuccess,
			detail: resultArr,
		};
	} catch (err) {
		console.log(err)
	}
};

module.exports = {
	uploadSingleFile,
	uploadMultipleFiles,
};

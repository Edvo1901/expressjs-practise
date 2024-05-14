const {
	uploadSingleFile,
	uploadMultipleFiles,
} = require("../services/fileService");
const {
	createCustomerService,
	createMultipleCustomersService,
	getAllCustomersService,
	putUpdateCustomerService,
	deleteCustomerService,
	deleteMultipleCustomersService,
} = require("../services/customerService");


const postCreateCustomerAPI = async (req, res) => {
	const { name, address, phone, email, image, description } = req.body;
	let imageURL = "";

	if (req.files || Object.keys(req.files).length > 0) {
		const result = await uploadSingleFile(req.files.image);
		imageURL = result.path;
	}

	let customerData = {
		name,
		address,
		phone,
		email,
		image: imageURL,
		description,
	};

	let customer = await createCustomerService(customerData);
	return res.status(200).json({
		EC: 0,
		data: customer,
	});
};

const postCreateMultipleCustomersAPI = async (req, res) => {
	let customers = await createMultipleCustomersService(req.body.customers);
	if (customers) {
		return res.status(200).json({
			EC: 0,
			data: customers,
		});
	} else {
		return res.status(500).json({
			EC: -1,
			data: customers,
		});
	}
};

const getAllCustomersAPI = async (req, res) => {
	const { limit, page, name } = req.query;
	let customers = null;

	if (limit && page) {
		customers = await getAllCustomersService(limit, page, name, req.query);
		return res.status(200).json({
			EC: 0,
			data: customers,
		});
	} else {
		customers = await getAllCustomersService();
		if (customers) {
			return res.status(200).json({
				EC: 0,
				data: customers,
			});
		} else {
			return res.status(500).json({
				EC: -1,
				data: customers,
			});
		}
	}
};

const putUpdateCustomerAPI = async (req, res) => {
	const customers = await putUpdateCustomerService(req.body);

	if (customers) {
		return res.status(200).json({
			EC: 0,
			data: customers,
		});
	} else {
		return res.status(500).json({
			EC: -1,
			data: customers,
		});
	}
};

const deleteCustomerAPI = async (req, res) => {
	const customers = await deleteCustomerService(req.body);

	if (customers) {
		return res.status(200).json({
			EC: 0,
			data: customers,
		});
	} else {
		return res.status(500).json({
			EC: -1,
			data: customers,
		});
	}
};

const deleteMultipleCustomersAPI = async (req, res) => {
	const customers = await deleteMultipleCustomersService(req.body);

	if (customers) {
		return res.status(200).json({
			EC: 0,
			data: customers,
		});
	} else {
		return res.status(500).json({
			EC: -1,
			data: customers,
		});
	}
};

module.exports = {
	postCreateCustomerAPI,
	postCreateMultipleCustomersAPI,
	getAllCustomersAPI,
	putUpdateCustomerAPI,
	deleteCustomerAPI,
	deleteMultipleCustomersAPI,
};

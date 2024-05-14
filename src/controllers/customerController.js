const {
	uploadSingleFile,
	uploadMultipleFiles,
} = require("../services/fileService");
const { createCustomerService, createMultipleCustomersService } = require("../services/customerService");

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
    let customers = await createMultipleCustomersService(req.body.customers)
    if (customers) {
        return res.status(200).json({
            EC: 0,
            data: customers,
        });
    } else {
        return res.status(200).json({
            EC: -1,
            data: customers,
        });
    }

};

module.exports = {
	postCreateCustomerAPI,
	postCreateMultipleCustomersAPI,
};

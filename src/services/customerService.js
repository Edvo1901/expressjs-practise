const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
	try {
		const result = await Customer.create({
			name: customerData.name,
			address: customerData.address,
			phone: customerData.phone,
			email: customerData.email,
			image: customerData.image,
			description: customerData.description,
		});

		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
};

const createMultipleCustomersService = async (customerData) => {
	try {
		const result = await Customer.insertMany(customerData);

		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
};

const getAllCustomersService = async (limit, page) => {
	try {
		let result = null;

		if (limit && page) {
			const offset = (page - 1) * limit;
			result = await Customer.find({}).skip(offset).limit(limit).exec();
		} else {
			result = await Customer.find({});
		}

		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
};

const putUpdateCustomerService = async (userData) => {
	try {
		const { _id, email, name, address } = userData;
		const result = await Customer.updateOne(
			{ _id: _id },
			{ email: email, name: name, address: address }
		);
		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
};

const deleteCustomerService = async (userData) => {
	try {
		const { _id } = userData;
		const result = await Customer.deleteById(_id);
		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
};

const deleteMultipleCustomersService = async (listOfUsers) => {
	try {
		const result = await Customer.delete({
			_id: { $in: listOfUsers.customerId },
		});
		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
};

module.exports = {
	createCustomerService,
	createMultipleCustomersService,
	getAllCustomersService,
	putUpdateCustomerService,
	deleteCustomerService,
	deleteMultipleCustomersService,
};

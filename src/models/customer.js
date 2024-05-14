const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const customerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		address: String,
		phone: String,
		email: String,
		image: String,
		description: String,
	},
	{
		timestamps: true,
		statics: {
			
		}
	}
);

customerSchema.plugin(mongooseDelete, { overrideMethods: "all" });

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;

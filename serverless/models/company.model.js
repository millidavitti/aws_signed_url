const mongoose = require("mongoose");

// schema for Basic Address
const BasicAddressSchema = {
	country: String,
	state: String,
	city: String,
	street: String,
	zipCode: String,
};

// schema for Contact
const ContactSchema = {
	firstName: String,
	lastName: String,
	email: String,
	phone: String,
};

// schema for Company
const CompanySchema = new mongoose.Schema({
	id: { type: String, required: true },
	legalName: { type: String, required: true },
	stateOfIncorporation: { type: String, required: true },
	industry: { type: String, required: true },
	totalNumberOfEmployees: { type: Number, required: true },
	numberOfFullTimeEmployees: { type: Number, required: true },
	numberOfPartTimeEmployees: { type: Number, required: true },
	website: { type: String, required: true },
	linkedInCompanyPage: { type: String, required: true },
	facebookCompanyPage: { type: String, required: true },
	otherInformation: { type: String, required: true },
	primaryContactPerson: ContactSchema,
	logoS3Key: { type: String, required: true },
	phone: { type: String, required: true },
	fax: { type: String, required: true },
	email: { type: String, required: true },
	registeredAddress: { type: BasicAddressSchema, required: true },
	mailingAddress: BasicAddressSchema,
	isMailingAddressDifferentFromRegisteredAddress: {
		type: Boolean,
		required: true,
	},
});

const CompanyModel =
	mongoose.models.Company || mongoose.model("Company", CompanySchema);

module.exports = CompanyModel;

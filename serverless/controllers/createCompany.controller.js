import connectdb from "../db/connect";
import CompanyModel from "../models/company.model";

export default async function createCompanyController(company) {
	connectdb();

	const response = await CompanyModel.findOneAndUpdate(
		{ legalName: company.legalName },
		company,
		{
			upsert: true,
			returnOriginal: false,
		},
	);

	return response;
}

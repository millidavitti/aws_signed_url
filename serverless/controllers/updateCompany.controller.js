import connectdb from "../db/connect";
import CompanyModel from "../models/company.model";

export default async function updateCompanyController(company) {
	connectdb();

	const response = await CompanyModel.findOneAndReplace(
		{ id: company.id },
		company,
		{
			new: true,
		},
	);

	return response;
}

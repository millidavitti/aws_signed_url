import connectdb from "../db/connect";
import CompanyModel from "../models/company.model";

export default async function companyController(companyID) {
	connectdb();

	const company = await CompanyModel.findOne({ id: companyID }, { __v: 0 });

	return company;
}

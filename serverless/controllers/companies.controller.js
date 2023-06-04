import connectdb from "../db/connect";
import CompanyModel from "../models/company.model";

export default async function companiesController() {
	connectdb();

	const companies = await CompanyModel.find({}, { __v: 0 });

	return companies;
}

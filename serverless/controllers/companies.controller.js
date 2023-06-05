import connectdb from "../db/connect";
import CompanyModel from "../models/company.model";

export default async function companiesController(skip = 0, limit = 5) {
	connectdb();

	const companies = await CompanyModel.find({}, { __v: 0 })
		.skip(skip)
		.limit(limit);

	return companies;
}

import createCompanyController from "@/serverless/controllers/createCompany.controller";
import express from "express";

const api = express();

api.post("/api/company/create", async (req, res) => {
	const company = req.body;

	const response = await createCompanyController(company);

	res.json(response);
});

export default api;

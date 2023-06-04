import updateCompanyController from "@/serverless/controllers/updateCompany.controller";
import express from "express";

const api = express();

api.post("/api/company/update", async (req, res) => {
	const company = req.body;

	const response = await updateCompanyController(company);

	res.json(response);
});

export default api;

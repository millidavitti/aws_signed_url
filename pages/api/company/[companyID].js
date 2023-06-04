import companyController from "@/serverless/controllers/company.controller";
import express from "express";

const api = express();

api.get("/api/company/:companyID", async (req, res) => {
	const { companyID } = req.query;

	const company = await companyController(companyID);

	res.json(company);
});

export default api;

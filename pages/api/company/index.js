import companiesController from "@/serverless/controllers/companies.controller";
import express from "express";

const api = express();

api.get("/api/company", async (req, res) => {
	const query = req.query;
	const companies = await companiesController(+query.skip, +query.limit);

	res.json(companies);
});

export default api;

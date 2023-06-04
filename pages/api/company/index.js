import companiesController from "@/serverless/controllers/companies.controller";
import express from "express";

const api = express();

api.get("/api/company", async (_, res) => {
	const companies = await companiesController();

	res.json(companies);
});

export default api;

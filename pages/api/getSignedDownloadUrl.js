import S3 from "aws-sdk/clients/s3";
import { randomUUID } from "crypto";
import express from "express";

const api = express();

const s3 = new S3({
	apiVersion: "2023-06-05",
	credentials: {
		accessKeyId: process.env.ACCESS_KEY,
		secretAccessKey: process.env.SECRET_KEY,
	},
	region: process.env.REGION,
	signatureVersion: "v4",
});

api.get("/api/getSignedDownloadUrl", (req, res) => {
	const Key = decodeURIComponent(req.query.s3Key);
	console.log(Key);
	const s3Params = {
		Bucket: process.env.BUCKET_NAME,
		Key,
		Expires: 300,
	};

	const url = s3.getSignedUrl("getObject", s3Params);

	res.status(200).json({
		getSignedDownloadUrl: {
			url,
			key: Key,
		},
	});
});

export default api;

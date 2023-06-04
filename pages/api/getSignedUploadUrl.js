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

api.get("/api/getSignedUploadUrl", (req, res) => {
	const ext = req.query.contentType.split("/")[1];
	const fileName = req.query.fileName;
	const validExt = {
		jpeg: 1,
		png: 1,
		jpg: 1,
	};

	if (!fileName) {
		res.statusCode = 400;
		res.json({
			error: {
				message: "Please provide the file name",
			},
		});
		return;
	}

	if (!validExt[ext]) {
		res.statusCode = 400;
		res.json({
			error: {
				message: "Invalid file extentions. .jpeg, .jpg and .png only",
			},
		});
		return;
	}
	const Key = `${fileName}${randomUUID()}.${ext}`;

	const s3Params = {
		Bucket: process.env.BUCKET_NAME,
		Key,
		Expires: 60,
		ContentType: `image/${ext}`,
	};

	const url = s3.getSignedUrl("putObject", s3Params);

	res.json({
		getSignedUploadUrl: {
			url,
			key: Key,
		},
	});
});
export default api;

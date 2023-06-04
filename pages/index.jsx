import axios from "axios";
import { useRef, useState } from "react";

export default function Home() {
	const [imageKey, setImageKey] = useState("");
	const [download, setDownload] = useState(null);
	const downloadRef = useRef();
	async function handleSubmit(e) {
		e.preventDefault();
		uploadToS3(e);
	}

	async function downloadToS3(e) {
		try {
			const formData = new FormData(e.target);
			const key = formData.get("key");

			if (!key) return null;

			const { data } = await axios.get(
				`/api/getSignedDownloadUrl?s3Key=${key}`,
			);
			const getObject = data.getSignedDownloadUrl;

			console.log(getObject);
			setDownload(getObject.url);
		} catch (error) {
			console.log(error);
		}
	}

	async function uploadToS3(e) {
		try {
			const formData = new FormData(e.target);
			const file = formData.get("file");

			if (!file) return null;

			const fileType = encodeURIComponent(file.type);
			const { data } = await axios.get(
				`/api/getSignedUploadUrl?contentType=${fileType}&fileName=${file.name}`,
			);
			const { url, key } = data.getSignedUploadUrl;

			setImageKey(key);
			axios.put(url, file);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<p>Please select file to upload</p>
			<form onSubmit={handleSubmit}>
				<input type='file' accept='image/jpeg image/png' name='file' />
				<button type='submit'>Upload</button>
			</form>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					downloadToS3(e);
				}}
				ref={downloadRef}
			>
				<input
					type='text'
					accept='image/jpeg image/png'
					name='key'
					value={imageKey}
					onChange={() => downloadToS3(downloadRef.current)}
				/>
				<button type='submit'>Get Download URL</button>
			</form>
			<br />
			<br />
			{download && (
				<a href={download} style={{ cursor: "pointer" }}>
					Download Image
				</a>
			)}
		</>
	);
}

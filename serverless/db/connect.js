const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connection.once("open", () => {
	console.log("Connnection to database successful");
});

mongoose.connection.on("error", (error) => {
	console.log(error);
});

async function connectdb() {
	if (mongoose.connection.readyState) return;
	mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_URI);
}

module.exports = connectdb;

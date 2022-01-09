const express = require("express");

app = express();

require("dotenv").config();

const connectDB = require("./config/connectDB");
const router = require("./routes/contact");

connectDB();

app.use(express.json());
app.use("/api/contacts/", router);

const port = process.env.PORT;

app.listen(port, (error) =>
	error
		? console.log(`Can not run the server!!!`)
		: console.log(`Server is running on port ${port}`)
);
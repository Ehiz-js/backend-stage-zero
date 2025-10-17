import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL;

//middleware
app.use(morgan("dev"));

// not ran everytime the route is hit
const user = {
	email: "azamegbesamuel@gmail.com",
	name: "Ehizojie Samuel Azamegbe",
	stack: "Nodejs/Express",
};
const status = "success";

//routes

//redirect to /me on root hit
app.get("/", (req, res) => {
	res.redirect("/me");
});

//route to get cat fact
app.get("/me", async (req, res) => {
	//init variables cause of scope
	const timestamp = new Date().toISOString();
	let response = { status, user, timestamp };

	//try catch for API requests
	try {
		const fact = (await axios.get(`${API_URL}`, { timeout: 5000 })).data.fact;
		//good response
		response = {
			...response,
			fact,
		};
		res.json(response);
	} catch (error) {
		//bad response
		response = { ...response, fact: error.message };
		res.status(500).json(response);
	}
});

app.listen(PORT, () => {
	console.log(`Cat API running on http://localhost:${PORT}`);
});

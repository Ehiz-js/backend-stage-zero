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

app.get("/me", async (req, res) => {
	try {
		const fact = (await axios.get(`${API_URL}`, { timeout: 5000 })).data.fact;
		const timestamp = new Date().toISOString();
		const response = {
			status,
			user,
			timestamp,
			fact,
		};
		res.json(response);
	} catch (error) {
		if (error.code === "ECONNABORTED") {
			res.status(504).json({ message: "Request timed out" });
		} else {
			res.status(500).json({ message: error.message });
		}
	}
});

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Cat API running on http://localhost:${PORT}`);
});

import mongoose from "mongoose";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./app/modules/user/user.route";
import { connectedDb } from "./config/db";
const app: Application = express();
import colors from "colors";

const port: number = 3030;

connectedDb();
app.use(cors());
app.use(morgan("dev"));
// data parse
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use("/api/v1/user/", userRoutes);
app.get("/", async (req, res, next) => {
	res.status(200).send("Welcome to the API");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

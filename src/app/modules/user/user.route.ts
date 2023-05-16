import express from "express";
import {
	createUser,
	getAdminUsers,
	getUser,
	getUserById,
} from "./user.controller";

const router = express.Router();

router.route("/").get(getUser).post(createUser);
router.route("/admin").get(getAdminUsers);
router.route("/:id").get(getUserById);

export default router;

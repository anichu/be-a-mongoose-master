import { NextFunction, Request, Response } from "express";
import { User } from "./user.model";
import {
	createUserToDB,
	getAdminUserFromDB,
	getUserFromDB,
	getUserFromDBById,
} from "./user.service";

export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const user = await createUserToDB(req.body);
	res.status(201).json({
		success: true,
		data: user,
	});
};

export const getUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const user = await getUserFromDB();
	res.status(200).json({
		success: true,
		data: user,
	});
};

export const getUserById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { id } = req.params;
	const user = await getUserFromDBById(id);
	res.status(200).json({
		success: true,
		data: user,
	});
};

export const getAdminUsers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const users = await getAdminUserFromDB();
	res.status(200).json({
		success: true,
		data: users,
	});
};

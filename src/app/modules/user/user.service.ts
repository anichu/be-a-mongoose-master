import { IUser } from "./user.interface";
import { User } from "./user.model";

// TODO::CREATE USER
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
	const data = payload;
	try {
		const user = new User(data);
		await user.save();
		const fullName: string = user.fullName(); //TODO::CREATE CUSTOM INSTANCE METHODS
		console.log(fullName);
		return user;
	} catch (error) {
		console.log(error);
		return error.message;
	}
};

// TODO::GET USER FROM DB

export const getUserFromDB = async () => {
	const user = await User.find({});
	return user;
};

// TODO:: GET USER FROM DB BY ID

export const getUserFromDBById = async (id: string): Promise<IUser | null> => {
	const user = await User.findOne({ id: id });
	return user;
};

// TODO:: GET ADMIN USER FROM DB

export const getAdminUserFromDB = async () => {
	const user = await User.getAdminUsers();
	return user;
};

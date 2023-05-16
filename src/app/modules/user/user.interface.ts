import { HydratedDocument, Model } from "mongoose";

//TODO:: creating USER interface
export interface IUser {
	id: string;
	role: "student";
	name: {
		firstName: string;
		middleName: string;
		lastName: string;
	};
	password: string;
	dateOfBirth: string;
	gender: "male" | "female";
	contactNo: string;
	emergencyNo: string;
	email?: string;
}

// TODO::INSTANCE METHODS
export interface IUserMethods {
	fullName(): string;
}
// TODO:: CREATING STATIC FUNCTIONS OR METHODS
export interface UserModel extends Model<IUser, {}, IUserMethods> {
	getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}

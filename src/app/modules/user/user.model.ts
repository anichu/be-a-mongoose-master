import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// TODO::CREATE USER SCHEMA
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
	id: {
		type: String,
		required: true,
		unique: true,
	},
	role: {
		type: String,
		required: true,
	},
	name: {
		firstName: {
			type: String,
			required: true,
		},
		middleName: {
			type: String,
		},
		lastName: {
			type: String,
			required: true,
		},
	},
	password: {
		type: String,
		required: true,
	},
	dateOfBirth: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		enum: ["male", "female"],
	},
	contactNo: {
		type: String,
		required: true,
	},
	emergencyNo: {
		type: String,
		required: true,
	},
	email: {
		type: String,
	},
});

//TODO:: CREATE USER INSTANCE METHODS
userSchema.method("fullName", function fullName() {
	return this.name.firstName + " " + this.name.lastName;
});

// TODO::CREATE USER STATIC METHODS

userSchema.static("getAdminUsers", async function getAdminUsers() {
	return await this.find({ role: "admin" });
});

// TODO::CREATE MODEL
export const User = model<IUser, UserModel>("User", userSchema);

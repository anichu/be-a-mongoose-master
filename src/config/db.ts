import mongoose from "mongoose";

export const connectedDb = async () => {
	try {
		const conn = await mongoose.connect(
			"mongodb://127.0.0.1:27017/practice-mongoose"
		);
		console.log(`MongoDB Connected: ${conn.connection.host}🔥🔥🔥🚀🚀`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

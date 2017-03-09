import mongoose from "mongoose";

var userSchema = mongoose.Schema({
	login: {
		type:  String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: String
	}
});

export const User = mongoose.model('user', userSchema);

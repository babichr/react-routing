var mongoose = require('mongoose');

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

var User = mongoose.model('user', userSchema);
module.exports = User;

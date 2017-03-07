const mongoose = require('mongoose');
mongoose.connect('mongodb:localhost/app')

const userSchema = mongoose.Schema({
	name: String,
	id: Number,
	email: String,
	password: String,
	data: Date.now(),
});

exports.User = mangoose.model('user', userSchema)



var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongo = require('mongo');
var mongoose = require('mongoose');
var path = require('path');
var mongo = require("mongo");
var Promise = require('mpromise');
var User = require("./models/user");

// Webpack + Express
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var webpackDevServer = require('webpack-dev-server');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var app = express();
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));


//DB connection
mongoose.connect('mongodb://localhost:27017/app');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){});
mongoose.Promise = global.Promise;

//Favicon
app.use(favicon(__dirname + '/static/favicon.ico'));

//Logger
app.use(morgan('combined'));

//Request data parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// URLs
app.get('*', function(req, res){
	res.status(200).sendFile(path.join(__dirname + "/index.html"));
});

app.listen('3000', function(){
	console.log('Express works on 3000 port');
});


//API

app.post("/api/create-user", function(req, res, data){
	var userLogin = req.body.login;
	var userEmail = req.body.email;
	var userPassword = req.body.password;
	var newUser = new User({
		login: userLogin,
		email: userEmail,
		password: userPassword,
		date: new Date()
	})

	newUser.save(function(err, data){
		if (!err) {
			res.send("succses");
		}else {
			res.send("error");
			return err
		}
	});
	


	res.status(200);
})



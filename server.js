import express from "express";
import favicon from "serve-favicon";
import morgan  from "morgan";
import bodyParser from "body-parser";
import mongo from "mongo";
import Promise from "mpromise";
import mongoose from "mongoose";
import path from "path";
import { User } from "./models/models";


// Webpack + Express
import webpack  from "webpack";
import { webpackConfig }  from "./webpack.config.js";
import webpackDevServer  from 'webpack-dev-server';
import webpackDevMiddleware  from "webpack-dev-middleware";
import webpackHotMiddleware  from "webpack-hot-middleware";

const app = express();
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));


//DB connection
mongoose.connect('mongodb://localhost:27017/app');
const db = mongoose.connection;
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

app.listen('3000', function(){
	console.log('Express works on 3000 port');
});

//API
app.post("/api/create-user", function(req, res){
	const userLogin = req.body.login;
	const userEmail = req.body.email;
	const userPassword = req.body.password;
	const newUser = new User({
		login: userLogin,
		email: userEmail,
		password: userPassword,
		date: new Date()
	});

	newUser.save(function(err){
		if (!err) {
			res.send("succses");
		}else {
			res.send("error");
			return err
		}

	});

    res.status(200);
});

app.get("/api/users-list", function( req, res ){
        db.collection("users").find({}).toArray(function(err, user) {
            if (err) {
                handleError(res, err.message, "Failed to get contacts.");
            } else {
                res.status(200).json(user);
            }
    });
});


// URLs
app.get('*', function(req, res){
    res.status(200).sendFile(path.join(__dirname + "/index.html"));
});





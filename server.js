import express from "express";
import favicon from "serve-favicon";
import morgan  from "morgan";
import bodyParser from "body-parser";
import mongo from "mongo";
import mongodb from "mongodb";
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
const ObjectID = mongodb.ObjectID;
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));


//DB connection
mongoose.connect('mongodb://localhost:27017/app');
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {});
mongoose.Promise = global.Promise;

//Favicon
app.use(favicon(__dirname + '/static/favicon.ico'));

//Logger
app.use(morgan('combined'));

//Request data parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen('3000', () => {
	console.log('Express works on 3000 port');
});

//API
app.post("/api/create-user", (req, res) => {
	const userLogin = req.body.login;
	const userEmail = req.body.email;
	const userPassword = req.body.password;
	const newUser = new User({
		login: userLogin,
		email: userEmail,
		password: userPassword,
		date: new Date()
	});

	newUser.save( (err) => {
		if (!err) {
			res.send({ type: "alert-success" , message: `Thank you for registration `, valid: true });
		}else {
		    res.send({ type: "alert-danger", message:`Login or email is already used`, valid: false });
		}
	});
    res.status(200);
});

app.delete( "/api/remove-user/:uid",  (req, res) => {
    let uid = req.params.uid;
    db.collection("users").deleteOne({ _id: new ObjectID(uid) }, (err, user) => {
        if (err) {
            res.send(res, err.message, "Failed to delete contact");
        } else {
            res.status(200).json(req.params.id);
        }
    });
});

app.get( "/api/current-user/:uid", ( req, res ) => {
    let uid = req.params.uid;
    db.collection("users").findOne({ _id : new ObjectID(uid) }, ( err, user ) => {
        if ( err ){
            console.log("errorR: " + err);
            res.send(err);
        }else{
            res.status(200).json(user)
        }
    })
});

app.get("/api/users-list", ( req, res ) => {
        db.collection("users").find({}).toArray( (err, user) => {
            if (err) {
                handleError(res, err.message, "Failed to get contacts.");
            } else {
                res.status(200).json(user);
            }
    });
});

app.get( "/error", ( req, res ) => {
    res.status(404).end();
});


// URLs
app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "/index.html"));
});





import React from "react";
import ReactDOM from "react-dom";
import { Provider } from  "react-redux";
import { store } from "./store/createStore";
import { Router, Route, browserHistory } from "react-router";
import Users from "./components/Users";
import Login from  "./components/Login";
import Home from "./components/Home";
import Main from "./components/Main";
import UserPage from "./components/UserPage";
import ErrorPage from "./components/ErrorPage";


const App  = () => {
	return (
		<Provider store={ store } >
			<main>
				<Router history={ browserHistory } >
					<Route component={ Main }>
						<Route path="/" component={ Home } />
						<Route path="/login" component={ Login } />
						<Route path="/create-user" component={ Login } />
						<Route path="/users" component={ Users } />
                        <Route path="/user/:id" component={ UserPage } />
						<Route path="*" component={ ErrorPage } />
					</Route>
				</Router>
			</main>
		</Provider>
	)
}

ReactDOM.render( <App />, document.getElementById("root") );
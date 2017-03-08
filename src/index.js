import React from "react";
import ReactDOM from "react-dom";
import { Provider } from  "react-redux";
import { store } from "./store/createStore";
import { Router, Route, useRouterHistory, browserHistory } from "react-router";
// import BrowserHistory from 'react-router/lib/BrowserHistory'
import Login from  "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Main from "./components/Main";
import ErrorPage from "./components/ErrorPage";

// const history = useRouterHistory(createHashHistory)();


const App  = () => {
	return (
		<Provider store={ store } >
			<main>
				<Router history={ browserHistory } >
					<Route component={ Main }>
						<Route path="/" component={ Home } />
						<Route path="/login" component={ Login } />
						<Route path="/create-user" component={ Login } />
						<Route path="*" component={ ErrorPage } />
					</Route>
				</Router>
			</main>
		</Provider>
	)
}

ReactDOM.render( <App />, document.getElementById("root") );
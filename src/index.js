import React from "react";
import ReactDOM from "react-dom";
import { Provider } from  "react-redux";
import { store } from "./store/createStore";
import { Router, Route, IndexRoute, useRouterHistory } from "react-router";
import BrowserHistory from 'react-router/lib/BrowserHistory'
import Login from  "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Main from "./components/Main";

// const history = useRouterHistory(createHashHistory)();


const MainWrap  = () => {
	return (
		<Provider store={ store } >
			<main>
				<Router  history={ BrowserHistory } >
				<Route component={ Main }>
					<Route path="/" component={ Home } />
					<Route path="/login" component={ Login } />
				</Route>
				</Router>
			</main>
		</Provider>
	)
}

ReactDOM.render( <MainWrap />, document.getElementById("root") );
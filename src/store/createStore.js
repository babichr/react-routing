import { createStore, applyMiddleware, combineReducers } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import { users } from "./reducers";

const logger = createLogger();

const initialState = {};

const makeRootReduces = ( asyncReducers ) => {
	return combineReducers({
		form: formReducer,
        users
	})
};

export const store = createStore(
	makeRootReduces(),
	initialState,
	applyMiddleware(
		thunk,
		logger
	)
);
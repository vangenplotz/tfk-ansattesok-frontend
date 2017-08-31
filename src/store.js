import { applyMiddleware, createStore } from "redux"
import reduxThunk from "redux-thunk"
import { browserHistory } from "react-router"
import { routerMiddleware } from "react-router-redux"
import reducer from "./reducer"

export default (initialState = {}) => createStore(
		reducer,
		initialState,
		applyMiddleware(
				reduxThunk,
				routerMiddleware(browserHistory)
		)
);
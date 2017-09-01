import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { createSearchReducer } from "./reducers/search"
import entities from "./reducers/entities"
import ui from "./reducers/ui"

export default combineReducers({
	routing: routerReducer,
	employeeSearch: createSearchReducer('employees'),
	entities,
	ui
});
import "../semantic/dist/semantic.min.css"
import React from "react"
import { browserHistory, Route, Router, IndexRedirect } from "react-router"
import { Provider } from "react-redux"
import { syncHistoryWithStore } from "react-router-redux"
import configureStore from "./store"
import Application from "./components/application/application"
import DepartmentRoutes from "./routes/departments"
import EmployeeRoutes from "./routes/employees"

const store = configureStore({});
window.__STORE__ = store;
const history = syncHistoryWithStore(browserHistory, store);

export default <Provider store={store}>
	<Router history={history}>
		<Route component={Application}>
			<Route path="/"><IndexRedirect to={'/employees'} /></Route>
			{DepartmentRoutes}
			{EmployeeRoutes}
		</Route>
	</Router>
</Provider>
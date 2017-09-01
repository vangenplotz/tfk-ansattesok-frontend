import React from "react"
import { Route } from "react-router"
import Index from "../containers/employees"
import Show from "../containers/employees/show"

export default <Route>
	<Route path="/employees" component={Index} />
	<Route path="/employees/:id" component={Show} />
</Route>